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

const result00$ = from(data00).pipe(
	//map(obj00 => obj00.has('children')),
	//tap(tst00 => console.log(tst00)),
	expand(obj99 => obj99.has('children') ? of({name: 'Hello'}) : of({name: 'Nothing'})),
	tap(tst00 => console.log(tst00)),
	mergeMap(obj98 => of(obj98).pipe(
		map(obj97 => obj97.name)
	))
);
result00$.subscribe();
