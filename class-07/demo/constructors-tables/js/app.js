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
//**  DOM MANIPULATION STEP 1: WINDOW INTO THE DOM
// 1st option: document.getElementById ==> method for grabbing tag by its ID
// 2nd option: doucment.querySelector ==> first instance of the passed in tag, ID, or class in your HTML
let kittenSection = document.getElementById('kittenProfiles');

// Habe a variable to reference your existing objects once they've been created
let kittenCaboodle = [];

// #pragma: HELPER FUNCTIONS - UTILITIES
// helper funciton: a function used by another function OR a method to do some processing
// grabbed from MDN docs
function randomAge(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function renderAll() {
  for (let i = 0; i < kittenCaboodle.length; i++) {
    kittenCaboodle[i].setAge();
    kittenCaboodle[i].render();
  }
}

// #pragma: CONSTRUCTOR FUNCTION
function Kitten(name, interests, isGoodWithKids, isGoodWithCats, isGoodWithDogs, photo) {
  this.age = 0;
  this.name = name;
  this.interests = interests;
  this.isGoodWithKids = isGoodWithKids;
  this.isGoodWithCats = isGoodWithCats;
  this.isGoodWithDogs = isGoodWithDogs;
  this.photo = photo;

  kittenCaboodle.push(this);
}

// #pragma: PROTOTYPE METHODS

Kitten.prototype.setAge = function() {
  this.age = randomAge(3, 12);
}

Kitten.prototype.render = function() {
      let articleElem = document.createElement('article');
      kittenSection.appendChild(articleElem);
  
      let h2Elem = document.createElement('h2');
      h2Elem.textContent = this.name;
      articleElem.appendChild(h2Elem);
  
      let pElem = document.createElement('p');
      pElem.textContent = `${this.name} is ${this.age} months old`
      articleElem.appendChild(pElem);
  
      let ulElem = document.createElement('ul');
      articleElem.appendChild(ulElem);

      for(let i = 0; i < this.interests.length; i++) {
        let liElem = document.createElement('li');
        liElem.textContent = this.interests[i];
        ulElem.appendChild(liElem);
      }
  
      let imgElem = document.createElement('img');
      imgElem.src = this.photo;
      imgElem.alt = `${this.photo} is an adorable ${this.age} month old kitten`;
      articleElem.appendChild(imgElem);

      // *** DOM MANIPULATION TO CREATE A TABLE ***
      // YOU SHOULD ALREADY HAVE A TABLE IN YOUR SALES.HTML -- NO NEED TO CREATE A <table> IN YOUR LAB
      let tableElem = document.createElement('table');
      articleElem.appendChild(tableElem);

      // tr would be your ul from your list
      let row1 = document.createElement('tr');
      tableElem.appendChild(row1);

      // create content (td or th) for the table row => li element from your list
      let th1Elem = document.createElement('th');
      th1Elem.textContent = 'Good with Kids';
      row1.appendChild(th1Elem);

      let th2Elem = document.createElement('th');
      th2Elem.textContent = 'Good with Dogs';
      row1.appendChild(th2Elem);

      let th3Elem = document.createElement('th');
      th3Elem.textContent = 'Good with Other Cats';
      row1.appendChild(th3Elem);

      // creating our first row with values
      let row2 = document.createElement('tr');
      tableElem.appendChild(row2);

      let td1Elem = document.createElement('td');
      td1Elem.textContent = this.isGoodWithKids;
      row2.appendChild(td1Elem);

      let td2Elem = document.createElement('td');
      td2Elem.textContent = this.isGoodWithDogs;
      row2.appendChild(td2Elem);

      let td3Elem = document.createElement('td');
      td3Elem.textContent = this.isGoodWithCats;
      row2.appendChild(td3Elem);
}


// #pragma: EXECUTABLE CODE
new Kitten('Frankie', ['sleeping', 'toys', 'wet food'], true, true, true, 'images/frankie.jpeg');
new Kitten('Jumper', ['jumping', 'toys', 'treats'], true, false, true, 'images/jumper.jpeg');
new Kitten('Serena', ['sleeping', 'walks', 'hunting'], false, false, false, 'images/serena.jpeg');

renderAll();

// frankie.setAge();
// frankie.render();
// jumper.setAge();
// jumper.render();


// #pragma: OBJECT LITERALS
// let frankie = {
  //   name: 'Frankie',
  //   age: 0,
  //   interests: ['sleeping', 'toys', 'wet food'],
  //   isGoodWithKids: true,
  //   isGoodWithDogs: true,
  //   isGoodWithCats: true,
  //   photo: 'images/frankie.jpeg',
  //   setAge: function() {
  //     this.age = randomAge(3, 12);
  //   },
  //   render: function() {
  //     // ********* DOM MANIPULATION **********
  //     // EACH KITTY WILL BE RESPONSIBLE FOR RENDERING ITSELF IN HTML
  
  //     // ** STEP 2: CREATE THE ELEMENT
  //     let articleElem = document.createElement('article');
  
  //     // ** STEP 3: GIVE CONTEXT IF NECESSARY
  //     // skip for articleElem
  
  //     // ** STEP 4: ADD IT TO THE DOM ---> parent.appendChild(child)
  //     kittenSection.appendChild(articleElem);
  
  //     // create h2 element
  //     let h2Elem = document.createElement('h2');
  //     h2Elem.textContent = this.name;
  //     articleElem.appendChild(h2Elem);
  
  //     // create p tag
  //     let pElem = document.createElement('p');
  //     pElem.textContent = `${this.name} is ${this.age} months old`
  //     articleElem.appendChild(pElem);
  
  //     // *** LINES ---- will be helpful for your lab ***
  //     // create unordered list
  //     let ulElem = document.createElement('ul');
  //     articleElem.appendChild(ulElem);
  
  //     // create list items for unordered list
  //     for(let i = 0; i < this.interests.length; i++) {
  //       let liElem = document.createElement('li');
  //       liElem.textContent = this.interests[i];
  //       ulElem.appendChild(liElem);
  //     }
  
  //     // create image
  //     let imgElem = document.createElement('img');
  //     imgElem.src = this.photo;
  //     imgElem.alt = `${this.photo} is an adorable ${this.age} month old kitten`;
  //     articleElem.appendChild(imgElem);
  //   }
  // }
  
  // let jumper = {
  //   name: 'Jumper',
  //   age: 0,
  //   interests: ['jumping', 'treats', 'mice'],
  //   isGoodWithKids: true,
  //   isGoodWithDogs: false,
  //   isGoodWithCats: true,
  //   photo: 'images/jumper.jpeg',
  //   setAge: function() {
  //     this.age = randomAge(3, 12);
  //   },
  //   render: function() {
  //     // ********* DOM MANIPULATION **********
  //     // EACH KITTY WILL BE RESPONSIBLE FOR RENDERING ITSELF IN HTML
  
  //     // ** STEP 2: CREATE THE ELEMENT
  //     let articleElem = document.createElement('article');
  
  //     // ** STEP 3: GIVE CONTEXT IF NECESSARY
  //     // skip for articleElem
  
  //     // ** STEP 4: ADD IT TO THE DOM ---> parent.appendChild(child)
  //     kittenSection.appendChild(articleElem);
  
  //     // create h2 element
  //     let h2Elem = document.createElement('h2');
  //     h2Elem.textContent = this.name;
  //     articleElem.appendChild(h2Elem);
  
  //     // create p tag
  //     let pElem = document.createElement('p');
  //     pElem.textContent = `${this.name} is ${this.age} months old`
  //     articleElem.appendChild(pElem);
  
  //     // *** LINES ---- will be helpful for your lab ***
  //     // create unordered list
  //     let ulElem = document.createElement('ul');
  //     articleElem.appendChild(ulElem);
  
  //     // create list items for unordered list
  //     for(let i = 0; i < this.interests.length; i++) {
  //       let liElem = document.createElement('li');
  //       liElem.textContent = this.interests[i];
  //       ulElem.appendChild(liElem);
  //     }
  
  //     // create image
  //     let imgElem = document.createElement('img');
  //     imgElem.src = this.photo;
  //     imgElem.alt = `${this.photo} is an adorable ${this.age} month old kitten`;
  //     articleElem.appendChild(imgElem);
  //   }
  // }