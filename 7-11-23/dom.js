//  DOM
// console.log(document.childNodes[1].childNodes[2].childNodes[1]);

// var h1 =  document.getElementsByTagName("p");;
// console.log(h1);
// console.log(document.childNodes[1].childNodes[2].childNodes[1]);

// var div = document.getElementById('third');
// div.innerHTML = "Hello";
// var html = document.childNodes[1];
// console.log(html.childNodes);
// console.log(html.children);
// console.log(div);

//  Finding children

//  console.log(document.childNodes[1].childNodes[2].childNodes[1]);

// var thirdDiv = document.getElementById("third");
// var para1 = thirdDiv.childNodes[1];
// var paraContext = para1.innerHTML; // readind para values
// console.log(paraContext);

//  61 Junk artifacts and nodeType

/*
 The nodeType property returns the node type, as a number, of the specified node.
 If the node is an element node, the nodeType property will return 1.
 If the node is an attribute node, the nodeType property will return 2.
 If the node is a text node, the nodeType property will return 3.
If the node is a comment node, the nodeType property will return 8.
 This property is read-only.
 */
//  console.log(document.children[0].children[1].children[0]);
//b

// var nodeTypes = document.childNodes[1].childNodes[1];

// console.log(nodeTypes.nodeType); //

// var d = document.getElementById("third");

// var pCounter = 0;
// for (var i = 0; i < d.childNodes.length; i++) {
//   if (d.childNodes[i].nodeType === 1) {
//     pCounter++;
//   }
//   if (pCounter === 4) {
//     d.childNodes[i].innerHTML = "All his women.";
//     break;
//   }
// }

// var target = document.getElementById('third');

// console.log(target.firstChild);
// console.log(target.lastChild);

// var child = document.getElementById('child');
// var heading2 = document.getElementById('head');

// console.log(child.parentNode);
// console.log(child.nextSibling);
// console.log(child.previousSibling);

// console.log(heading2.nodeName);
// console.log(document.getElementsByTagName("p")[0].childNodes[0].nodeValue);

// var h1 = document.getElementById('head');

// console.log(h1.hasAttribute('class'));
// console.log(h1.getAttribute('id'));
// console.log(h1.setAttribute('class', 'h1'));
// console.log(h1.attributes[0].nodeValue);

// var ol = document.getElementById('ol');

// var li =document.createElement('li'); // <li> </li>
// var text = document.createTextNode('First li');
// li.appendChild(text);

// ol.appendChild(li);

//  TODO APP

// add item
var newItem = document.getElementById("newItem");
var ul = document.getElementById("ul");

function addItem() {
  if (newItem.value === "") {
    alert("Enter your task");
  } else {
    // console.log(newItem.value);
    var li = document.createElement("li"); // new item
    var newTask = document.createTextNode(newItem.value);
    li.appendChild(newTask);

    var editBtn = document.createElement("button"); // edit button
    var editBtnText = document.createTextNode("Edit");
    editBtn.appendChild(editBtnText);
    editBtn.setAttribute("onclick", "aditTodo(this)");
    li.appendChild(editBtn);

    var deleteBtn = document.createElement("button"); // delete button
    var deleteBtnText = document.createTextNode("Delete");
    deleteBtn.appendChild(deleteBtnText);
    deleteBtn.setAttribute("onclick", "deleteTodo(this)");
    li.appendChild(deleteBtn);

    ul.appendChild(li);
  }

  newItem.value = "";
}

//  delete all

function deleteAll() {
  ul.innerHTML = "";
}

// adit Todo

function aditTodo(y) {
  //  console.log( y.parentNode.firstChild.nodeValue);
  var oldVal = y.parentNode.firstChild.nodeValue;
  var newTodo = prompt("Edit todo", oldVal);
  y.parentNode.firstChild.nodeValue = newTodo;
}

//  delete todo

function deleteTodo(x) {
  // console.log(x);
  // console.log(x.parentNode);

  x.parentNode.remove();
}
