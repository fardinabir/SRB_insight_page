import React from "react";
import { searchedUser } from "../helpers/searchedUser";
import Chart from "chart.js/auto";
import { Line} from 'react-chartjs-2';

let chartData;

function prepareData(){
  chartData = {
    labels: [65, 59, 80, 81, 56, 55, 40, 59, 80, 81, 56, 55, 40, 59, 80, 81, 56, 55, 40],
    datasets: [{
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 55, 40, 59, 80, 81, 56, 55, 40, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    },
    {
      label: 'My Second Dataset',
      data: [56, 55, 40, 79, 30, 91, 26, 85, 0, 56, 59, 80, 81, 11, 43, 31, 37, 25, 0],
      fill: false,
      borderColor: 'rgb(175, 92, 122)',
      tension: 0.1
    }]
  };
}

function DurHistory() {
  prepareData();
  return (
    <div>
    <Line className="durHistory"
          data={chartData}
          options={{
          plugins: {
            title: {
              display: true,
              text: "Total Distinct Bparty between 01 Nov - 01 Dec"
            }
          }
        }}
        />
    </div>
  );
}
export default DurHistory;