// set
let mySet = new Set([1, 1, 2, 2, 3, 3]);
mySet.size; // 3
mySet.has(1); // true
mySet.add('строки');
mySet.add({ a: 1, b: 2 });

mySet.forEach((item) => {
  console.log(item);
  // 1
  // 2
  // 3
  // 'строки'
  // Object { a: 1, b: 2 }
});

for (let value of mySet) {
  console.log(value);
  // 1
  // 2
  // 3
  // 'строки'
  // Object { a: 1, b: 2 }
}

// У Set также есть методы delete() и clear().

// weakset
var ws = new WeakSet();
var obj = {};
var foo = {};

ws.add(window);
ws.add(obj);

ws.has(window); // true
ws.has(foo);    // false, foo не был добавлен к коллекции

ws.delete(window); // удаляет window из коллекции
ws.has(window);    // false, window был удалён
