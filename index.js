//Task #1

//let user = 'Anna';
//let admin = user;

//console.log(admin);
//document.querySelector('input').addEventListener('change', (event) => {
//    let content = event.target.value;
//document.querySelector('h1').innerHTML = content;

//});
//window.alert(admin);
//alert(admin);

//Task #2
let user1 = 'ivan';
let newStr = user1[0].toUpperCase() + user1.slice(1);

console.log(newStr);

//Task #3

let newStr1 = user1[1].toUpperCase() + user1.slice(1);
console.log(newStr1);

let newStr2 = user1[1].toUpperCase();
console.log(newStr2);

let newStr3 = user1[0].toUpperCase()+ user1.slice(0);
console.log(newStr3);

//Task #4
let a = '';
let b = 'bbb';
let c = false;

let test1 = !b.length === c; // true
console.log(test1);

let test2 = a.length > b.length; // false
console.log(test2);

let test3 = !a.length && !b.length; // false
console.log(test3);

let test4 = a === c; // false
console.log(test4);