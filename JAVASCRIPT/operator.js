// 運算子

let x = 10;
let y = -6;

let a = 10;
let b = '10';

// 算術運算子
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);

// 比較運算子
console.log(x > y);
console.log(x < y);
console.log(x >= y);
console.log(x <= y);
console.log(x == y);
console.log(x === y);//值與資料型態皆須相同
console.log(a == b);
console.log(a === b);
console.log(x != y);

// 指定運算子
console.log(x += y); //x = x + y
console.log(x -= y); //x = x - y
console.log(x *= y); //x = x * y
console.log(x /= y); //x = x / y
console.log(x %= y); //x = x % y

// 邏輯運算子 &&,||,!(AND,OR,NOT)

console.log(x > 0 && y > 0);
console.log(x > 0 || y > 0);
console.log(!x);

let s = 0;
console.log(!s);