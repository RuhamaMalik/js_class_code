// chApter #1 Alert

/*
An alert is a box that pops up to give the user a message.
set a message. Here's the code for an alert that
displays the message "Thanks for your input!"

alert('Thanks for your input!');

alert is a keyword


*/



// chApter # 2 variable for string

/*
1. Variables are containers for storing data values.
2. Variables are used to store information to be referenced 
and manipulated in a computer program
3. Variable is a term that refers to a particular value
4. A variable changes over time or based on user input.
5. A variable is assigned a value in one place and then used repetitively 
*/

// var name cannot be enclosed in ''

// we can reassign the value
//var name = 'Ruhma';
//name = 'Ruhama';

//var status = 'active';
//status = 'non-actuve'


// var can store any data type 

//var nationality = "Paki's'tani";
//var age = 25;
//var isFeePaid = true;
//var weight = 60.55;

//Declaration and Initialization 

//1. You can declare and initialize in a single line or you can do that in two line

//var age = 25; //OR
//var age; //-- Declaration
//age = 25; //-- Initialization

//Only declaration will leave variable undefined

//Make var name meaningful

//var x = 10
//var age = 10 //age is better than x

/////////

//var message = 'Learning JavaScript';

//alert(message);



//// var for numbers

var number = 10;
//number + 5;
var newNumber = number + 5;

////

var num1 = 13;
var num2 = 2;
var total = num1 + num2;


////   

var quantity = '15';
var newQty = quantity + 3; // not add will cover in subsequent chapter





console.log(marks, 25, 'multiple');//can show multiple values with comma separated 


/*
In JavaScript, a statement is a complete line of code that performs a specific action. Statements are used to control the flow of code, make decisions, and execute tasks. Some common types of statements in JavaScript include:

Declaration statements: Used to create variables, functions, classes, and other objects in the code.

Expression statements

Conditional statements

Loop statements

Statements are the building blocks of JavaScript code, and they work together to create functional programs. 


*/

//end statements with semicolon

/*
1. Semicolons separate JavaScript statements.
var a = 4;
2. When separated by semicolons, multiple statements on one line are allowed

*/

var i = 3; j = 5; k = i + j;
alert(i); console.log(k);

//End of Statement without semicolon ;

/*
1. Typically we end statements with a semicolon in JavaScript
semicolon is optional, but is highly recommended to end with a semicolon.
2. The end of a statement is most often marked by pressing enter and starting a new line.
*/

var a = 5 // New line will end statement 
a * 4
alert(a)
console.log(a)

//var a = 5 a * 4 // Error, Will Not work
//alert(a) console.log(a) // Error, Will not work


/*
In JavaScript, an expression is a combination of values, variables, operators, and/or functions that are evaluated to produce a single value. An expression can be as simple as a single value or variable, or as complex as a combination of multiple operators and functions.

example:
    5 + 10
   "Hello" + " world!"
    x * y
   Math.floor(4.8)


use:
  Expressions are used throughout JavaScript code to perform calculations, manipulate data, and control program flow. They can be used in assignments, conditional statements, loops, and function calls, among other things.
*/





/*
familiar operators

+  _ / *  all familiar

% is the modulus operator.

*/

var exp1 = 2 + 2;
var exp2 = 5 - 3;
var exp3 = 10 * 3;
var exp4 = 9 / 3;
var exp5 = 5 ** 3 //exponent

console.log(exp1);
console.log(exp2);
console.log(exp3);
console.log("exp4 " + exp4);
console.log(exp5);

//console.log(exp1, exp2, exp3, exp4);

//////

var marks = 85;
alert(marks); // js automatically convert it into string

//////////// example  

var a = 5;
var b = 3;
var c = a + b; // Addition, result 8
var d = a - b; // Subtraction, result 2
var e = a * b; // Multiplication, result 15
var f = a / b; // Division, result 1.66
var g = a % b; // Modulus, result 2
var h = a ** b; // Exponentiation,result 125




