import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './BlogsItem.css';
import { Link, useNavigate } from 'react-router-dom';
import { deleteImage, getAllImages } from '../../../../frontend/src/api/GalleryApi';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GalleryItem = () => {
  const [images, setImages] = useState([]);

  const { data: imageList, error, loading } = getAllImages();
  useEffect(() => {
    setImages(imageList);
  }, [imageList]);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this image?")) {
      try {
        deleteImage(id);
        setImages(images.filter((image) => image._id !== id));
        toast.success("Image deleted.");
      } catch (err) {
        console.error('Error deleting image:', err);
        toast.error('An error occurred while deleting the image.')
        setError('An error occurred while deleting the image.');
      }
    }
  };

  return (
    <div className='blogs_list'>
      <ToastContainer />
      <div>
        <div className='back_link'>
          <h4> &gt;&gt; </h4>
          <Link to='/dashboard'><h4>Dashboard </h4></Link>
          <h4>/</h4>
          <h4> Images</h4>
        </div>
        <hr style={{ marginTop: '20px' }} />
        <div className='Dashboard_title'>
          <h1>Images List</h1>
          <Link to="/addImages">
            <button>Add Images</button>
          </Link>
        </div>
      </div>

      <div className='blog_images'>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="error-message">{error}</p>
        ) : (
          images.map((image, index) => (
            <div key={image._id} className="image-container">
              <button className="delete-btn" onClick={() => handleDelete(image._id)}>
                X
              </button>
              <img
                src={image.imagePath}
                alt={"image"}
                className="blog-image"
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default GalleryItem;
