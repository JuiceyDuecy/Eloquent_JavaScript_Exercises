'use strict';

// ## Flattening ## //
/*
let multiArr = ["My", " Name", " is", " Bob"];

console.log(
	multiArr.reduce((a, b) => {
		return a + b;
	}, "")
);

*/

// ## Your own loop ## //
/*
function loop (value, test, update, body){
	while (test(value)) {
		console.log(value);
		value = update(value);
	}
	return body(value);
}

loop(3, (n) => n > 0, (n) => n - 1, console.log);
*/

// ## Everything ## //
/*
function everyLoop (array, test){
	//return test(array);
	let falsey = true;
	for (let i of array) {
		if (test(i) === false) {
			falsey = false;
		}
	}
	console.log(falsey);
}
function everySome (array, test){
	return array.some(test);
}
console.log(everySome([ 1, 3, 5 ], (n) => n < 10));
// → true
console.log(everySome([ 2, 4, 16 ], (n) => n < 10));
// → false
console.log(everySomes([], (n) => n < 10));
// → true
*/

// ## Dominant Writing Direction ## //

function dominantDirection (text){}

console.log(dominantDirection('Hello!'));
// → ltr
console.log(dominantDirection('Hey, مساء الخير'));
// → rtl