var modNum = 10 % 3;

console.log(modNum);

/*

Math expressions:  Unfamiliar operators

*/

var num = 1;
// num = num + 1;
// console.log(num);
// ++num; 
num++;
console.log("original " + num); //2

/*
 what is the difference between prefix and postfix 
 You will NOT find any difference if you will not assign result 
of prefix and postfix to any other variable
3. Prefix operator first increase/decrease the value in variable and then assign result to other variable
4. Postfix operator first assign the value in other value then 
increase/decrease value in actual variable
 */

////////////// pre-increment 
var preInc = 1;
var newNum = ++preInc;


console.log("preInc" + preInc); //2
console.log(newNum); //2

////////////// post increment  

var postInc = 1;
var newNum2 = postInc++;

console.log("postInc  " + postInc); //2
console.log(newNum2); //1


////////////// pre decrement

var num = 1;
var preDec = --num;
console.log("preDec " + preDec); //0
console.log(num); //0


////////////// post decrement

var num = 1;
var postDec = num--;
console.log("postDec " + postDec); //1
console.log(num); //0


//////////////////
//Example 1
var a = 4;
var b = 2;
var c = a++ - b; //First the value of a will be assigned here which is 4 then increase to 1 so  a will become 5
console.log(a); // 5
console.log(b); // 2
console.log(c);

//Example 2
var a = 4;
var b = 2;
var c = ++a + b; // First the value of a will be increased so a will be 5 then the value of a will be kept here, 5
console.log(a); // 5
console.log(b); // 2
console.log(c); // 7

//Example 3
var a = 4;
var b = 3;
var c = a++ + --b - --a;
console.log(a); // 4
console.log(b); // 2
console.log(c); //2

//Example 4

/*Assignment Operators
1. The assignment operator assigns values to variables
2. When you need to apply arithmetic operations and assign
value to the same variable then you can also use them

jab hame kisi var ki value k saAth koi arithmetic operation perform kaRna ho or ooska jo result ho oOse ooshi var mAi store karna ho tab ham inhy use karte hen.


*/
var a = 5; // equals = is assignment operator
a = a + 2; // Assign 7 in variable a
//OR
var a = 5;
a += 2; // Assign 7 in variable a



//Example Same as
a += 5; a = a + 5;
a -= 5; a = a - 5;
a *= 5; a = a * 5;
a /= 5; a = a / 5;
a %= 5; a = a % 5;
a **= 5; a = a ** 5;

///////////// eliminating  ambiguity book
/*
B Brackets first
O Orders(i.e.Powers and Square Roots, etc.)
DM Division and Multiplication(left - to - right)
AS Addition and Subtraction(left - to - right)
*/
var i = 5 + 2 * 3 - 2 / 2; //10
console.log("i is" + i);


var a = 5 + 2 * (3 - 2) / 2; // result 6


//////// Concatenating text strings

var sum = 2 + 2;  //4 addition 

//1. The + operator can also be used for concatenating strings E.g:

var firstName = "Anousha";
var lastName = "Asadullah";

var fullName = firstName + lastName;

// create space b/w strings

fullName = firstName + " " + lastName;
console.log(fullName);

console.log('my name is ' + fullName);
console.log('my name is         ' + fullName); // js noly count space in text string


//Adding two numbers will return the sum, but adding a number and a string will return a string:

var a = "6" + 2; // "62"
var b = 3 + "6"; // "36"
var c = "Hello " + 2; // "Hello 2"
var d = 2 + "Hello "; // "2 Hello"
var e = "Hello " + 3 + 4; // "Hello 34"
var f = 3 + 4 + "Hello "; // "7Hello"
var g = "Hello " + (3 + 4); // "Hello 7"



///////// prompt 

