document.getElementById('btn2').style.color = "red";

console.log("Here is my first console message");
console.info("This is info");
console.warn("action is comming");
console.error("you done @%#% up");

// Browser alert box
// alert('here is my tank');

// confirm('oi did you load the gun');

// var userResults = confirm("did load the gun");
// console.log(username);

// /*
//  variables 
//     must start with a lowercase!
//     must start with a letter.
//     Can Contain underscore.
//     may Use camelCasing.
// */
// var username;
// var room;
// var user_name;
// var username;
// var theUsersFirstNameOnly;

// var age = 27;
// var decade = 10;
// var double = 2;
// var divide = 4; 

// var newAge = ( ( age + decade) * double ) / divide;

// console.log(age + decade);

// var firstname; 

// // Prompt user for:
// // the make of vehicle
// // the year
// // the color
// // alert the result

// // 3 new variable 
// // formatting: color, year make.

var make = prompt("Make of vehicles");
var year = prompt("year of vehicle");
var color = prompt("color of vehicle");

var results = color + ", " + make + year;
 console.log(results);
function primaryUser (){
    document.getElementById("primaryUser").innerHTML = results;
}

