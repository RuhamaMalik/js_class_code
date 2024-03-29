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


// IN DELETE

// delete user2.hobbies;
// console.log(user2);

// console.log( 'hobbies' in user2);










//  METHODS
//  In JavaScript, a method in the context of objects refers to a function that is a
//  property of an object. Methods are functions that are associated with an object and
//  are typically used to perform actions related to that object or to compute something
//  based on the object's properties.

// var user2 = {
//   'name': "hira",
//   myAge: 10,
//   hobbies: ["gardening", "coding", "riding"],
//   greet : function (){
//     console.log('hello, my name is ' + this.name );
//   }
// };


// console.log(user2.greet());



//CONSTRUCTOR

// There are two methods by which you can create an object: an object literal and
//  the object constructor.  Object literals work well if you want to create a single object.
// But if you want to create more than one object, it is always better to use the
//  object constructor. This allows you to avoid unnecessary repetition in your code
//  and also makes it easier to change the properties of your object.

// Basically, constructors are functions whose names are usually capitalized.
// The capitalization of a constructor name does not have any effect on the object.
// It is only a means of identification.

// function ObjectConstructor (stName, stAge, stClass, stsection){
//   this.name = stName ,
//   this.age = stAge ,
//   this.stClass = stClass,
//   this.section = stsection

// }
// You can use a constructor to create a new object by calling the constructor with the
//  new keyword. The new keyword will create an instance of an object and bind the
//  this keyword to the new object.

// var stu1 = new ObjectConstructor('Ruhama', 10, 1 , 'A' );
// var stu2 = new ObjectConstructor('Hira', 20, 2 , 'B' );


//PROTOTYPES

// Every object in JavaScript has a built-in property, which is called its prototype.
// The prototype is itself an object, so the prototype will have its own prototype,
//  making what's called a prototype chain. The chain ends when we reach a prototype
//   that has null for its own prototype.
// The JavaScript prototype property allows you to add new properties to object constructors
// The JavaScript prototype property also allows you to add new methods to objects constructors.
function ObjectConstructor(stName, stAge, stClass, stsection) {
  this.name = stName,
    this.age = stAge,
    this.stClass = stClass,
    this.section = stsection

}

ObjectConstructor.prototype.pop = function () {
  return 'Hello ' + this.name
}

var stu1 = new ObjectConstructor('Anousha', 10, 1, 'A');
var stu2 = new ObjectConstructor('Hira', 10, 1, 'A');
// var stu3 = new ObjectConstructor('Farheen', 10, 1, 'A');

// console.log(stu2.pop());
// console.log(stu2);
// console.log(stu3);

//  HASOWNPROPERTY FOR IN LOOP3
// console.log(stu2.hasOwnProperty('stClass') );
// console.log('pop' in   stu2);

// var obj = {
//   name : 'ruhama',
//   age :10,
//   isActivate : true
// }
// for (var prop in obj) {
// //  console.log(prop); // return property name
//  console.log(obj[prop]); //return property value

// }


///////////////////////////////////////

// // window.location.href returns the href (URL) of the current page
// console.log(window.location.href);
// You can use document.URL as an alternative to window.location.href
// window.location.hostname returns the domain name of the web host
// console.log( document.URL);
// window.location.pathname returns the path / filename of the current page
// console.log(window.location.pathname);
// window.location.hash property sets or returns the anchor part of a URL, including the hash sign (#).
// console.log(window.location.hash);
// window.location.assign() Navigates to the given URL..
// window.location.replace() Removes the current page from the session history and navigates to the given URL..
// window.location.reload() method reloads the current document.
// history.forward() method loads the next URL (page) in the history list.
//  history.back() method loads the previous URL (page) in the history list.
// history.back() method only works if a previous page exists.
// The history.go() method loads a URL (page) from the history list.
// document.referrer property returns the URL of the document that loaded the current document.
// The referrer property is read-only.
// The window.open() method opens a new browser window, or a new tab, depending on your browser settings and the parameter values.




// document.getElementById('myForm').addEventListener('submit',function checkForSelection(e) {
//   e.preventDefault();
//   var selected = document.getElementById("states");
//   if (selected.selectedIndex === 0) {
//     alert("Please select a state.");
//     return false;
//   }

// console.log(selected.value);

// }
//  )



function checkForSelection(id) {

  var selected = document.getElementById(id);
  if (selected.selectedIndex === 0) {
    alert("Please select a state.");
    return false;
  }

  console.log(selected.value);

}




function validateRadios() {
  var radios = document.getElementsByName("r1");
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      return true;
    }
  }
  alert("Please check one.");
  return false;
}

var i = 0;

// do {
//   console.log(i);
//   i++
// } while (i >=0);





/////////////////////////////

/*
In programming, an exception is an abnormal or unexpected event that
 occurs during the execution of a program, disrupting the normal flow of 
 instructions. Exceptions are typically caused by errors in the program,
  such as invalid input, division by zero, attempting to access 
  an undefined variable, or other unexpected situations.

In JavaScript, exceptions are represented as objects. When an exceptional situation arises, 
an exception object is created, and the JavaScript interpreter looks for a nearby
 try...catch block to handle it.


The try...catch statement in JavaScript is used for handling exceptions (runtime errors)
 that might occur in a block of code. It allows you to attempt a block of code,
  and if an exception occurs, it provides a way to gracefully handle that
   exception without crashing the entire program.

   try {
  // Code that might throw an exception
  // ...
} catch (error) {
  // Code to handle the exception
  // 'error' is the caught exception object
  // ...
} finally {
  // Code that will always be executed, regardless of whether an exception occurred or not
  // ...
}
*/


try {
  var n = alrt('hello');
} catch (error) {
  console.log(error);

} finally {
  console.log('mai chaluga hi bhai');
}





