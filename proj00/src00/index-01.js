/*
	desc-00: Can you give code exammeples using rxjs groupBy() operator with immutable.js Map()?
	desc-00a: immutable-map, rxjs-groupby
	desc-01: Example 1: Grouping by a Simple Property
	desc-02: Example 2: Grouping by a Computed Key (using Immutable.js)
	desc-03: Example 4: Using reduce instead of toArray + Map
	desc-04: 1. map Operator
	desc-05: 2. mergeMap Operator
	desc-06: 3. switchMap Operator
	desc-07: 4. scan Operator
	desc-08: 5. reduce Operator
	desc-09: 6. pluck Operator
	desc-10: 7. filter Operator
	desc-11: 8. distinctUntilChanged Operator
	goal:
	line-code-added:
*/
const { of, from, interval } = require('rxjs');
const { map, groupBy, mergeMap, toArray, reduce, switchMap, take, scan, pluck, filter, distinctUntilChanged } = require('rxjs/operators');
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
const source02 = [
  { id: 1, category: 'A' },
  { id: 2, category: 'B' },
  { id: 3, category: 'A' },
  { id: 4, category: 'C' },
  { id: 5, category: 'B' },
];
const results02$ = from(source02).pipe(
	groupBy(obj99 => obj99.category),
	mergeMap(obj98 => obj98.pipe(
		reduce((acc, curr) => acc.update(obj98.key, List(), list => list.push(curr)), Map())
	))
);
// results02$.subscribe(val99 => console.log(val99.toJS()));

// desc-04
const source00$ = of(Map({ a: 1, b: 2 }));
const results03$ = source00$.pipe(
	map(obj99 => obj99.set('c', 3))
);
// results03$.subscribe(val99 => console.log(val99.toJS()));

// desc-05
const source01$ = of(Map({ a: 1, b: 2 }));
const results04$ = source01$.pipe(
	mergeMap(obj99 => of(obj99).pipe(
		map(_ => obj99.set('c', 3))
	))
);
const results04a$ = source01$.pipe(
	mergeMap(obj99 => of(obj99.set('c', 3)))
);
// results04a$.subscribe(val99 => console.log(val99.toJS()));

// desc-06
const source02$ = of(Map({ a: 1, b: 2 }));
const results05$ = source02$.pipe(
	switchMap(obj99 => of(obj99
		.set('c', 0)
		.set('c', 1)
		.set('c', 2)
	))
);
const results05a$ = source02$.pipe(
	switchMap(obj99 => interval(1000).pipe(
		take(3),
		map(num00 => obj99.set('c', num00))
	))
);
// results05a$.subscribe(val99 => console.log(val99.toJS()));

// desc-07
const source03$ = of(Map({ a: 1, b: 2 }));
const results06$ = source03$.pipe(
	scan((acc, curr) => acc.update(cur => curr), Map())
);
const results06a$ = source03$.pipe(
	scan((acc, curr) => acc.merge(curr), Map())
);
// results06a$.subscribe(val99 => console.log(val99.toJS()));

// desc-08
const source04$ = of(Map({ a: 1, b: 2 }));
const results07$ = source04$.pipe(
	reduce((acc, curr) => acc.merge(curr), Map())
);
// results07$.subscribe(val99 => console.log(val99.toJS()));

// desc-09 -> This is not working!
const source05$ = of(Map({ a: 1, b: 2 }));
const results08$ = source05$.pipe(
	pluck('a')
);
// results08$.subscribe(console.log);

// desc-10
const source06$ = of(Map({ a: 1, b: 2 }));
const results09$ = source06$.pipe(
	filter(obj99 => obj99.get('a'))
	//filter(obj99 => obj99.get('a') === 1)
);
// results09$.subscribe(val99 => console.log(val99.toJS()));

// desc-11 -> Doesn't produce the right results
const source07$ = of(Map({ a: 1, b: 2 }), Map({ a: 1, b: 2 }), Map({ a: 2, b: 3 }));
const results10$ = source07$.pipe(
	distinctUntilChanged((curr, next) => curr.equals(curr))
);
results10$.subscribe(val99 => console.log(val99.toJS()));
