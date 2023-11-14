//  DOM
// console.log(document.childNodes[1].childNodes[2].childNodes[1]);

// var h1 =  document.getElementsByTagName("p");;
// console.log(h1);
// console.log(document.childNodes[1].childNodes[2].childNodes[1]);

// var div = document.getElementById('third');
// div.innerHTML = "Hello";
var html = document.childNodes[1];
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

var child = document.getElementById('child');
var heading2 = document.getElementById('head');


// console.log(child.parentNode);
// console.log(child.nextSibling);
// console.log(child.previousSibling);

// console.log(heading2.nodeName);
console.log(document.getElementsByTagName("p")[0].childNodes[0].nodeValue);