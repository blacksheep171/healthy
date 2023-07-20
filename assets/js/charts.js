const DATA_COUNT = 12;
const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};

const labels = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]
const data = {
  labels: labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [ 
        90, 85, 50, 63, 55, 45, 56, 43, 40, 36, 32, 37 
      ],
      borderColor: 'yellow',
      backgroundColor: 'yellow',
    },
    {
      label: 'Dataset 2',
      data: [ 90, 80, 57, 53, 43, 40, 30, 27, 25, 20, 15, 10 ],
      borderColor: 'green',
      backgroundColor: 'green',
    }
  ]
};

const config = {
    type: 'line',
    data: data,
    options: {
      responsive: true,
      plugins: {
        title: {
          display: false,
          text: 'Suggested Min and Max Settings'
        },
        legend: false
      },
      scales: {
        x: {
          title: {
            display: false,
          },
          ticks: {
            color: 'white',
            callback: function(value, index, ticks) {
                return value + '月';
            }
          },
          grid: {
            color: '#777777',
          },
        },
        y: {
          beginAtZero: true,
          title: {
            display: false
          },
          suggestedMin: 50,
          suggestedMax: 80,
          min: 0,
          max: 100,
          ticks: {
            display: false,
            stepSize: 10
          },
          borderWidth: 10,
          grid : {
            display : false,
          },
          gridLines: {
            display: false
          },
        },
      }
    },
};


const ctx = document.getElementById('chartContainer')

const myChart = new Chart(ctx, config);