import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddBlogs.css';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addNewImages } from '../../../api/GalleryApi';

const AddImagesItem = () => {
    const [files, setFiles] = useState([]);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleFilesChange = (e) => {
        const selectedFiles = Array.from(e.target.files);

        const validFiles = selectedFiles.filter(file =>
            file.type.startsWith('image/') && selectedFiles.length <= 10
        );

        if (validFiles.length > 10) {
            toast.error('You can only upload up to 10 images.');
            return;
        }

        setFiles(validFiles);
        setError('');
    };

    const handleUpload = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        files.forEach(file => formData.append('files', file));

        try {
            addNewImages(formData);
            toast.success('Images uploaded successfully!');
        } catch (err) {
            console.error('Error uploading images:', err);
            toast.error('An error occurred while uploading images.');
        }
    };

    return (
        <div className='banner_box'>
            <ToastContainer />
            <div className='back_link'>
                <h4> &gt;&gt; </h4>
                <Link to='/dashboard'><h4>Dashboard </h4></Link>
                <h4>/</h4>
                <Link to='/gallery'><h4>Gallery</h4></Link>
                <h4>/</h4>
                <h4>Add Images</h4>
            </div>
            <hr />
            <div className='Dashboard_title'>
                <h1>Add Images</h1>
            </div>
            <div className='banner_form'>
                <form onSubmit={handleUpload}>
                    <label htmlFor="files">Select Images</label><br />
                    <input
                        type="file"
                        id="files"
                        name="files"
                        multiple
                        accept="image/*"
                        onChange={handleFilesChange}
                        required
                    /><br />
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <input type="submit" value='Upload Images' />
                    </div>
                </form>
                {message && <p className="success-message">{message}</p>}
                {error && <p className="error-message">{error}</p>}
            </div>
        </div>
    );
};

export default AddImagesItem;
