'use strict';

const crowTech = require('./project/crow-tech.js');
const bigOak = crowTech.bigOak;
const crowFunctions = require('./project/11_async.js');

console.log(crowFunctions);

//Generators
let current;
let k;
function* powers (n){
	k = n;
	for (current = n; ; current *= n) {
		yield current;
	}
}

for (let power of powers(3)) {
	let n = 1;
	if (power > 500) break;
	//console.log(`${k}^${n} is ${current}`);
}

//function findInStorage = new Promise(bigOak, 'events on 2017-12-21').then(console.log);

// async function locateScalpel (nest){
// 	let current = nest.name;
// 	for (;;) {
// 		let next = await anyStorage(nest, current, 'scalpel');
// 		if (next == current) return current;
// 		current = next;
// 	}
// }

function locateScalpel2 (nest){
	// Your code here.
}

//locateScalpel(bigOak).then(console.log);
// → Butcher Shop
