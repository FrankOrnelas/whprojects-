var button1 = document.getElementById('tank1').addEventListener("click", change_background);
var button2 = document.getElementById('tank2').addEventListener("click", go_vertcal);
var button3 = document.getElementById('tank3');
var button4 = document.getElementById('tank4');
var button5 = document.getElementById('tank5');

var p = document.getElementById('story1');
var h1 = document.getElementById('yo1');
var a = document.getElementById('yo2');
var a1 = document.getElementById('yo3');

// declare var and assigned it to the body of html
var background = document.getElementById('yo4');
var font = document.getElementById('yo5');

// Create a function called changebackground
function change_background(){
    document.body.style.background = "red";
    
}
function go_vertcal(){
    document.body.style.position = ""
}

// Call the function on page load
changebackground();
function changefontcolor(){
    font.style.color = "green";
}
