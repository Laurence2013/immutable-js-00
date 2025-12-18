/*
	desc-00: Immutable.js List
  desc-01: immutable-list
	goals:
*/
const { List, Map, toJS } = require('immutable');

const store = Map({
	category: 'Electronics',
	products: List([
		Map({ name: 'Mouse', price: 25 }),
    Map({ name: 'Keyboard', price: 75 })
	])
});

store.toJS();
