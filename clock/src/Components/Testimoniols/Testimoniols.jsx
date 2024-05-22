import React from "react";
import "./TESti.css";
import custom1 from "../Assets/client-img.png";
import custom2 from "../Assets/client-img1.png";
import Footer from "../Footer/Footer";
export default function Testimoniols() {
  return (
    <>
    <div className="testimoniols">
      <div className="test-child">
        <h1>
          03
          <br />
          TESTIMONIOLS
        </h1>
        <hr />
      </div>

      <div className="box-outer">
        <div className="box-iner">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
          voluptate, quibusdam ex fuga facilis aperiam cumque, sequi voluptates
          repellendus recusandae iste deserunt labore dignissimos corrupti.
          Labore provident nemo numquam officiis!Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Id veniam, dicta earum labore nisi nulla
          ut commodi expedita facere, unde ex nam necessitatibus possimus
          delectus amet. Culpa at numquam dolorem
        </div>
        <div className="box-iner">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id veniam,
          dicta earum labore nisi nulla ut commodi expedita facere, unde ex nam
          necessitatibus possimus delectus amet. Culpa at numquam dolorem .Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Id veniam, dicta
          earum labore nisi nulla ut commodi expedita facere, unde ex nam
          necessitatibus possimus delectus amet. Culpa at numquam dolorem
        </div>
      </div>

      <div className="cuutomer-outer">
        <div className="coustemer-inner">
          <img src={custom1} alt="" />
          <div className="inner-text">
            <h1>JAMESH DAME</h1>
            <p>CUStomer</p>
          </div>
        </div>
        <div className="coustemer-inner">
          <img src={custom2} alt="" />
          <div className="inner-text">
            <h1>JUMINI KIRI</h1>
            <p>CUStomer</p>
          </div>
        </div>
      </div>
<button className="click-btn">
  SEE MORE
</button>

    </div>
    {/* <Footer/> */}
    </>
  );
}
