// Add event handlers for each calculator button sending that buttons value
// to the runCalculator() function

// replace click with onclick
// The click property is not a valid event handler assignment. It should be onclick.
document.getElementById("button0").onclick = function () {
    runCalculator(0);
}

document.getElementById("button1").onclick = function () {
    runCalculator(1);
}

document.getElementById("button2").onclick = function () {
    runCalculator(2);
}

document.getElementById("button3").onclick = function () {
    runCalculator(3);
}

document.getElementById("button4").onclick = function () {
    runCalculator(4);
}

document.getElementById("button5").onclick = function () {
    runCalculator(5);
}

document.getElementById("button6").onclick = function () {
    runCalculator(6);
}

document.getElementById("button7").onclick = function () {
    runCalculator(7);
}

document.getElementById("button8").onclick = function () {
    runCalculator(8);
}

document.getElementById("button9").onclick = function () {
    runCalculator(9);
}

document.getElementById("buttonAdd").onclick = function () {
    runCalculator("+");
}

document.getElementById("buttonMinus").onclick = function () {
    // Case sensitivity in naming the functions: runcalculator vs runCalculator
    // JavaScript is case-sensitive!
    // runcalculator("-");
    runCalculator("-");
}

document.getElementById("buttonMultiply").onclick = function () {
    runCalculator("*");
}

// Parentheses should be used to define the function
// buttonDivide !== "buttonDivide"
document.getElementById("buttonDivide").onclick = function () {
    runCalculator("/");
}

document.getElementById("buttonDecimal").onclick = function () {
    runCalculator(".");
}

// Send an empty text string if the Enter key is clicked
document.getElementById("buttonEnter").onclick = function () {
    runCalculator();
}

// Clear the calculator window if the C key is clicked
// document.getElementById("buttonClear").onclick = clearCalculator();
// Immediately invokes clearCalculator during assignment,
// assigning its return value (likely undefined) to onclick.
// Assigning clearCalculator without parentheses passes the function reference correctly.
document.getElementById("buttonClear").onclick = function () {
    clearCalculator();
}


// Function to enter characters into the calculator window based on what is clicked

function runCalculator(character) {
    // Retrieve the characters in the calculator window
    let calcValue = document.getElementById("calcWindow").value;
    // Incorrect ternary operator syntaxis: ???
    //(character) ??? calcValue += character : calcValue += " = " + evalEq(calcValue) + "\n";

    // Add the character to the calculator string or if its empty (the enter key) evaluate the equation
    (character) ? calcValue += character : calcValue += " = " + evalEq(calcValue) + "\n";

    // Case sensitivity: calcwindow vs. calcWindow
    // document.getElementById("calcwindow").value ="";
    // Update the characters displayed in the calculator window.
    document.getElementById("calcWindow").value = calcValue;
}


// Function to clear the calculator window

function clearCalculator() {
    document.getElementById("calcWindow").value = "";
}

/* ===================================================================== */

// Function to evaluate a text string containing an equation, returning a numeric value to a specified number of decimals
function evalEq(textStr) {
    const lines = textStr.split(/\r?\n/);
    const lastLine = lines[lines.length - 1];
    const eqValue = eval(lastLine);
    return eqValue.toFixed(6);
}  