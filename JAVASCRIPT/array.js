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

console.log(a.length);

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
console.log(a);

// indexOf

// console.log(a.indexOf('egg'))
let s = 'Hello';
console.log(s.indexOf('p'))