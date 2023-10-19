/*
In JavaScript, a function is a reusable block of code that performs a specific task or set of tasks.
 Functions are a fundamental concept in programming, and they enable you to write organized, modular,
  and efficient code.
  Functions are used to structure and organize code into manageable, reusable pieces. 
  They are crucial for creating dynamic and interactive web applications and are used extensively for 
  various programming tasks, including event handling, data manipulation, and more.*/

// key points about functions :
//Function Declaration

// function functionName(){
//   console.log("Hello world!");
// }

//Function Invocation// call

//  functionName();
//  functionName();
//  functionName();
//  functionName();
//  functionName();

// Arguments And Parameters

//   function sum(){
//     var a = 3;
//     var b = 2;
//    console.log(a+b);
// }

// sum()
//////////////////////////////////
// var num1 = +prompt("m cmdm md");
// var num2 = +prompt("m cmdm md");
//  function sum(a, b){ //para
//        console.log(a + b); //7
//     }

    // sum(num1 , num2); //arguments
    // sum(10 , 'abc'); 
    // sum(5 , 5); 

/////////////////////////////
// function sum(a , b){
//    a+b//  undefined 
//  }

//  var result =  sum(3,1);
//  console.log(result);

//Default Parameters:
// flexible and preventing errors when arguments are missing.

// function greet(name = "Guest") {
//   console.log("Hello " + name);
// }

// greet("Ruhama");
// greet("Hira");
// greet();
// greet();
// greet();
////////////////////////////////////
//Example

// function makeWithdrawal(currentBalance, withdrawalAmount) {
//   if (withdrawalAmount <= currentBalance) {
//     var remainingBalance = currentBalance -=  withdrawalAmount ;
//     console.log(
//       "Withdrawal successful. Remaining balance: " + remainingBalance
//     );
//     userBalance = remainingBalance;
//   } else {
//     console.log("Insufficient funds. Withdrawal failed.");
//   }
// }

// var userBalance = 10000;
// makeWithdrawal(userBalance, 3000);
// makeWithdrawal(userBalance, 4000);
// makeWithdrawal(userBalance, 4000);

// Function Return:
/* 
       When a function returns a value, it can be assigned to a variable, used in expressions,
       or passed as an argument to another function.
       - Use return values when you want a function to perform some computation and provide a result
         that can be used elsewhere in your code.
       - When a return statement is called in a function, the execution of this function is stopped. 
         If specified, a given value is returned to the function caller. If the expression is omitted,
         undefined is returned instead.
       - The return statement stops the execution of a function and returns a value.
       - Never return something on a new line without using parentheses.Try to always use parentheses when returning something on multiple lines.*/

// function square(num) {
//   var sq = num * num;
//   return  sq;
// }
// var result =  square(4);
// console.log(result)

// Function Scope
// - Local Scope  - Variable Shadowing   - Access to Outer Scope

// function myFunction( ) {  // - Local Scope
//   var num = 2;
//   // console.log(num);
// }

// console.log(num);
// myFunction();

// function myFunction(a = 5) {
//   a = a + 1;
//   console.log(a);
// }
// myFunction();

// console.log(a);
/* Variable Shadowing
    -  When a variable declared within a function has the same name as a variable in an outer scope,
     the inner variable "shadows" the outer one. This means that the inner variable takes precedence 
     within the function's scope.
     - In this situation, coders say the global variable is in the shadow of the local
       variable. Inside the function, it can't be seen. Inside the function, only the local variable of that
       name can be seen.
*/

// var num = 2; // global var
// function myFunction() {
//   var num = 5; // local var
//   console.log('inner ' + num); //5
// }
// myFunction();

// console.log('outer ' +num); //2
// fkmfmf
/* */



// students
var a = 40; 

function add () {
  var a = 90;
  console.log(a); //90 local var 
}

console.log(a); //40 global

add();


