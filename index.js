


//////////  Date

// new Date(year, month, day, hours, minutes, seconds, milliseconds);
var currentDate = new Date();

// document.write(currentDate); // date Object shows the date as string but can't use string methods on it like charAt, slice etc

// currentDate = currentDate.toString(); //Now we can treat it as a string and extract part of it by slice etc.

/*You can retrieve various components of a Date object, such as the year, month, day, hour, minute, second, and milliseconds. */
var year = currentDate.getFullYear();
var month = currentDate.getMonth(); // 0-based (0 = January, 1 = February, ...)
var date = currentDate.getDate();
var hour = currentDate.getHours();
var minute = currentDate.getMinutes();
var second = currentDate.getSeconds();
var millisecond = currentDate.getMilliseconds(); 
var time = currentDate.getTime();  //milliseconds since midnight, Jan. 1, 1970.
var day = currentDate.getDay();
// document.write(
//   'year ' + year + '</br>' +
//   'month ' + month + '</br>' +
//   'date ' + date + '</br>' +
//   'hour ' + hour + '</br>' +
//   'minutes ' + minute + '</br>' +
//   'second ' + second + '</br>' +
//   'millisecond ' + millisecond + '</br>'+
//   'day ' + day + '</br>'+
//   'time ' + time + '</br>'

// )

//The getDay() method returns the day of the week (0 to 6) of a date.
// var day = currenrDate.getDay(); // 
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var day = currentDate.getDay();
var today = dayNames[day];
// document.write(today); //


const dateString = currentDate.toDateString(); // "Tue May 17 2023"
const timeString = currentDate.toTimeString(); // "10:30:00 GMT+0000 (Coordinated Universal Time)"
const localizedDate = currentDate.toLocaleDateString(); // Depends on user's locale
// document.write(dateString + '</br>');
// document.write(timeString + '</br>');
// document.write(localizedDate + '</br>');


//Setting Date Components:
currentDate.setFullYear(2024);
currentDate.setMonth(6); // 0-based (6 = July)
currentDate.setDate(22);
// document.write(currentDate)


//Arithmetic Operations
const date1 = new Date("2023-05-17");
const date2 = new Date("2023-06-01");
const timeDifference = date2 - date1; // Difference in milliseconds
// document.write(timeDifference)


// FUNCTIONS

/*In JavaScript, a function is a reusable block of code that performs a specific task or set 
of tasks. Functions are a fundamental concept in programming, and they enable you to write
 organized, modular, and efficient code. The life of function parameters in JavaScript begins
  when a function is called, and it ends when the function has finished executing.   */

