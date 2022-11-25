import React from "react";
import { searchedUser } from "../helpers/searchedUser";
import Chart from "chart.js/auto";
import { Doughnut, Pie} from 'react-chartjs-2';

let chartData;

function prepareData(){
    chartData = {
        labels: ["MO", "MT"],
        datasets: [
        {
            label: "yhjutiuyiuyiyi",
            backgroundColor: [
            '#ff4d4d',
            '#5cd65c',
            ],
            hoverBackgroundColor: [
            '#B21F00',
            '#4B5000'
            ],
            borderColor: "grey",
            borderWidth: 1,
            data: [searchedUser.TOTAL_MO, searchedUser.TOTAL_MT]
        }
        ]
    }
}


function TotalCall() {
  prepareData()
  return (
    <div>
    <div className="menuItem">
    <Pie className="chartItem"
          data={chartData}
          options={{
          plugins: {
            title: {
              display: true,
              text: "User's total call between 01 Nov - 01 Dec"
            }
          }
        }}
        />
    <h3 style={{ textAlign : "center" }}>Total Call</h3>
    </div>
    </div>
  );
}
export default TotalCall;