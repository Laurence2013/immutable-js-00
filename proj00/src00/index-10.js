/*
	desc-00: Give code examples using Immutable.js List
	desc-00a: immutable-list, immutable-quiz
	goal:
	line-code-added:
*/
const { List, toJS } = require('immutable');

// desc-01
const myList00 = List([1,2,3,4,5]);
const result00 = myList00.set(1, myList00.get(1) * 2);
const result01 = myList00.update(1, x => x * 2);
const result02 = myList00.map(x => x * 2);
//const result03 = myList00.transform(1, x => x * 2);

// console.log(result00.toJS());

// desc-02
const myList01 = List([10, 20, 30, 40]);
const result04 = myList01.push(50);

// console.log(result04);

// desc-03
const myList02 = List([10, 20, 30, 40]);
const result05 = myList02.remove(1);

console.log(result05.toJS());
