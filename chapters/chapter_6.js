'use strict';

// ## A vector type ## //

class Vec {
	constructor (x, y) {
		this.x = x;
		this.y = y;
	}
	plus (vector) {
		return { x: this.x + vector.x, y: this.y + vector.y };
	}
	minus (vector) {
		return { x: this.x - vector.x, y: this.y - vector.y };
	}

	get length () {
		let squared = (n) => {
			return n * n;
		};

		return Math.sqrt(squared(this.x) + squared(this.y));
	}
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5

// ## Groups ## //

class Group {
	constructor (collection) {
		collection = [];
		this.collection = collection;
	}
	static from (collection) {
		let group = new Group();
		for (let item of collection) {
			group.add(item);
		}
		return group;
	}

	add (item) {
		if (this.collection.includes(item)) {
			return;
		}
		return this.collection.push(item);
	}
	delete (item) {
		return (this.collection = this.collection.filter((n) => n !== item));
	}
	has (item) {
		return this.collection.includes(item);
	}
}

let group = Group.from([ 10, 20 ]);
console.log(group.has(10));
// → true
group.add(30);
console.log(group.has(30));
// → true
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false

// ## Iterable Groups ## //

class Group {
	constructor (collection) {
		collection = [];
		this.collection = collection;
	}
	static from (collection) {
		let group = new Group();
		for (let item of collection) {
			group.add(item);
		}
		return group;
	}

	add (item) {
		if (this.collection.includes(item)) {
			return;
		}
		return this.collection.push(item);
	}
	delete (item) {
		return (this.collection = this.collection.filter((n) => n !== item));
	}
	has (item) {
		return this.collection.includes(item);
	}
}

class GroupIterator {
	constructor (collection) {
		this.collection = collection;
		this.position = 0;
	}
	next () {
		if (this.collection.length !== this.position) {
		}
	}
}
Group.prototype[Symbol.iterator] = function (){
	return new GroupIterator(this);
};

for (let value of Group.from([ 'a', 'b', 'c' ])) {
	console.log(value);
}
