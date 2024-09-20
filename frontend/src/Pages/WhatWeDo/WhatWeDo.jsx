import React,{useEffect} from 'react'
import WhatWeDoBanner from '../../component/WhatWeDoBanner/WhatWeDoBanner'

import Education from '../../component/Education/Education'
import Environment from '../../component/Environment/Environment'
import Economy from '../../component/Economy/Economy'
import WhatWeDoComponent from '../../component/WhatWeDo/WhatWeDo'
import WhoWeAreItem from '../../component/WhoWeAreItem/WhoWeAreItem'
import { useLocation } from 'react-router-dom';
import Vision from '../../component/Vision/Vision'
import Mission_2 from '../../component/MIssion_2/MIssion_2'


const WhatWeDo = () => {
  
  return (
    <div>
      <WhatWeDoBanner/>
      <Mission_2/>
      <Vision/>
      <Environment/>
      <Education/>
      <Economy/>
      <WhatWeDoComponent/>   
      <WhoWeAreItem/>   
    </div>
  )
}

export default WhatWeDo