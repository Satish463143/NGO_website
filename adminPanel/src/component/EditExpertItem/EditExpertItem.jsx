import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import axios from 'axios';

const EditExpertItem = () => {
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [currentImage, setCurrentImage] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  // Fetch the expert's current data from the backend
  useEffect(() => {
    const fetchExpert = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/ourexpertise/${id}`);
        const { name, content, image } = response.data;
        setName(name);
        setContent(content);
        setCurrentImage(image);
      } catch (error) {
        console.error('Error fetching expert data:', error);
        setError('Failed to fetch expert data.');
      }
    };
    fetchExpert();
  }, [id]);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('content', content);
    if (image) formData.append('image', image);

    try {
      const response = await axios.put(`http://localhost:4000/api/ourexpertise/update/${id}`, formData, {
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
        setError('Failed to update expert.');
      }
    } catch (error) {
      setError('Error occurred while updating expert.');
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
        <h4>Edit Experts</h4>
      </div> 
      <hr />
      <div className='Dashboard_title'>
        <h1>Edit Experts</h1>
      </div>
      <div className='banner_form'>
        <form onSubmit={handleSubmit}>
          <label htmlFor="image">Select Image</label><br />
          {currentImage && (
            <img
              src={`http://localhost:4000/uploads/${currentImage}`}
              alt="Current Expert"
              style={{ width: '150px', marginBottom: '10px' }}
            />
          )}
          <br />
          <input type="file" name='image' onChange={handleImageChange} /><br />
          
          <label htmlFor="name">Name</label><br />
          <input
            type="text"
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          /><br />
          
          <label htmlFor="content">Content</label><br />
          <textarea
            name="content"
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea><br />
          
          <div style={{display:'flex', justifyContent:'center'}}>
            <input type="submit" value='Update Experts' />
          </div>
        </form>
        {message && <p className="success-message">{message}</p>}
        {error && <p className="error-message">{error}</p>}
      </div>       
    </div>
  );
}

export default EditExpertItem;
