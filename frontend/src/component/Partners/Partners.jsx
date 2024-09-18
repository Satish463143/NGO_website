import React, { useContext, useState, useEffect } from 'react'
import './Partners.css'
import { Link } from 'react-router-dom'
import { getAllPartners } from '../../api/PartnersApi'

const Partners = () => {
    const { data: partnerList, loading, error } = getAllPartners();

    const sortedProjects = partnerList
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // Sort by timeStamp (newest first)
    .slice(0, 6);

    return (
        <div className="youtube_bg" style={{padding: '0px 0 40px 0' }}>
            <div className='container'>
                <h1 style={{ textAlign: 'center', paddingTop: '40px' }}>Our Partners</h1>
                <div style={{ width: '100px', height: '5px', background: 'var(--pri_color)', margin: '20px auto 20px auto', }}></div>
                <div className='partner_grid'>
                    <div className='partner_desc'>
                        <h3>Because of our partners we are doing more good for more people!</h3>
                        <Link to='/Our-Partners' ><button>Become Our Partner <i class="fa-solid fa-arrow-right-long"></i></button> </Link>
                    </div>

                    <div className='partners'>
                        {sortedProjects.map((partner, index) => (
                            <Link>
                                <img key={index} src={partner?.imagePath} alt={`Partner ${index}`} />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Partners