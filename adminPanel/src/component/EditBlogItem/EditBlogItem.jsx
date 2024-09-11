import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import axios from 'axios';

const EditBlogItem = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [currentImage, setCurrentImage] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  // Fetch the blog's current data from the backend
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        console.log('Fetching blog data for ID:', id);
        const response = await axios.get(`http://localhost:4000/api/blogs/${id}`);
        const { title, category, content, image } = response.data;
        console.log('Fetched blog data:', response.data);
        setTitle(title);
        setCategory(category);
        setContent(content);
        setCurrentImage(image);
      } catch (error) {
        console.error('Error fetching blog data:', error);
        setError('Failed to fetch blog data.');
      }
    };
    fetchBlog();
  }, [id]);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
    console.log('Selected image file:', e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('category', category);
    formData.append('content', content);
    if (image) formData.append('image', image);

    try {
      console.log('Submitting form data:', {
        title,
        category,
        content,
        image: image ? image.name : 'No new image',
      });

      const response = await axios.put(`http://localhost:4000/api/blogs/update/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log('Response from server:', response.data);

      if (response.data.success) {
        setMessage(response.data.message);
        console.log('Blog updated successfully, navigating to /blogs');
        setTimeout(() => {
          navigate('/blogs');
        }, 2000); // Redirect after 2 seconds
      } else {
        setError('Failed to update blog.');
      }
    } catch (error) {
      console.error('Error occurred while updating blog:', error);
      setError('Error occurred while updating blog.');
    }
  };

  return (
    <div className='banner_box'>
      <div className='back_link'>
        <h4> &gt;&gt; </h4>
        <Link to='/dashboard'><h4>Dashboard </h4></Link>
        <h4>/</h4>
        <Link to='/blogs'><h4> Blogs</h4></Link>
        <h4>/</h4>
        <h4>Edit Blogs</h4>
      </div> 
      <hr />
      <div className='Dashboard_title'>
        <h1>Edit Blogs</h1>
      </div>
      <div className='banner_form'>
        <form onSubmit={handleSubmit}>
          <label htmlFor="image">Select Image</label><br />
          {currentImage && (
            <img
              src={`http://localhost:4000/uploads/${currentImage}`}
              alt="Current Blog"
              style={{ width: '150px', marginBottom: '10px' }}
            />
          )}
          <br />
          <input type="file" name='image' onChange={handleImageChange} /><br />
          
          <label htmlFor="title">Title</label><br />
          <input
            type="text"
            name='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          /><br />
          
          {/* <label htmlFor="category">Category</label><br />
          <select
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select Category</option>
            <option value="News">News</option>
            <option value="Property">Property</option>
            <option value="LifeStyle">LifeStyle</option>
            <option value="Finance">Finance</option>
          </select><br /> */}
          
          <label htmlFor="content">Content</label><br />
          <textarea
            name="content"
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea><br />
          
          <div style={{display:'flex', justifyContent:'center'}}>
            <input type="submit" value='Update Blog' />
          </div>
        </form>
        {message && <p className="success-message">{message}</p>}
        {error && <p className="error-message">{error}</p>}
      </div>       
    </div>
  );
}

export default EditBlogItem;
