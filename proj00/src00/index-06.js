/*
	desc-00:
	goal:
	line-code-added:
*/
// @flow
const { of } = require('rxjs');
const { tap, map, filter, reduce } = require('rxjs/operators');
const { Map, List, fromJS } = require('immutable');

const list00: List<[string, number]> = List([
	['a', 1],
	['b', 2],
	['c', 3],
	['d', 9]
]);
const result00: Array<[string, number]> = list00.toArray();
const result00a: [string, number] | void = result00[0];
// console.log(result00a);

const result00$ = of(list00).pipe(
	map(obj99 => {
		const result00: Array<[string, number]> = obj99.toArray();
		const result00a: [string, number] | void = result00[0];
		const result00b: number | void = result00[0][1];
		return result00b;
	})
);
result00$.subscribe(console.log);
