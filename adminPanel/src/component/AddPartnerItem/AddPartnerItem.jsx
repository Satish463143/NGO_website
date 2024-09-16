import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addNewPartner } from '../../../api/PartnersApi';

const AddPartnerItem = () => {
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', content);
    formData.append('file', image);

    try {
      addNewPartner(formData);
      setName('');
      setContent('');
      setImage(null);
      toast.success("Partner added.");
    } catch (error) {
      toast.error('Error occurred while adding partner.');
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
        <Link to='/partnerList'><h4> Partners</h4></Link>
        <h4>/</h4>
        <h4>Add Partner</h4>
      </div>
      <hr />
      <div className='Dashboard_title'>
        <h1>Add Partner</h1>
      </div>
      <div className='banner_form'>
        <form onSubmit={handleSubmit} method='post'>
          <label htmlFor="image">Select Image</label><br />
          <input type="file" name='image' onChange={handleImageChange} required /><br />

          <label htmlFor="name">Name</label><br />
          <input type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} required /><br />

          <label htmlFor="content">Description</label><br />
          <textarea name="content" id="content" value={content} onChange={(e) => setContent(e.target.value)} required></textarea><br />

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <input type="submit" value='Add Partner' name='addPartners' />
          </div>
        </form>
        {message && <p className="success-message">{message}</p>}
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  )
}

export default AddPartnerItem;
