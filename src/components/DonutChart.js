import React from 'react';
import Chart from "chart.js/auto";
import {Pie, Doughnut} from 'react-chartjs-2';

let chartData;

function prepareData(label1, label2, value1, value2, topic){
    chartData = {
        labels: [label1, label2],
        datasets: [
        {
            label: topic,
            backgroundColor: [
            '#ff4d4d',
            '#5cd65c',
            ],
            hoverBackgroundColor: [
            '#B21F00',
            '#4B5000'
            ],
            data: [value1, value2]
        }
        ]
    }
}


function DonutCharts({label1, label2, value1, value2, topic}) {
    prepareData(label1, label2, value1, value2, topic)
    return (
      <>
      <div>
        <Doughnut className="chartItem"
          data={chartData}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20,
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
        <div className='menuItemName'>Total ------ Call</div>
      </div>
      </>
    );
}

export default DonutCharts;