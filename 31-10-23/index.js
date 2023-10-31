// function checkReturn(a, b) {
//   var sum = a + b;
//   return sum;
//   var multiply = a * b;
// }

// function checkReturn(a, b) {
//   var sum = a + b;
//   return
//   sum;
// }

// function checkReturn(a, b) {
//   var sum = a + b;
//   return(
//     sum
//   );
// }
// console.log(checkReturn(2, 3));

// for (var i=5; i>0; i-- ){
//   console.log(i);
// }
/*
The switch statement in JavaScript is a control structure used for making decisions in code
 based on the value of an expression. It provides an alternative to using a series of if...else if...else statements
  when you need to choose one block of code to execute from several possible options. The switch statement is 
  particularly useful when you have a single expression that you want to compare against multiple values.

Use if...else when you need to evaluate complex or compound conditions, and when you want 
to provide different code blocks for different conditions.

Use switch when you have a single value to compare against multiple options, and when you want a more concise
 and readable way to express a series of equality checks.
*/

// var day = "sun";
// switch (day) {
//   case "sat":
//   case "sun":
//     console.log("weekend");
//     break;
//   case "monday":
//     console.log("week day");
// }

// Simulated vending machine

// function selectProduct(button) {
//   switch (button) {
//     case "A":
//       return "Dispensing soda";
//     case "B":
//       return "Dispensing chips";
//     case "C":
//       return "Dispensing candy";
//     case "D":
//       return "Dispensing water";
//     default:
//       return "Invalid selection";
//   }
// }

// var product = selectProduct("B");
// console.log(product); //

/// Events

/*
- Event handlers can be used to handle and verify user input, user actions, and browser actions
- Events kisi ativity par invoke hoty hen

- In JavaScript, an event is a specific occurrence or incident that happens while an application is running,
 typically as a result of user interaction or the browser's activities. 
- Events are used to trigger JavaScript code, allowing you to create interactive and responsive web applications. 

-Events often result from actions or interactions by the user, such as clicking a button,
 submitting a form, moving the mouse, pressing a key, or resizing the browser window.

- To respond to events, JavaScript uses event handlers, which are functions that you define to be executed 
 when a particular event occurs. Event handlers are attached to HTML elements (like buttons or input fields)
  or to the document or window.

  Events can be categorized into different types, such as 
   - mouse events (e.g., click, hover), 
   - keyboard events (e.g., keypress, keydown),
   - form events (e.g., submit, change), and more.

- In many cases, you can prevent an event's default behavior, such as preventing a form from submitting
 or stopping a link from navigating to another page, by calling event.preventDefault() within an event handler.

- When an event occurs, an event object is automatically created and
 passed to the event handler as an argument. This object contains information about the event, 
 such as the type of event, target element, and other relevant details.
*/

// function greet(name) {
//   alert("Hello " + name);
// }


//////////////////////////Reading field values


function checkAddress(fieldId) {
  
  var inputField = document.getElementById(fieldId);
if (inputField.value === "") {
   alert("Email address required.");
   }else{
    alert('Email: ' + inputField.value )
   }
   }

////////////////////Setting field values

// function fillCity() {
//   var cityName;
//   var zipCode= document.getElementById("zip").value;
//   switch (zipCode) {
//     case "1111":
//       cityName = "Karachi";
//       break;
//     case "2222":
//       cityName = "Peshawar";
//       break;
//     case "3333":
//       cityName = "Islamabad";
//   }
//   document.getElementById("city").value = cityName;
// }

/////////////////// Reading and setting paragraph text

// function expandPara() {
//   var expandedParagraph = " Lorem ipsum dolor sit amet consectetur adipisicing elit.  Praesentium molestias magnam id eos obcaecati, aperiam ipsa nobis necessitatibus incidunt, itaque quis amet fugiat. Nulla recusandae sequi veritatis minus repudiandae aut.";
//   document.getElementById("para").innerText = expandedParagraph;
// }

// function displayList() {
//   var listToPlace =
//     "<ol><li>First Item</li><li>Second Item</li><li>Third Item</li></ol>";
//   document.getElementById("itemList").innerHTML = listToPlace;
// }

function readParaText() {
  // var readPara = document.getElementById("content").innerHTML;
  var readPara = document.getElementById("content").innerText;
  console.log(readPara);
}

/////////////// Manipulating images and text

function makeInvisible() {
  document.getElementById("ugly").className = "hidden";
}

function addClass() {
  document.getElementById("p1").className += " newClass";
}

function makeBig() {
  document.getElementById("btn").className = " big";
}
function makeNormal() {
  document.getElementById("btn").className = " normal";
}

//////////////////    <!-- Target all elements by tag name -->

// var onlyOnePara = document.getElementById('myPara');
var allPara = document.getElementsByTagName("p");

// allPara.style.color = "red"
// allPara[0].style.color = "red"
// allPara[1].style.color = "red"

for (var i = 0; i < allPara.length; i++) {
  allPara[i].style.color = "green";
}

