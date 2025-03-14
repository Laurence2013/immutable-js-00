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
const data00 = Map({
	id: 1,
	name: 'Root',
	children: [
		{ id: 2, name: 'Child A', children: [] },
		{
			id: 3,
			name: 'Child B',
			children: [{ id: 4, name: 'Grandchild B1', children: [] }],
		},
	],
});
const data01_fromJS = fromJS(data00.toJS());
const test00 = data01_fromJS.get('children').get(0);
const test01 = data01_fromJS.get('children').map((obj, idx) => obj.get('name'));
const test02 = data01_fromJS.get('children').map((obj, idx) => obj.get('children'));
const test02a = test02.map(obj => obj.get(1));

console.log(test02.toJS());
console.log(test02a.toJS());
console.log(test01.toArray());
console.log(test01.toJS());

/*console.log(data01_fromJS.toJS());
console.log(Map.isMap(data01_fromJS));
console.log(List.isList(data01_fromJS.get('children')));
console.log(Map.isMap(data01_fromJS.get('children').get(0))); 
console.log(test00.get('name'));*/
