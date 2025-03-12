// Defining a variable and assigning it a value using type coercion
var A = "21" + 1;

// A function showing type coercion
function coercion_Function() {
    document.getElementById("coercion").innerHTML = "This is an example of type coercion: A = \"21\" + 1 = " + A;
} 

// A function displaying the data type of the variable A
function dataType_Function() {
    var B = document.write(typeof A);
    document.getElementById("type").innerHTML = B;
}

// A function displaying NaN
function displayNaN_Function() {
    var B = 0 / 0;
    document.getElementById("nan").innerHTML = B;
}

// A function displaying true unsing isNaN()
function displayTrue_Function() {
    document.getElementById("true").innerHTML = isNaN('Number');
}

// A function displaying false using isNaN()
function displayFalse_Function() {
    document.getElementById("false").innerHTML = isNaN('00.005');
}

// A function displaying Infinity
function displayInfinity_Function() {
    var num1 = 3E308;
    document.getElementById("infinity").innerHTML = num1;
}

// A function displaying negative Infinity
function displayNegativeInfinity_Function() {
    var num2 = -2E308;
    document.getElementById("negativeInfinity").innerHTML = num2;
}

// A function using Boolean logic
function BooleanLogic_Function() {
    var D = (5 > 2);
    document.getElementById("boolean").innerHTML = D;
}

// A second function using Boolean logic
function BooleanLogic2_Function() {
    var D = (9 < 3); 
    document.getElementById("boolean2").innerHTML = D;
}

// Performing a math operation with the console.log() function
console.log(5 + 6);

// Displaying "false" in the console using Boolean logic
console.log(5 > 5);

// Displaying "true" using "=="
function BooleanLogic3_Function() {
    document.getElementById("boolean3").innerHTML = (5 == 5);
}

// Displaying "false" ussing "=="
function BooleanLogic4_Function() {
    document.getElementById("boolean4").innerHTML = (5 == 6);
}

// Return true by ensuring to match the data type and value
function BooleanLogic5_Function() {
    var A = 5;
    var B = 5;
    document.getElementById("boolean5").innerHTML = (A === B);
}

// Return false by writing a different data type and different value
function BooleanLogic6_Function() {
    var A = 5;
    var B = "five";
    document.getElementById("boolean6").innerHTML = (A === B);
}

// Return false by writing a different data type but the same value for both
function BooleanLogic7_Function() {
    var A = 5;
    var B = '5';
    document.getElementById("boolean7").innerHTML = (A === B);
}

// Return false by writing the same data type but a different value for both
function BooleanLogic8_Function() {
    var A = 5;
    var B = 6;
    document.getElementById("boolean8").innerHTML = (A === B);
}

// Displaying true using AND operator
function BooleanLogic9_Function() {
    var E = (5 == 5 && 5 == '5');
    document.getElementById("boolean9").innerHTML = E;
}

// Displaying false using AND operator
function BooleanLogic10_Function() {
    var E = (5 == 5 && 5 === '5');
    document.getElementById("boolean10").innerHTML = E;
}

// Displaying true using OR operator
function BooleanLogic11_Function() {
    var E = (5 == 5 || 5 === '5');
    document.getElementById("boolean11").innerHTML = E;
}

// Displaying false using OR opeartor
function BooleanLogic12_Function() {
    var E = (5 < 5 || 5 === '5');
    document.getElementById("boolean12").innerHTML = E;
}

// Displaying true using NOT operator
function BooleanLogic13_Function() {
    document.getElementById("boolean13").innerHTML = !(5 === '5');
}

// Displaying false using NOT operator
function BooleanLogic14_Function() {
    document.getElementById("boolean14").innerHTML = !(5 == '5');
}