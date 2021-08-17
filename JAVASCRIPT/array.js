// 陣列 Array

// let a = new Array();
// a[0] = 'Apple';
// a[1] = 'Banana';
// a[2] = 'Cat';

// let a = new Array('Apple','Banana','Cat');
let a = ['Apple','Banana','Cat','Dog'];

// console.log(a);
// console.log(a[0]);
// console.log(a[1]);
// console.log(a[2]);

// console.log(a.length);

// 陣列迭代
// for(let i=0;i<a.length;i++){
//     console.log(a[i]);
// }

// for(let data of a){
//     console.log(data);
// }

// for(let i in a){
//     console.log(a[i]);
// }

// push(), pop()
a.push('Egg');
a.pop();

// unshift(), shift()
a.unshift('House');
a.shift();
// console.log(a);

// indexOf

// console.log(a.indexOf('egg'))
let s = 'Hello';
// console.log(s.indexOf('p'))

// splice() 拼接

// a.splice(2,2,'Test 1','Test 2');
// a.splice(1,1);
// console.log(a);


// slice() 切片
let a_slice = a.slice(0,2);
// console.log(a_slice);

//split() 分裂 字串->陣列
let str = 'hello world';
let str_array = str.split('');
console.log(str_array);

// join() 加入 陣列->字串
let a_str = a.join('__');
console.log(a_str);

