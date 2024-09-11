import React, { useContext } from 'react'
import './Partners.css'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const Partners = () => {
    const {partnerList} = useContext(StoreContext)
    // const PartnerData  = partnerList[0]?.partners || [];

    const sortedPartner = partnerList
    .sort((a, b) => new Date(b.timeStamp) - new Date(a.timeStamp)) // Sort by timeStamp (newest first)
    .slice(0, 6); 
   

  return (
    <div className='container'>
        <h1 style={{textAlign:'center',marginTop:'40px'}}>Our Partners</h1>
        <div style={{width:'100px', height:'5px', background:'var(--pri_color)',margin:'20px auto 20px auto',}}></div>
        <div className='partner_grid'>
            <div className='partner_desc'>
                <h3>Because of our partners we are doing more good for more people!</h3>
                <Link style={{display:'flex',gap:'10px',alignItems:'center'}}><button>Become Our Partner</button> <i class="fa-solid fa-arrow-right-long"></i></Link>
            </div>
            <div className='partners'>
                {sortedPartner.map((partner, index) => (
                    <Link>
                        <img key={index} src={partner?.logo} alt={`Partner ${index}`} />
                    </Link>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Partners