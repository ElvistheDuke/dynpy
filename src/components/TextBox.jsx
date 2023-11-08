import React from 'react'
import "./textboxstyles.css"
import background from '../assets/bg002.jpg'



const TextBox = () => {
  return (
    <>
        <div className="textBox">
            <div className="imageContainer"></div>
            <div className="textContainer">
                <h2 className='textTitle'>Our <p style={{color: "#DA0C81"}}>Vision</p></h2>
                <p className='text'>Here at Dynpy, our vision is to empower businesses, entrepreneurs, and individuals with an online presence that's not only affordable but also highly effective. We believe that the internet should be an inclusive space, where every idea, project, or venture can thrive. Our core mission is to make professional web design accessible to all, regardless of budget constraints. We envision a digital landscape where the power of a well-designed website is within reach for everyone.</p>
            </div>
        </div>
    </>
  )
}

export default TextBox