import React, { useContext, useEffect, useState } from 'react';
import './AllGallery.css';
import { BASE_URL } from "../../../utils/api";

const AllGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/gallery/get-all-images`);
        const result = await response.json();

        setImages(result.data);
      } catch (error) {
        console.log(error)
      }
    }
    fetchData();
  }, [images]);

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