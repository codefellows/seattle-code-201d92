'use strict';

// #pragma: GLOBAL VARIABLES + WINDOW INTO DOM
// FOR LAB CREATE A GLOBAL ARRAY WITH SHOP HOURS

let shopHours = [
  '6am',
  '7am',
  '8am',
  '9am',
  '10am',
  '11am',
  '12am',
  '1pm',
  '2pm',
  '3pm',
  '4pm',
  '5pm',
  '6pm',
  '7pm',
  '8pm'
];

//**  DOM MANIPULATION STEP 1: WINDOW INTO THE DOM

let shopSection = document.getElementById('shopProfiles');

console.dir(shopSection);

// #pragma: HELPER FUNCTIONS - UTILITIES

// grabbed from MDN docs
function randomCust(min, max) {
  let customers = [];
  for (let i = 0; i < shopHours.length; i++) {
    let randomCustomers = Math.floor(Math.random() * (max - min + 1) + min);
    customers.push(randomCustomers);
  }
  return customers;
}

function randomCookie (customersArr, cookiesSold) {
  let cookieAvg = [];
  console.log(customersArr);

  for (let i = 0; i < customersArr.length; i++) {
    let randomCookie = Math.ceil(customersArr[i] * cookiesSold);
    cookieAvg.push(randomCookie);
  }

  return cookieAvg;
}
// #pragma: OBJECT LITERALS



let seattleShop = {
  location: 'Seattle',
  minCustomer: 23,
  maxCustomer: 65,
  avgCookieSale: 6.3,
  cust: [],
  cookies: [],

  render: function () {
    this.cookies = randomCookie(this.cust, this.avgCookieSale);

    // ********* DOM MANIPULATION **********
    // ** STEP 2: CREATE THE ELEMENT

    let articleElem = document.createElement('article');
    // ** STEP 3: GIVE CONTEXT IF NECESSARY
    // skip for articleElem

    // ** STEP 4: ADD IT TO THE DOM ---> parent.appendChild(child)
    /*e
      <div></div>
    */
    shopSection.appendChild(articleElem);
    /*
      <div>
        <artcile></article>
      </div>
    */

    //create h2 element

    let h2Elem = document.createElement('h2'); // <h2></h2>
    h2Elem.textContent = this.location; // <h2>Seattle</h2>
    articleElem.appendChild(h2Elem); 
    /*
     <div>
      <article>
        <h2>Seattle</h2>
      </article>
     </div> 
     */

    //create unordered list

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);
    /*
     <div>
      <article>
        <h2>Seattle</h2>
        <ul></ul>
      </article>
     </div> 
     */

    for (let i = 0; i < shopHours.length; i++) {
      let liElem = document.createElement('li'); // <li></li>
      liElem.textContent = `${shopHours[i]}: ${this.cookies[i]} cookies`;
      // <li>6am: 55 cookies</li>
      ulElem.appendChild(liElem);
      /*
     <div>
      <article>
        <h2>Seattle</h2>
        <ul>
          <li>6am: 55 cookies</li>
          <li>7am: 120 cookies</li>
        </ul>
      </article>
     </div> 
     */
    }
  }
};
seattleShop.cust = randomCust(seattleShop.minCustomer, seattleShop.maxCustomer);
seattleShop.render();