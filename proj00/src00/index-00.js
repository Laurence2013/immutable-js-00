/*
	desc-00: Give code examples using rxjs of() and map() operator, with immutable.js Map() object.
	desc-00a: rxjs-map, immutable-Map
	desc-01: Example 1
	desc-02: Example 1: Basic Transformation
	desc-03: Example 2: Transforming Multiple Values
	desc-04: Example 3: Using update for Concise Transformations
	desc-05: Example 4: Handling Potential Missing Keys
	goal:
	line-code-added:
*/

const { of, from } = require('rxjs');
const { tap, map } = require('rxjs/operators');
const { Map, List, fromJS } = require('immutable');

// desc-01
const source00$ = of({items: [1,2,3,4,5]});
const results00$ = source00$.pipe(
	map(dt99 => fromJS(dt99)),
	map(dt98 => dt98.update('items', items => items.push(4)))
);
// results00$.subscribe(val99 => console.log(val99.toJS()));

// desc-02
const initData00 = Map({a: 1, b: 2, c: 3, d: 4});
const source01$ = of(initData00);
const result01$ = source01$.pipe(
	map(obj99 => obj99.set('a', obj99.get('a') + 10))
);
// result01$.subscribe(val99 => console.log(val99.toJS()));

// desc-03
const initData01 = Map({a: 1, b: 2, c: 3, d: 4});
const source02$ = of(initData01);
const result02$ = source02$.pipe(
	map(obj99 => obj99
		.set('a', obj99.get('a') + 1)
		.set('b', obj99.get('b') + 5)
	)
);
// result02$.subscribe(val99 => console.log(val99.toJS()));

// desc-04
const initData02 = Map({a: 1, b: 2, c: 3, d: 4});
const source03$ = of(initData02);
const result03$ = source03$.pipe(
	map(obj99 => obj99.update('a', val99 => val99 * 10))
);
// result03$.subscribe(val99 => console.log(val99.toJS()));

// desc-05
const initData03 = Map({a: 1, b: 2, c: 3, d: 4});
const source04$ = of(initData03);
const result04$ = source04$.pipe(
	map(obj99 => {
		const eValue = obj99.get('e', 0);
		return obj99.set('e', eValue + 5)
	})
);
// result04$.subscribe(val99 => console.log(val99.toJS()));
