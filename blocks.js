// es5
if (true) {
  var a = 2
}

console.log(a)

// es6
const bar = { a: 1 }
let c
if (true) {
  bar.a = 2
  let a = 2
  const b = 2
  c = 3
}

console.log(bar, c)
// let and const doesn't appear in a console
