



// #################  Calculator Function  #############################################


// variables
let piano = 2250;
var donate = function () {
    let howMuch = prompt("How much would you like to donate?")
    if (isNaN(howMuch)) {
        let howMuch = prompt("How much would you like to donate?")

    } else {
        donated = howMuch * piano / 10
    }
    return window.alert("You will donate " + donated + " with your purchase!");

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
//         item = 'img src="/*path to image*/">';
//     }
//     else {
//         item = '<strong>No items ordered</strong>';
//     }
//     return item;
// }

// Place inside HTML
// <script>docoument.write(showOrder())</script>


