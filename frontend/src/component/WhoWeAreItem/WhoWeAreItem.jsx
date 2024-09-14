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
                    <div className="who_we_are_title">
                        <h2>The Environment</h2>
                    </div>
                    <div className="who_we_are_cont">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus mollitia repellat sed iure, odio, voluptates nesciunt porro deleniti deserunt quasi nostrum magni, veniam harum ipsam autem expedita rerum soluta quisquam!
                    </div>
                </div>
                <div className="who_we_are_box">
                    <div className="who_we_are_img">
                        <img src={project_2} alt="" />
                    </div>
                    <div className="who_we_are_title">
                        <h2>Vulnerability Threat</h2>
                    </div>
                    <div className="who_we_are_cont">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus mollitia repellat sed iure, odio, voluptates nesciunt porro deleniti deserunt quasi nostrum magni, veniam harum ipsam autem expedita rerum soluta quisquam!
                    </div>
                </div>
                <div className="who_we_are_box">
                    <div className="who_we_are_img">
                        <img src={project_2} alt="" />
                    </div>
                    <div className="who_we_are_title">
                        <h2>Women Economic Status Status</h2>
                    </div>
                    <div className="who_we_are_cont">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus mollitia repellat sed iure, odio, voluptates nesciunt porro deleniti deserunt quasi nostrum magni, veniam harum ipsam autem expedita rerum soluta quisquam!
                    </div>
                </div>
                <div className="who_we_are_box">
                    <div className="who_we_are_img">
                        <img src={project_2} alt="" />
                    </div>
                    <div className="who_we_are_title">
                        <h2>Well-being</h2>
                    </div>
                    <div className="who_we_are_cont">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus mollitia repellat sed iure, odio, voluptates nesciunt porro deleniti deserunt quasi nostrum magni, veniam harum ipsam autem expedita rerum soluta quisquam!
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhoWeAreItem