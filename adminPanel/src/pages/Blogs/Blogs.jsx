import React from 'react'
import './Blogs.css'
import { Link } from 'react-router-dom'
import BlogsItem from '../../component/BlogsItem/BlogsItem'

const Blogs = () => {
  return (
    <div style={{padding:'20px'}} >       

        <BlogsItem/>
    </div>
  )
}

export default Blogs