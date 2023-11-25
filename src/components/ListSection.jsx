import React from 'react'
import "./listsectionstyles.css"




const ListSection = () => {
    const steps = [
        "Choose from any of our packages that suit your needs and that of your brand and Place an order",
        "We will get back to you with a brief questionnaire for you to fill out detailing the preferences for your website's appearance and any other essential information.",
        "We will then begin the design process and keep you updated every step of the way, once completed and approved, your website will be activated and hosted on our platform",
        "Your good to go, you now how a Unique Tailored Site on the web for your customers to see and patronize."
    ]

  return (
    <div className='listSection'>
        <div className="overlay"><></></div>
        <div className="listImage"></div>
        <div className="listContainer">
            <div className="listTitle">How to Get Started</div>
            <div className="listItems">
                {
                    steps.map((step, index) => {
                        const i = index + 1;
                        return(
                            <div className="listItem">
                                <div className="listIndex">
                                    <p>{i}</p>
                                </div>
                                <div className="listInfo">
                                    <p>{step}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        
    </div>
  )
}

export default ListSection