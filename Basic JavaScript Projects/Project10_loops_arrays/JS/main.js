// A function using a while loop
function Call_Loop() {
    var Greeting = "";
    var i = 1;
    while(i<=5) {
        Greeting += "Hello " + i + "<br>";
        i++; 
    }
    document.getElementById("Loop").innerHTML = Greeting;
}

// A function using the string length property
function length_Function() {
    var hello = "";
    var x = document.getElementById("length").innerHTML.length;
    var i = 1;
    while(i<=x) {
        hello += "Hello!" + "<br>";
        i++;
    }
    document.getElementById("length").innerHTML = hello;
}

// A function using a for loop
function for_Loop() {
    var Instruments = ["Piano", "Violin", "Trumpet", "Flute"];
    var Content = "";
    var j;
    for(j = 0 ; j < Instruments.length ; j++) {
        Content += Instruments[j] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

// A function using an array
function array_Function() {
    var Fruits = ["orange", "apple", "banana", "pineapple"];
    document.getElementById("Array").innerHTML = "I like " + Fruits[2] + ".";
}

// A function using an object created through utilization of const keyword
function constant_function() {
    // Creating an object
    const Student = {
        firstName : "Peter",
        lastName : "Paul",
        age : 7,
        grade : "Grade 2"
    }
    document.getElementById("Constant").innerHTML = Student.firstName + " is a "
    + Student.grade + " student.";
    
    Student.firstName = "John"; // Change a property's value
    Student.contact = "123-456-7890"; // Add a property with a value
    document.getElementById("Constant").innerHTML = "The contact of " 
    + Student.firstName + " is " + Student.contact + ".";
}

// Using the let keyword
var A = 7;
{
    let A = 9;
    document.getElementById("Let").innerHTML = A;
}

// A function using a return statement
function return_Function() {
    document.getElementById("return").innerHTML = myHello("there!");
}

function myHello(text) {
    return "Hello " + text;
}

// Creating an object using the let keyword
let car = {
    make : "Dodge",
    model : "Journey",
    year : 2018,
    color : "black",
    description : function() {
        return "The car is a " + this.year + " " + this.color + " " + 
        this.make + " " + this.model;
    }
}
document.getElementById("car").innerHTML = car.description(); 

// A fonction using a break statement
function break_Function() {
    let text = "";
    let i;
    for(i = 0; i < 10; i++) {
        if(i === 3) {
            break;
        }
        text += "Number " + i + "<br>";
    }
    document.getElementById("break").innerHTML = text;
}

// A function using a continue statement
function continue_Function() {
    let text = "";
    let i;
    for(i = 0; i < 10; i++) {
        if(i === 3) {
            continue;
        }
        text += "Number " + i + "<br>";
    }
    document.getElementById("continue").innerHTML = text;
}