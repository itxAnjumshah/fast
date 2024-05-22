import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../Assets/logo.png";

export default function Navbar() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="nav-contianer">
      <div className="logo-img">
        <img src={logo} alt="" />
      </div>

      <div className="nav-menu">
        <ul>
          <li className={activeIndex === 0 ? "active" : ""}>
            <Link to="/" onClick={() => handleItemClick(0)}>Home</Link>
          </li>

          

          <li className={activeIndex === 2 ? "active" : ""}>
            <Link to="/About" onClick={() => handleItemClick(2)}>About</Link>
          </li>

          <li className={activeIndex === 3 ? "active" : ""}>
            <Link to="/Watches" onClick={() => handleItemClick(3)}>Watches</Link>
          </li>

          <li className={activeIndex === 4 ? "active" : ""}>
            <Link to="/Testimoniols" onClick={() => handleItemClick(4)}>Testimonials</Link>
          </li>

          <li className={activeIndex === 1 ? "active" : ""}>
            <Link to="/contact" onClick={() => handleItemClick(1)}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
