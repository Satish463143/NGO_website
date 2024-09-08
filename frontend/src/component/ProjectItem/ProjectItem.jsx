import React from 'react'
import './ProjectItem.css'

const ProjectItem = ({id,title,description,images,timeStamp}) => {
  return (
    <div className='project_box'>
        <div className='porject_img'>
            <img src={images} alt={title} />
            <h2>{title}</h2>
            <p>{description}</p>
            <p>{timeStamp}</p>
        </div>
    </div>
  )
}

export default ProjectItem