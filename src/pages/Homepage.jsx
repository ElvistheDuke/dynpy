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
        <CardSlider />
        <TextBox />
        <PricingBox />
        <ListSection />
    </div>
  )
}

export default Homepage