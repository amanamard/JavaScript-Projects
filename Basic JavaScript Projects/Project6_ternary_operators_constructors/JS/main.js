// A function using a ternary operator to determine who can ride or not.
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value; // Assigning the input value to the variable Height
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough"; // Using the ternary operator to assign a value to Can_ride based on the condition
    document.getElementById("Ride").innerHTML = Can_ride + " to ride."; // Displaying a paragraph according to the Height 
}

// New Keyword Assignment
function Student(Name, Age, Address, Contact, Grade, Teacher) { // Student constructor
    this.Student_Name = Name;
    this.Student_Age = Age;
    this.Student_Address = Address;
    this.Student_Contact = Contact;
    this.Student_Grade = Grade;
    this.Student_Teacher = Teacher;
}

var Annabelle = new Student("Annabelle A.", 7, "123 Cresthaven Rd", "123-456-7890", "Grade 2", "Mrs Dumars"); // Creating new instance of Student object
var Ariane = new Student("Ariane G.", 5, "321 Fanshawe Dr", "321-654-9870", "K5", "Mrs L. K."); // Creating new instance of Student object

// A function to display a result of the constructor function
function myFunction() {
    document.getElementById("New_and_This").innerHTML = Annabelle.Student_Name + 
    " teacher's name in " + Annabelle.Student_Grade + " is " + Annabelle.Student_Teacher + ".";
}

// Example of a nested function
function helloFunction() {
    document.getElementById("Nested_Function").innerHTML = Hello();
    function Hello() {
        var Greeting = "Hello";
        function Greeting_You() { // Nested function
            Greeting += " there!"; 
        }
        Greeting_You();
        return Greeting;
    }
}
