import React, { useContext, useEffect, useState } from 'react';
import './AllGallery.css';
import { BASE_URL } from "../../../utils/api";
import { getAllImages } from '../../api/GalleryApi';

const AllGallery = () => {
  const { data: images, loading, error } = getAllImages();

  return (
    <div className='container'>
      <div className="allgallery">
        <p>We have gathered many beautiful moments during our journey</p><hr />
        <div className='allgallery_grid'>
          {images.map((item, index) => {
            return (
              <img key={index} src={item.imagePath} alt="" />
            )
          })

          }
        </div>
      </div>

    </div>
  )
}

export default AllGallery