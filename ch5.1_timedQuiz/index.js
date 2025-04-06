"use strict";

// Constants to set the time given for the quiz in seconds
// and the correct answers to each quiz question
const quizTime = 90;
const correctAnswers = ["10", "4", "-6", "5", "-7"];

// Elements in the quiz page
let startQuiz = document.getElementById("startquiz");
let quizClock = document.getElementById("quizclock");
let overlay = document.getElementById("overlay");

// Initialize the quiz time
quizClock.value = quizTime;
let timeLeft = quizTime;

// Declare the ID for timed commands
let timeID;
// Node list for questions
let questionList = document.querySelectorAll("div#quiz input");

// onclick event handler for quiz start button
startQuiz.onclick = function () {
   overlay.className = "showquiz";
   timeID = setInterval(countdown, 1000);
}



   // Call the function when needed
   writeTable();


//countdown function
function countdown() {
   if (timeLeft === 0) {
      clearInterval(timeID);
      let totalCorrect = checkAnswers();
      if (totalCorrect === correctAnswers.length) {
         window.alert("Congratulations! All answers are correct.")
      } else {
         window.alert("Correct answers: " + totalCorrect + " out of " + correctAnswers.length);
         timeLeft = quizTime;
         quizClock.value = timeLeft;
         overlay.className = "hidequiz"
      }
   } else {
      timeLeft--;
      quizClock.value = timeLeft;
   }
}

/*------------- Function to check the student answers ----------------*/
function checkAnswers() {
   let correctCount = 0;

   for (let i = 0; i < questionList.length; i++) {
      if (questionList[i].value === correctAnswers[i]) {
         correctCount++;
         questionList[i].className = "";
      } else {
         questionList[i].className = "wronganswer";
      }
   }
   return correctCount;
}

/*------------- Function to write table dynamically ----------------*/
function writeTable() {
   const quizQuestions = [
      {eq: '5 + 2<em>x</em> = 25', icon: 'question-circle'},
      {eq: '30 &ndash; 5<em>x</em> = 10', icon: 'check-circle'},
      {eq: '6 + 3<em>x</em> = &ndash;12', icon: 'times-circle'},
      {eq: '44 &ndash; 12<em>x</em> = &ndash;16', icon: 'question-circle'},
      {eq: '48 + 6<em>x</em> = 6', icon: 'question-circle'}
   ];

   const table = document.getElementById('quizTable');
   table.innerHTML = ''; // Clear existing content if any

   quizQuestions.forEach((item, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `
      <td>${index + 1})</td>
      <td>${item.eq}</td>
      <td><em>x</em> = <input id="question${index + 1}" /></td>
      <td><span id="answer${index + 1}"><i class="fa fa-${item.icon}"></i></span></td>
    `;
      table.appendChild(row);
   });
}