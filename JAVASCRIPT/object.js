let user = new Object();
user.id = 1;
user.name = 'Mary';
user.age = '18';

let user2 = {
    id: 1,
    name: 'John',
    age: '18'
}


// console.log(user,user2);
// console.log(user2.name);
// console.log(user.name);

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
// console.log(drinks[1].name);
for(let drink of drinks){
    console.log(drink.name);
}
drinks.forEach(function(drink){
    console.log(drink.name);
})

let drinks_name = drinks.map(function(data){
    return data.name;
})
console.log(drinks_name);
let drinks_price = drinks.map(function(data){
    return data.price;
})
console.log(drinks_price);
let total = drinks_price.reduce(function(a,b){
    // return Number(a)+Number(b);
    return parseInt(a)+parseInt(b);
})
console.log(total);

let s = drinks.filter(function(data){
    return data.price == 30;
})
console.log(s);