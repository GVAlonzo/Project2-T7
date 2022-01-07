console.log("Loaded plot.js");



//https://www.chartjs.org/docs/latest/samples/other-charts/bubble.html
//-Radius = avg check
//-Sales = y axis
//-Meals served = x- axis
//but first try to pull data from the mongodb to variables to switch into place 

// setup block
const data = {
    //also where to change labels to accurately reflect the info
    labels: ['Restaraunt 1', 'Restaraunt 2', 'Restaraunt 3', 'Restaraunt 4', 'Restaraunt 5', 'Restaraunt 6'],
    datasets: [{
        label: 'Restaraunt Facts',
        //this is where we can slide in the data call from the app.py route
        data: [
            {x: 1, y: 15, r: 2},
            {x: 2, y: 5, r: 5},
            {x: 3, y: 10, r: 7},
            {x: 4, y: 7, r: 9},
            {x: 5, y: 3, r: 11},
            {x: 6, y: 9, r: 15}
        ],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1,
        clip: {left: false, top: false, right: false, bottom: false}
    }]
};
//config block

const config = {
type: 'bubble',
data,
options: {
    layout: {
        padding: {
            right: 20
        }
    },
    scales: {
        xAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Month'
            }
          }],
        y: {
        beginAtZero: true
        }
    }
}
};


//init render block
const myChart = new Chart(
document.getElementById('myChart'),
config
);