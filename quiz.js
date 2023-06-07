///// 1

/*function val() {
  let name = "Ayesha"
  return () => {
    return name
  }
}

let value = val()

console.log(value());*/


//////// 2

/*function palindrom (str) {

let revStr = str.split(" ").reverse().join("")

if (revStr === str) {

return "palindrome"

}


else {

return "notPalindrome"

}

} 

console.log(palindrom("madam"))*/


/*
1. All elements in an array must be of the same type ?
a) true
b) false

2. JavaScript string using double quotes os exactly the same as a string using single quotes ? 

a)  true
b) false

3. JavaScript variables names should not start with numbers 

a) true
b) false


4. how to write an if statement in JavaScript? 

a) if( num === 5 )
b) if num === 5 then
c) if( num = 5 ) 
d) if num = 5 then

5. what will be the output of the following JavaScript code ?

var arr = ['Ruhama', 'Ayesha', 'Yusma'];
arr.length = 0;
arr.push('gull');
console.log(arr);

a) ['Ruhama', 'Ayesha', 'Yusma']
b) ['Ruhama', 'Ayesha', 'Yusma', 'gull']
c) ['Ruhama', 'Ayesha', 'gull']
d) ['gull']

6. is JavaScript case-sensitive ?

a) yes
b) no

7. How to replace the fourth element in the num = [1,2,3] with the values 6?

a) num[3] = 8;
b) num[4] = 8;
c) num.lastIndexOf() = 8

8.whEn is either or both sides of an operator is/are true  , the test passes , what operator is it ??

a) && 
b) ||
c) >=
d) !=

9. How to declare a JavaScript variable ??

a) var myV@r ;
b) variable myVar ;
c) var myVar;
d) var myVar = 'item';

10. how to reasign a variable a new value ?

a) num = 10;
b) var num = 10;
c) num == 10;

11. how to access the third element of the array arr = [1,2,3,4,5];

a) arr.indexOf(3);
b) arr.indexOf(2);
c) arr[3];
d) arr[2];


*/









///_____
function updateArray(arr) {
  arr[1].fruit = 'b';
  return arr;

}

let obj = { fruit: "a" };
let result = updateArray([obj, obj])
console.log(result);