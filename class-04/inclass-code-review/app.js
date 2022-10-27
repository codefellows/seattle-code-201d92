'use strict';

console.log('is this thing on?');

let score = 0;

       //  Add a 6th question to the guessing game
// // TODO that takes in a numeric input by prompting the user to guess a number.
// use prompt() to store input in a variable
// create a number to check against

// // TODO Indicates through an alert if the guess is “too high” 
// if input > myNumber ----> alert "too high"

// // TODO indicate through an alert if the guess is “too low”.
// if input < myNumber -----> alert "too low"

// // TODO Tell the user if they got the answer correct and stop guessing
// if input === myNumber ----> alert "correct"

// ? It should give the user exactly four opportunities to get the correct answer.
// // TODO After all attempts have been exhausted, tell the user the correct answer.
// ? Consider using a loop of some sort. 
//  guessesSoFar = 0
// if guessesSoFar === 4 ----> alert "myNumber was ${myNumber}"

// while loop

let correctNumber = 22;
let attempts = 4;

while (attempts > 0) {
  let userGuess = +prompt(`Guess a number between 1 and 50`);

  if (userGuess > correctNumber) {
    alert('too high');
  } else if (userGuess < correctNumber) {
    alert('too low');
  } else if (userGuess === correctNumber) {
    alert(`That's the corect answer!`);
    score++;
    break;
  }

  attempts--;
  if(attempts === 0) {
    alert(`The correct answer was ${correctNumber}`);
  }
}



// // TODO Add a 7th question that has multiple possible correct answers that are stored in an array.
// use prompt() to store userInput in a variable
// create an array with all possible answers

// ? Give the user 6 attempts to guess the correct answer.
// ? Consider using a loop of some sort for this question.
// // TODO or they run out of attempts.
// if attempts === 6 -> end guessing
// // TODO The guesses will end once the user guesses a correct answer 
// if guess === any element in array ---> alert correct; break;

// // TODO Display all the possible correct answers to the user.
// alert all element in the array

// FOR LOOP 

function questionSeven() {

  let halloweenStuff = ['black cats', 'pumpkins', 'candy', 'costumes'];

  for (let i = 0; i < 6; i++) { //!slow loop (runs 6)
    let halloweenGuess = prompt('Guess my favorite parts about Halloween').toLowerCase();

    for (let j = 0; j < halloweenStuff.length; j++) { //!fast loop (runs 24 times)
      if(halloweenGuess === halloweenStuff[j]) {
        alert("thats correct!");
        score++;
        i = 100;
        break;
      }
    }
  }

  alert(`All possible answers are: ${halloweenStuff}`);
}
questionSeven();


// // TODO Keep track of the total number of correct answers.
// // create global variable to hold number of correct answers
// // add to that number for each correct answer
// TODO  At the end tell them how many they got correct out of the 7 questions asked.
// alert number correct / 7

alert(`Score: ${score}/2`);