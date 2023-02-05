//  Select start button elements
var time = 0;
//  Declare questions and choices button elements
var questionEl = document.querySelector("#questions");
var choiceEl = document.querySelector("#choices");
var countEl = document.querySelector("#timer");
//Declare an array of words that the user will answer
var answers = ["variable","array", "styling", "object", "function", "string", "boolean"];
function startQuiz() {
  document.getElementById("question").innerHTML = "Answer the first question";
}

// Start button that when clicked a timer starts and the first question appears

// Updates count on page
function setCounterText() {
  time++
  countEl.textContent = time;
}

// Attach event listener to 'start quiz' button
start.addEventListener("click", function() {
     time ++ 
     setCounterText();
  });
  console.log("Time count: " + time);

  // Attach event listener to question title button element
  start.addEventListener("click", function() {
    if (time > 0) {
     time ++;
     questionEl[];
    }
  });

  // Update the score count on page
function setCounterScore() {
  score.textContent = score++;
}
  //Display set of questions 
 //#questions
 // Attach event listener to question title button element

  //Create answers with buttons, 
  // .choices
  
  //and each button has a click function
 //.choices button
  //go to the next question

  //Compare the answers, if the score is correct then increment the score
var score = 0;
function finalScore() {
  if (choice === true)
  score++
  //If the answer clicked was incorrect then subtract time from the clock
 else time = time-10;
}

//check the timer, if it goes to 0 then stop the game

//Add up to the final score and when the game ends, display their score and give the user the ability to save their initials and their score

//prevent default in order to retain the data input from user
setInterval(time, 1000);