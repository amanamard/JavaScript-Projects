// Function using + operator
function myFunction() {
    
    // Creating and assigning variables
    var A = "This is the beginning of my paragraph";
    var B = " and this is the end of my paragraph.";

    // Using document.getElementById()
    document.getElementById("text").innerHTML = A + B;
}

// Function using += operator
function myConcatenateFunction() {

    // Creating and assigning a variable
    var mySentence = "This is the sentence";

    // Concatenating the variable
    mySentence += " of my operator assignment."

    // Using document.getElementById()
    document.getElementById("concatenate").innerHTML = mySentence;
}