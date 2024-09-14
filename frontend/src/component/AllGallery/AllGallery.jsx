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
        <div className="project_title">
          <h2>Our Photos</h2>
          <div
            style={{
              width: "100px",
              height: "5px",
              background: "var(--pri_color)",
              margin: "20px auto 50px auto",
            }}
          ></div>
        </div>
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