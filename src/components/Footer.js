import "./FooterStyles.css";
import React from 'react'
import {FaHome,FaPhone,FaMailBulk, FaLinkedin ,FaFacebook,FaTwitter,} from 'react-icons/fa';
const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff",marginRight:"2rem" }} />
                    <div>
                        <p>Chennai.</p>
                        <p>India.</p>
                    </div>
                </div>
                <div className="phone">
                <h4><FaPhone size={20} style={{color:"#fff",marginRight:"2rem" }} /> 8825683856</h4>
                </div>
                <div className="email">
                <h4><FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem" }} /> Karthi06062004@gmail.com</h4>
                </div>
            </div>
            <div className="right">
                <div className="social">
                
                    <FaFacebook size={30} style={{color:"#fff" ,marginRight:"1rem"}} />
                    <FaTwitter size={30} style={{color:"#fff" ,marginRight:"1rem"}} />
                    <FaLinkedin size={30} style={{color:"#fff" ,marginRight:"1rem"}} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer