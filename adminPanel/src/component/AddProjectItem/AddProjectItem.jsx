import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addProject } from "../../../api/ProjectApi"

const AddProjectItem = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [coverImage, setCoverImage] = useState(null);
  const [reportUrl, setReportUrl] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    setCoverImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('file', coverImage);
    formData.append('reportUrl', reportUrl);

    try {
      await addProject(formData);
      // setTitle('');
      // setDescription('');
      // setCoverImage(null);
      // setReportUrl('');
      toast.success('Project added successfully.');
      // navigate('/project');
    } catch (error) {
      toast.error('Error occurred while adding project.');
      console.error('Error:', error);
    }
  };

  return (
    <div className="banner_box">
      <ToastContainer />
      <div className="back_link">
        <h4>&gt;&gt;</h4>
        <Link to="/dashboard"><h4>Dashboard</h4></Link>
        <h4>/</h4>
        <Link to="/project"><h4>Projects</h4></Link>
        <h4>/</h4>
        <h4>Add Project</h4>
      </div>
      <hr />
      <div className="Dashboard_title">
        <h1>Add Project</h1>
      </div>
      <div className="banner_form">
        <form onSubmit={handleSubmit} method="post">
          <label htmlFor="coverImage">Select Cover Image</label><br />
          <input type="file" name="coverImage" onChange={handleImageChange} required /><br />

          <label htmlFor="title">Title</label><br />
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          /><br />

          <label htmlFor="description">Description</label><br />
          <textarea
            name="description"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea><br />

          <label htmlFor="reportUrl">Report URL</label><br />
          <input
            type="text"
            name="reportUrl"
            value={reportUrl}
            onChange={(e) => setReportUrl(e.target.value)}
            required
          /><br />

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <input type="submit" value="Add Project" name="addProject" />
          </div>
        </form>
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default AddProjectItem;
