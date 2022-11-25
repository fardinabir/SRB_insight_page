import React from "react";
import { DemoUsers } from "../helpers/DemoUsers";
import robi_sq from "../assets/robi_sq.png";
import DonutChart from "../components/DonutChart";
import { searchedUser } from "../helpers/searchedUser";

function MenuItemComp() {
  return (
    <div>
    <div className="menuItem">
      <div>
        <p>TOTAL_MO : {searchedUser.TOTAL_MO}</p>
        <p>MO_DIST_BPARTY : {searchedUser.MO_DIST_BPARTY}</p>
        <p>TOTAL_MO_DURATION : {searchedUser.TOTAL_MO_DURATION}</p>
        <p>TOTAL_MO_SMS : {searchedUser.TOTAL_MO_SMS}</p>
        <p>DIST_CALLED_RATIO_MO : {searchedUser.DIST_CALLED_RATIO_MO}</p>
        <p>MO_DUR_RATIO : {searchedUser.MO_DUR_RATIO}</p>

        <div style={{ backgroundImage: `url(${robi_sq})` }}> </div>
        <h1>Name </h1>
        <p> 13.22 </p>
      </div>
    </div>
    <DonutChart label1="MO" label2="MT" value1={searchedUser.TOTAL_MO} value2={ searchedUser.TOTAL_MT} topic="Voice Call"/>
    <h3 className="menuItemName">MO Insights</h3>
    </div>
  );
}

export default MenuItemComp;