/*
	desc-00: Give code examples using RxJs iif() operator, with Immutable Map() object with its iterations and transform operators like Map.reduce(), Map.filter(), Map.map().
	desc-00a: immutable-map, rxjs-reduce, immutable-map-filter, immutable-map-map
	goal:
	line-code-added:
*/
const { of, from, interval, Subject, iif, combineAll, EMPTY } = require('rxjs');
const { tap, map, filter, reduce } = require('rxjs/operators');
const { Map, List, fromJS } = require('immutable');

const source00 = Map({a:10, b:5, c:20, d:2, e:15});
const highValue$ = of(source00).pipe(map(obj => obj.filter(val => val > 10)));
const lowValue$ = of(source00).pipe(map(obj => obj.filter(val => val <= 10)));

const result00$ = iif(
	() => true,
	highValue$,
	lowValue$
);
result00$.subscribe(immutableMapResult => console.log("Resulting Immutable Map:", immutableMapResult.toJS()));
