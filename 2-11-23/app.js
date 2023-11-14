////////////////////Setting field values

function fillCity() {
  var cityName;
  var zipCode = document.getElementById("zip").value;
  switch (zipCode) {
    case "1111":
      cityName = "Karachi";
      break;
    case "2222":
      cityName = "Peshawar";
      break;
    case "3333":
      cityName = "Islamabad";
      break;
    default:
      alert("Invalid zip");
  }
  if (cityName === undefined) {
    document.getElementById("city").value = "";
  } else {
    document.getElementById("city").value = cityName;
  }
}

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

// function readParaText() {
//   // var readPara = document.getElementById("content").innerHTML;
//   var readPara = document.getElementById("content").innerText;
//   console.log(readPara);
// }

/////////////// Manipulating images and text

function makeInvisible() {
  document.getElementById("ugly").className = "hidden";
}

// function addClass() {
//   document.getElementById("p1").className += " newClass";
// }

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
  // allPara[i].style.color = "blue";
}
