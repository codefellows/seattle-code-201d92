'use strict';

console.log('hello world');

let visitorName = prompt('What is your name?');

alert(`Welcome to my site ${visitorName}! Please answer yes or no to the following questions.`);

let questionOneGuess = prompt('Do I have pets?').toUpperCase();
//                      'yes'.toUpperCase()
//                      'YES'

if(questionOneGuess === 'YES' || questionOneGuess === 'Y') {
  alert('Correct!');
} else if (questionOneGuess === 'NO' || questionOneGuess === 'N') {
  alert('Incorrect, I have 2 cats.');
}

alert(`Thanks for playing, ${visitorName}. Thanks for coming to my site!`);