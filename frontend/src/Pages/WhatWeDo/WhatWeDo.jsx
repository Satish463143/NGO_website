import React,{useEffect} from 'react'
import WhatWeDoBanner from '../../component/WhatWeDoBanner/WhatWeDoBanner'
import Mission from '../../component/Mission/Mission'
import Education from '../../component/Education/Education'
import Environment from '../../component/Environment/Environment'
import Economy from '../../component/Economy/Economy'
import WhatWeDoComponent from '../../component/WhatWeDo/WhatWeDo'
import WhoWeAreItem from '../../component/WhoWeAreItem/WhoWeAreItem'
import { useLocation } from 'react-router-dom';
import Vision from '../../component/Vision/Vision'

const WhatWeDo = () => {
  
  return (
    <div>
      <WhatWeDoBanner/>
      <Mission/>
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