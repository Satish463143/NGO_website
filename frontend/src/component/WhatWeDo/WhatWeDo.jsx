import React from 'react'
import './WhatWeDo.css'
import project_2 from '../../../src/assets/images/project_2.png';

const WhatWeDo = () => {
  return (
    <div className='container'>
      <div className='whatwedo'>
        <div className="mission_title">
            <h1>What We Do</h1>  
            <div style={{width:'100px', height:'5px', background:'var(--pri_color)',margin:'20px auto 30px auto',}}></div>
        </div>
        <div className='what_we_do_grid'>            
            <div className="what_we_do_img">
              <img src={project_2} alt="" />
            </div>
            <div className="what_we_do_title">
              <h1>Education Distribution</h1>
            </div>
            <div className="what_we_do_cont">
              <p>We have built shelter homes in different regions so children can move out of undeveloped areas to live, study and work in bigger and better cities.</p>
            </div>          
        </div>
        <div className='what_we_do_grid'> 
            <div className="what_we_do_cont">
              <p>We have built shelter homes in different regions so children can move out of undeveloped areas to live, study and work in bigger and better cities.</p>
            </div> 
            <div className="what_we_do_title">
              <h1>Economic Development</h1>
            </div>
            <div className="what_we_do_img">
              <img src={project_2} alt="" />
            </div> 
        </div>
        <div className='what_we_do_grid'>            
            <div className="what_we_do_img">
              <img src={project_2} alt="" />
            </div>
            <div className="what_we_do_title">
              <h1>Research</h1>
            </div>
            <div className="what_we_do_cont">
              <p>We have built shelter homes in different regions so children can move out of undeveloped areas to live, study and work in bigger and better cities.</p>
            </div>          
        </div>
        <div className='what_we_do_grid'> 
            <div className="what_we_do_cont">
              <p>We have built shelter homes in different regions so children can move out of undeveloped areas to live, study and work in bigger and better cities.</p>
            </div> 
            <div className="what_we_do_title">
              <h1>Environment Conservation</h1>
            </div>
            <div className="what_we_do_img">
              <img src={project_2} alt="" />
            </div> 
        </div>
        <div className='what_we_do_grid'>            
            <div className="what_we_do_img">
              <img src={project_2} alt="" />
            </div>
            <div className="what_we_do_title">
              <h1>Collaboration of Educaation with Environment & Economy</h1>
            </div>
            <div className="what_we_do_cont">
              <p>We have built shelter homes in different regions so children can move out of undeveloped areas to live, study and work in bigger and better cities.</p>
            </div>          
        </div>
        <div className='what_we_do_grid'> 
            <div className="what_we_do_cont">
              <p>We have built shelter homes in different regions so children can move out of undeveloped areas to live, study and work in bigger and better cities.</p>
            </div> 
            <div className="what_we_do_title">
              <h1>Connect Communities</h1>
            </div>
            <div className="what_we_do_img">
              <img src={project_2} alt="" />
            </div> 
        </div>
      </div>
    </div>
  )
}

export default WhatWeDo