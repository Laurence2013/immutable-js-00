/*
	desc-00: Give code examples using RxJs expand() operator and Immutable Map() object.
	desc-00a: immutable-map, rxjs-iif, method-signatures, type-safety
	desc-01: Example 1:  Hierarchical Data Traversal (Tree Structure), mixed between Immutable.js and regular Javascript objects.
	goal:
	line-code-added:
*/
// @flow
const { of, from, interval, EMPTY } = require('rxjs');
const { tap, map, filter, take, expand, mergeMap, flatMap, reduce } = require('rxjs/operators');
const { Map, List, fromJS } = require('immutable');

// desc-01
const data00:Map<string, Array<{id: number, name: string}>> = Map({
  children: [
    { id: 2, name: 'Child A' },
    { id: 3, name: 'Child B' },
  ],
});
const testData00:Array<{id: number, name: string}> = data00.get('children', []);
const testData01:Map<number, [string, Array<{id: number, name: string}>]> = List(data00).toMap();
const testData02:[string, Array<{id: number, name: string}>] = testData01.get(0);

//testData02.filter(obj => obj === 'children')

console.log(testData01.toJS());
console.log(testData01.get(0));
console.log(testData02);
