import React from 'react'
import "./pagetitlestyles.css"




const PageTitle = (props) => {
  return (
    <div className='pageTitle'>
        <h1>{props.title}</h1>
        <p>{props.desc}</p>
    </div>
  )
}

export default PageTitle