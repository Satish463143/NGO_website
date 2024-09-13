import React, { useContext, useState, useEffect } from 'react'
import './Partners.css'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
import { BASE_URL } from '../../../utils/api'

const Partners = () => {
    // const {partnerList} = useContext(StoreContext)

    const [partnerList, setPartnerList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${BASE_URL}/our-partners/get-all-partners`);
                const result = await response.json();
                console.log(result.data);
                setPartnerList(result.data);
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
    }, [partnerList]);
    // const PartnerData  = partnerList[0]?.partners || [];

    const sortedPartner = partnerList
        .sort((a, b) => new Date(b.timeStamp) - new Date(a.timeStamp)) // Sort by timeStamp (newest first)
        .slice(0, 6);


    return (
        <div className="youtube_bg" style={{ background: 'var(--sec_color)', padding: '0px 0 40px 0' }}>
            <div className='container'>
                <h1 style={{ textAlign: 'center', paddingTop: '40px' }}>Our Partners</h1>
                <div style={{ width: '100px', height: '5px', background: 'var(--pri_color)', margin: '20px auto 20px auto', }}></div>
                <div className='partner_grid'>
                    <div className='partner_desc'>
                        <h3>Because of our partners we are doing more good for more people!</h3>
                        <Link style={{ display: 'flex', gap: '10px', alignItems: 'center' }}><button>Become Our Partner</button> <i class="fa-solid fa-arrow-right-long"></i></Link>
                    </div>
                    <div className='partners'>
                        {sortedPartner.map((partner, index) => (
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