import React, { useContext, useEffect, useState } from 'react'
import './AllProject.css'
import { StoreContext } from '../../context/StoreContext'
import ProjectItem from '../ProjectItem/ProjectItem';
import { BASE_URL } from '../../../utils/api';
import { getAllProjects } from '../../api/ProjectApi';

const AllProject = () => {
  const { data: projectList, error, loading } = getAllProjects();

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