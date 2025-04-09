"use strict";
/*   ******* Requirement 1: Enter your name and the date in the comment section of each file *******

     JavaScript 7th Edition
     Chapter 5
     Hands-on Project 5-1

     Author: Yulia Tarima
     Date: 04/08/2025
*/

/*   ******* Requirement 3: declare the timeID variable but do not set an initial value. */
let quizTime;

/*   ******* Requirement 4: Declare the questionList variable, storing in it the node list
     created by the querySelectorAll() method using “div#quiz input” as the CSS selector. *******
 */
const questionList = document.querySelectorAll("div#quiz input");
// Elements in the quiz page
const startQuiz = document.getElementById("startquiz");
const quizClock = document.getElementById("quizclock");
const overlay = document.getElementById("overlay");

// Constants to set the correct answers to each quiz question
const correctAnswers = ["10", "4", "-6", "5", "-7"];

// Initialize the quiz time
quizTime = 90;
let timeLeft = quizTime;
// Set the countdown time
quizClock.value = quizTime;
// Declare the ID for timed commands
let timeID;

/*   ******* Requirement 5:  Add an onclick event handler to the startQuiz object, ******* */
startQuiz.onclick = function () {
    //running an anonymous function that sets the class attribute of the overlay object to “showquiz”
    overlay.className = "showquiz";
    questionList.forEach(element => element.className = "");
    // and repeats the countdown() function every 1 second (every 1000 milliseconds),
    // storing the id of the timed command in the global timeID variable
    timeID = setInterval(countdown, 1000);
}

/*   ******* Requirement 6: Create the countdown() function to update the quiz clock. ******* */
function countdown() {
    // Within the function create an if else statement that tests whether the value of the timeLeft variable is equal to 0.
    // If it is equal to 0, do the following:
    if (timeLeft === 0) {
        // Use the clearInterval() method to cancel the timed command with the variable timeID.
        clearInterval(timeID);
        // Declare a variable named totalCorrect and set it equal to the value returned by the checkAnswers() function.
        let totalCorrect = checkAnswers();
        setTimeout(() => {
            // small delay gives time to repaint
            window.alert(
                totalCorrect === correctAnswers.length
                    ? "Congratulations! All answers are correct."
                    : "Correct answers: " + totalCorrect + " out of " + correctAnswers.length
            );
            // change the class attribute of the overlay object to “hidequiz”.
            overlay.className = "hidequiz";
        }, 50);
        // change the value of the timeLeft variable to quizTime,
        timeLeft = quizTime;
        /*   ******* Requirement 7: Otherwise, if the timeLeft variable is not equal 0 *******/
    } else {
        // Decrease the value of timeLeft by 1.
        timeLeft--;
    }
    // Set quickClock.value to the value of the timeLeft variable.
    quizClock.value = timeLeft;
}

/*------------- Function to check the student answers ----------------*/
function checkAnswers() {
    let correctCount = 0;
    for (let i = 0; i < questionList.length; i++) {
        const isCorrect = questionList[i].value.trim() === correctAnswers[i];
        isCorrect ? correctCount++ : questionList[i].className = "wronganswer";
    }
    return correctCount;
}