/*
In JavaScript, prompt() is a function that displays a dialog box containing a message for the user and an input field for the user to enter text. It returns a string value that contains the text entered by the user or null if the user cancels the dialog.
*/
var question = "What is your age?";
var age = prompt(question);
console.log(age)
// syntax : prompt(question, default answer);


//////////////////////////////////////////
var a = 4;
var b = 3;
var c = ++a + b++ - a + --b;
console.log(a); // 5
console.log(b); // 3
console.log(c); // 6


// comparison operators
//if ,else  ,else if
// logical operators


/*
Comparison operators in JavaScript are used to compare two values and return a boolean value (true or false) based on the comparison. 

These comparison operators are often used in conditional statements (such as if statements) to control the flow of a program based on the outcome of the comparison.
*/

console.log(5 == 5); // true
console.log(5 == '5'); // true
console.log(5 === 5); // true
console.log(5 === '5'); // false
console.log(6 > 5); // true
console.log(6 < 5); // false
console.log(5 >= 5); // true 
console.log(4 >= 5); // false
console.log(5 <= 5); // true
console.log(5 != 5); // false
console.log(5 !== '5'); // true

// if else
/*The if-else statement is used to execute a block of code if a specified condition is true, and another block of code if the condition is false.
 */

var city = prompt('what is the capital of Pakistan?');
var correctAns = 'islamabad';
var score = 0;
if (city === correctAns) {
  document.write('Correct!');
}

// If the condition tested false, nothing happened
else {
  document.write('wrong answer');
}

// When a condition is met, you can have any number of statements execute.

var city = prompt('what is the capital of Pakistan?');
var correctAns = 'islamabad';
var score = 0;
if (city === correctAns) {
  document.write('Correct!');
  score++;
  document.write('your scrore : ' + score);
}
else {
  document.write('wrong answer');
  document.write('your scrore : ' + score);
}


// even odd 

var num = +prompt('promotEnter number!');

if (num % 2 === 0) {
  document.write('number is even');
} else {
  document.write('number is odd ');

}

// else if

var numb = 3;
if (numb < 5) {
  document.write('less than 5');
} else if (numb > 5) {
  document.write('greater than 5');
} else {
  document.write('</br> equal to 5');
}


// logical operator  && ||

/*
Logical operators are used to combine multiple conditions and evaluate them as a single true or false value.
*/
let x = 10;
if (x > 5 && x < 15) {
  console.log("x is between 5 and 15");
} else {
  console.log("x is not between 5 and 15");
}


////

var numberr = +prompt('number?');

if (numberr % 2 === 0 && numberr % 4 === 0) {
  document.write('Both 2 and 4');
} else if (numberr % 2 === 0) {
  document.write('only 2');
} else if (numberr % 4 === 0) {
  document.write('only 4');
}


console.log(true && true); // true
console.log(true && false); //false
console.log(false && false);// false

// 0  '' undefined null consider false value

/*Following values will be converted to true
a. {} // Object
b.“AnyText” // String with any text
c.1 // Any number other than zero
*/

if (0) { console.log(true); } // false
if (1) { console.log(true); } // true
if ('') { console.log(true); } // false
if ('chalega') { console.log(true); } // true
if (undefined) { console.log(true); } // false
if (null) { console.log(true); } // false

console.log(undefined && false);// undef
// && || operator mai final answer jo values hamne oose di hen oosh8 k behalf mai banta hai agar hamne oosko value true or false mai di hy tw ooska final ans true ya false hi hoga agar isko value hamne kuch or di hen tw final ans wahi hOga. wo sirf ooska behaviour check karega k konsa  wala true hai konsa wala false hai aAgy padhna ya nahi padhna.
console.log(true && false);// false 
console.log(true && undefined);// undef
console.log(undefined && undefined);// pehla wala


//// || operator 

console.log('undefined' || 'true');// undef
console.log(null || 'true');// true
console.log(null || undefined);// undef

// ab aap sake liye aik sawaAl 
//exercise

