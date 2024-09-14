import React from 'react'
import './ProjectItem.css'
import { Link } from 'react-router-dom'
import formatDate from "../../../utils/formatDate";

const ProjectItem = ({ id, title, description, images, timeStamp }) => {
  return (
    <Link to={`/project/${id}`}>
      <div className='project_box'>
        <div className='porject_img'>
          <img src={images} alt={title} />
        </div>
        <div className='project_content' style={{ padding: '20px' }}>
          <div style={{display:'contents',justifyContent:'start', alignItems:'center'}}>
            <h2>{title}</h2>
          </div>
          {/* <p>{description}</p> */}
          
          <div className='deatils_div'>
            <div className='project_date' style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <span>
                <svg id="Icons" width="18px" height="18px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><defs><style>{`.cls-1{fill:#000000;}`}</style></defs><path class="cls-1" d="M20,2H19V1a1,1,0,0,0-2,0V2H7V1A1,1,0,0,0,5,1V2H4A4,4,0,0,0,0,6V20a4,4,0,0,0,4,4H20a4,4,0,0,0,4-4V6A4,4,0,0,0,20,2Zm2,18a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V6A2,2,0,0,1,4,4H5V5A1,1,0,0,0,7,5V4H17V5a1,1,0,0,0,2,0V4h1a2,2,0,0,1,2,2Z" /><path class="cls-1" d="M19,7H5A1,1,0,0,0,5,9H19a1,1,0,0,0,0-2Z" /><path class="cls-1" d="M7,12H5a1,1,0,0,0,0,2H7a1,1,0,0,0,0-2Z" /><path class="cls-1" d="M7,17H5a1,1,0,0,0,0,2H7a1,1,0,0,0,0-2Z" /><path class="cls-1" d="M13,12H11a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Z" /><path class="cls-1" d="M13,17H11a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Z" /><path class="cls-1" d="M19,12H17a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Z" /><path class="cls-1" d="M19,17H17a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Z" /></svg>
              </span>              
              <h5>{formatDate(timeStamp)}</h5>
            </div>
            <Link style={{ display: 'flex', gap: '10px',justifyContent:'start',alignItems:'center' }}><button>View Details</button><i class="fa-solid fa-arrow-right-long"></i></Link>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProjectItem