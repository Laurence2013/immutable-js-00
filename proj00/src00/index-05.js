/*
	desc-00: Give code examples using RxJs iif() operator, with Immutable List() object with its iterations and transform operators like...
	desc-00a: immutable-map, rxjs-map, iterable, method-signatures
	goal:
	line-code-added:
*/

const { of, Observable } = require('rxjs');
const { tap, map, filter, reduce } = require('rxjs/operators');
const { Map, List, fromJS } = require('immutable');

const map00: Map<string, number> = Map([
	['a', 1],
	['b', 2],
	['c', 3],
	['d', 9]
]);
const result00$: List<string, number> = of(map00).pipe(
	map((obj: List<string, number>) => obj.toJS())
);
const result00a$: List<string, number> = of(map00).pipe(
	map((obj: List<string, number>) => obj.set('z', 42)),
	map((obj: List<string, number>) => obj.toJS())
);
const result00b$ = of(map00).pipe(
	map(obj => obj.set('z', 42).toJS()),
);
result00b$.subscribe(console.log);
