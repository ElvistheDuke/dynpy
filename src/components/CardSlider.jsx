import React, { useEffect, useState } from 'react'
import "./cardsliderstyles.css"
import { motion, useAnimationControls } from 'framer-motion'


const CardSlider = () => {
    const [position, setPosition] = useState(0)

    const cardInfo = [
        {
            title: "Customization",
            description: "We pride ourselves in making tailored solutions for your specific needs to make your website stand out and meet your uniue requirements.",
            icon: "M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
        },
        {
            title: "SEO Optimization",
            description: "We will help your website rank higher in search engine results pages (SERPs), making it more likely for users to find your site.",
            icon: "M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        },
        {
            title: "Maintainance",
            description: "We offer free maintainance on all our sites i.e Troubleshoot issues, fix bugs and optimize your site's performance.",
            icon: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        },
        {
            title: "Affordable",
            description: "We offer multiple services at once making them relatively cheap and cost effective.",
            icon: "M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
        },
        {
            title: "Security",
            description: "We will regularly update your software, plugins and security measures to protect your site against cyber threats. ",
            icon: "M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
        },
    ]

    const move = () => {
        controls.start('move')
    }


    

  return (
    <>
        <div className="cardSlider">
            <div className="header">
                <div className="title">
                    <p>Why choose us?</p>
                    <p style={{color: "white"}}>Here's why.</p>
                </div>
                <div className="controls">
                    <div onClick={() => {
                        (position < 0) ? setPosition( position + 1) : setPosition(position)
                    }} className="control">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>

                    </div>
                    <div onClick={() => {
                        (position > (-cardInfo.length + 1)) ? setPosition( position - 1) : setPosition(position)
                    }} className="control" >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>

                    </div>
                </div>
                
            </div>
            <motion.div 
                className="cardContainer"
                // variants={{
                //     initial: {
                //         x: "0"
                //     },
                //     move: {
                //         x: width
                //     }
                // }}
                // initial="initial"
                // animate={controls}
            >
                {/* <motion.div className="card">
                    <div className="cardIcon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <p className='cardTitle'>Title Goes Here</p>
                    <p className='cardDescription'>The types of website we would create for your online presence are WordPress and HTML5/ CSS hand coding with react and other languages</p>
                </motion.div> */}
                {
                    cardInfo.map((card, index) => {
                        // console.log(index)
                        return(
                            <motion.div 
                            className='card'
                            key={index}
                            variants={{
                                initial: {
                                    left: (-position < index) ? (index + position) * 420 + (index * 15) : index * 15
                                }
                            }}
                            initial={{
                                position: "absolute",
                                left: index * 10
                            }}
                            animate='initial'
                            
                            >
                                <div className="cardIcon">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d={card.icon} />
                                    </svg>
                                </div>
                                <p className='cardTitle'>{card.title}</p>
                                <p className='cardDescription'>{card.description}</p>
                            </motion.div>
                        )
                    })
                }
            </motion.div>
            
        </div>
    </>
  )
}

export default CardSlider