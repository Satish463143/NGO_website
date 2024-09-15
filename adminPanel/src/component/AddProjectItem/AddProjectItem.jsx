import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AddPropertyItem.css';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // For React-Quill styles
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { addProject } from '../../../api/ProjectApi';

const AddProjectItem = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    description1: '',
    description2: '',
    description3: '',
    description4: '',
    description5: '',
    description6: '',
  });
  const [files, setFiles] = useState({
    image1: null,
    image2: null,
    image3: null,
    image4: null,
    image5: null,
    image6: null,
  });

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFiles((prevFiles) => ({
      ...prevFiles,
      [name]: files[0],
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleQuillChange = (value, name) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    Object.keys(formData).forEach(key => {
      formDataToSend.append(key, formData[key]);
    });

    [files.image1, files.image2, files.image3, files.image4, files.image5, files.image6].forEach((image, index) => {
      if (image) {
        formDataToSend.append('files', image); // Append each image under the same key "files"
      }
    });

    console.log("Form Data to Send:", formDataToSend);  // Log the FormData object

    // Send the data
    try {
      addProject(formDataToSend)
      toast.success('Project added successfully!');

    } catch (error) {
      console.error('Error adding project:', error);
      toast.error('An error occurred while adding the project.');
    }
  };



  return (
    <div className="banner_box">
      <ToastContainer />
      <div className="back_link">
        <h4> &gt;&gt; </h4>
        <Link to="/dashboard">
          <h4>Dashboard </h4>
        </Link>
        <h4>/</h4>
        <Link to="/project">
          <h4> Property</h4>
        </Link>
        <h4>/</h4>
        <h4>Add Property</h4>
      </div>
      <hr />
      <div className="Dashboard_title">
        <h1>Add Property</h1>
      </div>
      <div className="property_form">
        <form action="" method="post" onSubmit={handleSubmit}>
          <h4>Details</h4>
          <div>
            <label htmlFor="title">Title</label>
            <span>*</span><br />
            <input type="text" name="title" placeholder="Enter Title" value={formData.title} onChange={handleChange} required /><br />
          </div>

          <h4>Main Description</h4>
          <textarea
            name="description"
            placeholder="Enter main description"
            value={formData.description}
            onChange={handleChange}
          ></textarea>

          <h4>Images & Descriptions</h4>
          <div className="details_grid">
            <div>
              {/* Image inputs */}
              {['image1', 'image2', 'image3', 'image4', 'image5', 'image6'].map((imageField, index) => (
                <div key={index}>
                  <label htmlFor={imageField}>{`Image ${index + 1}`}</label>
                  <input type="file" name={imageField} onChange={handleFileChange} />
                </div>
              ))}
            </div>

            <div>
              {/* React-Quill for descriptions */}
              {['description1', 'description2', 'description3', 'description4', 'description5', 'description6'].map(
                (descriptionField, index) => (
                  <div key={index}>
                    <label htmlFor={descriptionField}>{`Description ${index + 1}`}</label>
                    <ReactQuill
                      value={formData[descriptionField]}
                      onChange={(value) => handleQuillChange(value, descriptionField)}
                    />
                  </div>
                )
              )}
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <input type="submit" value="Add Project" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProjectItem;
