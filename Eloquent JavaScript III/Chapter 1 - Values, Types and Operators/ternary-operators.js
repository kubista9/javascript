//a ? b : c

//the result will be b when a is true and c otherwise.

// Path: Eloquent%20JavaScript%20III/Chapter%201%20-%20Values%2C%20Types%20and%20Operators/short-circuiting.js

const yourName = '';
do {
    yourName = ("Who are you?"); 
} while (!yourName); 
console.log("Hello " + yourName);