var today = new Date();
var hourNow = topday.getHours();
var greetingl

if (hourNow > 18) {
    greeting = 'Good Evening';   
} else if (hourNow > 12) {
        greeting = 'Good Afternoon';
} else if (hourNow > 0) {
    greeting = 'Good morning';
} else {
    greeting = 'Welcome!';
}

document.write('<h3>' + greeting + '</h3>');