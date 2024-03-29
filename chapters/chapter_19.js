"use strict";

class Picture {
    constructor(width, height, pixels){
        this.width = width;
        this.height = height;
        this.pixels = pixels;
    }
    static empty(width, height, color) {
        let pixels = new Array(width * height).fill(color);
        return new Picture(width, height, pixels);
    }
    pixel(x,y){
        return this.pixels[x+y*this.width]
    }
    draw(pixels){
        let copy = this.pixels.slice();
        for(let {x,y,color} of pixels){
            copy[X+y * this.width] = color
        }
        return new Picture(this.width, this.height, copy)
    }
}

function updateState(state, action){
return({...state, ...action});
}

function elt(type, props, ...children){
    let dom = document.createElement(type);
    if (props) Object.assign(dom, props);

    for(let child of children){
        if(typeof child != "string")dom.appendChild(child);
        else dom.appendChild(document.createTextNode(child));
    }
    return dom;
}
/*
<body>
    <script>
        document.body.appendChild(elt("button", {
            onclick: () => console.log("click")
        }, "The Button"));
    </script>
</body>
*/

const scale = 10;

class PictureCanvas {
    constructor(picture,pointerDown){
        this.dom = elt("canvas", {
            onmousedown: event => this.mouse(event, pointerDown),
            ontouchstart: event => this.touch(event, pointerDown)
        });
        this.syncState(picture);
    }
        syncState(picture){
            if(this.picture === picture) return;
            this.picture = picture;

            drawPicture(this.picture, this.dom, scale);
        }
    }

function drawPicture(picture, canvas, scale){
    canvas.width = picture.width * scale;
    canvas.height = picture.height * scale;

    let cx = canvas.getContext("2d")

    for(let y =0; y < picture.height; y++){
         for(let x = 0; x < picture.width; x++){
            cx.fillStyle = picture.pixel(x,y);
            cx.fillRect(x * scale, y * scale, scale, scale)
         }
    }
}

PictureCanvas.prototype.mouse = function(downEvent, onDown) {
    if(downEvent.button != 0) return;

    let pos = pointerPosition(downEvent, this.dom);
    let onMove = onDown(pos);

    if(!onMove)return;

    let move = moveEvent => {
        if(moveEvent.buttons == 0 ){
this.dom.removeEventListner("mousemove", move);
        } else {
            let newPos = pointerPosition(moveEvent, this.dom);
            if (newPos.x == pos.x && newPos.y == pos.y) return;
            pos = newPos;
            onMove(newPos);
        }
    };
    this.dom.addEventListener("mousemove", move)
};

function pointerPosition(pos, domNode){
    let rect = domNode.getBoundingClientRect();
    return { x: Math.floor((pos.clientX - rect.left)/ scale), y: Math.floor((pos.clientY - rect.top) / scale)}
}