import React from 'react'
import HeroSection from '../components/HeroSection'
import CardSlider from '../components/CardSlider'
import TextBox from '../components/TextBox'

const Homepage = () => {
  return (
    <div className='container'>
        <HeroSection />
        <CardSlider />
        <TextBox />
    </div>
  )
}

export default Homepage