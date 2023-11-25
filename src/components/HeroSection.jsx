import React from 'react'
import "./herostyles.css"
import image from "../assets/bg004.jpg"


const HeroSection = () => {
  return (
    <>
        <div className="heroSection">
          {/* <img src={image} className='hsBg' alt="" /> */}
          <div className="overlay"><></></div>
            <div className="slogan">
                <p>Affordable Elegance</p>
                <p className='mainSlogan' style={{color: "#DA0C81", fontWeight: 1000,}}>Create Your Unique Website Today</p>
            </div>
            <div className="description">
                <p>We build aestehetically pleasing websites for your brand to showcase your unique identity.</p>
            </div>
            <div className="heroButton">
              <p>Get Started</p>
            </div>
        </div>
    </>
  )
}

export default HeroSection