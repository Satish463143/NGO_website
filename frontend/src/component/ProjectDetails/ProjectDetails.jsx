import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../../context/StoreContext'
import { useParams, Link } from 'react-router-dom'
import './ProjectDetails.css';
import { BASE_URL } from '../../../utils/api';

const ProjectDetails = () => {
    const { id } = useParams();

    const [projectList, setProjectList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${BASE_URL}/project/get-all-projects`);
                const result = await response.json();

                setProjectList(result.data);
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
    }, [projectList]);

    const [project, setProject] = useState(null)
    const [Loading, setLoading] = useState(true)

    useEffect(() => {
        const foundProject = projectList.find(item => item._id === id);
        console.log(foundProject)
        setProject(foundProject);

        setLoading(false);
    }, [id, projectList]);

    if (Loading) return <div>Loading ...</div>
    if (!project) return <div>Project Not Found</div>

    return (
        <div>
            <h2>{project.title}</h2>
            {/* {project.images.map((item, index) => ( */}
            <div key={project.index}>
                <img src={project.image1} alt="" />
                <p >{project.description1}</p>
            </div>
            {/* )) */
            }
        </div>
    )
}

export default ProjectDetails