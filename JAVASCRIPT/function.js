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