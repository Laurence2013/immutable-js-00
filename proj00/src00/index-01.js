/*
	desc-00: Can you give code exammeples using rxjs groupBy() operator with immutable.js Map()?
	desc-00a: rxjs-groupby, immutable-map
	desc-01: Example 1: Grouping by a Simple Property
	desc-02: Example 2: Grouping by a Computed Key (using Immutable.js)
	desc-03: Example 4: Using reduce instead of toArray + Map
	goal:
	line-code-added:
*/
const { of, from } = require('rxjs');
const { map, groupBy, mergeMap, toArray } = require('rxjs/operators');
const { Map, List, fromJS } = require('immutable');

// desc-01
const source00 = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 30 },
  { name: 'David', age: 25 },
  { name: 'Eve', age: 40 },
];
const results00$ = from(source00).pipe(
	groupBy(obj99 => obj99.age),
	mergeMap(obj97 => obj97.pipe(
		toArray(),
		map(obj96 => Map([[obj97.key, obj96]]))
	))
);
// results00$.subscribe(val99 => console.log(val99.toJS()));

// desc-02
const source01 = [
  { name: 'Laptop', categories: List(['electronics', 'computers']) },
  { name: 'Mouse', categories: List(['electronics', 'accessories']) },
  { name: 'Keyboard', categories: List(['electronics', 'accessories']) },
  { name: 'Book', categories: List(['books', 'literature']) },
];
const results01$ = from(source01).pipe(
	groupBy(obj99 => obj99.name),
	mergeMap(obj98 => obj98.pipe(
		toArray(),
		map(([obj97]) => obj97.categories)
	))
);
const results01a$ = from(source01).pipe(
	groupBy(obj99 => obj99.categories.toArray()),
	mergeMap(obj98 => obj98.pipe(
		toArray(),
		map(obj97 => Map([[obj98.key, obj97]]))
	))
);
const results01b$ = from(source01).pipe(
	groupBy(obj99 => obj99.categories.sort().join(',')),
	mergeMap(obj98 => obj98.pipe(
		toArray(),
		map(obj97 => Map([[obj98.key, obj97]]))
	))
);
// results01b$.subscribe(val99 => console.log(val99.toJS()));

// desc-03
const items = [
  { id: 1, category: 'A' },
  { id: 2, category: 'B' },
  { id: 3, category: 'A' },
  { id: 4, category: 'C' },
  { id: 5, category: 'B' },
];
