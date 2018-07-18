// classic
let addition1 = function(a, b) {
  return a + b;
};

// arrow func
let addition2 = (a, b) => a + b;

// block
let arr = ['apple', 'banana', 'orange'];
let breakfast = arr.map(fruit => {
  return fruit + 's';
});
console.log(breakfast); // ['apples', 'bananas', 'oranges']

// Поведение стрелочных функций с ключевым словом this отличается от поведения обычных функций с this. Каждая функция в JavaScript определяет свой собственный контекст this, но внутри стрелочных функций значение this то же самое, что и снаружи (стрелочные функции не имеют своего this). См. ниже.

// classic bad
function PersonA() {
  // Конструктор Person() определяет `this` как экземпляр самого себя.
  this.age = 0;
  setInterval(function growUp() {
      // Без использования `use strict`, функция growUp() определяет `this`
      // как глобальный объект, который отличается от `this`,
      // определённого конструктором Person().
      this.age++;
      // console.log(this.age) // return NaN
  }, 1000);
}
var a = new PersonA();

//classic good
function PersonB() {
  var self = this;
  self.age = 0;
  setInterval(function growUp() {
      // Коллбэк относится к переменной `self`,
      // значением которой является ожидаемый объект.
      self.age++;
      // console.log(self.age) // return result
  }, 1000);
}
var b = new PersonB();

// arrow
function PersonC() {
  this.age = 0;
  setInterval(() => {
      this.age++; // `this` относится к объекту person
      console.log(this.age) // return result
  }, 1000);
}
var c = new PersonC();
