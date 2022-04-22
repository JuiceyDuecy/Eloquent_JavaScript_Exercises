'use strict';

// ## Multiplication ## //
class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply (a, b){
	if (Math.random() < 0.2) {
		return a * b;
	} else {
		throw new MultiplicatorUnitFailure('Klunk');
	}
}

function reliableMultiply (a, b){
	for (;;) {
		try {
			let result = primitiveMultiply(a, b);
			console.log(result);
			break;
		} catch (e) {
			if (e instanceof MultiplicatorUnitFailure) {
				console.log('Related Error');
			} else {
				throw e;
			}
		}
	}
}

console.log(reliableMultiply(8, 8));
// → 64

// ## A locked box ## //

const box = {
	locked: true,
	unlock () {
		this.locked = false;
	},
	lock () {
		this.locked = true;
	},
	_content: [],
	get content () {
		if (this.locked) throw new Error('Locked!');
		return this._content;
	}
};

function withBoxUnlocked (body){
	if (box.locked == false) {
		return box.content;
	}
	if (box.locked == true) {
		box.unlock();
		body();
		console.log(box.content);
	}
	console.log('Closing the box....hehehehehe');
	box.lock();
}

withBoxUnlocked(function (){
	box.content.push('gold piece');
});

try {
	withBoxUnlocked(function (){
		throw new Error('Pirates on the horizon! Abort!');
	});
} catch (e) {
	console.log('Error raised: ' + e);
}
console.log(box.locked);
// → true
