var stuff = [“jeep” , “subaru” , “honda”];
console.log(stuff[1]);
console.log(stuff.length);

stuff.push(“bmw”);
console.log(stuff);


//pop method

stuff.pop();
console.log(stuff);

var removedCar = stuff.pop();
console.log(stuff);
console.log(removedCar);

//unshift method
stuff.unshift(“chevy”, “chrysler”);
console.log(stuff);

//shift method
stuff.shift();
console.log(stuff);

//splice method 
stuff.splice(1, 1, “red”, “green”);
console.log(stuff);

stuff.splice(1, 1, “grape” , “kiwi” , “apple”, “carrot”);
console.log(stuff);

stuff.splice(2,1);
console.log(stuff);

//slice method
stuff.slice(4);
var removed = stuff.slice(4,1);
console.log(stuff);
console.log(removed);

var aircraft = ["red tails", "Memphis bell", "top gun", "sauage party","big mamas house"];
aircraft.push("die hard");

aircraft.splice(3, 4, "godfather I", "Godfather II", "Godfather III");

aircraft.add("Gardians Of Galaxy");

var subaircraft = aircraft.splice(1, 3);

aircraft.pop(aircraft[0]);

console.log(aircraft[1]);

function getUserage(){
    var userage = parseInt(prompt('how old are you?'));
    if(userage >= 21){
        console.log()
    }
}

function story(){
    var = story;
}

