/*
	desc-00: Can you give code exammeples using rxjs groupBy() operator with immutable.js Map()?
	desc-00a: immutable-map, rxjs-buffer, rxjs-transformation
	desc-01: 1. Buffering Values Based on a Time Interval
	desc-02: 2. Buffering Values Based on Another Observable
	desc-03: 3. Buffering Values into an Immutable.js Map
	desc-04: 4. Buffering Values with Dynamic Closing Notifier
	desc-05: 5. Buffering Values with Custom Logic
	goal:
	line-code-added:
*/
const { of, from, interval, Subject, iif, combineAll, EMPTY } = require('rxjs');
const { tap, map, filter, take, buffer, reduce, bufferCount, mergeMap, switchMap, flatMap } = require('rxjs/operators');
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

// desc-04 -> Doesn't produce the right results, only results03$ produces the right result
const source03$ = interval(200).pipe(
	take(10),
	map(val99 => Map({[`item_${val99}`]: val99}))
);
const closingNotifier00$ = new Subject();
const results03$ = source03$.pipe(
	bufferCount(3),
	map(obj99 => obj99.map(val => val.toJS()))
);
const results03a$ = source03$.pipe(
	buffer(closingNotifier00$),
	tap(obj99 => {
		if(obj99.length > 3){ closingNotifier00$.next() }
	}),
	map(obj98 => obj98.map(val => val.toJS()))
);
const results03b$ = source03$.pipe(
	buffer(closingNotifier00$),
	switchMap(obj99 => iif(() => obj99.length >= 3,
		of(closingNotifier00$.next),
		of()
	)),
);
// results03$.subscribe(console.log);

// desc-05
const source04$ = interval(200).pipe(
	take(10),
	map(val99 => Map({key: `item_${val99}`, val99}))
);
const source05$ = source04$.pipe(
	filter(obj99 => obj99.get('val99') % 4 === 0)
);
const results04$ = source04$.pipe(
	buffer(source05$),
	map(obj99 => obj99.map(val99 => val99.toJS()))
);
const results04a$ = source04$.pipe( //This doesn't work!
	buffer(obj99 => of(obj99).pipe(
		filter(obj98 => obj98.get('val99') % 2 === 0)
	)),
	map(obj97 => obj97.map(val99 => val99.toJS()))
);
results04$.subscribe(console.log);
