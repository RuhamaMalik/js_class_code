// Assignment Operators 
// += -= *= /= **=
// var num = 5;
//num = num + 1;

// num += 5 ;
// console.log(num); //  0


//eliminating ambiguity

// B O DM AS 
// var expre = 2 + 4 * (4 + 3);  ; //60   ()
var expre = 2 + 4 * ((4 + 3) + 5)  ; //50  ()

// console.log(expre);

// Concatenating text strings  +

// console.log(5 + 5); // 10

console.log("hello" + " " + "world"); // hello world
console.log("5" + 5); // 55
console.log(10 + "5"); // 105
console.log("hello " + 5); // hello 5
console.log("student " + 10 + 5); // student 105
console.log(10 + 8 + 4 + "hello" + 5 + 7); // 22hello57
console.log(10 + 8 + 4 + "hello" + ( 5 + 7)); // 22hello12
console.log("10" + 5); //  105
console.log("10" - 5); //  5
console.log("10" * 5) //  50

// prompts
// prompt(Question , default Ans)
//  var userName = prompt("What is your lucky numbaer?" , "Ruhama");

// console.log("Hello " + userName);

// var num = +prompt("Enter number");

// console.log(num + 10); // NaN (not a number)