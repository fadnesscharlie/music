



// #################  Calculator Function  #############################################


// variables
// let piano = 2250;
// var donate = function () {
//     let howMuch = prompt("How much would you like to donate?")
//     if (isNaN(howMuch)) {
//         howMuch = prompt("How much would you like to donate?")

//     } else {
//         donated = howMuch * piano / 10
//     }
//     return window.alert("You will donate " + donated + " with your purchase!");

// }



// let piano = 2250;
// var donate = function () {
//     let howMuch = prompt("How much would you like to donate?")
//     howMuch = Number(howMuch)
//     if (isNaN(howMuch)) {
//         howMuch = prompt("Please enter a number?")
//     } else {
//         howMuch = alert("thanks for donating "+howMuch +"!")
//     }
//     return window.alert(something);
// }


let piano = 2250;
var donate = function () {
    let howMuch = prompt("How much would you like to donate?")
    howMuch = Number(howMuch)
    // we want to make sure the response is a number
    while (isNaN(howMuch)) {
        howMuch = prompt("Please enter a number?")
        } 
        
    
    donated = howMuch * piano / 10
        // howMuch = alert("thanks for donating "+howMuch +"!")
    
    return window.alert("thanks for donating "+donated +"!");
}


//     if (typeOf howMuch == 'number') {
//         // howMuch.unshift('.')
//         donated = howMuch * piano / 34
//         // document.write("")
//     } else {
//         alert('Opps, you did not enter a number. Please refresh the page.')
//     }
//     return "You will donate " + donated + " with your purchase!";
// }



/*
let item;

let donate10, donate15, donate20, piano, base;



// Create a function to multiple piano cost to donate*

let donate10 = piano * 10;

let donate15 = (piano * 15);

let donate20 = (piano * 20);

let el10 = doument.getElementById('donate10');
el10.textContent = donate10;

let el15 = doument.getElementById('donate15');
el15.textContent = donate15;

let el20 = doument.getElementById('donate20');
el20.textContent = donate20;


document.write('<h3>' + donate10 + "Hello" + '</h3>')
document.write(`<h3>` + `Hello` + `</h3>`)

*/
// need to make this a function and call it


// var showOrder = function () {
//     let order = prompt("What would you like to order?")
//     let item;

//     if (order === 'house') {
//         item - '<img src="/*path to image*/">';  
//     }   else if (order === 'hotel') {
        // item = 'img src="/*path to image*/">';
//     }
//     else {
//         item = '<strong>No items ordered</strong>';
//     }
//     return item;
// }

// Place inside HTML
// <script>docoument.write(showOrder())</script>


// control shift pb? 
// in the console, bring up snippet






function whileLoop(input){
    let order = input;
    while(order!== 'house' && order !== 'hotel') {
        console.log('Please enter "house" or "hotel"...')
    }
}
// whileLoop("dog");




let getItem = function () {
    let order = prompt('What would you like to order?')
    let item;
    //     house       F        house         T
    while (order !== 'house' && order !== 'hotel') {
        order = prompt('Pleaes enter "house" or "hotel"')
    }

    if (order === 'hotel') {
        item = '<img src="">';
    } else if (order === 'house') {
        item = '<img src="">';
    }

    let howMany = function () {
        let count = prompt('How many do you want to order?');

        while (count === "" || isNaN(count)) {
            count = prompt('Please enter a number. How many do you want?');
        }
    }

    let showOrder = function () {
        let item = getItem();
        let total = howMany();
        let result = "";

        for (let i =0; i < total; i++) {
            result = result + '<p>' + 'Model #' + i + " " + item + '</p>';
        }
        return result;
    }
}



let piano = 2250;
var donate = function () {
    var howMuch = prompt("How much would you like to donate?")
    // howMuch = Number(howMuch)
    // console.log(typeof(howMuch))
    // we want to make sure the response is a number
    //     ("" = T  //  5 = F)
    //              44 F            55 F
    while (howMuch == NaN) {
        howMuch = prompt("Please enter a number?")
        // console.log(typeof(howMuch))
        // break;
    } 
        
    // if (howMuch === "") {
    //     return window.alert("The kids will try to get the instruments somehow...")
    // }
    donated = howMuch * piano / 10
        // howMuch = alert("thanks for donating "+howMuch +"!")

    return window.alert("thanks for donating "+donated +"!");
}





// function language () {
//     let question - prompt("What language would you like to learn: Java, JS, Rust, C");

//     while (question !== "Java" || question !== "JS") {
//         question = prompt("Please enter: Java, JS, Rust, C")
//     }
//     if (Java) {
//         image = "image_file"
//     } else if (JS) {


//     } else {

//     }

//     let time = studyTime();
//     for (let i = 0; i <= timel i++) {
        
//     }
//     return image;
// }

// function studyTime() {
//     prompt("for how many hours")
//     return answer
// }