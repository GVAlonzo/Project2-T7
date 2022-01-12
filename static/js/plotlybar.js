// *****************************************************************
// **
// **
// **
// *****************************************************************



// *****************************************************************
// **
// ** Function for BAR CHART
// **
// *****************************************************************


function drawBarChart(){

    var xState = [];
    var ySales = [];
    var yMeals = [];
    var yAvg =  [];

    // var apiURL = "http://127.0.0.1:5000/api/v1.0/checkmealsbystates"

    var apiURL = "/api/v1.0/checkmealsbystates"

    d3.json(apiURL).then(response => {
        let samples = response;

        // For each element in API, build X & Y Axes arrays for the bar chart

        for (var i = 0; i < response.length; i++) {

            var summary = response[i];

            if(summary){
                xState.push(summary.State);
                ySales.push(summary.Tot_Sales);
                yMeals.push(summary.Tot_Meals);
                yAvg.push(summary.Avg);
            }

        }

        var traceAvg = {
            x: xState,
            y: yAvg,
            name: 'Average Meal Price',
            type: 'bar'
        };

        var traceMeals = {
            x: xState,
            y: yMeals,
            name: 'Meals Served',
            type: 'bar'
        };

        var traceSales = {
            x: xState,
            y: ySales,
            title: 'test',
            name: 'Total Sales',
            type: 'bar'
        };

        var barData = [traceAvg, traceMeals, traceSales]

        var barLayout = {
            title: {
              text:'State By State Comparison<br>(Click on Legend to Add/Remove Categories)',
              font: {
                size: 20
              },
            },
            xaxis: {
              title: {
                text: 'STATE',
                font: {
                  size: 14
                }
              },
            },
            yaxis: {
              title: {
                text: 'AVG MEAL PRICE / TOT MEALS SERVED<br>TOT SALES',
                font: {
                  size: 14
                }
              }
            }
          };


      
        Plotly.newPlot('bar', barData, barLayout)     
    });

};
    


// ******************************************************************
// ** Initialize dashboard for first ID upon initial load
// ******************************************************************
function InitDashboard(){

    // Draw charts for initial load
    drawBarChart();

}


InitDashboard();