import React from 'react'
import "./Education.css"
import project_2 from '../../../src/assets/images/project_2.png';
const Education = () => {
  return (
    <div className="education" style={{ padding:'10px 0'}}>
        <div className='container'>
            <div className="mission_title" style={{margin:'40px'}}>
                <h1>Education</h1>  
                <div style={{width:'100px', height:'5px', background:'var(--pri_color)',margin:'20px auto 20px auto',}}></div>
            </div>
            <div className='education_grid'>
                <div className="education_content">
                    <p>
                    Promoting girls' education, empowering women, and accepting digitalization are essential 
                    elements for Nepal's rural communities to flourish sustainably. Advancing gender equality, and 
                    providing women with the information and abilities needed for self-determination are all made 
                    possible by education. Additionally, the incorporation of digital tools and resources into 
                    educational programs has the potential to greatly improve learning outcomes and create new 
                    avenues for personal and professional development

                    </p>
                </div>
                <div className="education_img">
                    <img src={project_2} alt="" />
                </div>
            </div>
            <div className="educaation_full_details">
                <h2>Objectives:</h2>
                <div className='educaation_full_details_cont'>
                    <p>Focus on Education for Girls: </p>
                    <li>  Provide scholarships and financial support to encourage girls' education. 
                    </li>
                    <li> Improve school infrastructure, including safe and hygienic sanitation facilities, to create a 
                    conducive learning environment for girls. 
                    </li>
                </div>
                <div className='educaation_full_details_cont'>
                    <p>Women Empowerment: </p>
                    <li>  Offer leadership and vocational training programs specifically for women. 
 
                    </li>
                    <li> Create support networks and mentorship opportunities to improve women's personal and 
                    professional growth.  
                    </li>
                </div>
                <div className='educaation_full_details_cont'>
                    <p>Digitalization in Education: </p>
                    <li>   Implement digital learning tools and platforms to enhance educational access and quality. 
 
                    </li>
                    <li> Train teachers and students in the use of digital technologies for learning and development. 
 
                    </li>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Education