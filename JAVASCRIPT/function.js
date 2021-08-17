// 函式陳述式 (提升性)
console.log(test(123));
function test(a){
    return a;
}


// 函式表達式

let test2 = function(a){
    return a;
}
console.log(test2(999));


function square(w,h){
    return w * h;

}

let x = square(100,800);
console.log(x)

function us(price,exchange){
    return price * exchange;
}
 console.log(us(100,28));

// 箭頭函式
// let a = function(){
//     return 100;
// }

// let a = () => {
//     return 100;
// }

// let a = x => {
//     return x;
// }

// let a = (x,y) => {
//     return x * y;
// }

// let a = () => 100;
// let a = x => x;
let a = (x,y) => x * y;

console.log(a(123,3221));

let drinks = [
    {
        id:1,
        name: '紅茶',
        price: '20'
    },
    {
        id:2,
        name: '綠茶',
        price: '20'
    },
    {
        id:3,
        name: '奶茶',
        price: '30'
    }
];

let drinks_name = drinks.map( data => data.name );
console.log(drinks_name);

let drinks_price = drinks.map( data => data.price);
console.log(drinks_price);

let total = drinks.map( data => data.price).reduce((a,b) => Number(a) + Number(b));
console.log(total);
