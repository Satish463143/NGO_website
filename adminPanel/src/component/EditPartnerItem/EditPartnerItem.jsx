import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getPartner, editPartner } from '../../../api/PartnersApi';

const EditPartnerItem = () => {
  const navigate = useNavigate();
  const params = useParams();
  const partnerID = params.id

  const { data: partner, error, loading } = getPartner(partnerID);

  const [name, setName] = useState(partner.name);
  const [content, setContent] = useState(partner.description);
  const [image, setImage] = useState();
  const [imagePreview, setImagePreview] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    setName(partner.name)
    setContent(partner.description)
    setImagePreview(partner.imagePath)
  }, [partner])


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file)); // Show preview of the selected image
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', content);
    // Only append the image if a new one is selected
    if (image) {
      formData.append('file', image);
    }

    try {
      editPartner(formData, partnerID);
      toast.success("Partner updated.");
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
        <h4>EditPartner</h4>
      </div>
      <hr />
      <div className='Dashboard_title'>
        <h1>EditPartner</h1>
      </div>
      <div className='banner_form'>
        <form onSubmit={handleSubmit} method='post'>
          <label htmlFor="image">Image</label><br />
          <input type="file" name='image' onChange={handleImageChange} /><br />

          {/* Image Preview */}
          <div style={{ margin: '10px 0' }}>
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Partner Preview"
                style={{ maxWidth: '200px' }}
              />
            )}
          </div>

          <label htmlFor="name">Name</label><br />
          <input type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} required /><br />

          <label htmlFor="content">Description</label><br />
          <textarea name="content" id="content" value={content} onChange={(e) => setContent(e.target.value)} required></textarea><br />

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <input type="submit" value='Save' name='editPartners' />
          </div>
        </form>
        {message && <p className="success-message">{message}</p>}
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  )
}

export default EditPartnerItem;
