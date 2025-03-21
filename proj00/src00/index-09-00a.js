/*
	desc-00: Give code examples using RxJs expand() operator and Immutable Map() object.
	desc-00a: immutable-map, rxjs-iif, method-signatures, type-safety
	desc-01: Example 1:  Hierarchical Data Traversal (Tree Structure), mixed between Immutable.js and regular Javascript objects.
	goal:
	line-code-added:
*/
const { of, from, interval, EMPTY } = require('rxjs');
const { tap, map, filter, take, expand, mergeMap, flatMap, reduce } = require('rxjs/operators');
const { Map, List, fromJS } = require('immutable');

// desc-01
interface User00 {
	children: Array<Map<string, number | string | [] | Array<Map<string, number | string | []>>>>;
};

type userChildren00 = Map<$Keys<User00>, $Values<User00>>;

const data00 = Map({
	children: [
		{ id: 2, name: 'Child A', children: [''] },
		{
			id: 3,
			name: 'Child B',
			children: [{ id: 4, name: 'Grandchild B1', children: [''] }],
		},
	],
});
console.log('1. data00: ', data00);
console.log('2. data00: ', data00.get('children'));
const test00 = data00.get('children');
//console.log('test00: ', test00);
const test01a = test00.map((val, idx) => [Map(val)]);
console.log('1. test01a: ', test01a);
//console.log('2. test01a: ', test01a[0]);
test01a.map(obj00 => obj00.map(obj01 => console.log('3. test01a: ', obj01.get('name'))));
const test01 = test00.map((val, idx) => [val]);
const test02 = test01.map(obj => {
	const test03:Map<string, mixed> = Map(obj[0]);
	return test03;
});
//test02.map(obj => console.log(obj.get('name')));

