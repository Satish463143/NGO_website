import React from 'react'
import './Work.css'
import {Link} from 'react-router-dom'

const Work = () => {
  return (
    <div className='container'>
        <div className="workgrid">
            <div className='work_box'>
                <li>
                <i class="fa-solid fa-shirt"></i>
                </li>
                <h2>Tristique Sceleris​</h2>
                <p>This is a short description elaborating the service you have mentioned above.</p>
                <Link style={{display:'flex',gap:'10px'}}><button>Host a Drive </button><i class="fa-solid fa-arrow-right-long"></i></Link>
            </div>
            <div className='work_box'>
                <li>
                <i class="fa-solid fa-hand"></i></li>
                <h2>Tristique Sceleris​</h2>
                <p>This is a short description elaborating the service you have mentioned above.</p>
                <Link style={{display:'flex',gap:'10px'}}><button>Host a Drive </button><i class="fa-solid fa-arrow-right-long"></i></Link>
            </div>
            <div className='work_box'>
                <li>
                    <i class="fa-solid fa-water"></i>
                </li>
                <h2>Tristique Sceleris​</h2>
                <p>This is a short description elaborating the service you have mentioned above.</p>
                <Link style={{display:'flex',gap:'10px',alignItems:'center'}}><button>Host a Drive </button> <i class="fa-solid fa-arrow-right-long"></i></Link>
            </div>
        </div>        
    </div>
  )
}

export default Work