/*
	goal:
	line-code-added:
*/
// @flow
const { of } = require('rxjs');
const { tap, map, filter, reduce } = require('rxjs/operators');
const { Map, List, fromJS } = require('immutable');

const list00: List<[string, number]> = List([
	['a', 1],
	['b', 2],
	['c', 3],
	['d', 9]
]);
const result00: Array<[string, number]> = list00.toArray();
const result00a: [string, number] | void = result00[0];
console.log(result00a);
