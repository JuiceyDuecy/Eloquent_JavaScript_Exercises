'use strict';

// ## The Sum of a Range ## //
// The bonus part of range needs to be fixed
/*
function range (start, end, step){
	let arr = [];
	if (step) {
		if (start > end) {
			for (let i = end; i >= start; i) {
				arr.push(i);
			}
		}
		for (let i = start; i <= end; i + step) {
			arr.push(i);
		}
	}

	for (let i = start; i <= end; i++) {
		arr.push(i);
	}
	return arr;
}

function sum (arr){
	let num = 0;
	for (let i of arr) {
        num += i;
	}
	return num;
}

console.log(sum(range(1, 10, 2))); //55

*/

// ## Reversing an Array ## //
/*
let arr = [
	1,
	2,
	3,
	4,
	5,
	'a'
];
let arr2 = [
	'a',
	'b',
	'c',
	'd',
	'e'
];
function reverseArray (arr){
	let reversedArr = [];
	for (let i = 0; arr.length != 0; i++) {
		reversedArr.push(arr.pop(i));
	}
	console.log(reversedArr);
}

function reverseArrayinPlace (arr){
	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i][arr.length - 1]);
	}
}

//console.log(reverseArray());
console.log(reverseArrayinPlace(arr2));
//console.log(arr2);
*/

/*
// ## A list ## //
let masterList = { value: 1, rest: { value: 2, rest: { value: 3, rest: null } } };

function arrayToList (arr){
	let list;
	for (let i = arr.length - 1; i >= 0; i--) {
		list = { value: arr[i], rest: list };
		if (list.rest === undefined) {
			list.rest = null;
		}
	}
	return list;
}

function listToArray (list){
	let arr = [];
	for (let node = list; node; node = node.rest) {
		arr.push(node.value);
	}
	return arr;
}

function prepend (element, list){
	let arr = listToArray(list);
	arr.unshift(element);
	let prependedList = arrayToList(arr);
	return prependedList; 
	return { element, rest: list };
}

function nth (list, element){
	if (!list) return undefined;
	else if (element == 0) return list.value;
	else return nth(list.rest, element - 1);
}

//console.log(listToArray(masterList));
console.log(
	arrayToList([
		1,
		2,
		3
	])
);
console.log(prepend(25, masterList));
//console.log(nth(masterList, 1));
*/

// ## Deep Comparison ## //

let objA = { a: 'a', b: 'b' };
let objB = { a: 'a', b: 'b', c: 'C' };
let deepEqual = (obj1, obj2) => {
	if (obj1 === obj2) return true;

	if (obj1 == null || typeof obj1 != 'object' || obj2 == null || typeof obj2 != 'object') return false;

	let keys1 = Object.keys(obj1),
		keys2 = Object.keys(obj2);
	if (keys1.length != keys2.length) return false;
	for (let keys of keys1) {
		if (!keys2.includes(keys) || !deepEqual(obj1[keys], obj2[keys])) return false;
	}
	return true;
};

console.log(deepEqual(objA, objB));
