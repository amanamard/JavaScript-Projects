// Creation of a function for the event handler
function outputAValue_Function() {
    
    // Creation of the object student
    var student = {

        // Creation of a dictionary
        firstName : "Peter",
        lastName : "Paul",
        age : 7,
        address : "45 Somerset Rd",
        contact : "123-456-7890",
        grade : "Grade 2",
        teacher : "Mrs Dumars"
    };

    // Removing contact value from the dictionary
    delete student.contact;
    
    // Method to output the value of the contact key
    document.getElementById("Dictionary").innerHTML = student.contact;
}