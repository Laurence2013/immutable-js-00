/*
	desc-00: Give code examples using RxJs iif() operator, with Immutable Map() object with its iterations and transform operators like...
	desc-00a: ...Map.reduce(), Map.filter(), Map.map(), rxjs-iif
	goal:
	line-code-added:
*/
// @flow
const { of, from, interval, Subject, iif, combineAll, EMPTY } = require('rxjs');
const { tap, map, filter, reduce } = require('rxjs/operators');
const { Map, List, fromJS } = require('immutable');

const map00: Map<string, number> = Map([
	['a', 1],
	['b', 2],
	['c', 3],
	['d', 4]
]);
console.log(map00.get('b'));