/*
null && true || false
null &&true || false && true
null && true || true && true
(null && true) || (true && 1)

*/










var input = "M";
if (input == "A" || input == "E" || input == "I" ||
  input == "O" || input == "U" || input == "a" || input == "e" || input == "i" ||
  input == "o" || input == "u") {
  console.log("It's a Vowel");
}
else {
  console.log("It's a consonants");
}





////__




///////


/*var perc = +prompt('Type your percentage');

if(perc >= 0 && perc <= 100){
  
  if (perc >= 80) {
    console.log('Grade A+');
  } else if (perc >= 70) {
    console.log('Grade A');
  } else if (perc >= 60) {
    console.log('Grade B');
  } else if (perc >= 50) {
    console.log('Grade C');
  } else if (perc >= 40) {
    console.log('Grade D');
  } else {
    console.log('Fail')
  }
  
  
}else{
  console.log('invalid input');
}
*/



/*


 

 
In JavaScript, the if-else statement and logical operators are used for decision-making 

*/








//document.write('<table border = "1"><tr><th>Name : </th> <th>rollNo : </th> </tr> <tr><td> Ruhama </td> <td> 1001 </td> </tr></table>');

// Array 

var foods = ["Pizza", "Burger", "Snacks"];

//console.log(foods[foods.length-1]);

// access nested array
// var arr =[['a', 'b', 'c'],[1,2,3], ['x', 'y', 'z']]

//The slice() method can be used to create a copy of an array or return a portion of an array. It is important to note that the slice() method does not alter the original array but instead creates a shallow copy.

/// Shallow and Deep Copy
// // var foods = ["Pizza", "Burger", "Snacks", ["nested"]];
// //var foods2 = foods;
// //console.log( "foods ---- " + foods);
// //console.log("foods2 ---- " + foods2);

// Shallow copy: means that only the first level of the object is copied.
//A shallow copy means that certain (sub-)values are still  origconnected to theinal variable

// var foods = ["Pizza", "Burger", "Snacks"];
// var foods2 = foods; // direct refrence
// foods[1] = "Coldrink";
// console.log( "foods ---- " + foods);  // change
// console.log("foods2 ---- " + foods2); // change

// var foods = ["Pizza", "Burger", "Snacks"];
// var foods2 = foods.slice();
// foods[1] = "Coldrink";
// console.log( "foods ---- " + foods); // change
// console.log("foods2 ---- " + foods2); // not change

// var foods = ["Pizza", "Burger", "Snacks", ["nested"]];
// var foods2 = foods.slice(); // direct refrence
// foods[3][0] = "nested array";
// console.log( "foods ---- " + foods);  // change
// console.log("foods2 ---- " + foods2); // change // copy first level

// Deep copy: means that all levels of the object are copied. This is a true copy of the object.
// A deep copy means that all of the values of the new variable are copied . and disconnected from the original variable
/*A deep copy of an array creates a completely independent copy of the original array and all the objects
 or arrays inside it. Modifying the deep copy does not affect the original array or its nested data structures.
Deep copies are not natively supported in JavaScript, so you often need to use custom functions or libraries
like Lodash to perform deep copying. */

/*Shallow copying is useful when you want to duplicate an array with a simple structure
 (like an array of strings or numbers) and don't need deep copies of its elements. If you
  were working with more complex objects or nested arrays, you might need to consider deep
  copying to ensure that changes in the original do not affect the copy. */


// syntax

//slice(optional start parameter, optional end parameter excluded)
//const cities = ["Tokyo", "Cairo", "Los Angeles", "Paris", "Seattle"];


// const newCityArr = cities.slice(2); // start index
// const newCityArr = cities.slice(-2);
// const newCityArr = cities.slice(5); 

// const newCityArr = cities.slice(2,4); 


//console.log(newCityArr);


//Topics:

// splice and nested array
//Loop
// for , while , do while
// examples
// print counting , table , found city , even or odd


