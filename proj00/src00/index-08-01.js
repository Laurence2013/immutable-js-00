/*
	desc-00: Give code examples for flowjs interfaces, type checker 'type PersonMapType = Immutable.Map<$Keys<Person>, $Values<Person>>;'...
	desc-00a: ...and immutable.js Map() object.
	desc-01: immutable-list, immutable-stack
	goal:
	line-code-added:
*/
// @flow
const { Map, List, Stack, fromJS } = require('immutable');

// Flowjs-Interface-00, type declaration and Immutable.js List()
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
const person04: Person01 = {
  id: 3,
  name: 'Lozza',
  email: 'lozza@example.com',
	address: {no: 21, address: 'some secret address 3', postcode: 'wvSomething'}
};
const getPerson00 = personList00.get(1) ?? null;
const getName01 = personList00.get(0) ?? null;

const test00 = personList00.push(person04);

const getPerson01 = test00.get(2) ?? null;
const getPerson02 = test00.toArray() ?? null;
const result00 = getPerson02.filter(obj => obj.id === 2)
// console.log(result00);

// Flowjs-Interface-01, type declaration and Immutable.js Stack()
interface Address02 {
	no: number;
	address: string;
	postcode: string;
};
interface Person02 {
	id: number;
	name: string;
	age?: number;
	email?: string;
	address: Address02;
};
type PersonStack00 = Stack<Person02>;
const person05: Person02 = {
  id: 1,
  name: 'Alice',
  age: 30,
  email: 'alice@example.com',
	address: {no: 31, address: 'some secret address 4', postcode: 'wvSomething'}
};
const person06: Person02 = {
  id: 2,
  name: 'Bob',
	address: {no: 32, address: 'some secret address 5', postcode: 'wvSomething'}
};
const person07:PersonStack00 = Stack([person05, person06]);
const topPerson00 = person07.peek() ?? null;

const person08: Person02 = {
  id: 3,
  name: 'Lozza',
  email: 'lozza@example.com',
	address: {no: 33, address: 'some secret address 6', postcode: 'wvSomething'}
};
const test01 = person07.push(person08);

const getName = test01.get(0) ?? null;

console.log(getName);
