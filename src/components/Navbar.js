import React, {useState} from 'react'
import Logo from "../assets/robi_oval.png";
import {Link} from "react-router-dom";
import ReorderIcon from '@mui/icons-material/Reorder';
import "../styles/Navbar.css";

function Navbar() {
    const [openLinks, setOpenLinks] = useState(false);
    var d = new Date(); // for now
    d.getHours(); // => 9
    d.getMinutes(); // =>  30
    d.getSeconds(); // => 51    
    //console.log(d.getSeconds());
    
    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
        console.log(openLinks);
    };
  return (
    <div className="navbar">
        <div className="leftSide" id={openLinks? "open" : "close"}>
            <img src={Logo} />
            <div className="hiddenLinks">
                <Link to="/"> Home</Link>
                <Link to="/menu"> Menu</Link>
                <Link to="/about"> About</Link>
                <Link to="/contact"> Contact</Link>
            </div>
        </div>
        <div className="rightSide">
            <Link to="/"> Home</Link>
            <Link to="/menu"> Menu</Link>
            <Link to="/about"> About</Link>
            <Link to="/contact"> Contact</Link>
            <button onClick={() => {setOpenLinks(!openLinks)}}><ReorderIcon/></button>
        </div>
    </div>
  )
}

export default Navbar