import React from 'react'
import Banner from '../../component/Banner/Banner'
import Work from '../../component/Work/Work'
import ShortBanner from '../../component/ShortBanner/ShortBanner'
import Mission from '../../component/Mission/Mission'
import Project from '../../component/Project/Project'

const Home = () => {
  return (
    <div>
        <Banner/>
        <Work/>
        <ShortBanner/>
        <Mission/>
        <Project/>
    </div>
  )
}

export default Home