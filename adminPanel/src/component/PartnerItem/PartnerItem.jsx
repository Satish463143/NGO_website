import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ExpertItem.css';
import { deletePartner, getAllPartners } from '../../../api/PartnersApi';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PartnerItem = () => {
  const [partners, setPartners] = useState([]);

  const { data: partnerList, error, loading } = getAllPartners();

  useEffect(() => {
    setPartners(partnerList);
  }, [partnerList]);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this Partner?")) {
      try {
        deletePartner(id);
        setPartners(partners.filter((partner) => partner._id !== id));
        toast.success("Partner deleted.")
      } catch (error) {
        console.error('Error deleting partner:', error);
        toast.error('Failed to delete partner.');
      }
    }
  };

  const truncateContent = (content, wordLimit) => {
    const words = content.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return content;
  };

  return (
    <div>
      <ToastContainer />
      <div className='blogs_list'>
        <div>
          <div className='back_link'>
            <h4> &gt;&gt; </h4>
            <Link to='/dashboard'><h4>Dashboard </h4></Link>
            <h4>/</h4>
            <h4> Partners</h4>
          </div>
          <hr style={{ marginTop: '20px' }} />
          <div className='Dashboard_title'>
            <h1>Partner List</h1>
            <Link to="/addPartner">
              <button>Add Partner</button>
            </Link>
          </div>
        </div>
        <div className='blog_table'>
          <table border="2">
            <thead>
              <tr>
                <th>S.N</th>
                <th>Logo</th>
                <th>Name</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {partners.length ? (
                partners.map((partner, index) => (
                  <tr key={partner._id}>
                    <td className='table_sn'>{index + 1}</td>
                    <td className='table_img'>
                      <img src={partner.imagePath} alt={partner.name} />
                    </td>
                    <td className='table_title'>{partner.name}</td>
                    <td className='table_content'>{truncateContent(partner.description, 50)}</td>
                    <td style={{ textAlign: 'center', width: '150px' }}>

                      <Link to={`/editpartner/${partner._id}`}>
                        <button className='edit_btn'>Edit</button>
                      </Link>

                      <button className='delete_btn' onClick={() => handleDelete(partner._id)}>Delete</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" style={{ textAlign: 'center' }}>No partners found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default PartnerItem;