// splice(start, optional delete count, optional items to add)


//var i = 1; // method 2 for intialization
/*for(var i = 1 ; i <= 3; i++){
  console.log(i + ' mugs');

}

console.log('drum is full')

*/

// while loop

// initialization is not the part of while loop

/*var i =1;
while(i<= 3){
  console.log(i + ' mugs');
  i++;
}
*/

// do while

// // initialization is also not the part of while loop

/*var i = 1;
do{
  console.log(i + ' mugs');
  i++;
}
while(i<= 3) */

// examples

// check city

/*var cities = ['karachi','peshawar','quetta', 'lahore'];

var cleanOne  = prompt('enter city');

//2

// A flag is a logical concept, in js.

var found=false;
for(var i =0; i<cities.length; i++){
  if(cleanOne === cities[i]){
    alert('found');
    found = true
    break; //1
  }

  //else{
    //alert('no match found')
  //}
}

if(!found){
  alert('no match found')
}
*/

////////////////////////////

/* var names = ['Ruhama', 'Irma', 'Yusma', 'Hira];

var abilities = ['MERN STACK developer', 'devOps Engineer', 'Block chAin expert'];

for (var i = 0; i < names.length; i++) {

  document.write('<h1> ' + names[i] + ' </h1>' + '<br>');
  for (var j = 0; j < abilities.length; j++) {

    document.write(abilities[j] + '<br>');


  }

}
*/

////_ first and last name

/*var fName = ['Ruhama', 'Shah' , 'Haider', 'Yusma'];

var lName = ['Gull' , 'Fahad', 'Ali', 'Shah'];

var fullName = [];

var i , j;
for(i=0; i<fName.length; i++){
  for(j=0; j<lName.length; j++){
    // document.write(fName[i] + ' ' + lName[j] + '<br>'); // book example
    
    if(i  == j){
      document.write(fName[i] + ' ' + lName[j] + '<br>');
      
      fullName.push(fName[i] + ' ' + lName[j])
    }
  }
}

document.write('<br>' + fullName);  */


// access nested array

/*
var arr =[['a', 'b', 'c'],[1,2,3], ['x', 'y', 'z']]

for(var i=0; i<arr.length; i++){
  for(var j=0; j<arr[i].length; j++){
    document.write(arr[i][j] + '<br>');
  }
}
*/


// print Counting


/*for(var i=1; i<=100; i += 10){
  // document.write(i + '<br>');
  
  for(var j=i; j< i+10;  j++){
    document.write(j + ' ');
  }
  
  document.write('<br>');
} */


///////////////////////////// Start Class After vacations


// for(initialization ; condition; updation){

// }



// var i = 1; // method 2 for intialization
// for(var i = 1; i <= 3; i++){

//   console.log(i + ' mugs');  // 1 mugs // 2 mugs  // 3 mugs

// }

// console.log('drum is full')



// while loop

// initialization is not the part of while loop

// var i =1;
// while(i<= 3){
//   console.log(i + ' mugs');
//   i++;

// }


// do while

// // initialization is also not the part of do  while loop

// var i = 1;
// do{
//   console.log(i + ' mugs');
//   i++;
// }
// while(i<= 3) 


// examples

// check city

/*var cities = ['karachi','peshawar','quetta', 'lahore'];

var cleanOne  = prompt('enter city');

//2

// A flag is a logical concept, in js.

var found=false;
for(var i =0; i<cities.length; i++){
  if(cleanOne === cities[i]){
    alert('found');
    found = true
    break; //1
  }

  //else{
    //alert('no match found')
  //}
}

if(!found){
  alert('no match found')
}
*/

///////////////////////////////
/*The continue statement breaks one iteration (in the loop) if a specified condition occurs, 
and continues with the next iteration in the loop. The difference between continue and the break statement, 
is instead of "jumping out" of a loop, the continue statement "jumps over" one iteration in the loop. */


