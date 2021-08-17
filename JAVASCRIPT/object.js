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