import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AddBlogs.css';
import { Link } from 'react-router-dom';

const AddBlogs = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };

    const handleContentChange = (e) => {
        setContent(e.target.value);
    };

    const displayMessageofBlogs = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('category', category);
        formData.append('content', content);
        formData.append('image', image);

        try {
            const response = await axios.post('http://localhost:4000/api/blogs/add', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response.data.success) {
                setMessage('Blogs added successfully!');
                setError('');
                navigate('/blogs');
            } else {
                setError('Failed to add blogs.');
            }
        } catch (err) {
            console.error('Error adding blogs:', err);
            setError('An error occurred while adding the blogs.');
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
                <h4>Add Blogs</h4>
            </div> 
            <hr />
            <div className='Dashboard_title'>
                <h1>Add Blogs</h1>
            </div>
            <div className='banner_form'>
                <form onSubmit={displayMessageofBlogs}>
                    <label htmlFor="image">Select Image</label><br />
                    <input type="file" name='image' onChange={handleImageChange} required /><br />
                    <label htmlFor="title">Title</label><br />
                    <input type="text" name='title' value={title} onChange={handleTitleChange} required /><br />
                    <label htmlFor="category">Category</label> <br />
                    <select name="category" id="category" value={category} onChange={handleCategoryChange} required>
                        <option value="">Select Category</option>
                        <option value="News">News</option>
                        <option value="Property">Property</option>
                        <option value="LifeStyle">LifeStyle</option>
                        <option value="Finance">Finance</option>
                    </select><br />
                    <label htmlFor="content">Content</label><br />
                    <textarea name="content" id="content" rows="7" value={content} onChange={handleContentChange} required></textarea><br />
                    <div style={{display:'flex', justifyContent:'center'}}>
                        <input type="submit" value='Add Blogs' name='addBlogs' />
                    </div>
                </form>
                {message && <p className="success-message">{message}</p>}
                {error && <p className="error-message">{error}</p>}
            </div>       
        </div>
    );
};

export default AddBlogs;
