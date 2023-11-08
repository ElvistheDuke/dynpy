import React from 'react'
import "./herostyles.css"


const HeroSection = () => {
  return (
    <>
        <div className="heroSection">
            <div className="slogan">
                <p>Affordable Elegance</p>
                <p className='mainSlogan' style={{color: "#DA0C81",}}>Create Your Unique Website Today</p>
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