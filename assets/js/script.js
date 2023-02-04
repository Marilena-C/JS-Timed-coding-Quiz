var count = 0;
//  Select start button elements
var time = 0;
var incrementEl = document.querySelector("#increment");
var decrementEl = document.querySelector("#decrement");
var countEl = document.querySelector("#time");
function startQuiz() {
  document.getElementById("question").innerHTML = "Answer the first question";
}

//Add start button that when clicked a timer starts and the first question appears
button.addEventListener("click", function() {
  if (count > 0) {
   incrementEl ++ 
  }
  console.log("Time count: " + incrementEl);

  //Display set of questions 
 #questions

  //Create answers with buttons, 
   .choices
  
  //and each button has a click function
 .choices button
  //go to the next question

  //Compare the answers, if the score is correct then increment the score
var score = 0;
function finalScore() {
  if (choice === true)
  score++
  //If the answer clicked was incorrect then subtract time from the clock
 else time--
}

//check the timer, if it goes to 0 then stop the game




// Update the score and the timer count on page
function setCounterText() {
  countEl.textContent = count;
}
// Attach event listener to increment button element
incrementEl.addEventListener("click", function() {
  count++;
  setCounterText();
})

})

//Add up to the final score and when the game ends, display their score and give the user the ability to save their initials and their score

//prevent default in order to retain the data input from user
