import React from "react";
import "./Watchs.css";
import watch1 from "../Assets/img-1.png";
import watch2 from "../Assets/img-2.png";
import Footer from "../Footer/Footer";

export default function Watches() {
  return (
    <>
      <div className="Container">
        <div className="contianer-item1">
          <h1>
            o1 <br />
            OUR WATCHES
          </h1>
          <hr />
        </div>

        <div className="container-item-2">
          <img src={watch1} alt="" />
          <div className="text">
            <h3>UNI WATCH</h3>
            <p>
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip
            </p>
            <h3>
              <span>$</span>100
            </h3>
            <button>BUY NOW</button>
          </div>
        </div>

        <div className="container-item-2">
          <div className="text">
            <h3>UNI WATCH</h3>
            <p>
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip
            </p>
            <h3>
              <span>$</span>100
            </h3>
            <button>BUY NOW</button>
          </div>
          <img src={watch2} alt="" />
        </div>
      </div>
      {/* <Footer/> */}
    </>
  );
}
