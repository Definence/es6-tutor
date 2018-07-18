// var p = new Promise(function(resolve, reject) {
//   if (/* условие */) {
//       resolve(/* значение */);  // fulfilled successfully (успешный результат)
//   } else {
//       reject(/* reason */);  // rejected (ошибка)
//   }
// });
// p.then((val) => console.log("Промис успешно выполнен", val),
//        (err) => console.log("Промис выполнен с ошибкой", err));

var hello = new Promise(function(resolve, reject) {
  resolve("Привет");
});

hello.then((str) => `${str} Мир`)
     .then((str) => `${str}!`)
     .then((str) => console.log(str)) // Привет Мир!
