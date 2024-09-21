import React, { useContext, useState } from 'react'
import './AllPartners.css'
import { StoreContext } from '../../context/StoreContext'
import AllPartnersItem from '../AllPartnersItem/AllPartnersItem'
import { getAllPartners } from '../../api/PartnersApi'

const AllPartners = () => {
  const { data: partnerList, error, loading } = getAllPartners();
  const [visible, setVisible] = useState(5);

  const sortedPartner = partnerList
  .sort((a,b) => new Date(b.createdAt) - new Date (a.createdAt))

  const loadMore= ()=>{
    setVisible(pervCount => pervCount + 5)
  }
  return (
    <div className='container'>
      <div className="allpartners">
        <p>These Are the Heroes with the Passion to Transform Their Communities</p>
        <hr />
      </div>
      {sortedPartner.slice(0,visible).map((item, index) => {
        return (
          <AllPartnersItem key={index} id={item.id} logo={item.imagePath} title={item.title} name={item.name} description={item.description} />
        )
      })}
      {visible < sortedPartner.length && (
        <div className='load_more_btn' style={{marginTop:'40px'}}>
        <button onClick={loadMore}>
            Load More <i className="fa-solid fa-arrow-right-long"></i>
        </button>
      </div>
      )}
      

    </div>
  )
}

export default AllPartners