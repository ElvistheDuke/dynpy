import React from 'react'
import HeroSection from '../components/HeroSection'
import CardSlider from '../components/CardSlider'
import TextBox from '../components/TextBox'
import PricingBox from '../components/PricingBox'
import ListSection from '../components/ListSection'

const Homepage = () => {
  return (
    <div className='container'>
        <HeroSection />
        <div className="whiteContainer">
          <CardSlider />
          <TextBox />
          <PricingBox title="Packages for Everyone" />
          <ListSection />
        </div>
        
    </div>
  )
}

export default Homepage