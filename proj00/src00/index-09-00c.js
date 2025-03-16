/*
	desc-00: Give code examples using RxJs expand() operator and Immutable Map() object.
	desc-00a: immutable-map, rxjs-iif, method-signatures
	desc-01: Example 1:  Hierarchical Data Traversal (Tree Structure), mixed between Immutable.js and regular Javascript objects.
	goal:
	line-code-added:
*/
// @flow
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
const test00 = data00.get('children'); // Of type normal JS array, normal JS map
console.log(test00);
const test01 = fromJS(test00);
console.log(test01);
console.log(test01.toMap());

