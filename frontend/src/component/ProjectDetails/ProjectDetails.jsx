import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
        setProject(foundProject);
    }, [id, projectList]);

    if (loading) return <div>Loading ...</div>;
    if (!project) return <div>Project Not Found</div>;

    return (
        <div>
            <BannersItem title={project.title} image={nepalvillage} />
            <div className="detail_container">
                <div key={project._id}>
                    {project.description}
                </div>
                <div className="iframe-container">
                    <iframe
                        src={`${project.reportURL}?embedded=true`}
                        title="Project Document"
                    />
                </div>
            </div>
        </div>
    );
}

export default ProjectDetails;
