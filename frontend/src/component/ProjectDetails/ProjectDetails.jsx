import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../../context/StoreContext'
import { useParams,Link } from 'react-router-dom'
import './ProjectDetails.css'

const ProjectDetails = () => {
    const {id} = useParams();
    const {projectList} = useContext(StoreContext)
    const [project , setProject] = useState(null)
    const [Loading, setLoading] = useState(true)

    useEffect(() => {
        
        const foundProject = projectList.find(item => item.id === id);
        // console.log(project.id)
        setProject(foundProject);
        
        setLoading(false);
    }, [id, projectList]);

    if(Loading) return <div>Loading ...</div>
    if(!project) return <div>Project Not Found</div>
    
  return (
    <div>
        <h2>{project.title}</h2>
        {project.images.map((item,index)=>(
            <div key={index}>
                <img  src={item.imageURL} alt="" />
                <p >{item.imageCaption}</p>
            </div>
        ))}
    </div>
  )
}

export default ProjectDetails