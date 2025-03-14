// A function using concat() method
function concatenateFunction() {
    var part1 = "This sentence is ";
    var part2 = "the result of ";
    var part3 = "a concat() method."
    var sentence = part1.concat(part2, part3);
    document.getElementById("concatenate").innerHTML = sentence;
}

// A function using slice() method
function sliceFunction() {
    var sentence = "This is a function using a slice() method.";
    var section = sentence.slice(27,41);
    document.getElementById("slice").innerHTML = section;
}

// A function using toUpperCase() method
function toUpperCaseFunction() {
    let greeting = document.getElementById("to_UpperCase").innerHTML;
    document.getElementById("to_UpperCase").innerHTML = greeting.toUpperCase();
}

// A function using search() method
function searchFunction() {
    let sentence = "The sky is the limit.";
    let position = sentence.search("sky");
    document.getElementById("search").innerHTML = position;
}

// A function using toString() method
function to_stringFunction() {
    var X = 2025;
    document.getElementById("to_string").innerHTML = X.toString()
}

// A function using toPrecision() method
function to_PrecisionFunction() {
    var x = 123.456789;
    document.getElementById("to_Precision").innerHTML = x.toPrecision(5);
}

// A function using toFixed() method
function to_FixedFunction() {
    var num = 23.456789;
    document.getElementById("to_Fixed").innerHTML = num.toFixed(3);
}

// A function unsing valueOf() method
function value_Of_Function() {
    var text = "This is a string.";
    document.getElementById("value_Of").innerHTML = text.valueOf();
}