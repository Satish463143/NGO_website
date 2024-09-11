import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './ExpertItem.css';

const ExpertItem = () => {
  const [experts, setExperts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
   
    const fetchExperts = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/ourexpertise/all');
        setExperts(response.data);
      } catch (error) {
        setError('Failed to fetch experts.');
        console.error('Error fetching experts:', error);
      }
    };
    fetchExperts();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this Expert?")) {
    try {
      await axios.delete(`http://localhost:4000/api/ourexpertise/${id}`);
      setExperts(experts.filter((expert) => expert._id !== id));
    } catch (error) {
      console.error('Error deleting expert:', error);
      setError('Failed to delete expert.');
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
      <div className='blogs_list'>
        <div>
          <div className='back_link'>
            <h4> &gt;&gt; </h4>
            <Link to='/dashboard'><h4>Dashboard </h4></Link>
            <h4>/</h4>
            <h4> Experts</h4>
          </div>
          <hr style={{ marginTop: '20px' }} />
          <div className='Dashboard_title'>
            <h1>Expert List</h1>
            <Link to="/addExpert">
              <button>Add Experts</button>
            </Link>
          </div>
        </div>
        <div className='blog_table'>
          <table border="2">
            <thead>
              <tr>
                <th>S.N</th>
                <th>Image</th>
                <th>Name</th>
                <th>Content</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {experts.length ? (
                experts.map((expert, index) => (
                  <tr key={expert._id}>
                    <td className='table_sn'>{index + 1}</td>
                    <td className='table_img'>
                      <img src={`http://localhost:4000/images/${expert.image}`} alt={expert.name} />
                    </td>
                    <td className='table_title'>{expert.name}</td>
                    <td className='table_content'>{truncateContent(expert.content, 50)}</td>
                    <td style={{ textAlign: 'center' ,width:'150px'}}>
                      <Link to={`/editExpert/${expert._id}`}>
                        <button className='edit_btn'>Edit</button>
                      </Link>
                      <button className='delete_btn' onClick={() => handleDelete(expert._id)}>Delete</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" style={{ textAlign: 'center' }}>No experts found</td>
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

export default ExpertItem;
