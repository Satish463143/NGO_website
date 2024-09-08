import React, { useContext } from 'react'
import './Project.css'
import ProjectItem from '../ProjectItem/ProjectItem'
import { StoreContext } from '../../context/StoreContext'

const Project = () => {
    const {project} = useContext(StoreContext)

  return (
    <div className='project'>
        <div className="container">
            <div className='project_title'>
                <h2>Our Projects​</h2>
                <p>You can use a few enticing words and flaunt your capabilities that will attract future donors and encourage them to donate right away.</p>
            </div>
            <div className='project_grid'>
                {project.map((item, index)=>{
                    return <ProjectItem key={index} title={item.title} description={item.description} images={item.images} />
                })

                }

            </div>
        </div>

    </div>
  )
}

export default Project