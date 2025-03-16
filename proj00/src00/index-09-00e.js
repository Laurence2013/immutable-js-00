/*
	desc-00: Give code examples using RxJs expand() operator and Immutable Map() object.
	desc-00a: immutable-map, rxjs-iif, method-signatures, type-safety
	desc-01: Example 1:  Hierarchical Data Traversal (Tree Structure), mixed between Immutable.js and regular Javascript objects.
	goal:
	line-code-added:
*/
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
const testData00 = data00.get('children');
if(testData00 != null){
	const test00: Array<{id: number, name: string}> = testData00;
	const test01 = Map(test00.map(child => {
		const immutableChild = fromJS(child);
		return [immutableChild.get('id'), immutableChild]
	}));
	console.log(test01);
	console.log(test01.get(2).get('name'));
	console.log(test01.get(3).get('name'));
}else{
	console.log(false);
}
