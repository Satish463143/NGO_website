import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../../context/StoreContext'
import { useParams, Link } from 'react-router-dom'
import './ProjectDetails.css';
import { BASE_URL } from '../../../utils/api';
import parse from 'html-react-parser';
import { getAllProjects } from "../../api/ProjectApi";

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
            <h2>{project.title}</h2>
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
    )
}

export default ProjectDetails