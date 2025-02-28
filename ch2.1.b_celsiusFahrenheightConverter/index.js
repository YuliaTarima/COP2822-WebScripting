document.addEventListener("DOMContentLoaded", function () {
    // Select the Fahrenheit and Celsius input fields
    const fInput = document.getElementById("fValue");
    const cInput = document.getElementById("cValue");

    // Only set default values if fields are empty
    if (!fInput.value) fInput.value = 32;
    if (!cInput.value) cInput.value = 0;

    // Function to check if the input value is a number
    function checkNumericInput(value, type) {
        const numValue = parseFloat(value);
        if (isNaN(numValue)) {
            // let the user know of the input error
            alert(`Please enter a valid numeric value for ${type}.`);
            console.log('checkNumericInput returns: ', parseFloat(value), 'for value ', value );
            // Indicate that the input is invalid
            return false;
        }
        // Indicate that the input is valid
        return true;
    }

    // Function to convert Fahrenheit to Celsius
    function convertFtoC() {
        // Get the Fahrenheit value and convert it to a number
        let fTemp = parseFloat(fInput.value);

        // Check if the input is a valid number
        if (!isNaN(fTemp)) {
            // Apply the conversion formula: C = (F - 32) / 1.8
            let cTemp = (fTemp - 32) / 1.8;

            // Update the Celsius input field, rounding to 2 decimal places
            cInput.value = cTemp.toFixed(2);
        }
    }

    // Function to convert Celsius to Fahrenheit
    function convertCtoF() {
        // Get the Celsius value and convert it to a number
        let cTemp = parseFloat(cInput.value);

        // Check if the input is a valid number
        if (!isNaN(cTemp)) {
            // Apply the conversion formula: F = C * 1.8 + 32
            let fTemp = cTemp * 1.8 + 32;

            // Update the Fahrenheit input field, rounding to 2 decimal places
            fInput.value = fTemp.toFixed(2);
        }
    }

    // Event Listener: Trigger conversion when the user **types** in the Fahrenheit field
    fInput.addEventListener("input", function () {
        convertFtoC(); // Calls the function to update the Celsius field
    });

    // Event Listener: Trigger conversion when the user **types** in the Celsius field
    cInput.addEventListener("input", function () {
        convertCtoF(); // Calls the function to update the Fahrenheit field
    });

    // Event Listener: Extra check on blur (when user presses Tab or clicks away) for Fahrenheit
    fInput.addEventListener("blur", function () {
        console.log("Tab or blur event detected on Fahrenheit field.");

        // Ensure input is a number
        if (!checkNumericInput(fInput.value, "Fahrenheit")) {
            return; // Exit if the input is invalid
        }

        convertFtoC(); // Ensures final conversion is accurate after tabbing out
    });

    /// Event Listener: Extra check on blur (when user presses Tab or clicks away) for Celsius
    cInput.addEventListener("blur", function () {
        console.log("Tab or blur event detected on Celsius field.");

        // Ensure input is a number
        if (!checkNumericInput(cInput.value, "Celsius")) {
            return; // Exit if the input is invalid
        }

        convertCtoF(); // Ensures final conversion is accurate after tabbing out
    });
});