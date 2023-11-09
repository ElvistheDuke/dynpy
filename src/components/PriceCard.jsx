import React from 'react'
import "./pricingboxstyles.css"



const PriceCard = (props) => {
  return (
    <div className='PriceCard'>
        <h2>{props.title}</h2>
        {
            props.info.map((info, index) => {
                return(<div className="pcInfo">
                    <p>{info}</p>
                </div>)
            })
        }
        <div className="pcPrice">
            <p>WP Price</p>
            <p>{props.wprice}</p>
        </div>
        <div className="pcButton">
            <p>Get Started</p>
        </div>

    </div>
  )
}

export default PriceCard