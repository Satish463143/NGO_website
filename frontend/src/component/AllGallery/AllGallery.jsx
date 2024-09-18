import React, { useContext, useEffect, useState } from 'react';
import './AllGallery.css';
import { getAllImages } from '../../api/GalleryApi';

const AllGallery = () => {
  const { data: images, loading, error } = getAllImages();
  const [visibleCount, setVisibleCount] = useState(9);

    // Sort projects by newest first
    const sortedProjects = images
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    // Function to load more images
    const loadMore = () => {
        setVisibleCount(prevCount => prevCount + 9); // Load 9 more each time
    };
  return (
    <div id='allgallery' className='container'>
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
          {sortedProjects.slice(0,visibleCount).map((item, index) => {
            return (
              <img key={index} src={item.imagePath} alt="" />
            )
          })

          }
        </div>
        {visibleCount < sortedProjects.length && (
            <div className='load_more_btn'>
                <button onClick={loadMore}>
                    Load More <i className="fa-solid fa-arrow-right-long"></i>
                </button>
            </div>
        )}
      </div>

    </div>
  )
}

export default AllGallery