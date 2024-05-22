import React from "react";
import "./Hero.css"; // Assuming this is the correct path to your CSS file


export default function Hero() {
  return (
    <>
      <div className="Hero">
        {/* <div className="move-btn">
          <button className="text-btn">
            <i class="fa-solid fa-chevron-left "></i>
          </button>
          <button className="text-btn">
            <i class="fa-solid fa-angle-right"></i>
          </button>
        </div> */}
        <div className="hero-text">
          <h1>
            Car Rent <br />
            <span>For You</span>
          </h1>

          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority
          </p>
          <button className="read-btn">Read more</button>
          <button className="contact-btn">Contact us</button>
        </div>
      </div>
    </>
  );
}
