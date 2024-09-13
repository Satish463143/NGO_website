import React from 'react'
import './Mission.css'
import { Link } from 'react-router-dom'
import conservation from '../../../src/assets/images/conservation.webp';
import ENVIRONMENTAL_LAW from '../../../src/assets/images/ENVIRONMENTAL_LAW-256.webp';
import mental from '../../../src/assets/images/mental.webp';
import Sustainable from '../../../src/assets/images/Sustainable.png';
import economy_icon from '../../../src/assets/images/economy_icon.png';
const Mission = () => {
  return (
    //<?xml version="1.0" ?><svg data-name="Layer 1" id="Layer_1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M235.29,188.52a84,84,0,1,0,84-84A84.09,84.09,0,0,0,235.29,188.52Zm84-68.06a68.06,68.06,0,1,1-68.07,68.06A68.14,68.14,0,0,1,319.3,120.46Z"/><path d="M299.33,228.18a39.52,39.52,0,0,0,17.11,5.64v2.68a6.43,6.43,0,0,0,2.2,5.1,6.79,6.79,0,0,0,4.32,1.58,7.14,7.14,0,0,0,4.27-1.47,6.25,6.25,0,0,0,2.49-5.21v-2.87c6.29-1,11.15-3.39,14.46-7.06a23,23,0,0,0,6.35-14,28.84,28.84,0,0,0-.44-8.18,23.13,23.13,0,0,0-3.42-8.68,24.68,24.68,0,0,0-7.45-7,30.77,30.77,0,0,0-9.5-3.84V156.86c.23.13.46.27.67.41a19.15,19.15,0,0,1,4.07,3.69,12.66,12.66,0,0,1,2.25,4.06,21.94,21.94,0,0,1,1,4.89c.41,3.49,3,5.69,6.31,5.32,2.81-.33,4.89-2.39,5.65-6.45-.17-7.2-2.53-13.07-7-17.44a26.34,26.34,0,0,0-13-7v-3.8a6.7,6.7,0,0,0-11.32-4.86,6.54,6.54,0,0,0-2,4.86v3.09a36.52,36.52,0,0,0-8.35,2,27.31,27.31,0,0,0-9.57,5.88,25.11,25.11,0,0,0-6,8.78,23.85,23.85,0,0,0-1.5,10.85A25.4,25.4,0,0,0,299.72,188a32,32,0,0,0,16.7,6.88l0,27.2c-4.48-.59-8-1.85-10.56-3.77a15.16,15.16,0,0,1-5.93-8.38,5.88,5.88,0,0,0-6-5.22,5.57,5.57,0,0,0-4.82,1.87,5.23,5.23,0,0,0-1,4.73A24.5,24.5,0,0,0,299.33,228.18Zm5-53.68a17.23,17.23,0,0,1-.92-4.07,13.61,13.61,0,0,1,3.93-10.52,16.35,16.35,0,0,1,9.05-4.46v27.37a21.77,21.77,0,0,1-4.56-1.55,21.42,21.42,0,0,1-5.29-3.58A8.73,8.73,0,0,1,304.36,174.5Zm34.31,37.74a8.7,8.7,0,0,1-.56,2.46,9.63,9.63,0,0,1-1.65,3.05,12.64,12.64,0,0,1-3.86,3,11.64,11.64,0,0,1-2.88,1v-24.5a14.31,14.31,0,0,1,6,3.78c2.07,2.42,3,6.05,2.92,11.12Z"/><path d="M157.91,204.56a49.2,49.2,0,1,0-49.2-49.2A49.25,49.25,0,0,0,157.91,204.56Zm0-82.47a33.27,33.27,0,1,1-33.26,33.27A33.31,33.31,0,0,1,157.91,122.09Z"/><path d="M226.53,99.64a39.59,39.59,0,1,0-39.59-39.58A39.63,39.63,0,0,0,226.53,99.64Zm0-63.23a23.65,23.65,0,1,1-23.65,23.65A23.67,23.67,0,0,1,226.53,36.41Z"/><path d="M442.5,278.58c-.65-16.75-14.35-30.11-31.55-29.16A30.39,30.39,0,0,0,381.78,281c3.27,83.59-59,110.89-84.22,118.52-2.6,1-7.12,1.75-12.7,2.33a64.74,64.74,0,1,0-57.7,0c-5.6-.58-10.14-1.35-12.74-2.33C190,392.05,127,364.69,130.22,281a30.39,30.39,0,0,0-29.17-31.54c-16.82-.93-30.89,12.41-31.55,29.16C66,369.55,118,420.89,166.19,445.33a100.16,100.16,0,0,0-11.33,46.2H357.14a100.16,100.16,0,0,0-11.33-46.2C394,420.88,446.05,369.55,442.5,278.58Z"/></svg>
    <div className='container'>
         <div className="mission">
            <div className="mission_title">
                <h1>Our Mission</h1>  
                <div style={{width:'100px', height:'5px', background:'var(--pri_color)',margin:'20px auto 0px auto',}}></div>
            </div>
            <div className="mission_grid">
                <div className="mission_box">
                    <span>
                        <img width="50" height="50" src={conservation} alt="environment-care"/>
                    </span>
                    <h3>Environmental Conservation</h3>
                    <p>
                    Promotes environmental awareness and eco-friendly practices through community engagement and education, empowering communities to combat climate change.</p>
                </div>
                <div className="mission_box">
                    <span>
                    
                        <img width="50" height="50" src={ENVIRONMENTAL_LAW} alt="environment-care"/>
                    </span>
                    <h3>Environmental Stewardship​</h3>
                    <p>
                    Encourage sustainable practices and protect natural resources, ensuring that communities contribute to the health of the planet.
                    </p>
                </div>
                <div className="mission_box">
                <span>
                    
                    <img width="50" height="50" src={economy_icon} alt="environment-care"/>
                </span>
                    <h3>Women’s Economic Empowerment​</h3>
                    <p>
                    Empowers rural women with skills and opportunities for economic participation, fostering financial independence and self-sufficiency.
                    </p>
                </div>
                <div className="mission_box">
                <span>
                    
                    <img width="50" height="50" src={mental} alt="environment-care"/>
                </span>
                    <h3>Mental Well-being</h3>
                    <p>
                    Emphasizes mental health in resilience efforts, integrating awareness and services to reduce challenges in marginalized communities.</p>
                </div>
                <div className="mission_box">
                    <span>
                        <svg data-name="Layer 1" width='50' height='50' id="Layer_1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M235.29,188.52a84,84,0,1,0,84-84A84.09,84.09,0,0,0,235.29,188.52Zm84-68.06a68.06,68.06,0,1,1-68.07,68.06A68.14,68.14,0,0,1,319.3,120.46Z"/><path d="M299.33,228.18a39.52,39.52,0,0,0,17.11,5.64v2.68a6.43,6.43,0,0,0,2.2,5.1,6.79,6.79,0,0,0,4.32,1.58,7.14,7.14,0,0,0,4.27-1.47,6.25,6.25,0,0,0,2.49-5.21v-2.87c6.29-1,11.15-3.39,14.46-7.06a23,23,0,0,0,6.35-14,28.84,28.84,0,0,0-.44-8.18,23.13,23.13,0,0,0-3.42-8.68,24.68,24.68,0,0,0-7.45-7,30.77,30.77,0,0,0-9.5-3.84V156.86c.23.13.46.27.67.41a19.15,19.15,0,0,1,4.07,3.69,12.66,12.66,0,0,1,2.25,4.06,21.94,21.94,0,0,1,1,4.89c.41,3.49,3,5.69,6.31,5.32,2.81-.33,4.89-2.39,5.65-6.45-.17-7.2-2.53-13.07-7-17.44a26.34,26.34,0,0,0-13-7v-3.8a6.7,6.7,0,0,0-11.32-4.86,6.54,6.54,0,0,0-2,4.86v3.09a36.52,36.52,0,0,0-8.35,2,27.31,27.31,0,0,0-9.57,5.88,25.11,25.11,0,0,0-6,8.78,23.85,23.85,0,0,0-1.5,10.85A25.4,25.4,0,0,0,299.72,188a32,32,0,0,0,16.7,6.88l0,27.2c-4.48-.59-8-1.85-10.56-3.77a15.16,15.16,0,0,1-5.93-8.38,5.88,5.88,0,0,0-6-5.22,5.57,5.57,0,0,0-4.82,1.87,5.23,5.23,0,0,0-1,4.73A24.5,24.5,0,0,0,299.33,228.18Zm5-53.68a17.23,17.23,0,0,1-.92-4.07,13.61,13.61,0,0,1,3.93-10.52,16.35,16.35,0,0,1,9.05-4.46v27.37a21.77,21.77,0,0,1-4.56-1.55,21.42,21.42,0,0,1-5.29-3.58A8.73,8.73,0,0,1,304.36,174.5Zm34.31,37.74a8.7,8.7,0,0,1-.56,2.46,9.63,9.63,0,0,1-1.65,3.05,12.64,12.64,0,0,1-3.86,3,11.64,11.64,0,0,1-2.88,1v-24.5a14.31,14.31,0,0,1,6,3.78c2.07,2.42,3,6.05,2.92,11.12Z"/><path d="M157.91,204.56a49.2,49.2,0,1,0-49.2-49.2A49.25,49.25,0,0,0,157.91,204.56Zm0-82.47a33.27,33.27,0,1,1-33.26,33.27A33.31,33.31,0,0,1,157.91,122.09Z"/><path d="M226.53,99.64a39.59,39.59,0,1,0-39.59-39.58A39.63,39.63,0,0,0,226.53,99.64Zm0-63.23a23.65,23.65,0,1,1-23.65,23.65A23.67,23.67,0,0,1,226.53,36.41Z"/><path d="M442.5,278.58c-.65-16.75-14.35-30.11-31.55-29.16A30.39,30.39,0,0,0,381.78,281c3.27,83.59-59,110.89-84.22,118.52-2.6,1-7.12,1.75-12.7,2.33a64.74,64.74,0,1,0-57.7,0c-5.6-.58-10.14-1.35-12.74-2.33C190,392.05,127,364.69,130.22,281a30.39,30.39,0,0,0-29.17-31.54c-16.82-.93-30.89,12.41-31.55,29.16C66,369.55,118,420.89,166.19,445.33a100.16,100.16,0,0,0-11.33,46.2H357.14a100.16,100.16,0,0,0-11.33-46.2C394,420.88,446.05,369.55,442.5,278.58Z"/></svg>
    
                    </span>
                    <h3>Economic Independence</h3>
                    <p>
                    Promotes women's economic independence through education and skills, enabling self-sufficiency in rural and marginalized areas.</p>
                </div>
                <div className="mission_box">
                <span>
                    
                    <img width="50" height="50" src={Sustainable} alt="environment-care"/>
                </span>
                    <h3>Sustainable Livelihoods</h3>
                    <p>Empowers rural women by creating sustainable income through skill-building, entrepreneurship, and employment opportunities.
                    </p>
                </div>
            </div>

            
        </div>       
    </div>
  )
}

export default Mission