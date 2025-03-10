/*
	desc-00: In flowjs, just like Map type checker 'type PersonMapType = Immutable.Map<$Keys<Person>, $Values<Person>>;', ...
	desc-00a: ...immutable.js Map() object what is Set() type checker in flowjs?
	desc-01: immutable-set
	goal:
	line-code-added:
*/
// @flow
const { Map, List, Stack, OrderedMap, Set, fromJS } = require('immutable');

// Flowjs-Interface-00, type declaration and Immutable.js Set()
interface Address00 {
	no: number;
	address: string;
	postcode: string;
};
interface Person00 {
	id: number;
	name: string;
	age?: number;
	email?: string;
	address: Address00;
};
type PersonObj = Set<Person00>;

const person02: Person00 = {
  id: 1,
  name: 'Alice',
  age: 30,
  email: 'alice@example.com',
	address: {no: 19, address: 'some secret address 1', postcode: 'wvSomething'}
};
const person03: Person00 = {
  id: 2,
  name: 'Bob',
  email: 'bob@example.com',
	address: {no: 20, address: 'some secret address 2', postcode: 'wvSomething'}
};
const personSet00:PersonObj = Set([person02, person03]);

const getArray00 = personSet00.toArray() ?? null;
//const getName00 = personSet00.has('id') ?? null;

//console.log(getName00);
