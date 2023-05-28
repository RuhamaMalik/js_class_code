// slice

// splice( start, optional deletCount , optional items to add )

// var arr = ["iqra",  "ruhama", "hira", "anousha" ];

// arr[1] = "gull" ;
// arr[1] = ""

// arr.splice(1 , 0 ,"hamna", "rida" , "maham"); // add
// arr.splice(2 , 1) // delete
// arr.splice(1, 2, "hamna", "rida" , "maham");


// console.log(arr);



// loop

// for loop  // num of itrtion


//syntax
// for(intilization; condition; updation){

     // statement
// }


// for(var i = 1; i <= 10; i++){

//     document.write("mug " + i + "</br>" );
// }

// document.write("drum is full")


// while loop  //  num of itrtion  1==

// var i = 1; // intilization
// while(i <= 10){
//     document.write("Hello " + i + "</br>" );

//     i++;
// }



// do while loop

// var i = 15;
// do{
//     document.write("Hello " + i + "</br>");
//     i++;
// }
// while(i <= 10)


// var arr = ["iqra",  "ruhama", "hira", "anousha" ];

// // document.write("Hello " + arr[0] + "<br>");
// // document.write("Hello " + arr[1] + "<br>");
// // document.write("Hello " + arr[2] + "<br>");
// // document.write("Hello " + arr[3] + "<br>");

// var i ;
// for(i=0; i < arr.length; i++){ // i<4

// document.write(arr[i] + '<br>');  // iqra  ruhama hira anousha

// }



////////////// exmpla

///// found city

var cities = ["karach" , "peshawar", "quetta", "lahore"];
var userCity = prompt("Enter your city");
var found = false;  // flag

for(var i = 0; i < cities.length; i++ ){


     if(userCity === cities[i]){
          found = true;
          alert("City Found");
break;
     }
     // else if(userCity !== cities[i]){
     //      alert("Not Found");
     // }

}


if(!found){
     alert("Not Found");
}

