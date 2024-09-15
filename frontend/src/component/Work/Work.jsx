import React from 'react'
import './Work.css'
import {Link} from 'react-router-dom'
import enviroemnt from '../../../src/assets/images/enviroemnt.png';
import education from '../../../src/assets/images/education.webp';
import economy from '../../../src/assets/images/economy.webp';

const Work = () => {
  return (
    <div className="bg">
    <div className='container'>
        <h1 style={{textAlign:'center',marginTop:'50px'}}>What We Do</h1>
        <div style={{width:'100px', height:'5px', background:'var(--pri_color)',margin:'20px auto 0 auto',}}></div>
        <div className="workgrid">
            <div className='work_box'>
                <img src={enviroemnt} alt="" />
                <div className='we_are_title'>
                <h2>We Care for Our Environment</h2></div>
                <div className='we_are_title'>
                    <p>We are committed to preserving our natural resources. Through initiatives like tree planting, river cleanups, and waste management, we actively contribute to environmental conservation and sustainability.</p>
                </div>
                <div className='we_are_title_btn'>
                <Link style={{display:'flex',gap:'10px'}}><button>Read More</button><i class="fa-solid fa-arrow-right-long"></i></Link></div>
            </div>
            <div className='work_box'>
                <img src={education} alt="" />
                <div className='we_are_title'>
                <h2>We Educate & Inspire</h2></div>
                <div className='we_are_title'>
                    <p>We believe in the power of education to drive change. Through educational programs and awareness campaigns, we promote environmental conservation, sustainable practices, and social responsibility</p>
                </div>
                <div className='we_are_title_btn'>
                <Link style={{display:'flex',gap:'10px'}}><button>Read More</button><i class="fa-solid fa-arrow-right-long"></i></Link></div>
            </div>
            <div className='work_box'>
                <img src={economy} alt="" />
                <div className='we_are_title'>
                    <h2>We Empower & Strengthen</h2>
                </div>
                <div className='we_are_title'>
                    <p>We invest in the development of individuals and communities by providing training, resources, and mentorship. By enhancing their skills and capacity, we empower them to achieve sustainable growth and development.</p>
                </div>
                <div className='we_are_title_btn'>
                    <Link style={{display:'flex',gap:'10px',alignItems:'center'}}><button>Read More</button> <i class="fa-solid fa-arrow-right-long"></i></Link>
                </div>
            </div>
        </div> 
        <div className="explore_btn">
            <Link to='/WhatWeDo'><button>Explore What We Do</button></Link>
        </div>       
    </div>
    </div>
  )
}

export default Work