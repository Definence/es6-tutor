let getFinalPrice = (price, tax = 0.7) => price + price * tax;
getFinalPrice(500); // 850, так как значение tax не задано

getFinalPrice(500, 0.2); // 600, значение tax по-умолчанию заменяется на 0.2
