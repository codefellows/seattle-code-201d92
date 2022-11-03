'use strict';

// ! BOX CLICK DEMO
// #pragma Step 1:
let myContainer = document.getElementById('container');
let parentEl = document.getElementById('results');


// #pragma Step 3:
function handleClick(event) {
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

//  #pragma Step 2: 
myContainer.addEventListener('click', handleClick);
