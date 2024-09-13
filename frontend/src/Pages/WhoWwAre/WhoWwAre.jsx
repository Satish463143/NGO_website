import React from 'react'
import WhoWeAreBanner from '../../component/WhoWeAreBanner/WhoWeAreBanner'
import WhoWeAreBanner_2 from '../../component/WhoWeAreBanner_2/WhoWeAreBanner_2'
import OurTeam from '../../component/OurTeam/OurTeam'
import Idea from '../../component/Idea/Idea'
import Policy from '../../component/Policy/Policy'

const WhoWwAre = () => {
  return (
    <div>
      <WhoWeAreBanner/>
      <WhoWeAreBanner_2/>
      <Idea/>
      <OurTeam/>
      <Policy/>
    </div>
  )
}

export default WhoWwAre