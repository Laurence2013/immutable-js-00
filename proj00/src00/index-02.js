/*
	desc-00: Can you give code exammeples using rxjs groupBy() operator with immutable.js Map()?
	desc-00a: immutable-map, rxjs-buffer
	desc-01: 1. Buffering Values Based on a Time Interval
	desc-02: 2. Buffering Values Based on Another Observable
	desc-03: 3. Buffering Values into an Immutable.js Map
	desc-04: 4. Buffering Values with Dynamic Closing Notifier
	goal:
	line-code-added:
*/
const { of, from, interval } = require('rxjs');
const { tap, map, take, buffer, reduce, mergeMap, switchMap } = require('rxjs/operators');
const { Map, List, fromJS } = require('immutable');

// desc-01
const source00$ = interval(1000).pipe(
	take(10),
	map(val => Map({key: `items_${val}`, val}))
);
const results00$ = source00$.pipe(
	buffer(interval(3000))
);
const results00a$ = source00$.pipe(
	buffer(interval(3000)),
	map(val99 => val99.map(val98 => val98.toJS()))
);
// results00$.subscribe(val99 => console.log(val99.map(val98 => val98.toJS())));
// results00a$.subscribe(val97 => console.log(val97));

// desc-02
const source01$ = interval(1000).pipe(
	take(10),
	map(val99 => Map({key: `item_${val99}`, val99}))
);
const source01a$ = interval(3000);
const results01$ = source01$.pipe(
	buffer(source01a$),
	map(obj99 => obj99.map(val99 => val99.toJS()))
);
// results01$.subscribe(val97 => console.log(val97));

// desc-03
const source02$ = interval(200).pipe(
	take(10),
	map(val99 => Map({[`item_${val99}`]: val99}))
);
const source02a$ = interval(1000);
const results02$ = source02$.pipe(
	buffer(source02a$),
	map(obj99 => obj99.reduce((acc, curr) => acc.merge(curr), Map()))
);
// results02$.subscribe(val99 => console.log(val99.toJS()));

// desc-04
