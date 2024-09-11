import React, { useState, useEffect } from 'react';
import './PropertyItem.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const PropertyItem = () => {
  const [properties, setProperties] = useState([]);
  const [filters, setFilters] = useState({
    category: 'All',
    status: 'All',
    sellingType: 'All',
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:4000/api/Property/list');
      setProperties(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching properties:', error);
      setError('Failed to load properties.');
      setLoading(false);
    }
  };

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const resetFilters = () => {
    setFilters({
      category: 'All',
      status: 'All',
      sellingType: 'All',
    });
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this property?')) {
      try {
        await axios.delete(`http://localhost:4000/api/Property/delete/${id}`);
        setProperties(properties.filter((property) => property._id !== id));
      } catch (error) {
        console.error('Error deleting property:', error);
        setError('Failed to delete property.');
      }
    }
  };

  const handleUpdate = (id) => {
    navigate(`/editProperty/`);
  };

  const handleMarkAsSold = async (id) => {
    try {
      const response = await axios.patch(`http://localhost:4000/api/Property/${id}/sold`);
      if (response.status === 200) {
        setProperties(properties.map(property => 
          property._id === id ? { ...property, status: 'sold' } : property
        ));
      }
    } catch (error) {
      console.error('Error marking property as sold:', error);
      setError('Failed to mark property as sold.');
    }
  };
  

  const filteredProperties = properties.filter((property) => {
    const categoryMatch = filters.category === 'All' || property.category === filters.category;
    const statusMatch = filters.status === 'All' || property.status === filters.status;
    const sellingTypeMatch = filters.sellingType === 'All' || property.sellingType === filters.sellingType;
    return categoryMatch && statusMatch && sellingTypeMatch;
  });

  return (
    <div className="property_list">
      <div className="back_link">
        <h4>&gt;&gt;</h4>
        <Link to="/dashboard">
          <h4>Dashboard</h4>
        </Link>
        <h4>/ Property</h4>
      </div>
      <hr style={{ marginTop: '20px' }} />
      <div className="Dashboard_title">
        <div style={{ display: 'flex', alignItems: 'center', gap: '50px' }}>
          <h1>Property List</h1>
          <Link to="/addProperty">
            <button>Add Property</button>
          </Link>
        </div>
        <div>
                <div className='back_link'>
                
                </div> 
                <hr style={{marginTop:'20px'}}/>
                <div className='Dashboard_title'>
                    
                    <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
                        <div className='catergory_box'>
                            <select name="category" id="category"  value={filters.category} onChange={handleFilterChange}>
                                
                                <option value="Hot Selling">Hot Selling</option>
                                <option value="Featured">Featured</option>
                                <option value="New Properties">New Properties</option>
                                <option value="Premium Properties">Premium Properties</option>
                                <option value="All">All</option>
                            </select>

                        </div>
                        <div className='status_box'>
                            <select name="status" id="status" value={filters.status} onChange={handleFilterChange}>
                                
                                <option value="Sold">Sold</option>
                                <option value="Avialable">Avialable</option>
                                <option value="All">All</option>
                            </select>
                        </div>
                        <div className='sellingType_box'>
                            <select name="sellingType_box" id="sellingType_box" value={filters.sellingType} onChange={handleFilterChange}>
                                
                                <option value="Rent">Rent</option>
                                <option value="Sale">Sale</option>
                                <option value="All">All</option>
                            </select>
                        </div>
                        <button onClick={resetFilters}  style={{background:'green'}}>
                            Clear All
                        </button>
                        
                    </div>
                </div>
            </div>
      </div>

      {loading ? (
        <div>Loading properties...</div>
      ) : error ? (
        <div className="error">{error}</div>
      ) : (
        <div className="blog_table">
          <table border="2">
            <thead>
              <tr>
                <th>S.N</th>
                <th>Title</th>
                <th>Price</th>
                <th>Address</th>
                <th>Selling Type</th>
                <th>Image</th>
                <th>Category</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredProperties.map((property, index) => (
                <tr key={property._id}>
                  <td>{index + 1}</td>
                  <td>{property.title}</td>
                  <td>{property.price}</td>
                  <td>{property.address}</td>
                  <td>{property.sellingType}</td>
                  <td className='table_img'>
                    <img src={property.images[0]} alt={property.title} />
                  </td>
                  <td>{property.category}</td>
                  <td style={{ textAlign: 'center', width: '150px' }}>
                    <button onClick={() => handleUpdate(property._id)} className="edit_btn">
                      Edit
                    </button>
                    <button onClick={() => handleDelete(property._id)} className="delete_btn">
                      Delete
                    </button>
                    <button onClick={() => handleMarkAsSold(property._id)} className="sold_btn">
                      Sold
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default PropertyItem;
