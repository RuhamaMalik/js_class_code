

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



/////// strings 

var text = 'I am learning Js';



console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text);

/*The toUpperCase() method converts a string to uppercase letters.It does not change the original string.*/

console.log(text.length + ' length')

console.log(text.slice(5, 13)) // used to extract a part of a string 
console.log(text.slice(5))


// find a word
var txt = `My name is Ruhama Gull and my favourite color is black. My sister's name is Irma Malik.`







// for (var i = 0; i < txt.length; i++) {
//   if (txt.slice(i, i + 4) === 'Gull') {
//     txt = txt.slice(0, i) + 'Malik' + txt.slice(i + 4);
//   }
// }
// console.log(txt);

/*
-The indexOf() method returns the position of the first occurrence of a value in a string.
-The indexOf() method returns -1 if the value is not found.

-The indexOf() method is case sensitive.

 string.indexOf(searchvalue, start)
*/

console.log(txt.indexOf('Malik'));
console.log(txt.lastIndexOf('Malik'));


// doing same work by using methOd 
var firstChar = txt.indexOf("Irma");

if (firstChar !== -1) {
  txt = txt.slice(0, firstChar) + "Narmeen" + txt.slice(firstChar + 4);
}

console.log(txt)



/// finding a character 
// string.charAt(index(optional))

console.log(txt.charAt(0)); //
console.log(txt.charAt()); // 
console.log(txt.charAt(txt.length - 1)); //
console.log(txt.charAt(txt.length - 2)); //


// Replacing characters 

// string.replace(searchValue, newValue);

/*

The replace() method searches a string for a value or a regular expression.

It returns a new string with the value(s) replaced.

It does not change the original string.

If you replace a value, only the first instance will be replaced. To replace all instances, use a regular expression with the g modifier set.*/

console.log(txt.replace('Malik', 'Bano')) //


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

/*
var userNum = +prompt('Enter the Number');
var randomNum = Math.floor(Math.random() * 10);

if(userNum === randomNum){
  alert('you Win!');
}else if(randomNum === userNum+1 || randomNum === userNum-1){
  alert('You were close ' + randomNum );
}else{
    alert('The correct number is ' + randomNum );

}
*/


// var str = '1.99';
// console.log(typeof (str));

// Convert String to Integers 
// ParseInt ---- ParseFloat

var str = '1.99';
console.log(typeof (str));

//syntax ---  parseInt(string, radix);
// parseInt returns only first integer
//Radix/base is the number system we want to convert the string into... optional ... default 10.

var str = '1.99';
str = parseInt(str);
console.log(str + ' ' + typeof (str)); // 
console.log(parseInt('30 40')) //
console.log(parseInt('010')) //
console.log(parseInt('10 years')); //
console.log(parseInt('years 10')); //
console.log(parseInt('1' + 1, 2)) //



var str2 = '1.99';
console.log(typeof (str2)); // string 
str2 = parseFloat(str2);
console.log(str2 + ' ' + typeof (str2)); //1.99
console.log(parseFloat('45 50')); // 45
console.log(parseFloat('1.1')); // 1.1



/*The Number() method converts a value to a number.
If the value cannot be converted, NaN is returned
if empty return 0
*/

var str3 = '3.1';
str3 = Number(str3);
console.log(typeof (str3)); //  
console.log(str3); // 
console.log(Number()); // 


// other data types  to string

var numb = 10;
console.log(numb + 1); // 

numb = numb.toString();
console.log(numb + 1); // 

numb = true;
numb = numb.toString();
console.log(numb.slice(3, 4)); // 


//var convertToStr = undefined.toString();
//console.log (typeof(convertToStr)); // throw error

var convertToStri = undefined + ' ';
console.log(typeof (convertToStri));
console.log(convertToStri.slice(2)) // 

//////////  Date

var date = new Date();

// document.write(date); // date Object shows the date as string but can't use string methods on it like charAt, slice etc

date = date.toString(); //Now we can treat it as a string and extract part of it by slice etc.



