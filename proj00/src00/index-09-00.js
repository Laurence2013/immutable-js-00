/*
	desc-00: Give code examples using RxJs expand() operator and Immutable Map() object.
	desc-00a: immutable-map, rxjs-iif, method-signatures
	desc-01: Example 1:  Hierarchical Data Traversal (Tree Structure)
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
const result00$ = from([data00]).pipe(
	expand(obj99 => {
		const obj98 = fromJS(obj99);
		const children = obj98.get('children');
		return children && children.length > 0 ? from(children) : EMPTY;
	}),
	mergeMap(obj98 => from([obj98]).pipe(
		map(obj97 => obj97.id)
	))
);
result00$.subscribe(console.log);
