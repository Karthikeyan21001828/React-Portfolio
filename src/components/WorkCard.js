import "./WorkCardStyles.css";
import React from 'react'
import pro1 from '../assets/project1.jpg';
import pro2 from '../assets/project2.jpg';
import pro3 from '../assets/project3.jpg';
import { NavLink } from "react-router-dom";
const WorkCard = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            <div className="project-card">
                <img src={pro1} alt="image"/>
                <h2 className="project-title">LMS Website.</h2>
                <div className="pro-details">
                     <p>This was created for my client which is responsive towards more devices.</p>
                     <div className="pro-btns">
                        <NavLink to="url.com" className="btn">View</NavLink>
                        <NavLink to="url.com" className="btn">Source</NavLink>
                     </div>
                </div>
            </div>
            <div className="project-card">
                <img src={pro2} alt="image"/>
                <h2 className="project-title">UI Design.</h2>
                <div className="pro-details">
                     <p>I have provided UI design for the above site.</p>
                     <div className="pro-btns">
                        <NavLink to="url.com" className="btn">View</NavLink>
                        <NavLink to="url.com" className="btn">Source</NavLink>
                     </div>
                </div>
            </div>
            <div className="project-card">
                <img src={pro3} alt="image"/>
                <h2 className="project-title">Full Stack Work.</h2>
                <div className="pro-details">
                     <p>I have worked as full stack developer for the above site.</p>
                     <div className="pro-btns">
                        <NavLink to="url.com" className="btn">View</NavLink>
                        <NavLink to="url.com" className="btn">Source</NavLink>
                     </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WorkCard