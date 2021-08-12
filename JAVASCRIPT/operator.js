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

// 字串運算子
let s1 = 'hello';
let s2 = 'John';
console.log(s1 +' '+ s2);
console.log('您是第' + x + '位訪客');
console.log(a + b);
//字串樣板
console.log(`${s1} ${s2}`);
console.log(`您是第${x}位訪客`);


// 三元運算子 (判斷式)

// 分散運算子 spread operator