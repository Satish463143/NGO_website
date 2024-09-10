import React, { useContext } from 'react'
import './AllProject.css'
import { StoreContext } from '../../context/StoreContext'
import ProjectItem from '../ProjectItem/ProjectItem'

const AllProject = () => {
    const {projectList} = useContext(StoreContext)
    const sortedProjects = projectList
    .sort((a, b) => new Date(b.timeStamp) - new Date(a.timeStamp))

  return (
    <div className='container'>
      <div className="project_grid" style={{margin:'50px 0'}}>
        {sortedProjects.map((item,index)=>{
          return(<ProjectItem key={index} id={item.id} title={item.title} images={item.images} timeStamp={item.timeStamp}/>)
          
        })}
      </div>
    </div>
  )
}

export default AllProject