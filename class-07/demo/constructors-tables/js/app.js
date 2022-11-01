'use strict';

// problem domain: the Seattle Kitten Rescue has tons of kittens who need good homes. One of the best ways to reach prospective adoptive homes is to have profiles for each kitten available on a website.

// ? what are we going to display?
// Kitten
// TODO: determine what each kitten's profile should show:
// * name
// * random age assigned via a function (3-12 months)
// * a list of thier interests
// * are they good with kids
// * are they good with dogs
// * are they good with other cats
// * photo

// #pragma: GLOBAL VARIABLES + WINDOW INTO DOM
// FOR LAB CREATE A GLOBAL ARRAY WITH SHOP HOURS
let shopHours = ['6am', '7am', '...', '8pm'];

//**  DOM MANIPULATION STEP 1: WINDOW INTO THE DOM
// 1st option: document.getElementById ==> method for grabbing tag by its ID
// 2nd option: doucment.querySelector ==> first instance of the passed in tag, ID, or class in your HTML
let kittenSection = document.getElementById('kittenProfiles');

console.dir(kittenSection);

// #pragma: HELPER FUNCTIONS - UTILITIES
// helper funciton: a function used by another function OR a method to do some processing
// grabbed from MDN docs
function randomAge(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// #pragma: OBJECT LITERALS

let frankie = {
  name: 'Frankie',
  age: 0,
  interests: ['sleeping', 'toys', 'wet food'],
  isGoodWithKids: true,
  isGoodWithDogs: true,
  isGoodWithCats: true,
  photo: 'images/frankie.jpeg',
  setAge: function() {
    this.age = randomAge(3, 12);
  },
  render: function() {
    // ********* DOM MANIPULATION **********
    // EACH KITTY WILL BE RESPONSIBLE FOR RENDERING ITSELF IN HTML

    // ** STEP 2: CREATE THE ELEMENT
    let articleElem = document.createElement('article');

    // ** STEP 3: GIVE CONTEXT IF NECESSARY
    // skip for articleElem

    // ** STEP 4: ADD IT TO THE DOM ---> parent.appendChild(child)
    kittenSection.appendChild(articleElem);

    // create h2 element
    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    articleElem.appendChild(h2Elem);

    // create p tag
    let pElem = document.createElement('p');
    pElem.textContent = `${this.name} is ${this.age} months old`
    articleElem.appendChild(pElem);

    // *** LINES ---- will be helpful for your lab ***
    // create unordered list
    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    // create list items for unordered list
    for(let i = 0; i < this.interests.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = this.interests[i];
      ulElem.appendChild(liElem);
    }

    // create image
    let imgElem = document.createElement('img');
    imgElem.src = this.photo;
    imgElem.alt = `${this.photo} is an adorable ${this.age} month old kitten`;
    articleElem.appendChild(imgElem);
  }
}

let jumper = {
  name: 'Jumper',
  age: 0,
  interests: ['jumping', 'treats', 'mice'],
  isGoodWithKids: true,
  isGoodWithDogs: false,
  isGoodWithCats: true,
  photo: 'images/jumper.jpeg',
  setAge: function() {
    this.age = randomAge(3, 12);
  },
  render: function() {
    // ********* DOM MANIPULATION **********
    // EACH KITTY WILL BE RESPONSIBLE FOR RENDERING ITSELF IN HTML

    // ** STEP 2: CREATE THE ELEMENT
    let articleElem = document.createElement('article');

    // ** STEP 3: GIVE CONTEXT IF NECESSARY
    // skip for articleElem

    // ** STEP 4: ADD IT TO THE DOM ---> parent.appendChild(child)
    kittenSection.appendChild(articleElem);

    // create h2 element
    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    articleElem.appendChild(h2Elem);

    // create p tag
    let pElem = document.createElement('p');
    pElem.textContent = `${this.name} is ${this.age} months old`
    articleElem.appendChild(pElem);

    // *** LINES ---- will be helpful for your lab ***
    // create unordered list
    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    // create list items for unordered list
    for(let i = 0; i < this.interests.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = this.interests[i];
      ulElem.appendChild(liElem);
    }

    // create image
    let imgElem = document.createElement('img');
    imgElem.src = this.photo;
    imgElem.alt = `${this.photo} is an adorable ${this.age} month old kitten`;
    articleElem.appendChild(imgElem);
  }
}

// #pragma: EXECUTABLE CODE
frankie.setAge();
frankie.render();
jumper.setAge();
jumper.render();