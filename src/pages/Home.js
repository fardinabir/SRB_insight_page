import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/technoNet.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> SRb Report Page </h1>
        <p> Easy insights over the usage pattern</p>
        <Link to="/menu">
          <button> ENTER </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;