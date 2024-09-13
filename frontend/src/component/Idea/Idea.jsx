import React from 'react'
import './Idea.css'
import project_2 from '../../../src/assets/images/project_2.png';
const Idea = () => {
  return (
    <div className='container'>
        <div className='team_title'>
            <h1>Germination of the Idea</h1>
            <div style={{width:'100px', height:'5px', background:'var(--pri_color)',margin:'5px auto 20px auto',}}></div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora a quo recusandae facilis repudiandae ipsam voluptatum, officiis, nesciunt.</p>
        </div>
        <div className='idea_grid'>
            
                <div className="idea_cont">
                    <p> <span> Hiraya Samaj Nepal</span> is a well-known non-governmental 
                        organization with its main office located in Kathmandu, Nepal.<br /> <br />  The Hiraya Foundation, which 
                        focuses on the environment, economics, and education, works to address and mitigate the 
                        significant challenges that these areas of Nepali society are currently facing. The foundation works 
                        to create creative programs and sustainable solutions that support economic development, 
                        environmental protection, and educational advancement.<br /> <br />  We have a committed team of brilliant 
                        individuals working for it. The organization's programs aim to lessen the prevailing issues in these 
                        important fields, which will ultimately advance the growth and welfare of Nepalese society. Hiraya 
                        Foundation Nepal keeps making major progress toward a more sustainable and better future for 
                        the nation through its coordinated efforts. 
                    </p>
                </div>
                <div className="idea_photo">
                    <img src={project_2} alt="" />
                </div>
                <div className="idea_photo">
                    <img src={project_2} alt="" />
                </div>
                <div className="idea_cont">
                    <p> <span> Hiraya Samaj Nepal</span> is a well-known non-governmental 
                        organization with its main office located in Kathmandu, Nepal.<br /> <br />  The Hiraya Foundation, which 
                        focuses on the environment, economics, and education, works to address and mitigate the 
                        significant challenges that these areas of Nepali society are currently facing. The foundation works 
                        to create creative programs and sustainable solutions that support economic development, 
                        environmental protection, and educational advancement.<br /> <br />  We have a committed team of brilliant 
                        individuals working for it. The organization's programs aim to lessen the prevailing issues in these 
                        important fields, which will ultimately advance the growth and welfare of Nepalese society. Hiraya 
                        Foundation Nepal keeps making major progress toward a more sustainable and better future for 
                        the nation through its coordinated efforts. 
                    </p>
                </div>
                
            
        </div>
    </div>
  )
}

export default Idea