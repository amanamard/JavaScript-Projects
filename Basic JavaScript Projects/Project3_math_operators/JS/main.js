// Addition function
function add_Function() {
    var sum = 5 + 2;
    document.getElementById("Math").innerHTML = "5 + 2 = " + sum;
}

// Subtraction function
function subtract_Function() {
    var sum = 5 - 2;
    document.getElementById("Math2").innerHTML = "5 - 2 = " + sum;
}

// Multiplication function
function multiply_Function() {
    var product = 5 * 2;
    document.getElementById("Math3").innerHTML = "5 x 2 = " + product;
}

// Division function
function divide_Function() {
    var simple_operation = 5 / 2;
    document.getElementById("Math4").innerHTML = "5 / 2 = " + simple_operation;
}

// Multiple operations
function operations_Function() {
    var complex_operation = (5 - 2) * 10 / 3 + 2;
    document.getElementById("Math5").innerHTML = "(5 - 2) x 10 / 3 + 2 = " + complex_operation;
}

// Modulus function
function modulus_Function() {
    var remainder = 5 % 2;
    document.getElementById("Math6").innerHTML = "5 % 2 = " + remainder;
}

// Negation function
function negation_Function() {
    var x = -7;
    document.getElementById("Math7").innerHTML = "The opposite of -7 is: " + -x;
}

// Increment function
function increment_Function() {
    var x = 7;
    x++; // Adding one to x
    document.getElementById("Math8").innerHTML = "The increment of 7 is " + x;
}

// Decrement function
function decrement_Function() {
    var y = 2.5;
    y--; // Subtract one from y
    document.getElementById("Math9").innerHTML = "The decrement of 2.5 is " + y;
}

// Returning a random number between 0 and 5
function random_Function(){
    var r = Math.random()*5;
    document.getElementById("Math10").innerHTML = r;
} 

// Returning the integer part of a number
function myFunction() {
    var z = Math.trunc(2.89);
    document.getElementById("Math11").innerHTML = "The integer part of 2.89 is: " + z;
}