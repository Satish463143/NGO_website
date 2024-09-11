import React from 'react'
import './Mission.css'
import { Link } from 'react-router-dom'

const Mission = () => {
  return (
    <div className='container'>
         <div className="mission">
            <div className="mission_title">
                <h1>Our Mission</h1>  
                <div style={{width:'100px', height:'5px', background:'var(--pri_color)',margin:'20px auto 0px auto',}}></div>
            </div>
            <div className="mission_grid">
                <div className="mission_box">
                    <span>
                        <svg class="feather feather-book" fill="none" height="34" stroke="#32d8fc" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="34" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                        </svg>
                    </span>
                    <h3>Environmental Conservation</h3>
                    <p>
                    Promotes environmental awareness and eco-friendly practices through community engagement and education, empowering communities to combat climate change.</p>
                </div>
                <div className="mission_box">
                    <span>
                        <svg id="Regular" height="36" width="36" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><defs>
                            <style>{`
                                .cls-1{fill:none;stroke:#32d8fc;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px;}`}
                                </style></defs><title/><path class="cls-1" d="M19.4,18.58a1.42,1.42,0,0,1-1.69,1.07,1.53,1.53,0,0,1,.87-2.9A1.43,1.43,0,0,1,19.4,18.58ZM16.3,23.19a4.81,4.81,0,0,1-4-4c-.23-1.27,0-2.21-.8-2.52-1.24-.47-9,3.07-9.14-3.41-.05-2,1.39-4.35-.6-5.25.84.18,1.54.36,1.91,1.11,1.26,2.54-.49,5.76,4.51,5.33a16.64,16.64,0,0,1,2.51-.4c-.69-.94-3.6-.89-4.81-3.25-1.35-2.63.5-5.68-4.09-5.94a3.46,3.46,0,0,1,3.87.06c1.32,1,1,3,2.21,4.38A4.46,4.46,0,0,0,9.76,10.4a7.64,7.64,0,0,0,2.41.6c-.38-2-2-3.3-3.56-4.75C7.42,5.16,6.76,3.45,6.95.78c1.29,3.72,5.63,3.13,7.64,9.42.61-.34,1.71-2.68.52-4s-3.24-2-2.69-5c.94,2.8,2.28,2.14,4.12,3.22a3.38,3.38,0,0,1,1.59,3.07c0,1.74-1.33,2.9-1,4.9,1.73.47,2.61.51,3.52,1.31,3.58,3.11,1,10.06-4.32,9.47Z" id="Squidoo"/></svg>
                    </span>
                    <h3>Environmental Stewardship​</h3>
                    <p>
                    Encourage sustainable practices and protect natural resources, ensuring that communities contribute to the health of the planet.
                    </p>
                </div>
                <div className="mission_box">
                    <span>
                    <svg viewBox="0 0 576 512" fill="#32d8fc" width="34"  height="34" xmlns="http://www.w3.org/2000/svg">
                            <path d="M288 256c53 0 96-42.1 96-94 0-40-57.1-120.7-83.2-155.6-6.4-8.5-19.2-8.5-25.6 0C249.1 41.3 192 122 192 162c0 51.9 43 94 96 94zm277.3 72.1c-11.8-10.7-30.2-10-42.6 0L430.3 402c-11.3 9.1-25.4 14-40 14H272c-8.8 0-16-7.2-16-16s7.2-16 16-16h78.3c15.9 0 30.7-10.9 33.3-26.6 3.3-20-12.1-37.4-31.6-37.4H192c-27 0-53.1 9.3-74.1 26.3L71.4 384H16c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h356.8c14.5 0 28.6-4.9 40-14L564 377c15.2-12.1 16.4-35.3 1.3-48.9z"/>
                        </svg>
                    </span>
                    <h3>Women’s Economic Empowerment​</h3>
                    <p>
                    Empowers rural women with skills and opportunities for economic participation, fostering financial independence and self-sufficiency.
                    </p>
                </div>
                <div className="mission_box">
                    <span>
                   <svg viewBox="0 0 640 512" fill="#32d8fc" width="36"  height="36" xmlns="http://www.w3.org/2000/svg"><path d="M624 384h-608C7.25 384 0 391.3 0 400V416c0 35.25 28.75 64 64 64h512c35.25 0 64-28.75 64-64v-16C640 391.3 632.8 384 624 384zM128 96h384v256h64V80C576 53.63 554.4 32 528 32h-416C85.63 32 64 53.63 64 80V352h64V96zM304 336h32c8.801 0 16-7.201 16-16V272h48C408.8 272 416 264.8 416 256V224c0-8.801-7.199-16-16-16H352V160c0-8.801-7.199-16-16-16h-32C295.2 144 288 151.2 288 160v48H240C231.2 208 224 215.2 224 224v32c0 8.799 7.199 16 16 16H288V320C288 328.8 295.2 336 304 336z"/></svg>
                    </span>
                    <h3>Mental Well-being</h3>
                    <p>
                    Emphasizes mental health in resilience efforts, integrating awareness and services to reduce challenges in marginalized communities.</p>
                </div>
                <div className="mission_box">
                    <span>
                        <svg height="36px" strokeWidth="32px" viewBox="0 0 512 512" width="36px" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#32d8fc" stroke-miterlimit="10">
                            <title/>
                                <path d="M352,128c-32.26-2.89-64,16-96,16s-63.75-19-96-16c-64,6-96,64-96,160,0,80,64,192,111.2,192s51.94-24,80.8-24,33.59,24,80.8,24S448,368,448,288C448,192,419,134,352,128Z" />
                                <path d="M323.92,83.14c-21,21-45.66,27-58.82,28.79A8,8,0,0,1,256,103.2a97.6,97.6,0,0,1,28.61-59.33c22-22,46-26.9,58.72-27.85A8,8,0,0,1,352,24.94,98,98,0,0,1,323.92,83.14Z"/>
                                <ellipse cx="216" cy="304" rx="24" ry="48"/><ellipse cx="296" cy="304" rx="24" ry="48"/>
                        </svg>
                    </span>
                    <h3>Economic Independence</h3>
                    <p>
                    Promotes women's economic independence through education and skills, enabling self-sufficiency in rural and marginalized areas.</p>
                </div>
                <div className="mission_box">
                    <span>
                        <svg height="36px" version="1.1" fill="#32d8fc"  width="36px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:serif="http://www.serif.com/" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M19,38l4,0c0.552,-0 1,-0.448 1,-1c-0,-0.552 -0.448,-1 -1,-1l-4,0c-0.552,-0 -1,0.448 -1,1c-0,0.552 0.448,1 1,1Z"/><path d="M18,35l6,0c0.552,-0 1,-0.448 1,-1c-0,-0.552 -0.448,-1 -1,-1l-6,0c-0.552,-0 -1,0.448 -1,1c-0,0.552 0.448,1 1,1Z"/><path d="M17.957,31.996l0.043,0.004l6,-0l-0,-0l-0,-0l0.044,-0c0.552,-0.002 0.998,-0.449 0.998,-1c0,-1.609 0.709,-3.135 1.938,-4.172c2.005,-1.632 2.882,-4.135 2.882,-6.966c0,-4.891 -3.971,-8.862 -8.862,-8.862c-4.891,-0 -8.862,3.971 -8.862,8.862c-0,2.84 0.884,5.349 2.919,6.942c1.228,1.037 1.943,2.574 1.943,4.195l-0,-0c-0,0.822 0.766,0.972 0.957,0.997Zm5.153,-1.996l-4.177,-0c-0.247,-1.84 -1.171,-3.536 -2.611,-4.745c-0.009,-0.007 -0.018,-0.015 -0.027,-0.022c-1.567,-1.223 -2.157,-3.188 -2.157,-5.371c-0,-3.787 3.075,-6.862 6.862,-6.862c3.787,-0 6.862,3.075 6.862,6.862c0,2.189 -0.596,4.159 -2.144,5.414c-0.004,0.003 -0.009,0.007 -0.013,0.011c-1.43,1.201 -2.349,2.886 -2.595,4.713Z"/><path d="M20.001,25l-0.001,-0l-0,2c-0,0.552 0.448,1 1,1c0.552,-0 1,-0.448 1,-1l-0,-1.951c0.001,-0.016 0.001,-0.033 0.001,-0.049c0,-0.402 0.239,-0.766 0.607,-0.927c1.308,-0.561 2.373,-1.479 2.392,-3.187c0.024,-2.211 -1.789,-4.011 -4,-4.011c-2.208,0 -4,1.792 -4,4c-0,0.552 0.448,1 1,1c0.552,0 1,-0.448 1,-1c-0,-1.104 0.896,-2 2,-2c1.101,0 2.012,0.888 2,1.989c-0.008,0.778 -0.589,1.118 -1.185,1.373c-0.002,0.001 -0.004,0.002 -0.006,0.003c-1.098,0.478 -1.808,1.562 -1.808,2.76Z"/><path d="M22,9l0,-2c0,-0.552 -0.448,-1 -1,-1c-0.552,-0 -1,0.448 -1,1l-0,2c-0,0.552 0.448,1 1,1c0.552,0 1,-0.448 1,-1Z"/><path d="M30.546,13.368l1.414,-1.414c0.39,-0.391 0.39,-1.024 -0,-1.415c-0.39,-0.39 -1.024,-0.39 -1.414,0l-1.415,1.415c-0.39,0.39 -0.39,1.024 0,1.414c0.391,0.39 1.024,0.39 1.415,-0Z"/><path d="M33.5,22.499l2,-0c0.552,-0 1,-0.448 1,-1c-0,-0.552 -0.448,-1 -1,-1l-2,-0c-0.552,-0 -1,0.448 -1,1c0,0.552 0.448,1 1,1Z"/><path d="M29.133,31.045l1.414,1.414c0.391,0.39 1.024,0.39 1.414,-0c0.391,-0.39 0.391,-1.024 0,-1.414l-1.414,-1.414c-0.39,-0.391 -1.024,-0.391 -1.414,-0c-0.39,0.39 -0.39,1.024 -0,1.414Z"/><path d="M11.456,29.634l-1.414,1.414c-0.39,0.391 -0.39,1.024 0,1.414c0.39,0.391 1.024,0.391 1.414,0l1.414,-1.414c0.391,-0.391 0.39,-1.024 0,-1.414c-0.39,-0.391 -1.024,-0.391 -1.414,-0Z"/><path d="M8.5,20.503l-2,0.001c-0.552,-0 -1,0.448 -1,1c0,0.552 0.448,1 1,1l2,-0.001c0.552,0 1,-0.448 1,-1c-0,-0.552 -0.448,-1 -1,-1Z"/><path d="M12.865,11.957l-1.414,-1.414c-0.391,-0.39 -1.024,-0.39 -1.414,0c-0.391,0.39 -0.39,1.024 -0,1.414l1.415,1.414c0.39,0.39 1.024,0.39 1.414,-0c0.39,-0.391 0.39,-1.024 -0.001,-1.414Z"/></svg>
                    </span>
                    <h3>Sustainable Livelihoods</h3>
                    <p>Empowers rural women by creating sustainable income through skill-building, entrepreneurship, and employment opportunities.
                    </p>
                </div>
            </div>

            <div className="explore_btn">
                <Link><button>Explore What We Do</button></Link>
            </div>
        </div>       
    </div>
  )
}

export default Mission