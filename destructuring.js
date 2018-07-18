// destructuring
var foo = { bar: 1,
            baz: 2 },
          tenses = ['you', 'me', 'he']


// es5
var bar = foo.bar,
    baz = foo.baz
// es6
var { bar, baz } = foo
var [ firstPerson, secondPerson, thirdPerson ] = tenses

var foo = 2,
// es5
    obj = { bar: 1,
            foo: 2 },
// es6
    obj = { bar: 1,
            foo }

// es5
function calcBmi(weight, height, max, callback) {
  var bmi = weight / Math.pow(height, 2)
  if(bmi > max) {
    console.log("u're overweight")
  }
  if(callback) callback(bmi)
}
calcBmi(20, 180, null, function() {})
// es6
function calcBmi({ height: h, weight, max = 25, callback }) {
  var bmi = weight / Math.pow(h, 2)
  if(bmi > max) {
    console.log("u're overweight")
  }
  if(callback) callback(bmi)
}
calcBmi({weight: 80, height: 180, callback: function(result) {console.log(result)}})
