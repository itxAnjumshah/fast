import './About.css'
import jeep from "../Assets/about-img.png"

export default function About() {
  return (
    <div className='about ' id='About'>
      
        <img src={jeep} alt="" />
     
      <div className="about-text">
        <h1>ABOUT <span>US</span></h1>
        <p>going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined</p>
        <button className='about-btn'>Read More</button>
        </div>
    </div>
  )
}
