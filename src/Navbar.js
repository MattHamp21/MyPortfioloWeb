import React from "react";

function Navbar() {
  return (
    
    <nav className="nav">
      <a href="/" className="homebutton">Matthew Hamp</a>
      <div className="mainbuttons">
      <ul>
        <li> <a href="/about">About Me</a></li>
        <li><a href="/porfolio">Porfolio</a></li>
        <li> <a href="/resume">Resume</a></li>
      </ul>
      </div>
    </nav>

  )
}

export default Navbar