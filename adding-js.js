


//Things that we want to do with our website


//Try to add a hover button over an image?
// var name;

//User input: Asking them to Donate, or make them type 

//something or confirm something to do

//Have JS do something, maybe make images scroll through a 
//bunch of images?

//Make something like, if they buy this, donate this?

// function useless(callback) {
//     return callback
// }

// var text = 'Amigo';

// assert(
//     useless(function(){ return text; }) === text,
//     "The useless function works! " + text);


// ##################### What is your name    ####################

var jgj = window.prompt("Thanks for visiting The Music Shop. What shall we call you?: ");
// document.write(jgj);


// ######################    Greeting message    #####################

var today = new Date();
// console.log(today);


var hourNow = today.getHours();
// console.log(hourNow);

var greeting;
// Started empty variable

if (hourNow > 18) {
    greeting = 'Good Evening!';
} else if (hourNow > 12) {
    greeting = 'Good afternoon!';
} else if (hourNow > 0) {
    greeting = 'Good morning!';
} else {
    greeting = 'Welcome!';
}

// if statement is the "logic"

document.write('<h3>' + greeting 
+ ' ' + jgj +  ' thanks for visiting us on '+ today+ '</h3>');








// ##########    Image resize (not working)    #######################

// var jgj = window.prompt("Thanks for visiting The Music Shop. What shall we call you?: ");
// document.write(jgj);

/*
document.querySelector('button').onclick = function() {
    var image = document.getElementById('container');
    image.style.width = '100%';
    image.style.height = 'auto';
}



*/

