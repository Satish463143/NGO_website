import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './ProjectDetails.css';
import parse from 'html-react-parser';
import { getAllProjects } from "../../api/ProjectApi";
import BannersItem from '../BannersItem/BannersItem';
import nepalvillage from '../../../src/assets/images/banner-04.jpg';
const ProjectDetails = () => {
    const { id } = useParams();

    const { data: projectList, error, loading } = getAllProjects();

    const [project, setProject] = useState(null);

    useEffect(() => {
        const foundProject = projectList.find(item => item._id === id);
        console.log(foundProject)
        setProject(foundProject);
    }, [id, projectList]);

    if (loading) return <div>Loading ...</div>
    if (!project) return <div>Project Not Found</div>

    return (
        <div>
            <BannersItem title={project.title} image={nepalvillage}/>
            <div className="container">
            <div key={project._id}>
                {project.description}

                <ul style={{ listStyle: 'none', flex: 'col', textAlign: 'justify', justifyContent: 'space-between' }}>
                    {project.description1 ? <li>{parse(project.description1)}</li> : ""}
                    {project.image1 ? <li><img src={project.image1} /></li> : ""}

                    {project.description2 ? <li>{parse(project.description2)} </li> : ""}
                    {project.image2 ? <li><img src={project.image2} /></li> : ""}

                    {project.description3 ? <li>{parse(project.description3)} </li> : ""}
                    {project.image3 ? <li><img src={project.image3} /></li> : ""}

                    {project.description4 ? <li>{parse(project.description4)} </li> : ""}
                    {project.image4 ? <li><img src={project.image4} /></li> : ""}

                    {project.description5 ? <li>{parse(project.description5)} </li> : ""}
                    {project.image5 ? <li><img src={project.image5} /></li> : ""}

                    {project.description6 ? <li>{parse(project.description6)} </li> : ""}
                    {project.image6 ? <li><img src={project.image6} /></li> : ""}
                </ul>

            </div>
            </div>
        </div>
    )
}

export default ProjectDetails