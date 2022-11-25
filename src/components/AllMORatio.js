import React from "react";
import { searchedUser } from "../helpers/searchedUser";
import { Doughnut} from 'react-chartjs-2';
import { color } from "@mui/system";

let chartData;

function prepareData(){
  chartData = {
      labels: ["Dist", "Common"],
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
          data: [searchedUser.DIST_CALLED_RATIO_MO,1 - searchedUser.DIST_CALLED_RATIO_MO]
      }
      ]
  }
}

function AllMORatio() {
  prepareData();
  return (
    <div>
    <div className="menuItem">
    <Doughnut className="chartItem"
          data={chartData}
          options={{
          plugins: {
            title: {
              display: true,
              text: "Percentage between 01 Nov - 01 Dec"
            }
          }
        }}
        />
    <h3 style={{ textAlign : "center", color:"rgb(110,110,110)"}}>Total MO Parties Ratio</h3>
    </div>
    </div>
  );
}
export default AllMORatio;