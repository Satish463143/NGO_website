import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './BannerIitem.css';

const BannerIitem = () => {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState(null);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('image', image);

        try {
            const response = await axios.post('http://localhost:4000/api/Banner/add', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response.data.success) {
                setMessage('Banner added successfully!');
                setError('');
            } else {
                setMessage('');
                setError('Failed to add banner.');
            }
        } catch (err) {
            console.error("Error adding banner:", err);
            setMessage('');
            setError('An error occurred while adding the banner.');
        }
    };

    return (
        <div className='banner_box'>
            <div className='back_link'>
                <h4> &gt;&gt; </h4>
                <Link to='/dashboard'><h4>Dashboard </h4></Link>
                <h4>/</h4><h4> Banner</h4>
            </div>
            <hr />
            <div className='Dashboard_title'>
                <h1>Banner</h1>
            </div>
            <div className='banner_form'>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="image">Select Image</label><br />
                    <input type="file" name='image' onChange={handleImageChange} required /><br />
                    <label htmlFor="title">Title</label><br />
                    <input type="text" name='title' value={title} onChange={handleTitleChange} required /><br />
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <input type="submit" value='Update Banner' name='bannerUpdate' />
                    </div>
                </form>
                {message && <p className="success-message">{message}</p>}
                {error && <p className="error-message">{error}</p>}
            </div>
        </div>
    );
}

export default BannerIitem;
