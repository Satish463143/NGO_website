import React, { useContext } from 'react'
import './Partners.css'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const Partners = () => {
    const {partnerLit} = useContext(StoreContext)


  return (
    <div className='container'>
        <div className='partner_grid'>
            <div className='partner_desc'>
                <h3>Because of our partners we are doing more good for more people!</h3>
                <Link style={{display:'flex',gap:'10px',alignItems:'center'}}><button>Become Our Partner</button> <i class="fa-solid fa-arrow-right-long"></i></Link>
            </div>
            <div className='partners'>

            </div>
        </div>
    </div>
  )
}

export default Partners