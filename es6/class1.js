// var global = 'global var'; //

// function checkScope() {
//     // console.log(global); // global var
//     var local = ' local variable';// function scope
//     // console.log(local);
//     if (true) {
//         // console.log(local);
//         var block = 'block scope';
//         // console.log(block); // accessible
//     }=

//     // console.log(block);

// }
// console.log(local);

// checkScope();

// var x = 3;
// console.log(x); //  

// function update() {
//     x = 5;
//     n = 10;
// }

// update();
// n = 5; // global
// console.log(n); //
// console.log(x); //

// let , const

// var myVar;
// myVar = 'value';
// // console.log(myVar); // value
// myVar = 'my value'
// var myVar = 'jsbjs';




// let canChange;
// canChange = 'initialize canChange';
// console.log(canChange);
// let canChange

// const contantVar = 'my x var';
// console.log(contantVar); //
// contantVar = 'change value';
// console.log(contantVar);

// function abc() {
//     if (true) {
//         let blockScope = 'block scope variable';
//         console.log(blockScope);
//     }
//     console.log(blockScope);
// }

// abc();

// Hoisting

// console.log(a); // undefined
// var a = 2;

// b = 5;
// console.log(b);
// var b;

// c = 5
// console.log(c);

// name();
// function name() {
//     console.log('ruhama')
// }

// template literals 

// let myName = 'Ruhama';
// // let myTemplate = `my name is ${myName}`;
// let myTemplate = `my age is ${10 + 2}`;

// console.log(myTemplate);

// let str = `mera bht 
//           sara text`; // multi line str

// let a = 1;
// let b = 2;

// function sum(a,b) {
//     return a + b;
// }

// console.log(`the sum of ${a} and ${b} = ${sum(a,b)} `);

// var table = `
// <table border='1'>
//   <tr>
//     <td>my table </td>
//   </tr>
// </table>
// `

// document.write(table)


// Recursion

// function doSomething(n) {
//     console.log(`i am doing something ${n}` ); //3 , 2 , 1, 0

//     if(n === 0){
//         console.log('task complete');
//         return ; 
//     }
//     doSomething(n-1); // 1-1
// }

// doSomething(3)


// let descending = [];

// function recursive(n) {

// console.log(n);

//     descending.push(n);
//     if (n > 1) {
//         recursive(n - 1)
//     }

// }
// recursive(5);
// console.log(descending);


// factorial

// 5*4*3*2*1

// function findFactorial(n) {
//     let factorial = 1;

//     if (n === 1) {
//         return 1;
//     }
//     factorial = n * findFactorial(n - 1)
//     return factorial;

// }

// let result = findFactorial(5)
// console.log(result);


/// destructuring

// let arr = [1, 2, 3, 4];
// // const [a, b, c, d = 4] = arr;

// const [a, , , b, c = 4] = arr;
// console.log(b); //


// let obj = {
//     name: 'Ruhama',
//     section: 'A',
//     email: 'abc@gmail.com',
//     locations: {
//         l1: 'peshawar',
//         l2: 'karachi'
//     }
// }

// // const { name, section, age = 10 } = obj;
// const { name, email, age = 10, locations: { l1, l2 } } = obj;

// console.log(l1);


/// rest and spread operators

// function add(a = 1, b = 1) {
//     console.log(a + b); //

// }

// add(2);


// ...

// function myFunc(a, b, ...arg) {
//     // console.log(...arg);
//     const [c,d] = arg
//     console.log(c , d);

// }

// myFunc(1, 2, 3, 4, 5, 6, 7, 8)

// const arr1 = [1, [2, 3], 4, 5];

// const arr2 = [...arr1, 6, 7, 8]; //shallow copy

// arr2[1][1] = 33
// console.log('arr1', arr1);
// console.log('arr2', arr2);

// let obj = {
//     name: 'Hira',
//     age: 10,
//     locations: {
//         l1: 'Karachi',
//         l2: 'peshawar'
//     }
// }

// let obj2 = { ...obj , locations:{...obj.locations} }
// obj.locations.l1 = 'islamabad';

// console.log('obj', obj);
// console.log('obj2', obj2);

/// arrow function

// const add = function () { // function expression
//     console.log('function expression');
// }

// add()



// function add(a, b) { // regular function 
//     console.log('function expression');
// }

// add(1, 2)

// const add2 = (a, b) => {
//     return a + b
// }

// const add2 = a => a + 2

// let result = add2(3)
// console.log(result);


// function subtract() { // regular function 
//     console.log(arguments);
// }

// subtract(1, 2, 3, 4, 5)

// const subtract = (...arg) => console.log(arg);
// subtract(1,2,3,4,5)

// const user = {
//     name: 'user1',
//     email: "user1@gmail.com",
//     greet: () => {
//         console.log(this.name);
//     }
// }

// user.greet();

// function Users(name, age) {
//     this.name = name,
//         this.age = age
// }

// const user1 = new Users('Ruhama', 10);
// console.log(user1);


const Users = (name, age) => {
    this.name = name,
        this.age = age
}

const user1 = new Users('Ruhama', 10);
console.log(user1);