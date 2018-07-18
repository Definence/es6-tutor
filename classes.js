// Функции, записанные с помощью ключевого слова static, используются для объявления статических свойств класса
class Task {
  constructor() {
      console.log("Создан экземпляр task!");
  }

  showId() {
      console.log(23);
  }

  static loadAll() {
      console.log("Загружаем все tasks...");
  }
}

console.log(typeof Task); // function
let task = new Task(); // "Создан экземпляр task!"
task.showId(); // 23
Task.loadAll(); // "Загружаем все tasks..."

console.log('*********************************')

// extends и super в классах
class Car {
  constructor() {
    console.log("Создаём новый автомобиль");
  }

  someMethod() {
    console.log('Some info')
  }
}

class Porsche extends Car {
  constructor() {
    super();
    console.log("Создаём Porsche");
    super.someMethod()
  }
}

let c = new Porsche();
// Создаём новый автомобиль
// Создаём Porsche

// Объявления классов не поднимаются наверх (not hoisted). Сначала нужно объявить класс и только после этого использовать его, иначе будет ошибка ReferenceError.
// Нет необходимости использовать ключевое слово function во время задания функций внутри определения класса.