var arr = [];
for (var i = 1; i < 6; i++) {
  if (i === 3) {

    continue;
  }
  arr.push(i);
}

console.log(arr)


////////////////////////////

var names = ['Ruhama', 'Irma', 'Yusma', 'Hira'];
var skills = ['MERN STACK developer', 'devOps Engineer', 'Block chAin expert'];


for (var i = 0; i < names.length; i++) {

  document.write('<h1> ' + names[i] + ' </h1>' + '<br>');
  for (var j = 0; j < skills.length; j++) {

    document.write(skills[j] + '<br>');


  }

}


////_ first and last name
// var fName = ['Ruhama', 'Shah' , 'Haider', 'Yusma'];
// var lName = ['Gull' , 'Fahad', 'Ali', 'Shah'];
// var fullName = [];

// for(var i=0; i<fName.length; i++){
//   // document.write(fName[i] + '</br>');
//  for(var j=0; j<lName.length; j++){
//   // document.write(lName[j] + '</br>');
//   if(i===j){
// fullName.push(fName[i]+ ' ' + lName[j])
//     document.write(fName[i] + lName[j] + '</br>');
//   }
//  }
// }
// document.write(fullName)


/*var fName = ['Ruhama', 'Shah' , 'Haider', 'Yusma'];

var lName = ['Gull' , 'Fahad', 'Ali', 'Shah'];

var fullName = [];

var i , j;
for(i=0; i<fName.length; i++){
  for(j=0; j<lName.length; j++){
    // document.write(fName[i] + ' ' + lName[j] + '<br>'); // book example
    
    if(i  == j){
      document.write(fName[i] + ' ' + lName[j] + '<br>');
      
      fullName.push(fName[i] + ' ' + lName[j])
    }
  }
}

document.write('<br>' + fullName);  */


// access nested array

/*
var arr =[['a', 'b', 'c'],[1,2,3], ['x', 'y', 'z']]

for(var i=0; i<arr.length; i++){
  for(var j=0; j<arr[i].length; j++){
    document.write(arr[i][j] + '<br>');
  }
}
*/


// print Counting


/*for(var i=1; i<=100; i += 10){
  // document.write(i + '<br>');
  
  for(var j=i; j< i+10;  j++){
    document.write(j + ' ');
  }
  
  document.write('<br>');
} */



/////// strings 

var text = 'I am learning Js';



console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text);

/*The toUpperCase() method converts a string to uppercase letters.It does not change the original string.*/

console.log(text.length + ' length')

console.log(text.slice(5, 13)) // used to extract a part of a string 
console.log(text.slice(5)) // end tak exrract kar lega


// find a word
var txt = `My name is Ruhama Gull and my favourite color is black. My sister's name is Irma Malik.`

for (var i = 0; i < txt.length; i++) {
  if (txt.slice(i, i + 4) === 'Gull') {
    txt = txt.slice(0, i) + 'Malik' + txt.slice(i + 4);
  }
}
console.log(txt);

/*
-The indexOf() method returns the position of the first occurrence of a value in a string.
-The indexOf() method returns -1 if the value is not found.

-The indexOf() method is case sensitive.

 string.indexOf(searchvalue, start)
*/

console.log(txt.indexOf('Malik')); //18
console.log(txt.lastIndexOf('Malik')); //81


// doing same work by using methOd 
var firstChar = txt.indexOf("Irma");

if (firstChar !== -1) {
  txt = txt.slice(0, firstChar) + "Narmeen" + txt.slice(firstChar + 4);
}

console.log(txt)



/// finding a character 
// string.charAt(index(optional))

console.log(txt.charAt(0)); //M
console.log(txt.charAt()); //M because default index is 0
console.log(txt.charAt(txt.length - 1)); // .
console.log(txt.charAt(txt.length - 2)); // k


// Replacing characters 

// string.replace(searchValue, newValue);

