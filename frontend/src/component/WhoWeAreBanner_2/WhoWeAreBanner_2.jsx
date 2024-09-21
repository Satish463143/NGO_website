import React from 'react'
import nepalvillage from '../../../src/assets/images/banner-04.jpg';
import project_2 from '../../../src/assets/images/home who we are.jpg';
const WhoWeAreBanner_2 = () => {
  return (
    <div className='banner banner_bg'>
      <img className="desktopImg" src={nepalvillage} alt="" />
      <img className="mobileImg" src={nepalvillage} alt="" />
      <div className='bananere_ovelay'></div>
      <div className='banner_content'>
        <div className='container'>
          <div className="banner_2">
            <div>
                <h1 style={{color:'var(--white)'}}>Hiraya Samaj Nepal</h1>
                <div style={{width:'100px', height:'5px', background:'var(--pri_color)',margin:'20px auto 20px auto',}}></div>
            </div>
            <div className="banner_2_grid">
                <div>
                    <p> <span> Hiraya Samaj Nepal</span> is a well-known non-governmental 
                        organization with its main office located in Kathmandu, Nepal.<br /> <br />  The Hiraya Foundation, which 
                        focuses on the environment, economics, and education, works to address and mitigate the 
                        significant challenges that these areas of Nepali society are currently facing. The foundation works 
                        to create creative programs and sustainable solutions that support economic development, 
                        environmental protection, and educational advancement.<br /> <br />  We have a committed team of brilliant 
                        individuals working for it. The organization's programs aim to lessen the prevailing issues in these 
                        important fields, which will ultimately advance the growth and welfare of Nepalese society. Hiraya 
                        Foundation Nepal keeps making major progress toward a more sustainable and better future for 
                        the nation through its coordinated efforts. </p>
                </div>
                <div  className='banner_2_img'>
                    <img src={project_2} alt="" />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhoWeAreBanner_2