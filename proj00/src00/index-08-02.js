/*
	desc-00: Just like Map type checker 'type PersonMapType = Immutable.Map<$Keys<Person>, $Values<Person>>;', immutable.js Map() object...
	desc-00a: ..what is OrderedMap type checker in flowjs?
	desc-01: immutable-orderedMap
	goal:
	line-code-added:
*/
// @flow
const { Map, List, Stack, OrderedMap, fromJS } = require('immutable');

// Flowjs-Interface-00, type declaration and Immutable.js OrderedMap()
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
type PersonOrderedMap00 = OrderedMap<$Keys<Person00>, $Values<Person00>>;

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
const orderedMap00:PersonOrderedMap00 = OrderedMap({
	id: person03.id, 
	name: person03.name, 
	age: person02.age, 
	email: person02.email, 
	address: person03.address
});
let myOrderedMap:PersonOrderedMap00 = OrderedMap();
myOrderedMap = myOrderedMap.merge(orderedMap00);

const getName00 = myOrderedMap.get('age') ?? null;
const hasAge00 = myOrderedMap.has('age') ?? null;
const getAddressNo00 = myOrderedMap.get('address') ?? null;

//myOrderedMap = myOrderedMap.set('hobbies', ['Weights', 'Martial Arts', 'HIIT']); It seems you cannot add a completely new Key and Value pair
myOrderedMap = myOrderedMap.set('age', 40);

const getNewAge00 = myOrderedMap.get('age');

console.log(myOrderedMap.toJS());
console.log(getName00);
console.log(hasAge00);
console.log(getAddressNo00);
console.log(getNewAge00);
