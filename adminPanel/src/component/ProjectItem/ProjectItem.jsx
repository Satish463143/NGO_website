import React, { useState, useEffect } from 'react';
import './PropertyItem.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { getAllProjects, deleteProject } from "../../../api/ProjectApi";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import parse from 'html-react-parser';

const ProjectItem = () => {
  const [filters, setFilters] = useState({
    category: 'All',
    status: 'All',
    sellingType: 'All',
  });
  const navigate = useNavigate();

  const [properties, setProperties] = useState([]);
  const { data: propertiesList, error, loading } = getAllProjects();

  useEffect(() => {
    setProperties(propertiesList);
  }, [propertiesList]);


  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const resetFilters = () => {
    setFilters({
      category: 'All',
      status: 'All',
      sellingType: 'All',
    });
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      try {
        deleteProject(id);
        setProperties(properties.filter((project) => project._id !== id));
        toast.success("Project deleted!");
      } catch (error) {
        console.error('Error deleting project:', error);
        toast.error("Failed to delete project.");
      }
    }
  };

  const handleUpdate = (id) => {
    navigate(`/editProject/${id}`);
  };

  const filteredProperties = properties.filter((project) => {
    const categoryMatch = filters.category === 'All' || project.category === filters.category;
    const statusMatch = filters.status === 'All' || project.status === filters.status;
    const sellingTypeMatch = filters.sellingType === 'All' || project.sellingType === filters.sellingType;
    return categoryMatch && statusMatch && sellingTypeMatch;
  });

  return (
    <div className="property_list">
      <div className="back_link">
        <h4>&gt;&gt;</h4>
        <Link to="/dashboard">
          <h4>Dashboard</h4>
        </Link>
        <h4>/Projects</h4>
      </div>
      <hr style={{ marginTop: '20px' }} />
      <div className="Dashboard_title">
        <div style={{ display: 'flex', alignItems: 'center', gap: '50px' }}>
          <h1>Project List</h1>
          <Link to="/addProject">
            <button>Add Project</button>
          </Link>
        </div>
        <div>
          <div className='back_link'>

          </div>
          <hr style={{ marginTop: '20px' }} />
          <div className='Dashboard_title'>

            {/* <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div className='catergory_box'>
                <select name="category" id="category" value={filters.category} onChange={handleFilterChange}>

                  <option value="Hot Selling">Hot Selling</option>
                  <option value="Featured">Featured</option>
                  <option value="New Properties">New Properties</option>
                  <option value="Premium Properties">Premium Properties</option>
                  <option value="All">All</option>
                </select>

              </div>
              <div className='status_box'>
                <select name="status" id="status" value={filters.status} onChange={handleFilterChange}>

                  <option value="Sold">Sold</option>
                  <option value="Avialable">Avialable</option>
                  <option value="All">All</option>
                </select>
              </div>
              <div className='sellingType_box'>
                <select name="sellingType_box" id="sellingType_box" value={filters.sellingType} onChange={handleFilterChange}>

                  <option value="Rent">Rent</option>
                  <option value="Sale">Sale</option>
                  <option value="All">All</option>
                </select>
              </div>
              <button onClick={resetFilters} style={{ background: 'green' }}>
                Clear All
              </button>

            </div> */}
          </div>
        </div>
      </div>

      {loading ? (
        <div>Loading properties...</div>
      ) : error ? (
        <div className="error">{error}</div>
      ) : (
        <div className="blog_table">
          <table border="2" style={{ tableLayout: 'auto', width: "100%" }}>
            <thead>
              <tr>
                <th style={{ width: '5%' }}>S.N</th>
                <th style={{ width: '15%' }}>Title</th>
                <th style={{ width: '45%' }}>Description</th>
                <th style={{ width: '10%' }}>Cover Image</th>
                <th style={{ width: '15%' }}>Report Link</th>
                <th style={{ width: '10%' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredProperties.map((project, index) => (
                <tr key={project._id}>
                  <td>{index + 1}</td>
                  <td>{project.title}</td>
                  <td>{project.description}</td>
                  <td className='table_img'>
                    {<img src={project.imageURL} />}
                  </td>
                  <td>
                    {<a href={project.reportURL}>
                      <span style={{
                        textDecoration: 'underline',
                        color: 'blueviolet',
                        display: 'block',
                        wordBreak: 'break-word',
                      }} >
                        {project.reportURL}
                      </span>
                    </a>}
                  </td>
                  <td style={{ textAlign: 'center', width: '150px' }}>
                    <button onClick={() => handleUpdate(project._id)} className="edit_btn">
                      Edit
                    </button>
                    <button onClick={() => handleDelete(project._id)} className="delete_btn">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default ProjectItem;
