import React from "react";
import robi_sq from "../assets/robi_sq.png";
import DonutChart from "../components/DonutChart";
import { cx, searchedUser } from "../helpers/searchedUser";

function BasicInfo() {
  return (
    <>
    <div className="menuItemLeft">
        <p><b>MSISDN :</b> {"880"+cx}</p>
        <p><b>NID :</b> {searchedUser.NID}</p>
        <p><b>DOB :</b> {searchedUser.DOB}</p>
        <p><b>Activation Date :</b> {searchedUser.ACTIVATION_DATE}</p>
        <p><b>Retailer Code :</b> {searchedUser.RETAILER_CODE}</p>
        <p><b>Corporate Status :</b> {searchedUser.IS_CORPORATE}</p>

    </div>
    <div className="menuItemLeft">
        <p><b>Detected Date :</b> {searchedUser.DET_DATE}</p>
        <p><b>U_Remark :</b> {searchedUser.U_REMARK}</p>
        <p><b>Logic :</b> {searchedUser.LOGIC}</p>
        <p><b>Bar Status :</b> {searchedUser.STATUS}</p>
        <p><b>IMEI :</b> {searchedUser.IMEI}</p>
        <p><b>Last Location :</b> {searchedUser.LAST_LOCATION}</p>
    </div>
    <div className="menuItemLeft">
        <p><b>Age on Network :</b> {searchedUser.AON}</p>
        <p><b>Total CALL :</b> {searchedUser.TOTAL_CALL}</p>
        <p><b>Total MO :</b> {searchedUser.TOTAL_MO}</p>
        <p><b>Avg Call Dur :</b> {searchedUser.ACD}</p>
        <p><b>Avg Call Per Day :</b> {searchedUser.TOTAL_CALL / searchedUser.AON}</p>
        <p><b>Total Distinct Bparty :</b> {searchedUser.TOTAL_DIST_BPARTY}</p>
    </div>
    <div className="menuItemLeft">
        <p><b>MO Duration Ratio :</b> {searchedUser.MO_DUR_RATIO}</p>
        <p><b>Dist Called Ratio MO :</b> {searchedUser.DIST_CALLED_RATIO_MO}</p>
        <p><b>MT Dist Bparty :</b> {searchedUser.MT_DIST_BPARTY}</p>
        <p><b>Data Volume (GB) :</b> {searchedUser.VOLUME_GB}</p>
        <p><b>Distinct Location :</b> {searchedUser.DIST_LOCATION}</p>
        <p><b>Unique IMEI :</b> {searchedUser.UNIQUE_IMEI}</p>
    </div>
    </>
  );
}

export {BasicInfo};