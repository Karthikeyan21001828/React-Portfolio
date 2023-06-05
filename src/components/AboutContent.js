import "./AboutContentStyles.css";
import React from 'react'
import { Link } from "react-router-dom";
import React1 from "../assets/react1.jpg";
import React2 from "../assets/react2.jpg";
const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>WHO AM I?</h1>
            <p>I'm a react developer.I creates reponsive websites.</p>
            <Link to="/contact">
                <button className="btn">CONTACT</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="image-stack top">
                    <img src={React1} className="img" alt="true"/>    
                </div> 
                <div className="image-stack bottom">
                    <img src={React2} className="img" alt="true"/>    
                </div> 
            </div>
        </div>
    </div>
  )
}

export default AboutContent