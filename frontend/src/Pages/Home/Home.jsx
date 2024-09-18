import React from 'react'
import Banner from '../../component/Banner/Banner'
import Work from '../../component/Work/Work'
import ShortBanner from '../../component/ShortBanner/ShortBanner'
import Mission from '../../component/Mission/Mission'
import Project from '../../component/Project/Project'
import Partners from '../../component/Partners/Partners'
import Gallery from '../../component/Gallery/Gallery'
import YoutubeVideo from '../../component/YoutubeVideo/YoutubeVideo'
import Banner_2 from '../../component/Banner_2/Banner_2'

const Home = () => {
  return (
    <div>
      <Banner />
      <Banner_2 />
      <Mission />
      <Work />
      <Project />
      <YoutubeVideo />
      <Partners />
      <Gallery />
      <ShortBanner />
    </div>
  )
}

export default Home