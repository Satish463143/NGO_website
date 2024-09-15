import React,{useContext} from 'react'
import './AllVideos.css'
import { StoreContext } from '../../context/StoreContext'
const AllVideos = () => {
    const {YoutubeLIst} = useContext(StoreContext)
  return (
    <div className="allvideos">
    <div className='container'>
        <div className="project_title">
          <h2> Our Videos</h2>
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
        { YoutubeLIst.map((item,index)=>{
            return (
                <iframe key={index}
                        src={item.link}
                        frameborder="0" allowfullscreen>
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