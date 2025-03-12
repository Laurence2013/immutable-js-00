/*
	desc-00: Give code examples using RxJs expand() operator and Immutable Map() object.
	desc-00a: immutable-map, rxjs-iif, method-signatures
	desc-01: Example 1:  Hierarchical Data Traversal (Tree Structure), mixed between Immutable.js and regular Javascript objects.
	goal:
	line-code-added:
*/
// @flow
const { of, from, interval, EMPTY } = require('rxjs');
const { tap, map, filter, take, expand, mergeMap, flatMap } = require('rxjs/operators');
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
const immutableData00 = fromJS({
	name: data00.get('name'),
	children: data00.get('children')
});
const immutableData01 = data00.toArray();

const result00$ = from([immutableData01]).pipe(
	expand(obj99 => {
		const children = obj99.filter(obj => obj.children);
		return children && children.length > 0 ? from(children) : EMPTY;
	}),
	mergeMap(obj98 => from([obj98]).pipe(
		map(obj97 => obj97.filter(obj => obj.name))
	))
);
result00$.subscribe(console.log);
