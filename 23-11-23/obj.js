// Objects

// In JavaScript, an object is a complex data type that allows you to store and organize data
// in a structured way. Objects consist of key-value pairs, Objects provide a way to represent real-world entities
// and their properties.
// JavaScript objects are versatile and widely used in the language. They provide a way
// to model and organize data, and they play a crucial role in many aspects of web development,
// including handling JSON data, interacting with the Document Object Model (DOM),
// and creating object-oriented designs in JavaScript programs.
// Understanding objects is fundamental to becoming proficient in JavaScript.

// -Each value is associated with a unique key, which serves as an identifier
//    or label for that value.
// -  The value can be of any data type.
// - Storing Information with Descriptive Keys.
// - Grouping Related Data,,, Properties can represent different aspects of the same entity.
// - Objects allow you to handle dynamic properties where the keys or values can change during the program's execution.

// In real life, a car is an object.
// A car has properties like weight and color, and methods like start and stop.

// All cars have the same properties, but the property values differ from car to car.

// All cars have the same methods, but the methods are performed at different times.

//SYNTAX

// var obj = {
//     key : value,
//     propertyName : propertyValue
// }
// console.log(obj);

// var user1 = {
//   name: "ruhama",
//   myAge: 10,
//   hobbies: ["gardening", "coding", "riding"],
//   address: {
//     street: "Line 1",
//     zipCode: 1234,
//     city: "karachi",
//   },
// };

// var user2 = {
//   'name': "hira",
//   myAge: 10,
//   hobbies: ["gardening", "coding", "riding"],
// };
// console.log( user2 );

// dot notation
// console.log(user2.hobbies[1]);
// console.log(user1.name , user1.address.zipCode );
// console.log(user1.hobbies[1]);

// bracket notation
// console.log(user1['address']['street']);
// console.log(user1['hobbies']);

// var propName = 'username';
// var propVal = 'RuhamaGull';

// var user = {
//  [propName + 's']  : propVal,
//  'my age' : 10,
// }

// console.log(user['my age']);

// var user1 = {
//   name: "ruhama",
//   myAge: 10,
//   hobbies: ["gardening", "coding", "riding"],
//   address: {
//     street: "Line 1",
//     zipCode: 1234,
//     city: "karachi",
//   },
// };

// var user2 = {
//   'name': "hira",
//   myAge: 10,
//   hobbies: ["gardening", "coding", "riding"],
// };

// user2.class = 1;//add prop

// var users = [user1, user2];
// console.log(user2); 

// user2.myAge = 20; // override
// console.log(user2); 

var btn = document.getElementById('btn');
var div = document.getElementById('container');

var isVisible = false;

function visible(){
  if(!isVisible){
    div.style.display = 'block'
    isVisible = true
    }else{
      
    div.style.display = 'none'
    isVisible = false;
    
    }
    
}
// IN DELETE

// delete user2.myAge;
// console.log(user2);

// console.log( 'hobbies' in user2);









