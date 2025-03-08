/*
	desc-00: Flowjs interfaces and Immutable.js Map() object
	desc-01: 
	goal:
	line-code-added:
*/
// @flow
const { Map, List, fromJS } = require('immutable');

// Flowjs-Interface-00, type declaration and Immutable.js Map()
interface MyMapInterface {
	id: number;
	fName: string;
	lName: string;
	age: number;
	hobbies: Array<string>;
};
type MyMapInterface00 = Map<$Keys<MyMapInterface>, $Values<MyMapInterface>>;

const myMap00: MyMapInterface00 = Map({
	id: 1,
	fName: 'Lozza',
	lName: 'Mitchell',
	age: 29,
	hobbies: ['Weights', 'Boxing']
});

// Flowjs-Interface-01, type declaration and Immutable.js Map()
interface Address {
	street: string;
	city: string
};
interface Person {
	name: string;
	age: number;
	address: Address;
};
type PersonMapType = Map<$Keys<Person>, $Values<Person>>;

const myMap01: PersonMapType = Map({
	name: 'Lozza Garcia',
	age: 29,
	address: {street: 'Some street 1', city: 'London'}
});

const name = myMap01.get('name') ?? '';
const address = myMap01.get('address');
console.log(address);

