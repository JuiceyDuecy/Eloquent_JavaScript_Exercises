'use strict';

//HTTP and Forms

console.log(encodeURIComponent('Yes?'));

console.log(decodeURIComponent('Yes%3F'));

fetch('https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0', {
	headers: { Range: 'bytes=8-19' },
	method: 'GET'
})
	.then((res) => res.text())
	.then((text) => console.log(text));

//Exercise 1

fetch('https://eloquentjavascript.net/author', {
	headers: { Accept: '*/*' },
	method: 'GET'
})
	.then((res) => res.text())
	.then((text) => console.log(text));
