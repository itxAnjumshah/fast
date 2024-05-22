import "./Contact.css";
import map from '../Assets/map-img.png'
import Footer from "../Footer/Footer";

export default function Contact() {
  return (
    <>
    <div className="contact-cont">
      <div className="test-child">
        <h1>
          04
          <br />
          GET IN TOUCH
        </h1>
        <hr />
      </div>


<div className="continer-inp-map">
<div className="inp-con">
  <input type="text" placeholder="Enter  your  Name" />
  <input type="email" placeholder="Enter  your  Email " />
  <input type="number" placeholder="Enyer your  number" />
  <textarea name="" id="" placeholder="MESSAGE"></textarea>
  <button className="btn-text">SEND</button>
</div>
<img src={map} alt="" />


</div>


    </div>
    {/* <Footer/> */}
    </>
  );
}
