// var perc = +prompt("Enter your percentager");

// if( perc >= 0 && perc <= 100){

//     if (perc >= 80 ) {
//         console.log("Grade : A+");
//     } else if (perc >= 70) {
//         console.log("Grade : A");
//     } else if (perc >= 60) {
//         console.log("Grade : B");
//     } else if (perc >= 50) {
//         console.log("Grade : C");
//     } else if (perc >= 40) {
//         console.log("Grade : D");
//     }
    
//     else {
//         console.log("Fail");
//     }

// }else{
//     console.log("invalid perc")
// }




/// Array 


// var teachers = new Array("Hira", 12);

// var arr = ["Ruhama" , 1001 , true , 10.1 , {} , [] ] ;

//  var students = ["iqra", "ruhama", "hira", "anousha"]; // length: 4 index :3

//   students = [];

//  console.log(students) // []

// console.log(students);
// console.log(students[2]); // hira
// console.log(students[0]); // iqra
// console.log(students[8]); // undefined
// students[4] = "farhat"; // add
// students[1] = "gull"; // update
// console.log(students);


// var arr = [];  //length: 0 , index : 0


// var arr = [];  //length: 0 , index : 0
// arr[0] = "hira";
// arr[1] = "yusma";
// arr[2] = "mirha";
// // arr[1] = "amna";


// arr[5] = "iqra";
// console.log(arr);
 var students = ["iqra", "ruhama", "hira", "anousha"];
// students[5] = "fgdfgdfdf"
students[4] = "dfdfd"
console.log(students); // 4

// var arr = [];

// console.log(arr.length); // 0


// methods

// push // add end
// pop  // remove last
// shift  // remove start
// unshift  // add start
// slice // copy original array
// splice   /// real array

// var students = ["iqra", "ruhama", "hira", "anousha" ];
// students.push("yusma" , "aliza", "mirha"); // add last
// var name = students.pop();  // remove last
// console.log(students);
// console.log(name); // mirha

// var name = students.shift();
// console.log(name); //iqra

// students.unshift("farhat", "maham");

// var students = ["iqra", "ruhama", "hira", "anousha" ];

// slice(stratIndex , endIndex(excluded)) optional;

// var newStud = students.slice( 1 ,  3);  // (1 , 2)
// console.log(newStud); // "ruhama", "hira"

// var newStud = students.slice(1, 2);  // ruhama
// var newStud = students.slice(1);  // "ruhama", "hira", "anousha"
// var newStud = students.slice(5); // []
// var newStud = students.slice(2); // "hira", "anousha" ( -2 -1 0 1 2 3)
// console.log(students);
// console.log(newStud);   


var students = ["iqra", "ruhama", "hira", "anousha" ];

// splice(start, optional deletCount , optional items to add)

