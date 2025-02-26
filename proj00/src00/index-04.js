/*
	desc-00: Give code examples using RxJs iif() operator, with Immutable Map() object with its iterations and transform operators like...
	desc-00a: ...Map.reduce(), Map.filter(), Map.map(), rxjs-iif
	desc-00a: immutable-map, rxjs-reduce, immutable-map-filter, immutable-map-map
	desc-01: Example 1: Conditional Logic with iif and Immutable Map
	desc-02: Example 2: iif with Map.map() (Immutable)
	desc-03: Example 3: iif with Map.reduce() (Immutable)
	desc-04: Example 4: Chaining iif and Immutable Operations
	desc-05: Example 1: Conditional String Concatenation
	goal:
	line-code-added:
*/
const { of, from, interval, Subject, iif, combineAll, EMPTY } = require('rxjs');
const { tap, map, filter, reduce } = require('rxjs/operators');
const { Map, List, fromJS } = require('immutable');

// desc-01
const source00 = Map({a:10, b:5, c:20, d:2, e:15});
const highValue$ = of(source00).pipe(map(obj => obj.filter(val => val > 10)));
const lowValue$ = of(source00).pipe(map(obj => obj.filter(val => val <= 10)));

const result00$ = iif(
	() => true,
	highValue$,
	lowValue$
);
// result00$.subscribe(immutableMapResult => console.log("Resulting Immutable Map:", immutableMapResult.toJS()));

// desc-02
const source01 = Map({a:1, b:2, c:3, d:4, e:5});
const timesTwo00$ = of(source01).pipe(
	tap(_ => console.log('Multiply by 2')),
	map(obj99 => obj99.map(val00 => val00 * 2))
)
const timesFive00$ = of(source01).pipe(
	tap(_ => console.log('Multiply by 5')),
	map(obj99 => obj99.map(val00 => val00 * 5))
)
const result01$ = iif(
	() => false,
	timesTwo00$,
	timesFive00$
);
// result01$.subscribe(immutableMapResult => console.log(immutableMapResult.toJS()));

// desc-03
const source02 = Map({a:2, b:4, c:6, d:8, e:10});
const timesTwo01$ = of(source02).pipe(
	tap(_ => console.log('Total and Multiply by 2')),
	map(obj => obj.reduce((acc, curr) => acc += (curr * 2), 0))
);
const timesFive01$ = of(source02).pipe(
	tap(_ => console.log('Total and Multiply by 5')),
	map(obj => obj.reduce((acc, curr) => acc += (curr * 5), 0))
);
const result02$ = iif(
	() => false, 
	timesTwo01$,
	timesFive01$
);
// result02$.subscribe(immutableMapResult => console.log(immutableMapResult));

// desc-04
const source03 = Map({a:2, b:4, c:6, d:8, e:10, x:3, y:7, z:1});
const result03$ = iif(
	() => false,
	of(source03).pipe(
		map(obj99 => obj99.filter(val99 => val99 % 2 === 0)),
		map(obj97 => obj97.map(val98 => val98 > 5))
	),
	of(source03).pipe(
		map(obj99 => obj99.map(val99 => val99 * 5)),
	)
);
// result03$.subscribe(immutableMapResult => console.log(immutableMapResult.toJS()));

// desc-05
const source04 = Map({a:'Hello', b:'World', c:'!'});
const result04$ = iif(
	() => false,
	of(source04).pipe(map(obj99 => obj99.join(''))),
	of(source04).pipe(map(obj99 => obj99.join('-'))),
);
result04$.subscribe(immutableMapResult => console.log(immutableMapResult));
