import React from 'react'
import './ProjectItem.css'
import { Link } from 'react-router-dom'

const ProjectItem = ({id,title,description,images,timeStamp}) => {
  return (
    <Link>
      <div className='project_box'>
          <div className='porject_img'>
            <img src={images[0].imageURL} alt={title} />
          </div>
          <div style={{padding:'20px'}}>
              <h2>{title}</h2>
              <p>{description}</p>
              <div className='deatils_div'>
                {/* <h5>{timeStamp}</h5> */}
                <h5>Friday, September 8th, 2023</h5>
                <button>View Details</button>
              </div>
          </div>
      </div>
    </Link>
  )
}

export default ProjectItem