// var today = new Date();
// var hourNow = topday.getHours();
// var greetingl

// if (hourNow > 18) {
//     greeting = 'Good Evening';   
// } else if (hourNow > 12) {
//         greeting = 'Good Afternoon';
// } else if (hourNow > 0) {
//     greeting = 'Good morning';
// } else {
//     greeting = 'Welcome!';
// }

// document.write('<h3>' + greeting + '</h3>');


// function whileLoop(input){
//     let odrder = input;
//     while(order!== 'house' && order !== 'hotel') {
//         console.log('Please enter "house" or "hotel"...')
//     }
// }

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
            result = result + '<p>Model #' + i + " " + item + '</p>';
        }
        return result;
    }
}
