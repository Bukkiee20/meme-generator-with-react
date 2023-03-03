import React from 'react';
import "./NavBar.css";
import logo from "../../images/Troll Face.png"

const NavBar = () => {
  return (
    <nav className="navbar-container section-padding">
        <div className="logo-div">
           <img src={logo} alt="logo" />
           <h1>Meme Generator</h1>
        </div>

        <div className="logo-text">
           <p>Bukkys Meme</p>
        </div>
    </nav>
  )
}

export default NavBar;