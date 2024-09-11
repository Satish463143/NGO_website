import React from 'react'
import Banner from '../../component/Banner/Banner'
import Work from '../../component/Work/Work'
import ShortBanner from '../../component/ShortBanner/ShortBanner'
import Mission from '../../component/Mission/Mission'
import Project from '../../component/Project/Project'
import Partners from '../../component/Partners/Partners'
import Gallery from '../../component/Gallery/Gallery'


const Home = () => {
  return (
    <div>
        <Banner/>
        <Work/>
        <ShortBanner/>
        <Mission/>
        <Project/>
        <Partners/>
        <Gallery/>
        
    </div>
  )
}

export default Home