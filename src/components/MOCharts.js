import React from 'react';
import Chart from "chart.js/auto";
import { DemoUsers } from "../helpers/DemoUsers";
import {Pie, Doughnut} from 'react-chartjs-2';
import { searchedUser } from '../helpers/searchedUser';

const state = {
  labels: ['MO', 'MT'],
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: [
        '#B21F00',
        '#C9DE00',
      ],
      hoverBackgroundColor: [
      '#501800',
      '#4B5000'
      ],
      data: [searchedUser.TOTAL_MO,searchedUser.TOTAL_MT]
    }
  ]
}


function MOCharts() {
    return (
      <>
      <h1>Ok everything</h1>
      <div className="menuItem">
        <Doughnut className="chartItem"
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
      </>
    );
}

export default MOCharts;