import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AddPropertyItem.css';
import axios from 'axios';

const AddPropertyItem = () => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    propertyType: '',
    sellingType: '',
    bathroom: '',
    kitchen: '',
    hall: '',
    bhk: '',
    propertyStatus: '',
    bedroom: '',
    balcony: '',
    area: '',
    floor: '',
    price: '',
    city: '',
    state: '',
    totalFloor: '',
    areaSize: '',
    address: '',
    roadAccess: '',
    direction: '',
    Parking: '',
    builtYear: '',
    category: '',
    description: ''
  });
  const [files, setFiles] = useState({
    images: [],
    image2: [],
    image3: [],
    image4: [],
    video: null,
    droneShootVideo: null,
    floorPlanImage: null,
    groundFloorPlanImage: null
  });

  const [listItems, setListItems] = useState(''); // Stores the textarea content
  const [listArray, setListArray] = useState([]); // Stores the split list items

  const handleImageChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const fieldName = e.target.name;
    setFiles((prevFiles) => ({
      ...prevFiles,
      [fieldName]: [...prevFiles[fieldName], ...selectedFiles]
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFiles((prevFiles) => ({
      ...prevFiles,
      [name]: files[0]
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleListChange = (event) => {
    setListItems(event.target.value);
  };

  const handleAddItems = () => {
    const itemsArray = listItems.split('\n').filter(item => item.trim() !== '');
    setListArray(itemsArray);
    setFormData({ ...formData, description: itemsArray.join(', ') }); // Update description in formData
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();

    Object.keys(formData).forEach(key => {
      formDataToSend.append(key, formData[key]);
    });

    files.images.forEach((image, index) => {
      formDataToSend.append('images', image);
    });

    if (files.image2.length > 0) {
      files.image2.forEach((image, index) => {
        formDataToSend.append('image2', image);
      });
    }

    if (files.image3.length > 0) {
      files.image3.forEach((image, index) => {
        formDataToSend.append('image3', image);
      });
    }

    if (files.image4.length > 0) {
      files.image4.forEach((image, index) => {
        formDataToSend.append('image4', image);
      });
    }

    if (files.video) formDataToSend.append('video', files.video);
    if (files.droneShootVideo) formDataToSend.append('droneShootVideo', files.droneShootVideo);
    if (files.floorPlanImage) formDataToSend.append('floorPlanImage', files.floorPlanImage);
    if (files.groundFloorPlanImage) formDataToSend.append('groundFloorPlanImage', files.groundFloorPlanImage);

    try {
      const response = await axios.post('http://localhost:4000/api/property/add', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.data.success) {
        alert('Property added successfully!');
        window.location.reload(); 

      } else {
        alert('Failed to add property.');
      }
    } catch (error) {
      console.error('Error adding property:', error);
      alert('An error occurred while adding the property.');
    }
  };

  return (
      <div className='banner_box'>
        <div className='back_link'>
            <h4> &gt;&gt; </h4>
            <Link to='/dashboard'><h4>Dashboard </h4></Link>
            <h4>/</h4>
            <Link to='/property'><h4> Property</h4></Link>
            <h4>/</h4>
            <h4>Add Property</h4>
        </div> 
        <hr />
        <div className='Dashboard_title'>
            <h1>Add Property</h1>
        </div>
        <div className='property_form'>
          <form action="" method="post" onSubmit={handleSubmit}>
            <h4>Details</h4>
            <div className='details_grid'>
              <div>
                <label htmlFor="title">Title</label><span>*</span><br />
                <input type="text" name='title' placeholder='Enter Title' value={formData.title} onChange={handleChange}required/><br />              
                <label htmlFor="sellingType">Selling Type</label><span>*</span><br />
                <select name="sellingType" id="sellingType"value={formData.sellingType} onChange={handleChange} required>
                  <option value="">Select Selling Type</option>
                  <option value="Sale">Sale</option>
                  <option value="Rent">Rent</option>
                </select>  <br /> 
                <label htmlFor="propertyStatus">Property Status</label><span>*</span><br />
                <select name="propertyStatus" id="propertyStatus" value={formData.propertyStatus} onChange={handleChange} required>
                  <option value="">Select Property Status</option>
                  <option value="UnFurnnished">UnFurnnished</option>
                  <option value="Semi-Furnished">Semi-Furnished</option>
                  <option value="Furnished">Furnished</option>
                </select>  <br /> 
                <label htmlFor="builtYear">Built Year</label><br />
                <input type="number" name='builtYear' placeholder='In AD' value={formData.builtYear} onChange={handleChange}/><br /> 
                <label htmlFor="balcony">Balcony</label><br />
                <input type="number" name='balcony' placeholder='No. of balcony' min="0" max="10"value={formData.balcony} onChange={handleChange} /><br /> 
                <label htmlFor="area">Area</label><br />
                <input type="number" name='area' placeholder='In sq.ft'value={formData.area} onChange={handleChange} /><br /> 
                <label htmlFor="floor">Floor</label><br />
                <input type="number" name='floor' placeholder='No. of floor/ available floor' min="0" max="10"value={formData.floor} onChange={handleChange} /><br /> 
                <label htmlFor="totalFloor">Total Floor</label><br />
                <input type="number" name='totalFloor' placeholder='No. of floor available in house'value={formData.totalFloor} onChange={handleChange} /><br /> 
                <label htmlFor="roadAccess">Road Access</label><br />
                <input type="number" name='roadAccess' placeholder='In feet'value={formData.roadAccess} onChange={handleChange} /><br /> 
                <label htmlFor="direction">Direction</label><br />
                <input type="text" name='direction' placeholder='Set the direction of property' value={formData.direction} onChange={handleChange}/><br /> 
                
              </div>
              <div>
                <label htmlFor="content">Content</label><span>*</span><br />
                <input type="text" name='content' placeholder='Enter Content'value={formData.content} onChange={handleChange} required/><br />
                <label htmlFor="propertyType">Property Type</label><span>*</span><br />
                <select name="propertyType" id="propertyType"value={formData.propertyType} onChange={handleChange} required>
                  <option value="">Select Property Type</option>
                  <option value="Home">Home</option>
                  <option value="Flat">Flat</option>
                  <option value="Apartment">Apartment</option>
                </select><br />
                <label htmlFor="category">Category</label><span>*</span><br />
                <select name="category" id="category"value={formData.category} onChange={handleChange} required>
                  <option value="">Select category</option>
                  <option value="Hot Selling">Hot Selling</option>
                  <option value="New Properties">New Properties</option>
                  <option value="Featured">Featured</option>
                  <option value="Premium Properties">Premium Properties</option>
                </select><br />
                <label htmlFor="price">Price</label><span>*</span><br />
                <input type="number" name='price' placeholder='Enter price' value={formData.price} onChange={handleChange} required/><br />
                <label htmlFor="bathroom">Bathroom</label><br />
                <input type="number" name='bathroom' placeholder='Enter no. of bathroom' min="0" max="10"value={formData.bathroom} onChange={handleChange}/><br />
                <label htmlFor="kitchen">Kitchen</label><br />
                <input type="number" name='kitchen' placeholder='Enter no. of kitchen room' min="0" max="10"value={formData.kitchen} onChange={handleChange}/><br />
                <label htmlFor="hall">Hall</label><br />
                <input type="number" name='hall' placeholder='Enter no. of hall' min="0" max="10" value={formData.hall} onChange={handleChange} /><br />
                <label htmlFor="bhk">BHK</label><br />
                <input type="number" name='bhk' placeholder='No. of room, hall & Kitchen' min="0" max="5"value={formData.bhk} onChange={handleChange}/><br />
                <label htmlFor="bedroom">Bedroom</label><br />
                <input type="number" name='bedroom' placeholder='No. of bedroom' min="0" max="10"value={formData.bedroom} onChange={handleChange}/><br />
                <label htmlFor="Parking">Parking</label><br />
                <input type="text" name='Parking' placeholder='eg. 2 Bike & 1 Car' value={formData.Parking} onChange={handleChange} /><br />
              </div>
            </div>
            <h4>Location</h4>
            <div className='details_grid'>
              <div>
                <label htmlFor="state">State</label><span>*</span><br />
                <input type="text" name='state' placeholder='Enter State'value={formData.state} onChange={handleChange} required/><br />
                <label htmlFor="address">Address</label><span>*</span><br />
                <input type="text" name='address' placeholder='Enter full address'value={formData.address} onChange={handleChange} required/><br />
              </div>
              <div>
                <label htmlFor="city">City</label><span>*</span><br />
                <input type="text" name='city' placeholder='Enter City 'value={formData.city} onChange={handleChange} required/><br />
              </div> 
            </div>
             <h4>Description</h4>
          <div className='description'>
            <p>Please enter each item into a new line. Complete one item per line.</p>
            <textarea
              placeholder="Enter items, each on a new line"
              value={listItems}
              onChange={handleListChange}
            ></textarea><br />
            
            <ul>
              {listArray.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
            <h4>Images</h4>
            <div className='details_grid'>
              <div>
                <label htmlFor="images">Select Main Image</label><span>*</span><br />
                <input type="file" name='images' onChange={handleImageChange}/><br />
                <label htmlFor="image3">Image 3</label><br />
                <input type="file" name='image3'onChange={handleImageChange}   /><br />
                <label htmlFor="floorPlanImage">Floor Plan Image</label><br />
                <input type="file" name='floorPlanImage' onChange={handleImageChange}  /><br />
                <label htmlFor="video">Property Video</label><br />
                <input type="file" name="video" accept="video/*"onChange={handleFileChange} /><br />
              </div>
              <div>
                <label htmlFor="image2">Image 2</label><br />
                <input type="file" name='image2'  onChange={handleImageChange} /><br />
                <label htmlFor="image4">Image 4</label><br />
                <input type="file" name='image4' onChange={handleImageChange}  /><br />
                <label htmlFor="groundFloorPlanImage">Groundfloor Plan Image</label><br />
                <input type="file" name='groundFloorPlanImage' onChange={handleImageChange}  /><br />
                <label htmlFor="droneShootVideo">Drone Shoot Video</label><br />
                <input type="file" name="droneShootVideo" accept="video/*" onChange={handleFileChange}/><br />
              </div>
            </div>
            <div style={{display:'flex', justifyContent:'center',}}>
                <input type="submit" value='Add Property' name='addProperty' onClick={handleAddItems}/>
            </div>
          </form>
        </div>
      </div>
    
  )
}

export default AddPropertyItem