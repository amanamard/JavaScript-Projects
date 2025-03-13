// Assigning local and global variables
var A = 7; // global variable

function addition1() { 
    document.write("<br>");
    document.write(A + 3 + "<br>"); // Using global variable
}

function addition2() { 
    var A = 5; // local variable
    var B = 3; // local variable
    document.write(A + B + "<br>"); // Using local variable
    console.log(A); // Showing which variable is used in the console
}

addition1();
addition2();

// A function that includes an if statement
function helloFunction() {
    if(new Date().getHours() < 12) {
        document.getElementById("hello").innerHTML = "Good morning!";
    }
}

// A function that includes an if statement
function monthFunction() {
    if(new Date().getMonth() < 11) {
        document.getElementById("month").innerHTML = "We are not yet in December!"
    }
}

// A function that includes if and else statements 
function photoCard_Function() {
    var age = document.getElementById("age").value;
    if(age < 16) {
        PhotoCard = "You are not old enough to have a Photo Card!";
    }else{
        PhotoCard = " You are old enough to have a Photo Card!"
    }
    document.getElementById("photoCard").innerHTML = PhotoCard;
}

// Time function from previous slides
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if(Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    } else if(Time > 12 == Time < 18) {
        Reply = "It is afternoon.";
    } else {
        Reply = "It is evening time."
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}