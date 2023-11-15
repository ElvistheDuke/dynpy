import React from 'react'
import "./footerstyles.css"
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/dynpyb.png'



const Footer = () => {

    const links = [
        {
            tag: "Home",
            link: "/",
            code: "home"
        },
        {
            tag: "Pricing",
            link: "/pricing",
            code: "distributor"
        },
        {
            tag: "Connect",
            link: "/",
            code: 'contact'
        },
    ]


  return (
    <div className="footer">
        <div className="mainFooter">
            <div className="footerLogo">
                <img src={logo} height={40}/>
                <p>Dynpy Affordable Elegance</p>
            </div>
            <div className="footerLinks">
                <div className="footerLinksBox">
                    <h2>Company</h2>
                    {
                        links.map((link, index) => {
                            return (
                                <NavLink key={index} to={link.link}><p>{link.tag}</p></NavLink>
                            )
                            
                        })
                    }
                </div>
                <div className="footerLinksBox">
                    <h2>Social Media</h2>
                    <Link to={"/"}><p>Instagram</p></Link>
                    <Link to={"/"}><p>Twitter</p></Link>
                    <Link to={"/"}><p>Linked In</p></Link>
                    <Link to={"/"}><p>Whatsapp</p></Link>
                </div>
                <div className="footerLinksBox">
                    <h2>Legal</h2>
                    <Link to={"/"}><p>Terms of Services</p></Link>
                    <Link to={"/"}><p>Privacy Policy</p></Link>
                    <Link to={"/"}><p>Cookies Policy</p></Link>
                    <Link to={"/"}><p>Data Processing Agreement</p></Link>
                </div>
            </div>
        </div>

        <div className="bottomFooter">
            <p>Copyright ©2023 Dynpy All Rights Reserved</p>
        </div>
        
    </div>
  )
}

export default Footer