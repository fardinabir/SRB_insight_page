import React from "react";
import "../styles/Menu.css";
import "../styles/SearchBar.css";
import search from "../assets/search.png"
import { fetchUser, searchedUser } from "../helpers/searchedUser";
import { BasicInfo } from "../components/BasicInfo";
import TotalCall from "../components/TotalCall";
import TotalDur from "../components/TotalDur";
import TotalBparty from "../components/LongMORatio";
import DurHistory from "../components/DurHistory";
import AllMORatio from "../components/AllMORatio";
import LongMORatio from "../components/LongMORatio";



function Menu() {
  return (
    <>
    <div className="menu">
    <div class="wrap">
    <div class="search">
        <input type="text" class="searchTerm" placeholder="Type MSISDN..." />
        <button type="submit" class="searchButton" style={{ backgroundImage: search }}>
          <img src={search} style={{width:"20px"}}/>
        </button>
      </div>
    </div>

    {fetchUser(1814118978)}
      <h1 className="menuTitle" ><u>Insights</u></h1>
      <h2 style={{aligntext:"center"}}>Basic Information</h2>
      <div className="menuRow_4">
        <BasicInfo />
      </div>
      <h2>MO Information</h2>
      <div className="menuRow">
        <div className="test">
            <DurHistory />
            <DurHistory />
        </div>
        <div className="donutCharts">
            <TotalCall />
            <TotalDur />
            <AllMORatio />
            <LongMORatio />
        </div>
      </div>
      </div>
      </>
  );
}

export default Menu;