// var global = 'global var'; //

// function checkScope() {
//     // console.log(global); // global var
//     var local = ' local variable';// function scope
//     // console.log(local);
//     if (true) {
//         // console.log(local);
//         var block = 'block scope';
//         // console.log(block); // accessible
//     }

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


