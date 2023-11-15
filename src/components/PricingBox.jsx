import React from 'react'
import "./pricingboxstyles.css"




const PricingBox = (props) => {
    const packages = [
        {
            title: "Basic",
            price: "N50,000",
            description: "For Small Start Ups",
            info: [
                "Functional Website",
                "3 Pages",
                "SEO optimization",
                "One year maintainance",
                "CyberSecurity"
            ],
        },
        {
            title: "Basic",
            price: "N50,000",
            description: "For Small Start Ups",
            info: [
                "Functional Website",
                "3 Pages",
                "SEO optimization",
                "One year maintainance",
                "CyberSecurity"
            ],
        },
        {
            title: "Basic",
            price: "N50,000",
            description: "For Small Start Ups",
            info: [
                "Functional Website",
                "3 Pages",
                "SEO optimization",
                "One year maintainance",
                "CyberSecurity"
            ],
        },
    ]


  return (
    <>
        <div className="pricingBox">
            <div className="pbHeader">
                <p>{props.title}</p>
            </div>
            <div className="pbCardsContainer">
                {/* <PriceCard info={packages[0].info} /> */}
                {
                    packages.map((item, index) => {
                        return (
                            <div className='priceCard'>
                                <h2>{item.title}</h2>
                                <div className="pcPrice">
                                    <p className='itemPrice'>{item.price}</p>
                                    <p>{item.description}</p>
                                </div>
                                <div className="pcInfo">
                                {
                                    item.info.map((info, index) => {
                                        return(
                                            <div key={index} className='pcInfoItem'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                                </svg>

                                                <p>{info}</p>
                                            </div>
                                        )
                                    })
                                }
                                </div>
                                
                                <div className="pcButton">
                                    <p>Get Started</p>
                                </div>

                            </div>
                        )
                    })
                }
            </div>
            
        </div>
    </>
  )
}

export default PricingBox