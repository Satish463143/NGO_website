import React from 'react'
import project_2 from '../../../src/assets/images/project_2.png';
const Economy = () => {
  return (
    <div className="education" style={{ padding:'10px 0'}}>
        <div className='container'>
            <div className="mission_title" style={{margin:'40px 0'}}>
                <h1 id='economy'>Economy</h1>  
                <div style={{width:'100px', height:'5px', background:'var(--pri_color)',margin:'20px auto 20px auto',}}></div>
            </div>
            <div className='education_grid'>
                <div className="education_content">
                    <p>
                        For rural communities in Nepal to be empowered to manage their resources wisely and make wise 
                        decisions, financial literacy is essential. For those without formal education, developing their skills 
                        is crucial to raising their employability and standard of living. Furthermore, digital media training 
                        and its application to employment development present creative chances for economic expansion 
                        and self-sufficiency in these areas. We can promote sustainable development and improve the 
                        socioeconomic standing of Nepal's rural populations by concentrating on these areas. 


                    </p>
                </div>
                <div className="education_img">
                    <img src={project_2} alt="" />
                </div>
            </div>
            <div className="educaation_full_details">
                <h2>Objectives:</h2>
                <div className='educaation_full_details_cont'>
                    <p>Enhance Financial Literacy: </p>
                    <li> Provide comprehensive financial education programs to rural residents of Nepal.</li>
                    <li>  Increase awareness about savings, investments, and financial planning.</li>
                    <li>  Support women and marginalized groups in acquiring financial and digital skills. 
                    </li>
                </div>
                <div className='educaation_full_details_cont'>
                    <p>Skill Development:</p>
                    <li>  Identify key skills needed in the local job market and design training programs accordingly. 
                    </li>
                    <li>  Offer vocational training to uneducated individuals to improve their employment 
                    prospects.
                    </li>
                </div>
                <div className='educaation_full_details_cont'>
                    <p>Digital Media Training: </p>
                    <li>  Conduct workshops on digital literacy and the use of social media platforms </li>
                    <li>  Train individuals on leveraging digital tools for marketing and business development. 
                    </li>
                </div>
                <div className='educaation_full_details_cont'>
                    <p>Job Creation: </p>
                    <li>   Conduct workshops on digital literacy and the use of social media platforms. </li>
                    <li>    Train individuals on leveraging digital tools for marketing and business development.
                    </li>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Economy