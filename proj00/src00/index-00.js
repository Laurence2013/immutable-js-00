/*
	desc-00: Give code examples using rxjs of() and map() operator, with immutable.js Map() object.
	desc-00a: immutable-map, rxjs-of, rxjs-map
	desc-01: Example 1
	desc-02: Example 1: Basic Transformation
	desc-03: Example 2: Transforming Multiple Values
	desc-04: Example 3: Using update for Concise Transformations
	desc-05: Example 4: Handling Potential Missing Keys
	desc-06: Example 5: Using mapKeys
	desc-07: Example 6: Using mapEntries
	desc-08: groupBy(grouper): Groups entries in the map based on the result of the grouper function.
	desc-09: Give more code examples using immutable.js setIn() method with rxjs map() operator.
		desc-09a: Example 1: Updating a Nested Value
		desc-09b: Example 2: Adding a New Nested Value
	desc-10: Example 3: Updating a Value within a List (using List and setIn)
	desc-11: Example 4: Conditional Update Based on a Nested Value
	desc-12: Example 5: Using updateIn (a related method)
	desc-13: Example 6: Handling potentially missing nested structures
	goal:
	line-code-added:
*/
const { of } = require('rxjs');
const { map } = require('rxjs/operators');
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

// desc-06
const initData04 = Map({a: 1, b: 2, c: 3, d: 4});
const source05$ = of(initData04);
const result05$ = source05$.pipe(
	map(obj99 => obj99.mapKeys(k => k + "_transformed"))
);
// result05$.subscribe(val99 => console.log(val99.toJS()));

// desc-07
const initData05 = Map({a: 1, b: 2, c: 3, d: 4});
const source06$ = of(initData05);
const result06$ = source06$.pipe(
	map(obj99 => obj99.mapEntries(([k, v]) => [k.toUpperCase(), v * 5]))
);
// result06$.subscribe(val99 => console.log(val99.toJS()));

// desc-08
const data00 = fromJS([
	{name: 'Alice', age: 30},
  {name: 'Bob', age: 25},
  {name: 'Charlie1', age: 30},
  {name: 'Charlie2', age: 25},
  {name: 'Charlie3', age: 25},
  {name: 'Charlie4', age: 30},
]);
const result07$ = of(data00).pipe(
	map(obj99 => obj99.groupBy(gr99 => gr99.get('age')))
);
// result07$.subscribe(val99 => console.log(val99.toJS()));

// desc-09, desc09a
const initData06 = Map({
  user: Map({
    profile: Map({
      name: 'Alice',
      age: 30,
    }),
  }),
});
const result08$ = of(initData06).pipe(
	map(obj99 => obj99.setIn(['user', 'profile', 'age'], 40))
);
// result08$.subscribe(val99 => console.log(val99.toJS()));

// desc-09, desc09b
const initData07 = Map({
  user: Map({
    profile: Map({
      name: 'Alice',
      age: 30,
    }),
  }),
});
const result09$ = of(initData07).pipe(
	map(obj99 => obj99.setIn(['user', 'profile', 'city'], 'London'))
);
// result09$.subscribe(val99 => console.log(val99.toJS()));

// desc-10
const initData08 = Map({
	users: List([
		Map({id: 1, name: 'Alice'}),
		Map({id: 2, name: 'John'}),
	])
});
const result10$ = of(initData08).pipe(
	map(obj99 => obj99.setIn(['users', 0, 'name'], 'Alicia'))
);
// result10$.subscribe(val99 => console.log(val99.toJS()));

// desc-11
const initData09 = Map({
	user: Map({
		profile: Map({
			name: 'Alice',
			age: 30,
			isActive: false
		})
	})
});
const result11$ = of(initData09).pipe(
	map(obj99 => {
		const isActive = obj99.getIn(['user', 'profile', 'isActive']);
		return isActive === true ? 
			obj99.setIn(['user', 'profile', 'isActive'], 'Online') : 
			obj99.setIn(['user', 'profile', 'isActive'], 'Offline');
	})
);
// result11$.subscribe(val99 => console.log(val99.toJS()));

// desc-12
const initData10 = Map({
	user: Map({
		profile: Map({
			name: 'Alice',
			age: 31
		})
	})
});
const result12$ = of(initData10).pipe(
	map(obj99 => obj99.updateIn(['user', 'profile', 'age'], age => age + 3))
);
// result12$.subscribe(val99 => console.log(val99.toJS()));

// desc-13
const initData11 = Map({});
const result13$ = of(initData11).pipe(
	map(obj99 => obj99.setIn(['user', 'profile', 'name'], 'Cart Miller'))
);
result13$.subscribe(val99 => console.log(val99.toJS()));
