'use strict';

// ! FORM DEMO
// #pragma Step 1: GRAB THE ELEMENT WE WANT TO LISTEN TO
let myForm = document.getElementById('my-form');

// grab select tag from HTML
let realityTvSelection = document.querySelector('#realityTv');

// #pragma Step 3: DEFINE OUR EVENT LISTENER (OR CALLBACK FUNCTION)
function handleSubmit(event) {
  event.preventDefault();

  let name = event.target.firstName.value;
  console.log(name);

  let age = ~~event.target.age.value;
  console.log(age);

  let someNum = 5 + age;
  console.log(someNum);

  console.log(event);

  // Access selected option from select tag at time of submit
  // link to resource: https://stackoverflow.com/questions/64284425/select-specific-option-event-handler-javascript
  let selection = tvSelection.value;
  console.log(selection);

  myForm.reset();
}

//  #pragma Step 2: ADD EVENT LISTENER - 2 ARGS - EVENT TYPE, CALLBACK FUNCTION (OR EVENT HANDLER) == FUNCTION PASSED AS AN ARGUMENT TO ANOTHER FUNCTION
myForm.addEventListener('submit', handleSubmit);


// ! BOX CLICK DEMO
// #pragma Step 1: GRAB THE ELEMENT WE WANT TO LISTEN TO
let myContainer = document.getElementById('container');

// ** WINDOW INTO DOM FOR DOM MANIPULATION **
let parentEl = document.getElementById('results');


// #pragma Step 3: DEFINE OUR EVENT LISTENER (OR CALLBACK FUNCTION)
function handleClick(event) {
  console.log(event);
  if (event.target.id === 'box-one') {
    let pEl = document.createElement('p');
    pEl.textContent = 'Box 1 was clicked!';
    parentEl.appendChild(pEl);
  } else if (event.target.id === 'box-two') {
    let pEl = document.createElement('p');
    pEl.textContent = 'Box 2 was clicked!';
    parentEl.appendChild(pEl);
  } else if (event.target.id === 'box-three') {
    let pEl = document.createElement('p');
    pEl.textContent = 'Box 3 was clicked!';
    parentEl.appendChild(pEl);
  } else {
    let pEl = document.createElement('p');
    pEl.textContent = 'CLICK THE BOXES ONLY!';
    parentEl.appendChild(pEl);
  }
}

//  #pragma Step 2: ADD EVENT LISTENER - 2 ARGS - EVENT TYPE, CALLBACK FUNCTION (OR EVENT HANDLER) == FUNCTION PASSED AS AN ARGUMENT TO ANOTHER FUNCTION
myContainer.addEventListener('click', handleClick);
