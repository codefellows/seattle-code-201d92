# Class06 Lecture Notes

## Objects

### What are they?

- Data type // data structure
- Convenient and powerful way to group data functions
- Function that are stored within objects are referred to as methods
- Data is stored in comma separated key/value pairs


```js
// Array
let myArr = ['Rey', 25, true, 'Instructor'];

let person = {
  name: 'Rey',
  age: 25,
  isRemote: true,
  title: 'Instructor',
};
```

## The DOM and DOM Manipulation

- The 'DOM' = Document Object Model
- HTML and CSS come together in the browser - JS reads this as an object

```js
// JS needs a window into yout HTML or into the DOM
//  STEP 1 - Grab the window into the DOM
let sectionElem = document.getElementbyId('my-section'); // grabs element by ID name
let bodyElem = document.querySelector('body'); // grabs element by element name

// STEP 2 - Create elements // h2Element = <h2></h2>
let h2Element = document.createElement('h2');

// STEP 3 - Give element context (if necessary)
h2Element.textContect = 'Hey! I\'m an h2!'
// <h2>Hey! I'm an h2!</h2>

// STEP 4 - Add it to the DOM
sectionElem.appendChild(h2Element);
/*
    <section>
      <h2>Hey! I'm an h2!</h2>
    </section>
*/
```