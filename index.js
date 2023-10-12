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


