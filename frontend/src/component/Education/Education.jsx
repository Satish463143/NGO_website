import React from 'react'
import "./Education.css"
import project_2 from '../../../src/assets/images/project_2.png';
const Education = () => {
  return (
    <div className="education" style={{background:'var(--sec_color)', padding:'10px 0'}}>
        <div className='container'>
            <div className="mission_title" style={{margin:'40px 0'}}>
                <h1 id='education'>Education</h1>  
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
                    <p>
                    STEM Education Initiatives:
                    </p>
                    <li>  
                    Introduce science, technology, engineering, and mathematics (STEM) programs in rural schools to foster innovation.
                    </li>
                    <li> 
                    Provide resources and mentorship for students pursuing careers in STEM fields.
                    </li>
                </div>
                <div className='educaation_full_details_cont'>
                    <p>
                    Early Childhood Education:
                    </p>
                    <li>  

                    Promote the importance of early childhood education in rural areas.

                    </li>
                    <li> 
                    Provide teacher training and resources to improve learning outcomes for young children.
                    </li>
                </div>
                <div className='educaation_full_details_cont'>
                    <p>
                    Inclusive Education:
                    </p>
                    <li>  
                    Ensure access to education for children with disabilities through specialized support and adaptive learning tools.
                    </li>
                    <li> 
                    Promote inclusive classrooms that accommodate students of all abilities.
                    </li>
                </div>
                <div className='educaation_full_details_cont'>
                    <p>
                    Teacher Training and Development:
                    </p>
                    <li>  
                    Conduct ongoing professional development workshops for teachers to enhance their teaching skills.
                    </li>
                    <li> 
                    Provide training on student-centered and innovative teaching methodologies, including digital literacy.
                    </li>
                </div>
                <div className='educaation_full_details_cont'>
                    <p>
                    Community Learning Centers:
                    </p>
                    <li>  
                    Establish community-based learning centers to provide non-formal education for out-of-school children and adults.
                    </li>
                    <li> 
                    Offer adult literacy programs to improve reading, writing, and numeracy skills in rural areas.
                    </li>
                </div>
                <div className='educaation_full_details_cont'>
                    <p>
                    Leadership and Life Skills Development:
                    </p>
                    <li>  
                    Integrate leadership, critical thinking, and life skills training into school curriculums to prepare students for future challenges.
                    </li>
                    <li> 
                    Conduct workshops that foster teamwork, communication, and problem-solving abilities among students.
                    </li>
                </div>
                <div className='educaation_full_details_cont'>
                    <p>
                    Access to Learning Materials:
                    </p>
                    <li>  
                    Distribute textbooks, learning materials, and digital resources to schools in underserved areas.
                    </li>
                    <li> 
                    Provide libraries or mobile libraries to promote a culture of reading and learning in rural communities.
                    </li>
                </div>
                <div className='educaation_full_details_cont'>
                    <p>
                    Vocational Education:
                    </p>
                    <li>  
                    Develop vocational training programs that align with local employment needs and industry demand.
                    </li>
                    <li> 
                    Offer skill-specific courses, such as carpentry, tailoring, and craftsmanship, to enhance employability in rural regions.
                    </li>
                </div>
                <div className='educaation_full_details_cont'>
                    <p>
                    Parental and Community Engagement:
                    </p>
                    <li>  
                    Organize workshops to educate parents about the value of education and ways to support their children’s learning.
                    </li>
                    <li> 
                    Promote community involvement in school activities and decision-making processes to foster a supportive learning environment.
                    </li>
                </div>
                
                
            </div>
        </div>
    </div>
  )
}

export default Education