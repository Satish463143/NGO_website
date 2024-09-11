import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './BlogsItem.css';
import { Link, useNavigate } from 'react-router-dom';

const BlogsItem = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const fetchBlogs = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/blogs/list');
      if (response.data.success) {
        setBlogs(response.data.blogs);
      } else {
        setError('Failed to fetch blogs.');
      }
    } catch (err) {
      console.error('Error fetching blogs:', err);
      setError('An error occurred while fetching the blogs.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      try {
        await axios.delete(`http://localhost:4000/api/blogs/${id}`);
        setBlogs(blogs.filter((blog) => blog._id !== id));
      } catch (err) {
        console.error('Error deleting blog:', err);
        setError('An error occurred while deleting the blog.');
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
    <div className='blogs_list'>
      <div>
        <div className='back_link'>
          <h4> &gt;&gt; </h4> 
          <Link to='/dashboard'><h4>Dashboard </h4></Link>
          <h4>/</h4>
          <h4> Blogs</h4>
        </div> 
        <hr style={{ marginTop: '20px' }} />
        <div className='Dashboard_title'>
          <h1>Blogs List</h1>
          <Link to="/addblogs">
            <button>Add Blogs</button>
          </Link>
        </div>
      </div>

      <div className='blog_table'>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="error-message">{error}</p>
        ) : (
          <table border="2">
            <thead>
              <tr>
                <th>S.N</th>
                <th>Image</th>
                <th>Title</th>
                <th>Category</th>
                <th>Content</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog, index) => (
                <tr key={blog._id}>
                  <td className='table_sn'>{index + 1}</td>
                  <td className='table_img'>
                    <img src={`http://localhost:4000/images/${blog.image}`} alt={blog.title} />
                  </td>
                  <td className='table_title'>{blog.title}</td>
                  <td className='table_category'>{blog.category}</td>
                  <td className='table_content'>{truncateContent(blog.content, 50)}</td>
                  <td style={{textAlign:'center', width: '150px'}}>
                    <Link to={`/editblogs/${blog._id}`}>
                      <button className='edit_btn'>Edit</button>
                    </Link>
                    <button className='delete_btn' onClick={() => handleDelete(blog._id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div> 
    </div>
  );
};

export default BlogsItem;
