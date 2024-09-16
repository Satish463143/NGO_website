import React from 'react'
import './Blogs.css'
import { Link } from 'react-router-dom'
import GalleryItem from '../../component/GalleryItem/GalleryItem'

const Gallery = () => {
  return (
    <div style={{ padding: '20px' }} >
      <GalleryItem />
    </div>
  )
}

export default Gallery