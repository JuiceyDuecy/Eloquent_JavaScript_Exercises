'use strict';

// ## Minimum ## //

function min (x, y){

		x < y ? console.log(x) :
		console.log(y);
}

min(5, 3);

// ## Recursion ## //

function isEven (n){
	if (n === 1) {
		console.log(`This number is odd!`);
	} else if (n === 0) {
		console.log('This number is even!');
	} else {
		isEven((n = n - 2));
	}
}
isEven(99);

// ## Bean Counting ## //

function countBs (str){
	return countChar(str, 'B');
}
function countZs (str){
	return countChar(str, 'Z');
}

function countChar (str, char){
	let count = 0;
	for (let i = 0; i <= str.length; i++) {
		if (str[i] === char) {
			count++;
		}
	}
	console.log(count);
}

countBs('aaBBccDDeeFF');
countZs('aaBBccDDeeFF...ZZZ');
