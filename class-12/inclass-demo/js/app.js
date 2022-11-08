'use strict';

console.log('hey there hey!');

// #pragma Globals

let voteCount = 15;
let goatArray = [];

// #pragma DOM References

let imageContainer = document.getElementById('img-container');
let imgOne = document.getElementById('img-one');
let imgTwo = document.getElementById('img-two');

let resultsBtn = document.getElementById('show-results-btn');
let resultsContainer = document.getElementById('results-container');

// *** CANVAS DOM REFERENCE (FOR CHART) ***
let chartContext = document.getElementById('my-chart').getContext('2d');

// #pragma Helper/Utility Functions
function randomGoat() {
  return Math.floor(Math.random() * goatArray.length);
}

function renderImages() {
  let imgOneRandom = randomGoat();
  let imgTwoRandom = randomGoat();

  while (imgOneRandom === imgTwoRandom) {
    imgTwoRandom = randomGoat();
  }

  imgOne.src = goatArray[imgOneRandom].imagePath;
  imgTwo.src = goatArray[imgTwoRandom].imagePath;

  imgOne.alt = goatArray[imgOneRandom].name;
  imgTwo.alt = goatArray[imgTwoRandom].name;

  goatArray[imgOneRandom].views++;
  goatArray[imgTwoRandom].views++;
}

// #pragma Event Handlers

function handleShowResults(event) {
  // only display results after 15 rounds
  if (voteCount === 0) {
    // show the results of our voting rounds
    // *** CHART OBJECT CREATION ***
    let goatNames = [];
    let goatViews = [];
    let goatClicks = [];

    for (let i = 0; i < goatArray.length; i++) {
      goatNames.push(goatArray[i].name);
      goatViews.push(goatArray[i].views);
      goatClicks.push(goatArray[i].clicks);
    }

    let chartConfig = {
      type: 'bar',
      data: {
        labels: goatNames,
        datasets: [{
          label: '# of Views',
          data: goatViews,
          backgroundColor: 'red',
        }, {
          label: '# of Clicks',
          data: goatClicks,
          backgroundColor: 'green',
        }],
      },
      options: {},
    };

    let myChart = new Chart(chartContext, chartConfig);
    // make sure the results can only render once
    resultsBtn.removeEventListener('click', handleShowResults);
  }
}

function handleImageClick(event) {
  // console.dir(event.target);

  let goatClicked = event.target.alt;

  console.log('image clicked >>>', goatClicked);

  for (let i = 0; i < goatArray.length; i++) {
    if (goatArray[i].name === goatClicked) {
      // adds vote counts
      goatArray[i].clicks++;
    }
  }

  // decrement out vote count to only allow 15 total
  voteCount--;

  // render new images
  renderImages();

  // after 15 votes... stop listening for clicks
  if (voteCount === 0) {
    imageContainer.removeEventListener('click', handleImageClick);
  }
}

// #pragma Goat Constructor

function Goat(name, fileExtension = 'jpg') {
  this.name = name;
  this.imagePath = `img/${name}.${fileExtension}`;
  this.clicks = 0;
  this.views = 0;
}

// #pragma Executable

let russell = new Goat('bill_russell');
let lebron = new Goat('lebron_james');
let hamm = new Goat('mia_hamm');
let jordan = new Goat('michael_jordan');
let phelps = new Goat('michael_phelps');
let serena = new Goat('serena_williams');
let sue = new Goat('sue_bird');
let brady = new Goat('tom_brady');
let bolt = new Goat('usain_bolt');
let gretzky = new Goat('wayne_gretzky');

goatArray.push(russell, lebron, hamm, jordan, phelps, serena, sue, brady, bolt, gretzky);

renderImages();

imageContainer.addEventListener('click', handleImageClick);
resultsBtn.addEventListener('click', handleShowResults);