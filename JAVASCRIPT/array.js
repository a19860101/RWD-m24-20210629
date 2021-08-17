// 陣列 Array

// let a = new Array();
// a[0] = 'Apple';
// a[1] = 'Banana';
// a[2] = 'Cat';

// let a = new Array('Apple','Banana','Cat');
let a = ['Apple','Dog','Cat','Banana','Egg'];
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
// console.log(str_array);

// join() 加入 陣列->字串
let a_str = a.join('__');
// console.log(a_str);

// toString() 陣列->字串
// console.log(a.toString());

// sort() 遞增排序
// console.log(a.sort())

// reverse() 反轉陣列
// console.log(a.reverse());
// console.log(a.sort().reverse());

// console.log(str.split('').reverse().join(''));

// forEach()

a.forEach(function(data, idx){
    console.log(idx,data);
})

// map() 對應
let a_map = a.map(function(data){
    return data.length > 3 ? data : null ;
})
console.log(a_map);

//function(){}

// reduce() 
let num = [12,345,43,22,55];
let total = num.reduce(function(a,b){
    console.log('a',a);
    console.log('b',b);
    return a + b;
});
console.log(total);

//filter 過濾篩選
let a_filter = a.filter(function(data){
    return data.length > 3;
});
console.log(a_filter);
let num_filter = num.filter(function(data){
    return data % 2 == 0;
})
console.log(num_filter);

let drinks = ['紅茶','綠茶','奶茶','拿鐵'];
// concat
console.log(a.concat(drinks));
console.log(drinks.concat(a));

console.log([...a,...drinks,'test']);
