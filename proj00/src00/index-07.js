/*
	desc-00: Give code examples using RxJs iif() and Immutable List() object (was not saved from Gemini).
	desc-00a: immutable-map, rxjs-iif, method-signatures
	desc-01: ...was not saved
	goal:
	line-code-added:
*/
// @flow
const { of, from, interval, Subject, iif, combineAll, EMPTY } = require('rxjs');
const { tap, map } = require('rxjs/operators');
const { Map, List, fromJS } = require('immutable');

// desc-01
const calc00 = (num:number) => num * 20;
const source00:Map<string, number> = Map({'a':1, 'b':2, 'c':3, 'd':4, 'e':5, 'f':6});
const source01:Map<string, number> = Map({'a':16, 'b':62, 'c':43, 'd':24, 'e':15, 'f':76});

// This result00$ is generally a bad idea, look at -> Is bad idea in Immutable.js to use Array.from on immutable object()?
const result00$ = iif(
	() => true,
	of(source00).pipe(
		map(obj99 => {
			const arr00:Array<[string, number]> = Array.from(source00.entries());
			return arr00;
		})
	),
	EMPTY
	);
const result01$ = iif(
	() => true,
	of(source00).pipe(
		map(obj00 => {
			const arr00:Map<string, number> = obj00.map(val => calc00(val));
			return arr00;
		})
	),
	EMPTY
);
const result01a$ = iif(
	() => true,
	of(source00).pipe(
		map(obj00 => {
			const arr01:Array<[k: string,v: number]> = source00.map(val => calc00(val)).toArray();
			return arr01;
		})
	),
	EMPTY
);
//result01$.subscribe(val99 => console.log(val99.toJS()));
result01a$.subscribe(val99 => console.log(val99));

/*result00$.subscribe((arr: Array<[string, number]>) => {
	for (const [key, value] of arr) {
    console.log(`Key: ${key}, Value: ${value}`);
  }
});*/
