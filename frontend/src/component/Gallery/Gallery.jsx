import React, { useContext } from 'react'
import './Gallery.css'
import { StoreContext } from '../../context/StoreContext'
import { Link } from 'react-router-dom'
import { getAllImages } from '../../api/GalleryApi'

const Gallery = () => {
    const { data: GalleryList, loading, error } = getAllImages();

    const sortedProjects = GalleryList
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // Sort by timeStamp (newest first)
    .slice(0, 9);

    
    return (
        <div className='gallery'>
            <div className=''>
                <h1 style={{ textAlign: 'center', marginTop: '0px' }}>Gallery</h1>
                <div style={{ width: '100px', height: '5px', background: 'var(--pri_color)', margin: '20px auto 20px auto', }}></div>
                <div className='gallery_grid'>
                    {sortedProjects.map((item, index) => {
                        return <img key={index} src={item.imagePath} alt="" />
                    })}

                </div>
                <div style={{ textAlign: 'center' }}>
                    <Link to="/gallery#allgallery"><button>See More <i class="fa-solid fa-arrow-right-long"></i></button></Link>
                </div>
            </div>
        </div>
    )
}

export default Gallery 