// logical operater


// console.log(true && true) ; // true
// console.log(true && false) ; // false
// console.log(false && false) ; // false

// falsy value
// 0 '' "" undefined null, NaN

// truthy values
// 1 -1 ..... , "Any Text" , {} 


// var namee;
// //  name  ="ruhama";
// console.log(namee);

// if("hello"){
//     console.log(true);
// }

// console.log(undefined && false); // undefined
// console.log(true && undefined); //  undefined
// console.log(undefined && undefined); //  undefined

// OR operator

// console.log('undefined' || 'true'); // undefined
// console.log(null || 'true'); //  true
// console.log(null || undefined);  // undefined
// console.log(null && true || false); // false
// console.log(null && true || false && true); // false
// console.log(null && true || true && true); // true
// console.log((null && true )|| (false && true)); // 

// var letter = "h";

// if(letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u"){
//     console.log("it's a vowel");
// }else{
//     console.log("it's a consonants");
// }



////////// Grade

var perc = +prompt("Enter your percentager");

if (perc >= 80 && perc <= 100) {
    console.log("Grade : A+");
} else if (perc >= 70  && perc < 80) {
    console.log("Grade : A");
} else if (perc >= 60  ) {
    console.log("Grade : B");
} else if (perc >= 50) {
    console.log("Grade : C");
} else if (perc >= 40) {
    console.log("Grade : D");
}
else {
    console.log("Fail");
}


/*

Assignment :


prompt ---- name marks of Math , English , Bio , Chemistry , Physics

total = 500
obtained  = eng + math + bio + chem + phy

percentage = ?? (obtained/total)×100%.

check grade according to percentage ??

print mark sheet in HTML table



*/