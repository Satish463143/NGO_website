import React, { useContext } from 'react'
import './YoutubeVideo.css'
import { StoreContext } from '../../context/StoreContext'
import { Link } from 'react-router-dom'
import { getAllVideos } from '../../api/YouTubeApi'

const YoutubeVideo = () => {
  const { data: YoutubeList, error, loading } = getAllVideos();

  const formatSrc = (videoId) => {
    const ytUrl = `https://www.youtube.com/embed/${videoId}`;
    return ytUrl;
  }

  return (
    <div className='youtube' style={{ padding: '40px 0' }}>
      <div className='containeer'>
        <h1 style={{ textAlign: 'center' }}>Stories of Change: Our Work in Action</h1>
        <div style={{ width: '150px', height: '5px', background: 'var(--pri_color)', margin: '20px auto 40px auto', }}></div>

        <div className="youtubeGrid">
          {YoutubeList.map((item, index) => {
            return (
              <iframe key={index}
                src={formatSrc(item.snippet.resourceId.videoId)}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                frameBorder="0"
                title={`youtube-video-${index}`}
                frameborder="0" allowFullScreen>
              </iframe>
            )
          })
          }
        </div>
        <div style={{ textAlign: 'center' }}>
          <Link to="/gallery#allvideos"><button>See More <i class="fa-solid fa-arrow-right-long"></i></button></Link>
        </div>
      </div>
    </div>
  )
}

export default YoutubeVideo