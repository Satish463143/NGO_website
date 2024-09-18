import React, { useContext, useEffect, useState } from 'react'
import './AllProject.css'
import { StoreContext } from '../../context/StoreContext'
import ProjectItem from '../ProjectItem/ProjectItem';
import { BASE_URL } from '../../../utils/api';
import { getAllProjects } from '../../api/ProjectApi';

const AllProject = () => {
  const { data: projectList, error, loading } = getAllProjects();
  const [visible, setVisible] = useState(9)
    const sortedProjects = projectList
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  const loadMore =()=>{
    setVisible(pervState => pervState + 9)
  }
  return (
    <div className='container'>
      <div className="project_grid" style={{ margin: '50px 0' }}>
        {sortedProjects.slice(0,visible).map((item, index) => {
          return (<ProjectItem key={index} id={item._id} title={item.title} images={item.image1} timeStamp={item.createdAt} />)

        })}
      </div>
      {visible < setVisible.length && (
        <div className='load_more_btn'>
          <button onClick={loadMore}>
              Load More <i className="fa-solid fa-arrow-right-long"></i>
          </button>
        </div>
      )}
      
    </div>
  )
}

export default AllProject