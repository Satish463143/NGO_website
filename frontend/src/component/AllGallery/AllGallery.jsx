import React, { useContext } from 'react'
import './AllGallery.css'
import { StoreContext } from '../../context/StoreContext'

const AllGallery = () => {
    const {GalleryList} = useContext(StoreContext)

  return (
    <div className='conatiner'>
      <div className="allgallery">
        { GalleryList.map((item,index)=>{
          return(
            <img key={index} src={item.imagePath} alt="" />
          )
        })

        }
      </div>
        
    </div>
  )
}

export default AllGallery