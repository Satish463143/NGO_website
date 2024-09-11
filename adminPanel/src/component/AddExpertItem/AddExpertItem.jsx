import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AddExpertItem = () => {
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
    formData.append('content', content);
    formData.append('image', image);

    try {
      const response = await axios.post('http://localhost:4000/api/ourexpertise/add', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      if (response.data.success) {
        setMessage(response.data.message);
        setTimeout(() => {
          navigate('/expertList');
        }, 2000); // Redirect after 2 seconds
      } else {
        setError('Failed to add expert.');
      }
    } catch (error) {
      setError('Error occurred while adding expert.');
      console.error('Error:', error);
    }
  };

  return (
    <div className='banner_box'>
      <div className='back_link'>
        <h4> &gt;&gt; </h4>
        <Link to='/dashboard'><h4>Dashboard </h4></Link>
        <h4>/</h4>
        <Link to='/expertList'><h4> Experts</h4></Link>
        <h4>/</h4>
        <h4>Add Experts</h4>
      </div>
      <hr />
      <div className='Dashboard_title'>
        <h1>Add Experts</h1>
      </div>
      <div className='banner_form'>
        <form onSubmit={handleSubmit} method='post'>
          <label htmlFor="image">Select Image</label><br />
          <input type="file" name='image' onChange={handleImageChange} required /><br />
          
          <label htmlFor="name">Name</label><br />
          <input type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} required /><br />
          
          <label htmlFor="content">Content</label><br />
          <textarea name="content" id="content" value={content} onChange={(e) => setContent(e.target.value)} required></textarea><br />
          
          <div style={{display:'flex', justifyContent:'center'}}>
            <input type="submit" value='Add Experts' name='addExperts' />
          </div>
        </form>
        {message && <p className="success-message">{message}</p>}
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  )
}

export default AddExpertItem;
