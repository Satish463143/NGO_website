import React from 'react'
import './WhoWeAreItem.css'
import project_2 from '../../../src/assets/images/project_2.png';
const WhoWeAreItem = () => {
  return (
    <div className=' who_we_are'>
        <div className='container'>
            <div className="mission_title">
                <h1>Who We Care For ?</h1>  
                <div style={{width:'100px', height:'5px', background:'var(--pri_color)',margin:'20px auto 30px auto',}}></div>
            </div>
            <div className="who_we_are_grid">
                <div className="who_we_are_box">
                    <div className="who_we_are_img">
                        <img src={project_2} alt="" />
                    </div>
                    <div className="who_we_are_title"></div>
                    <div className="who_we_are_cont"></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhoWeAreItem