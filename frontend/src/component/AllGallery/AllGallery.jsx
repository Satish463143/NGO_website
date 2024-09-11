import React, { useContext } from 'react'
import './AllGallery.css'
import { StoreContext } from '../../context/StoreContext'

const AllGallery = () => {
    const {GalleryList} = useContext(StoreContext)

  return (
    <div className='container'>
      <div className="allgallery">
        <p>We have gathered many beautiful moments during our journey</p><hr />
        <div className='allgallery_grid'>
        { GalleryList.map((item,index)=>{
          return(
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