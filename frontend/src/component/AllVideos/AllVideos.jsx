import React, { useContext } from 'react'
import './AllVideos.css'
import { StoreContext } from '../../context/StoreContext'
import { getAllVideos } from '../../api/YouTubeApi'

const AllVideos = () => {
  const { data: YoutubeList, error, loading } = getAllVideos();

  const formatSrc = (videoId) => {
    const ytUrl = `https://www.youtube.com/embed/${videoId}`;
    return ytUrl;
  };

  return (
    <div className="allvideos">
      <div className='container'>
        <div id='allvideos' className="project_title">
          <h2 > Our Videos</h2>
          <div
            style={{
              width: "100px",
              height: "5px",
              background: "var(--pri_color)",
              margin: "20px auto 0px auto",
            }}
          >
          </div>
        </div>

        <div className='videos_grid'>
          {YoutubeList.map((item, index) => {
            return (
              <iframe key={index}
                src={formatSrc(item.snippet.resourceId.videoId)}
                frameborder="0" allowFullScreen>
              </iframe>
            )
          })
          }
        </div>


      </div>
    </div>
  )
}

export default AllVideos