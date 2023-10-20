// Current date and time

var currentDate = new Date();

currentDate = currentDate.toString();

document.write(currentDate.slice(16, 24));

// If you need the Date object to be a string, you can convert it to one the same way you
// convert a number to a string.

//  var dateString = currentDate.toString();
//  document.write(dateString);

// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];

//  console.log(nameOfToday);

/*
Extracting parts of the date and time
You can retrieve various components of a Date object, such as the year, month,
 day, hour, minute, second, and milliseconds.
*/

// var year = currentDate.getFullYear(); //2023
// var month = currentDate.getMonth(); //9 // 0-based (0 = January, 1 = February, ...)
// var day = currentDate.getDate(); // 17
// var hour = currentDate.getHours(); // 14
// var minute = currentDate.getMinutes(); // 47
// var second = currentDate.getSeconds(); //
// var millisecond = currentDate.getMilliseconds();
// var time = currentDate.getTime(); //Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC.

// document.write(
//     year + ' <br />' + 
//     month + ' <br />' +
//     day + ' <br />' +
//     hour + ' <br />' +
//     minute + ' <br />' +
//     second + ' <br />' +
//     millisecond + ' <br />' +
//     time + ' <br />'
//     )

// Specifying a date and time
// var specifyDate = new Date("June 30, 2035 2:58:23");
// console.log(specifyDate)


//You calculate the difference.
// var date1 = new Date("2023-05-17");
// var date2 = new Date("2023-06-01");
// var timeDifference = date2 - date1; // Difference in milliseconds
// // console.log(timeDifference);
// var dayDiff =  timeDifference  / (1000 * 60 * 60  * 24);
// var dayDiff = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
// console.log(dayDiff); //

//b

//You can change individual elements of a Date object. H

currentDate.setFullYear(2024);
// var setMonth =  currentDate.setMonth(6); // 0-based (6 = July)
// var setDate = currentDate.setDate(22);
// console.log(currentDate);

// Formatting Dates
// var dateString = currentDate.toDateString(); // "Tue May 17 2023"
// var timeString = currentDate.toTimeString(); // "10:30:00 GMT+0000 (Coordinated Universal Time)"
// var localizedDate = currentDate.toLocaleDateString(); // Depends on user's locale

// console.log(dateString);
// console.log(timeString);
// console.log(localizedDate);

