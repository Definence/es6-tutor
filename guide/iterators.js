// Symbol.iterator, который определяет итератор для объекта по-умолчанию
var arr = [11,12,13];
var itr = arr[Symbol.iterator]();

itr.next(); // { value: 11, done: false }
itr.next(); // { value: 12, done: false }
itr.next(); // { value: 13, done: false }
itr.next(); // { value: undefined, done: true }
