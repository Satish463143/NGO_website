import React, { useContext, useEffect, useState } from 'react'
import './AllProject.css'
import { StoreContext } from '../../context/StoreContext'
import ProjectItem from '../ProjectItem/ProjectItem';
import { BASE_URL } from '../../../utils/api';

const AllProject = () => {
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

  const sortedProjects = projectList
    .sort((a, b) => new Date(b.timeStamp) - new Date(a.timeStamp))

  return (
    <div className='container'>
      <div className="project_grid" style={{ margin: '50px 0' }}>
        {sortedProjects.map((item, index) => {
          return (<ProjectItem key={index} id={item._id} title={item.title} images={item.image1} timeStamp={item.createdAt} />)

        })}
      </div>
    </div>
  )
}

export default AllProject