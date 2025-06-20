/*
	quiz-00: Give code examples using Immutable.js List
	quiz-00a: https://gemini.google.com/gem/learning-coach/cb1d4192344b162d
	quiz-00b: immutable-list, immutable-quiz
	goal:
	line-code-added:
*/
const { List, toJS } = require('immutable');

// quiz-01
const myList00 = List([1,2,3,4,5]);
const result00 = myList00.set(1, myList00.get(1) * 2);
const result01 = myList00.update(1, x => x * 2);
const result02 = myList00.map(x => x * 2);
//const result03 = myList00.transform(1, x => x * 2);

// console.log(result00.toJS());

// quiz-02
const myList01 = List([10, 20, 30, 40]);
const result04 = myList01.push(50);

// console.log(result04);

// quiz-03
const myList02 = List([10, 20, 30, 40]);
const result05 = myList02.remove(1);

// console.log(result05.toJS());

// quiz-04
const myList03 = List([10, 20, 30, 40]);
const result06 = myList03.filter(n => n > 10)

// console.log(result06.toJS());

// quiz-05
const myList04 = List(['apple', 'banana', 'cherry']);
//const result07 = myList04.update(1, 'grape');
const result07a = myList04.set(1, 'grape');

// console.log(result07a.toJS());

// quiz-07
const myList05 = List([1,2,3,4,5]);
const result08 = myList05.toArray();

// console.log(result08);

// quiz-08
const myList06 = List(['A', 'B', 'C']);
const result09 = myList06.get(5, 2);

// console.log(result09);

// quiz-09, have not yet allocated
const myList07 = List.of([10,20,30]);
// console.log(myList07.size);

// quiz-10
const myList08 = List(['apple', 'banana', 'cherry']);
const result10 = myList08.set(1, 'blueberry');
const result10a = myList08.set(5, 'grape');

/*
console.log('Original List: ', myList08.toJS());
console.log('Updated List: ', result10.toJS());
console.log('Out of bound: ', result10a.toJS());
console.log('Size of JS: ', myList08.size);
*/

// quiz-11
const myList09 = List(['red', 'green', 'blue', 'yellow']);
const result11 = myList09.delete(1);
const result11a = myList09.delete(99);

/*
console.log('Original List: ', myList09.toJS());
console.log('Updated List: ', result11.toJS());
console.log('Delete out of bound: ', myList09.toJS());
*/

// quiz-12
const myList10 = List([10,20,30]);
const result12 = myList10.set(0, 5);

console.log('myList10: ', myList10.toJS());
console.log('result12: ', result12.toJS());
