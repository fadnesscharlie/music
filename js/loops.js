

// Button "Languages"

var lang = function () {
    let howMany = prompt("How many coding langages do you want to learn? Enter a number: ")
    num = Number(howMany)
    if (num == 1) {
        return window.alert("Learn Javascript!!")
    } else if (num == 2) {
        return window.alert("Learn Javascript and Python!!")
    } else if (num == 3) {
        return window.alert("Learn Javascript, Python, and Java!!")
    } else if (num == 4) {
        return window.alert("Learn Javascript, Python, Java, and C!!")
    } else if (num == 4) {
        return window.alert("Learn Javascript, Python, Java, C, and C++!!")
    } else {
        return window.alert("Ok, man, whoa whoa, calm down here Mr. Adventerous, thats to many!")
    }
}

// Button Donate

let piano = 2250;
var animal = function () {
    var howMuch = prompt("Guess my favorite animal? Choose between: Monkey, Cat, Dog, Bird, Turtle, or Lizard")
    // howMuch = Number(howMuch)
    // console.log(typeof(howMuch))
    // we want to make sure the response is a number
    //     ("" = T  //  5 = F)
    //              44 F            55 F
    while (howMuch != "Cat") {
        howMuch = prompt("You chose wrong! Please try again! Choose between: Monkey, Cat, Dog, Bird, Turtle, or Lizard")
        // console.log(typeof(howMuch))
        // break;
    } 
        
    // if (howMuch === "") {
    //     return window.alert("The kids will try to get the instruments somehow...")
    // }
    // donated = howMuch * piano / 10
        // howMuch = alert("thanks for donating "+howMuch +"!")

    return window.alert("You chose correctly!!! My Favorite animal is  "+ howMuch +"!");
}


// On Window Prompt

var jgj = window.prompt("Thanks for visiting The Music Shop. What shall we call you?: ");
var today = new Date();
var hourNow = today.getHours();
var greeting;
if (hourNow > 18) {
    greeting = 'Welcome to the music in the evening!';
} else if (hourNow > 12) {
    greeting = 'Welcome to the music in the afternoon!';
} else if (hourNow > 0) {
    greeting = 'Welcome to the music in the morning!';
} else {
    greeting = 'Welcome!';
}
document.write('<h3>' + greeting 
+ ' ' + jgj +  ' thanks for visiting us on '+ today+ '</h3>');



// var person = {
//     fullName: function () {
//     item = <img src=https://images.unsplash.com/photo-1541745183274-cb9189bfe734?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80>
//     return item
//     }
// }