'use strict';

const ctx = document.getElementById('myChart').getContext('2d');

const myChartObject = {
  type: 'bar',
  data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green'],
      datasets: [{
          label: '# of Votes',
          data: [12, 8, 14, 20, 15, 2],
          backgroundColor: [
              'red',
          ],
          borderColor: [
              'red',
          ],
          borderWidth: 1
      }, {
        label: '# of Views',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
            'blue',
        ],
        borderColor: [
            'blue',
        ],
        borderWidth: 1
    }]
  },
  options: {
      scales: {
          y: {
              beginAtZero: true
          }
      }
  }
};

const myChart = new Chart(ctx, myChartObject);