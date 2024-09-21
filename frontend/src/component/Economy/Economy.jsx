import React from 'react'
import project_2 from '../../../src/assets/images/hiraya economy.jpg';
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
                    <p>Entrepreneurship Development: </p>
                    <li>Provide training and mentorship programs for aspiring entrepreneurs, especially in rural areas.</li>
                    <li>  Offer micro-financing opportunities to support small businesses and startups.</li>
                </div>
                <div className='educaation_full_details_cont'>
                    <p>Market Access and Trade:</p>
                    <li> Facilitate access to local, national, and international markets for rural producers. 
                    </li>
                    <li>  Support fair trade practices and help small businesses reach wider markets through cooperative networks.
                    </li>
                </div>
                <div className='educaation_full_details_cont'>
                    <p>Sustainable Business Practices: </p>
                    <li>  Promote the adoption of sustainable business practices to reduce environmental impact.</li>
                    <li>  Offer workshops and resources on eco-friendly production methods and circular economy models.
                    </li>
                </div>
                <div className='educaation_full_details_cont'>
                    <p>Women’s Economic Empowerment: </p>
                    <li>   Establish women-led cooperatives and enterprises to boost income and self-reliance. </li>
                    <li>    Provide capacity-building programs to enhance women’s economic participation and leadership in business.
                    </li>
                </div>
                <div className='educaation_full_details_cont'>
                    <p>Youth Employment:</p>
                    <li>  Develop targeted job training and placement programs for youth in high-demand industries.</li>
                    <li> Collaborate with private sectors and government to create internship and apprenticeship opportunities for young people.
                    </li>
                </div>
                <div className='educaation_full_details_cont'>
                    <p>Digital Economy Integration: </p>
                    <li>  Encourage the use of e-commerce platforms for rural businesses to reach broader markets.</li>
                    <li>    Train rural entrepreneurs on digital payment systems, online marketing, and remote business management.
                    </li>
                </div>
                <div className='educaation_full_details_cont'>
                    <p>Sustainable Tourism: </p>
                    <li>Promote eco-tourism and community-based tourism initiatives to create jobs and preserve cultural heritage. </li>
                    <li>Train local communities in hospitality, tourism management, and environmental stewardship.
                    </li>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Economy