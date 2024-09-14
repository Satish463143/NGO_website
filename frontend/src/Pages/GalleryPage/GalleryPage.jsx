import React from 'react'
import AllGallery from '../../component/AllGallery/AllGallery'
import BannersItem from '../../component/BannersItem/BannersItem';
import nepalvillage from '../../../src/assets/images/nepal-village.jpg';
import AllVideos from '../../component/AllVideos/AllVideos';
const GalleryPage = () => {
  const title= "Gallery"
  return (
    <div>
        <BannersItem image= {nepalvillage} title={title}/>
        <AllGallery/>
        <AllVideos/>
    </div>
  )
}

export default GalleryPage