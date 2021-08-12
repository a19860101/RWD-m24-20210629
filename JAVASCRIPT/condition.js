// if
let x = 10;
if(x > 0){
    console.log('success');
}

// console.log( x > 0 ? 'success!!':'error!!');
// 條件 ? 成立 : 不成立

console.log( x > 0 ? '正!!': x < 0 ? '負!!':'error!!!');
// 條件 ? 成立 : 條件二 ? 成立 : 不成立 
let result = x > 0 ? '正!!': x < 0 ? '負!!':'error!!!';
console.log(result);

// if...else

if(x >0) {
    console.log('success');
}else {
    console.log('error');
}

// if...else if...else

if(x > 0){
    console.log('正');
}else if(x < 0){
    console.log('負');
}else{
    console.log('error');
}

// switch
switch(x){
    case 0:
        console.log(0);
        break;
    case 10:
        console.log(10);
        break;
    case 100:
        console.log(100);
        break;
    default:
        console.log('ERROR');
}

switch(true){
    case x>0:
        console.log('正數');
        break;
    case x<0:
        console.log('負數');
        break;
    default:
        console.log(0);
}
