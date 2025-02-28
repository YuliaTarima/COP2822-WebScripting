// Wait for the DOM to fully load before running the script
document.addEventListener("DOMContentLoaded", function () {
    // Select the submit button
    const submitButton = document.getElementById("submit");

    // Add a click event listener to the submit button
    submitButton.addEventListener("click", function () {
        /// Retrieve the values from the input fields
        // Get name input and remove whitespace
        const name = document.getElementById("name").value.trim();
        // Get email input and remove whitespace
        const email = document.getElementById("email").value.trim();
        // Get phone input and remove whitespace
        const phone = document.getElementById("phone").value.trim();

        // Check if any of the input fields are empty
        if (!name || !email || !phone) {
            // Display an alert if any field is empty
            alert("Please fill in all fields before submitting.");
        } else {
            if (!(isValidPhoneNumber(phone))) {
                // Display an alert if phone number is invalid
                alert("Please enter a valid phone number.");
            } else if (!(isValidEmail(email))) {
                // Display an alert if email is invalid
                alert("Please enter a valid email address.");
            } else if (!(isValidName(name))) {
                // Display an alert if name is invalid
                alert("Please enter a valid name.");
            }
            else {
                // Display a success message if all fields are filled
                alert("Thank you!");
            }
        }
    });
});

function isValidPhoneNumber(phoneNumber) {
    // Remove any non-digit characters (spaces, dashes, parentheses, etc.)
    const cleanedPhoneNumber = phoneNumber.replace(/\D/g, '');

    // Check for common phone number patterns
    const phoneRegex = /^(1|\+1)?\s*(\()?\d{3}(\))?[\s.-]*\d{3}[\s.-]*\d{4}$/;

    return phoneRegex.test(cleanedPhoneNumber);
}

function isValidEmail(email) {
    // Basic email regex (not perfect, but covers most cases)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidName(name) {
    // Basic name validation: letters, spaces, hyphens, and apostrophes allowed
    const nameRegex = /^[a-zA-Z\s'-]+$/;
    return nameRegex.test(name);
}