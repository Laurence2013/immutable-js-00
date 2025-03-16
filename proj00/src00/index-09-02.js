/*
	desc-00: Give code examples using RxJs expand() operator and Immutable Map() object.
	desc-00a: immutable-map, rxjs-iif, method-signatures, type-safety
	desc-01: Example 1:  Hierarchical Data Traversal (Tree Structure)
	goal:
	line-code-added:
*/
// @flow
const { of, from, interval, EMPTY } = require('rxjs');
const { tap, map, filter, take, expand, mergeMap, flatMap } = require('rxjs/operators');
const { Map, List, fromJS } = require('immutable');

// desc-01
interface User00 {
	id: number;
	name: string;
	children: Array<Map<string, number | string | [] | Array<number>>>
};
type userChildren00 = Map<$Keys<User00>, $Values<User00>>;

const data01:userChildren00 = Map({
	id: 1,
	name: 'Root',
	children: [
		Map({ id: 2, name: 'Child A', children: []}),
		Map({
			id: 3,
			name: 'Child B',
			children: [1,2,3,4],
		}),
	],
});

const result00$ = from([data01]).pipe(
	expand(obj99 => {
		const children = obj99.get('children');
		return children && children.length > 0 ? from(children) : EMPTY;
	}),
	mergeMap(obj98 => from([obj98]).pipe(
		map(obj97 => obj97.get('name'))
	))
);
result00$.subscribe(console.log);
