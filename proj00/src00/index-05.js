/*
	desc-00: Give code examples using RxJs iif() operator, with Immutable Map() object with its iterations and transform operators like...
	desc-00a: immutable-map, rxjs-map, iterable, method-signatures
	goal:
	line-code-added:
*/
// @flow
const { of, from, interval, Subject, iif, combineAll, Observable } = require('rxjs');
const { tap, map, filter, reduce } = require('rxjs/operators');
const { Map, List, fromJS } = require('immutable');

const map00: Map<string, number> = Map([
	['a', 1],
	['b', 2],
	['c', 3],
	['d', 4]
]);
const result00$: Observable<Object> = of(map00).pipe(
	map((obj: Map<string, number>) => obj.toJS())
);
const result00a$: Observable<Object> = of(map00).pipe(
	map((obj: Map<string, number>) => obj.set('z', 42)),
	map((obj: Map<string, number>) => obj.toJS())
);
const result00b$: Observable<Object> = of(map00).pipe(
	map((obj: Map<string, number>) => obj.set('z', 42).toJS()),
);
result00a$.subscribe(console.log);
