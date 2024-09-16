import React from 'react'
import AllGallery from '../../component/AllGallery/AllGallery'
import BannersItem from '../../component/BannersItem/BannersItem';
import nepalvillage from '../../../src/assets/images/nepal-village.jpg';
import AllVideos from '../../component/AllVideos/AllVideos';
const GalleryPage = () => {
  const title= "Gallery"
  const cont = "Capturing Our Journey "
  return (
    <div>
        <BannersItem image= {nepalvillage} title={title} cont={cont}/>
        <AllGallery/>
        <AllVideos/>
    </div>
  )
}

export default GalleryPage