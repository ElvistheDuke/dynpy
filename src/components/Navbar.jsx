import React, { useState } from 'react'
import "./navbarstyles.css"
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/dynpyb.png'




const Navbar = () => {
    const [clicked, setClicked] = useState(false)


    const leftLinks = [
        {
            tag: "Home",
            link: "/",
            code: "home"
        },
        {
            tag: "Blog",
            link: "/blog",
            code: "distributor"
        },
        {
            tag: "Contact Us",
            link: "/contact",
            code: 'contact'
        },
    ]

    const rightLinks = [
        {
            tag: "About Us",
            link: "/",
            code: "home"
        },
        {
            tag: "Pricing",
            link: "/",
            code: "distributor"
        },
        {
            tag: "Connect",
            link: "/",
            code: 'contact'
        },
    ]

    const allLinks = leftLinks.concat(rightLinks)


  return (
    <div className='container'>
        <div className="navBar">
            <div className="navLinks">
                {
                    leftLinks.map((link, index) => {
                        return (
                            <NavLink className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "selectedLink" : "navLink"
                            } 
                            key={index} to={link.link}><p>{link.tag}</p></NavLink>
                        )
                        
                    })
                }   
            </div>
            <div className="navLogo">
                <img src={logo} height={40}/>
            </div>
            <div className="navLinks">
                {
                    rightLinks.map((link, index) => {
                        return (
                            <NavLink className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "selectedLink" : "navLink"
                            } 
                            key={index} to={link.link}><p>{link.tag}</p></NavLink>
                        )
                        
                    })
                } 
            </div>
            <div onClick={() => setClicked(!clicked)} className='menuButton'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                </svg>

            </div>
            <div className={clicked ? "menuLinks menuLinksActive" : "menuLinks"}>
                <div onClick={() => setClicked(!clicked)} className='cancelButton'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
                {
                    allLinks.map((link, index) => {
                        return (
                            <NavLink className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "selectedLink" : "navLink"
                            } 
                            key={index} to={link.link}><p>{link.tag}</p></NavLink>
                        )
                        
                    })
                } 
            </div>
        </div>
    </div>
  )
}

export default Navbar