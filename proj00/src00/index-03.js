/*
	desc-00: Give code examples using RxJs new Subject() with Immutable Map() object.
	desc-00a: immutable-map, rxjs-subject
	desc-01: 1. Step 2: Code Example, using Map.set()
	desc-02: Example 1: Merging Two Immutable Maps and Emitting the Result
	desc-03: Example 2: Deleting a Key from an Immutable Map
	goal:
	line-code-added:
*/
const { of, from, interval, Subject, iif, combineAll, EMPTY } = require('rxjs');
const { tap, map, filter, take, buffer, reduce, bufferCount, mergeMap, switchMap, flatMap } = require('rxjs/operators');
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

subject01.subscribe({next: updateMap01 => console.log('Merge Map update: ', updateMap01.toJS())});

const updateMap01 = (map1, map2) => {
	let mergeMap00 = map1.merge(map2);
	subject01.next(mergeMap00);
};
// updateMap01(immutableMap01, immutableMap02);
