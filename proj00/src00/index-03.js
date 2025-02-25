/*
	desc-00: Give code examples combining RxJs filter() operator, new Subject() and Immutable Map() object with Map.has() operator.
	desc-00a: immutable-map, rxjs-subject, rxjs-filter
	desc-01: 1. Step 2: Code Example, using Map.set()
	desc-02: Example 1: Merging Two Immutable Maps and Emitting the Result
	desc-03: Example 2: Deleting a Key from an Immutable Map
	desc-04: Example 3: Handling Multiple Subscribers
	desc-05: Example 4: Filtering Map Updates Based on Conditions
	goal:
	line-code-added:
*/
const { of, from, interval, Subject, iif, combineAll, EMPTY } = require('rxjs');
const { tap, map, filter, take, delay, buffer, reduce, bufferCount, mergeMap, switchMap, flatMap } = require('rxjs/operators');
const { Map, List, fromJS } = require('immutable');

// desc-01
const subject00 = new Subject();
let immutableMap00 = Map({key1: 'value1', key2: 'value2'});

// subject00.subscribe({next: updateMap00 => console.log('Map updated: ', updateMap00.toJS())});

const updateMap00 = (key, value) => {
	let setMap00 = immutableMap00.set(key, value);
	subject00.next(setMap00);
};
updateMap00('key3', 'value3');
updateMap00('key4', 'value4');

// desc-02
const subject01 = new Subject();
const immutableMap01 = Map({key1: 'value1', key2: 'value2'});
const immutableMap02 = Map({key3: 'value3', key4: 'value4'});

// subject01.subscribe({next: updateMap01 => console.log('Merge Map update: ', updateMap01.toJS())});

const updateMap01 = (map1, map2) => {
	let mergeMap00 = map1.merge(map2);
	subject01.next(mergeMap00);
};
updateMap01(immutableMap01, immutableMap02);

// desc-03
const subject02 = new Subject();
const immutableMap03 = Map({key1: 'value1', key2: 'value2', key3: 'value3', key4: 'value4'});

// subject02.subscribe({next: delMap00 => console.log('Deleted key in Map', delMap00.toJS())});

const deleteKey00 = key => {
	const delKey00 = immutableMap03.delete(key)
	subject02.next(delKey00);
};
const deleteKey00a = (map, key) => {
	const delKey00 = map.delete(key)
	subject02.next(delKey00);
};
deleteKey00a(immutableMap03, 'key2')
//deleteKey00('key2');

// desc-04a
const subject03 = new Subject();
const immutableMap04 = Map({key1: 'value1', key2: 'value2', key3: 'value3', key4: 'value4'});

//subject03.pipe(delay(1000)).subscribe({next: add00 => console.log('Adding to Map: ', add00.toJS())});
//subject03.pipe(delay(3000)).subscribe({next: del00 => console.log('Deleting from Map: ', del00.toJS())});

const addingToMap00 = (map, key, value00) => {
	const update00 = map.update(key, _ => value00);
	subject03.next(update00);
};
const deleteFromMap00 = (map, key) => {
	const delete00 = map.delete(key);
	subject03.next(delete00);
};
addingToMap00(immutableMap04, 'key5', 'value5');
deleteFromMap00(immutableMap04, 'key2');

// desc-04b
const subject03a = new Subject();
const immutableMap04a = Map({key1: 'value1', key2: 'value2', key3: 'value3', key4: 'value4'});

//subject03a.pipe(delay(1000)).subscribe({next: updated00 => console.log('Subscriber update 1: ', updated00.toJS())});
//subject03a.pipe(delay(3000)).subscribe({next: updated00 => console.log('Subscriber update 2: ', updated00.toJS())});

const updateMap02 = (map, data) => {
	const update01 = map.set(Object.keys(data), data.key5);
	subject03a.next(update01);
}
updateMap02(immutableMap04a, {key5: 'value5'});

// desc-05 -> Doesn't produce the right results, only results03$ produces the right result
const subject04 = new Subject();
const immutableMap05 = Map({key1: 'value1', key2: 'value2', key3: 'value3', key4: 'value4'});
const immutableMap05a = Map({key1: 'value1', key2: 'value2', key3: 'value3'});

subject04.pipe(filter(obj00 => obj00.has('key4')))
//subject04.subscribe({next: updated00 => console.log('Subscriber update 1: ', updated00.toJS())});

const updateMap03 = (map, key, value) => {
	const update00 = map.set(key, value);
	subject04.next(update00);
};
updateMap03(immutableMap05, 'key1', 'value1');
updateMap03(immutableMap05a, 'key2', 'valueeee2');

// desc-05a
const subject04a = new Subject();
const immutablemap05b = Map({key1: 'value1', key2: 'value2', key3: 'value3', key4: 'value4'});
const immutablemap05c = Map({key1: 'value1', key2: 'value2', key3: 'value3'});
const immutablemap05d = Map({key3: 'value3', key4: 'value4'});

const filteredmap01$ = subject04a.pipe(filter(obj01 => obj01.has('key4')))
//filteredmap01$.subscribe({next: updated00 => console.log('subscriber update 1: ', updated00.toJS())});

subject04a.next(immutablemap05b);
subject04a.next(immutablemap05c);
subject04a.next(immutablemap05d);

