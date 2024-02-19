'use strict';

//## ##//
// Fill in the regular expressions

/*
1. car and cat

2. pop and prop

3. ferret, ferry, and ferrari

4. Any word ending in ious

5. A whitespace character followed by a period, comma, colon, or semicolon

6. A word longer than six letters

7. A word without the letter e (or E)
*/

//verify(/ca[rt]/, [ 'my car', 'bad cats' ], [ 'camper', 'high art' ]); //?

//verify(/pr?op/, [ 'pop culture', 'mad props' ], [ 'plop', 'prrrop' ]);

// verify(/ferr[^u]/, [ 'ferret', 'ferry', 'ferrari' ], [ 'ferrum', 'transfer A' ]);

// verify(/ious\b/, [ 'how delicious', 'spacious room' ], [ 'ruinous', 'consciousness' ]);

// verify(/\s+[.,;:]/, [ 'bad punctuation .' ], [ 'escape the period' ]);

// verify(/\w{6}/, [ 'Siebentausenddreihundertzweiundzwanzig' ], [ 'no', 'three small words' ]);

//verify(/\b[^\We]+\b/i, [ 'red platypus', 'wobbling nest' ], [ 'earth bed', 'learning ape', 'BEET' ]);

function verify (regexp, yes, no){
	// Ignore unfinished exercises
	if (regexp.source == '...') return;
	for (let str of yes)
		if (!regexp.test(str)) {
			//console.log(`No....Failure to match '${str}'`);
		} else {
			//Success!
			//console.log(`Yes!! Successful match for ${str}`)
		}
	for (let str of no)
		if (regexp.test(str)) {
			//console.log(`No....Unexpected match for '${str}'`);
		} else {
			//Success!
			//console.log(`Yes!! Expected non-match for ${str}`)
		}
}

//##Replace single quotes with double quotes, while keeping single quotes used in contractions ##//

let text = "'I'm the cook,' he said, 'it's my job.'";
// Change this call.
//console.log(text.replace(/(^|\W)'|'(\W|$)/g, '$1"$2'));
// → "I'm the cook," he said, "it's my job."

//## ##//

// Fill in this regular expression.
let number = /^[+\-]?(\d+(\.\d*)?|\.\d+)([eE][+\-]?\d+)?$/;
// Tests:
for (let str of [ '1', '-1', '+15', '1.55', '.5', '5.', '1.3e2', '1E-4', '1e+12' ]) {
	if (!number.test(str)) {
		console.log(`Failed to match '${str}'`);
	}
}
for (let str of [ '1a', '+-1', '1.2.3', '1+1', '1e4.5', '.5.', '1f5', '.' ]) {
	if (number.test(str)) {
		console.log(`Incorrectly accepted '${str}'`);
	}
}
