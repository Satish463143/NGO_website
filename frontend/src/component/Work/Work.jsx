import React from 'react'
import './Work.css'
import {Link} from 'react-router-dom'
import enviroemnt from '../../../src/assets/images/enviroemnt.png';
import education from '../../../src/assets/images/education.webp';
import economy from '../../../src/assets/images/economy.webp';

const Work = () => {
  return (
    <div className='container'>
        <h1 style={{textAlign:'center',marginTop:'50px'}}>What We Do</h1>
        <div style={{width:'100px', height:'5px', background:'var(--pri_color)',margin:'20px auto 0 auto',}}></div>
        <div className="workgrid">
            <div className='work_box'>
                <img src={enviroemnt} alt="" />
                <h2>We Care for Our Environment</h2>
                <p>We are committed to preserving our natural resources. Through initiatives like tree planting, river cleanups, and waste management, we actively contribute to environmental conservation and sustainability.</p>
                <Link style={{display:'flex',gap:'10px'}}><button>Read More</button><i class="fa-solid fa-arrow-right-long"></i></Link>
            </div>
            <div className='work_box'>
                <img src={education} alt="" />
                <h2>We Educate &
                Inspire</h2>
                <p>We believe in the power of education to drive change. Through educational programs and awareness campaigns, we promote environmental conservation, sustainable practices, and social responsibility</p>
                <Link style={{display:'flex',gap:'10px'}}><button>Read More</button><i class="fa-solid fa-arrow-right-long"></i></Link>
            </div>
            <div className='work_box'>
                <img src={economy} alt="" />
                <h2>We Empower & Strengthen</h2>
                <p>We invest in the development of individuals and communities by providing training, resources, and mentorship. By enhancing their skills and capacity, we empower them to achieve sustainable growth and development.</p>
                <Link style={{display:'flex',gap:'10px',alignItems:'center'}}><button>Read More</button> <i class="fa-solid fa-arrow-right-long"></i></Link>
            </div>
        </div> 
        <div className="explore_btn">
                <Link><button>Explore What We Do</button></Link>
            </div>       
    </div>
  )
}

export default Work