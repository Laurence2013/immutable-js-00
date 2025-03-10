/*
	desc-00: In flowjs, just like Map type checker 'type PersonMapType = Immutable.Map<$Keys<Person>, $Values<Person>>;', ...
	desc-00a: ...immutable.js Map() object what is Set() type checker in flowjs?
	desc-01: immutable-set, immutable-list
	desc-02: 1. Filtering a List Based on a Set of IDs
	desc-03: 1. Finding Common Elements Between a List and a Set
	goal:
	line-code-added:
*/
// @flow
const { Map, List, Stack, OrderedMap, Set, fromJS } = require('immutable');

// Flowjs-Interface-00, type declaration and Immutable.js Set()
interface Obj00 {
	a: number;
	b: number;
}
type obj00 = Set<Obj00>;

const obj1 = { a: 1, b: 2 };
const obj2 = { a: 1, b: 2 };
const obj3 = { a: 1, b: 3 };

const result00:obj00 = Set([obj1, obj2, obj3]);
/*
console.log(result00.size);
console.log(result00.has(obj2));
console.log(result00.has({ a: 1, b: 2 }));
*/

// desc-02
interface UserInfo00 {
	id: number;
	name: string;
}
type userInfo00 = List<UserInfo00>;

const users00:userInfo00 = List([
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
  { id: 4, name: 'David' },
  { id: 2, name: 'Bob (Duplicate)' }, // Duplicate ID
]);
const allowedIDs = Set([1,3,5]);
const filteredUsers = users00.filter(ids => allowedIDs.has(ids.id));

// console.log(filteredUsers.toArray());

// desc-03
interface UserInfo01 {
	id: number;
	name: string;
}
type userInfo01 = List<UserInfo01>;

const users01:userInfo01 = List([
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
  { id: 4, name: 'David' },
]);
const adminUsers = Set([2,4]);
const getUsers00 = users01.filter(users => adminUsers.has(users.id));
const getUsers01 = users01.reduce((acc: userInfo01, curr) => {
	if(adminUsers.has(curr.id)){
		acc.push(curr); // Need to explicitely write 'return' 
	};
	return acc;
}, List());
const getUsers01a = users01.reduce((acc: userInfo01, curr) => {
	if(adminUsers.has(curr.id)){ return acc.push(curr) };
	return acc;
}, List());

console.log(getUsers01a.toArray());
