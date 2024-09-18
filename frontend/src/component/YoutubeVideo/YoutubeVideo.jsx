import React, { useContext } from 'react'
import './YoutubeVideo.css'
import { StoreContext } from '../../context/StoreContext'
import { Link } from 'react-router-dom'

const YoutubeVideo = () => {
    const {YoutubeLIst} = useContext(StoreContext)
  return (
    <div className='youtube'  style={{padding:'40px'}}>
    <div className='containeer'>
         <h1 style={{textAlign:'center'}}>Stories of Change: Our Work in Action</h1>  
        <div style={{width:'150px', height:'5px', background:'var(--pri_color)',margin:'20px auto 40px auto',}}></div>
            
        <div className="youtubeGrid">
        { YoutubeLIst.map((item,index)=>{
            return (
              <iframe
              key={index}
              src={item.link}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              frameBorder="0"
              title={`youtube-video-${index}`}
            ></iframe>
            )
        })
        }
        </div>
        <div style={{textAlign:'center'}}>
            <Link to="/gallery#allvideos"><button>See More <i class="fa-solid fa-arrow-right-long"></i></button></Link>
        </div>
    </div>
    </div>
  )
}

export default YoutubeVideo