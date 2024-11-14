import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getProject, editProject } from '../../../api/ProjectApi'; // Update API calls

const EditProjectItem = () => {
  const navigate = useNavigate();
  const params = useParams();
  const projectID = params.id;

  const { data: project, error, loading } = getProject(projectID);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [reportURL, setReportURL] = useState('');
  const [coverImage, setCoverImage] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (project) {
      setTitle(project.title);
      setDescription(project.description);
      setReportURL(project.reportURL);
      setImagePreview(project.imageURL); // Set preview for the existing image
    }
  }, [project]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setCoverImage(file);
    setImagePreview(URL.createObjectURL(file)); // Show preview of the selected image
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('reportURL', reportURL);

    if (coverImage) {
      formData.append('file', coverImage); // Only append if a new image is selected
    }

    try {
      await editProject(formData, projectID); // Call the API to update the project
      toast.success('Project updated.');
    } catch (error) {
      toast.error('Error occurred while updating project.');
      console.error('Error:', error);
    }
  };

  return (
    <div className='banner_box'>
      <ToastContainer />
      <div className='back_link'>
        <h4> &gt;&gt; </h4>
        <Link to='/dashboard'><h4>Dashboard </h4></Link>
        <h4>/</h4>
        <Link to='/project'><h4> Projects</h4></Link>
        <h4>/</h4>
        <h4>Edit Project</h4>
      </div>
      <hr />
      <div className='Dashboard_title'>
        <h1>Edit Project</h1>
      </div>
      <div className='banner_form'>
        <form onSubmit={handleSubmit} method='post'>
          <label htmlFor="coverImage">Cover Image</label><br />
          <input type="file" name='coverImage' onChange={handleImageChange} /><br />

          {/* Image Preview */}
          <div style={{ margin: '10px 0' }}>
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Cover Preview"
                style={{ maxWidth: '200px' }}
              />
            )}
          </div>

          <label htmlFor="title">Title</label><br />
          <input
            type="text"
            name='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          /><br />

          <label htmlFor="description">Description</label><br />
          <textarea
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea><br />

          <label htmlFor="reportURL">Report URL</label><br />
          <input
            type="url"
            name='reportURL'
            value={reportURL}
            onChange={(e) => setReportURL(e.target.value)}
            required
          /><br />

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <input type="submit" value='Save' />
          </div>
        </form>
        {message && <p className="success-message">{message}</p>}
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default EditProjectItem;
