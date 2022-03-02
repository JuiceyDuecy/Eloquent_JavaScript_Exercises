'use strict';

// ## Looping a Triange ## //

let sign = '#';

for (let i = 7; i >= 1; i--) {
	console.log(sign); //
	sign += '#';
}

// ## FizzBuzz ## //

for (let i = 1; i <= 100; i++) {
	if (i % 15 == 0) {
		console.log('FizzBuzz');
	} else if (i % 3 == 0) {
		console.log('Fizz');
	} else if (i % 5 == 0) {
		console.log('Buzz');
	} else {
		console.log(i);
	}
}

// ## Checkerboard ## //

let string = '';
let x = 1;
let y = 0;
while (y < 8) {

		y % 2 == 0 ? (string += ' ') :
		string;
	for (; x <= 7; x++) {
		if (string.charAt(x - 1) === ' ') {
			string += '#';
		} else {
			string += ' ';
		}
	}
	x = 1;
	string = string + '\n';
	y++;
}
console.log(string);
console.log(string.length);
