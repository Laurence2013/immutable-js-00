/*
	desc-00: Give code examples for flowjs interfaces, type checker 'type PersonMapType = Immutable.Map<$Keys<Person>, $Values<Person>>;'...
	desc-00a: ...and immutable.js Map() object.
	desc-01: 
	goal:
	line-code-added:
*/
// @flow
const { Map, List, fromJS } = require('immutable');

// Flowjs-Interface-00, type declaration and Immutable.js Map()
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
type personDetails00 = Map<$Keys<Person00>, $Values<Person00>>;

const person00: personDetails00 = Map({
	id: 00,
	name: 'Lozza Garcia',
	age: 29,
	address: {no: 19, address: 'some secret address 1', postcode: 'wvSomething'}
});
const getName00 = person00.get('name') ?? null;
const getEmail00 = person00.get('email') ?? null;
const getAddress00 = person00.get('address') ?? null;
// console.log(getAddress00);

// Flowjs-Interface-01, type declaration and Immutable.js List()
interface Address01 {
	no: number;
	address: string;
	postcode: string;
};
interface Person01 {
	id: number;
	name: string;
	age?: number;
	email?: string;
	address: Address01;
};
type person01 = List<Person01>;

const person02: Person01 = {
  id: 1,
  name: 'Alice',
  age: 30,
  email: 'alice@example.com',
	address: {no: 19, address: 'some secret address 1', postcode: 'wvSomething'}
};

const person03: Person01 = {
  id: 2,
  name: 'Bob',
  email: 'bob@example.com',
	address: {no: 20, address: 'some secret address 2', postcode: 'wvSomething'}
};
const personList00:person01 = List([person02, person03]);
const getPerson00 = personList00.get(0) ?? null;
const getName01 = personList00.get(0) ?? null;
console.log(getName01.name);