/*

The replace() method searches a string for a value or a regular expression.

It returns a new string with the value(s) replaced.

It does not change the original string.

If you replace a value, only the first instance will be replaced. To replace all instances, use a regular expression with the g modifier set.*/

console.log(txt.replace('Malik', 'Bano')) // only first instance will replace 

console.log(txt.replace(/Malik/g, 'Bano')) // change all matches

console.log(txt.replace(/malik/g, 'Bano')) // not change beacause js is case sensitive 
console.log(txt.replace(/malik/gi, 'Bano')) // now it changes all matches

/////////// 12-Oct-2023  (Thursday)

//////////// Rounding Numbers

//The Math.round() method rounds a number to the nearest integer.
console.log(Math.round('2.6')) //
console.log(Math.round(2.5)) //
console.log(Math.round(2.4)) //
console.log(Math.round(-2.6)) // 

console.log(Math.ceil(1.9)) //
console.log(Math.ceil(1.5)) //
console.log(Math.ceil(1.1)) // 

console.log(Math.floor(1.9)) //
console.log(Math.floor(1.1)) //
console.log(Math.floor(1.5)) //


///////////_ Random Numbers


//The Math.random() method returns a random number from 0 (inclusive) up to but not including 1 (exclusive).

console.log(Math.random()); // generate random number in decimal 
console.log(Math.random() * 10);
console.log(Math.floor(Math.random() * 10));
console.log(Math.floor(Math.random() * 100));




// guess Game
// var userNum = +prompt('Enter the Number');
// var randomNum = Math.floor(Math.random() * 5) ;

// if(userNum === randomNum){
//   alert('Congratulations!');
// }else if(userNum === randomNum+1 || userNum === randomNum-1){
//   alert('sooOoo close ' + randomNum);
// }else{
//   alert('Bhago yaha sE ' + randomNum)
// }








// var userNum = +prompt('Enter the Number');
// var randomNum = Math.floor(Math.random() * 10);

// if(userNum === randomNum){
//   alert('you Win!');
// }else if(randomNum === userNum+1 || randomNum === userNum-1){
//   alert('You were close ' + randomNum );
// }else{
//     alert('The correct number is ' + randomNum );

// }


// Toss  ?

// var str = '1.99';
// console.log(typeof (str));

// Convert String to Integers 
// ParseInt ---- ParseFloat

// var str = '1.99';
// document.write(typeof(str));

//syntax ---  parseInt(string, radix);
// parseInt returns only first integer
//Radix/base is the number system we want to convert the string into... optional ... default 10.

var str = '1.99';
str = parseInt(str);
// document.write(str + ' ' + typeof (str)); // 
console.log(parseInt('30 40')) //
console.log(parseInt('010')) //
console.log(parseInt('10 years')); //
console.log(parseInt('years 10')); //
console.log(parseInt('1' + 1 , 2)) //



var str2 = '1.99 sbhsbhsb';
console.log(typeof (str2)); // string 
str2 = parseFloat(str2);
document.write(str2 + ' ' + typeof (str2)); //
console.log(parseFloat('45 50')); //  45
console.log(parseFloat('1.1')); // 1.1



/*The Number() method converts a value to a number.
If the value cannot be converted, NaN is returned
if empty return 0
*/

var str3 = '3.1';
str3 = Number(str3); // 3.1
console.log(typeof (str3)); // number 
console.log(str3); //  3.1
console.log(Number()); //  0


// other data types  to string

var numb = 10;
console.log(numb + 1); //   11 

numb = numb.toString();
console.log(numb + 1); //  101

numb = true;
numb = numb.toString();
console.log(numb.slice(3, 4)); // e


// var convertToStr = undefined.toString();
// console.log (typeof(convertToStr)); // 

var convertToStri = undefined + ' ';
console.log(typeof (convertToStri));
console.log(convertToStri.slice(2)) //  defined 


var random = Math.random();
console.log(random);
