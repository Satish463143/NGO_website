import React from 'react'
import project_2 from '../../../src/assets/images/hiraya Samaj.jpg';

const Environment = () => {
  return (
    <div  className="education" style={{ padding:'10px 0'}}>
        <div className='container'>
            <div className="mission_title" style={{margin:'40px 0'}}>
                <h1 id='environment'>Environment</h1>  
                <div style={{width:'100px', height:'5px', background:'var(--pri_color)',margin:'20px auto 20px auto',}}></div>
            </div>
            <div className='education_grid'>
                <div className="education_content">
                    <p>
                        The foundation, with a focus on the environment, understands how vital it is to protect and 
                        conserve our natural surroundings. The environment, which provides necessary resources like 
                        clean water, air, and fertile soil, is the basis of all life on Earth. However, it faces numerous 
                        challenges today, including climate change, deforestation, pollution, and loss of biodiversity. 
                        Addressing these issues is crucial for the sustainability and health of our planet and future 
                        generations. 

                    </p>
                </div>
                <div className="education_img">
                    <img src={project_2} alt="" />
                </div>
            </div>
            <div className="educaation_full_details">
                <h2>Objectives:</h2>
                <div className='educaation_full_details_cont'>
                    <p>Mitigate Climate Change Effects:</p>
                    <li> Develop and implement community-based climate adaptation and mitigation projects. </li>
                    <li> Promote the use of renewable energy sources to reduce greenhouse gas emissions. </li>
                </div>
                <div className='educaation_full_details_cont'>
                    <p>Support Natural Disaster Survivors:</p>
                    <li> Establish rapid response teams to provide immediate aid and support to communities 
                    affected by natural disasters.  </li>
                    <li> Develop long-term recovery plans that include rebuilding infrastructure and restoring 
                    livelihoods. 
                    </li>
                </div>
                <div className='educaation_full_details_cont'>
                    <p>Afforestation Programs: </p>
                    <li>  Launch large-scale tree planting campaigns to restore degraded lands and increase forest 
                    cover.  </li>
                    <li>  Collaborate with local communities to protect existing forests and promote sustainable 
                    forestry practices. 
                    </li>
                </div>
                <div className='educaation_full_details_cont'>
                    <p>Promote Sustainable Agriculture: </p>
                    <li>  Encourage the adoption of eco-friendly farming techniques to enhance soil health and 
                    reduce chemical usage. </li>
                    <li>   Support organic farming initiatives and provide training for farmers.
                    </li>
                </div>
                <div className='educaation_full_details_cont'>
                    <p>Waste Management: </p>
                    <li>  Implement comprehensive waste management programs to reduce pollution and promote 
                    recycling.  </li>
                    <li>   Educate communities about the importance of reducing, reusing, and recycling waste. 
                    </li>
                </div>
                <div className='educaation_full_details_cont'>
                    <p>Biodiversity Conservation:</p>
                    <li>  Protect endangered species through habitat conservation and anti-poaching initiatives.  </li>
                    <li>  Foster community-based conservation programs that engage local residents in protecting 
                        their natural heritage.  
                    </li>
                </div>
                <div className='educaation_full_details_cont'>
                    <p>Raise Environmental Awareness:</p>
                    <li>   Conduct educational campaigns to raise awareness about environmental issues and 
                    promote sustainable practices.  </li>
                    <li>   Partner with schools and universities to integrate environmental education into their 
                    curricula. 
                    </li>
                </div>
                <div className='educaation_full_details_cont'>
                    <p>Water Conservation:</p>
                    <li>    Develop projects to conserve water resources and ensure access to clean drinking water. </li>
                    <li>   Promote rainwater harvesting and efficient irrigation techniques. 
                    </li>
                </div>
                <div className='educaation_full_details_cont'>
                    <p>Sustainable Urban Development:</p>
                    <li>    Advocate for green urban planning and the creation of eco-friendly infrastructure.   </li>
                    <li>    Support the development of green spaces and parks in urban areas.
                    </li>
                </div>
                <div className='educaation_full_details_cont'>
                    <p>Research and Innovation: </p>
                    <li>     Research environmental issues and develop innovative solutions to address them.  </li>
                    <li>    Collaborate with academic institutions and research organizations to stay at the forefront 
                    of environmental science.
                    </li>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Environment