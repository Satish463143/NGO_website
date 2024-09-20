import React from 'react'
import './OurTeam.css'
import shabana from '../../../src/assets/images/shabana.jpg';
import atish from '../../../src/assets/images/atish.jpg';
import sneha from '../../../src/assets/images/sneha.jpg';
const OurTeam = () => {
  return (
    <div className="my_team">
    <div className='container'>
        <div className='team_title'>
            <h1>Meet Our Team</h1>
            <div style={{width:'100px', height:'5px', background:'var(--pri_color)',margin:'20px auto 50px auto',}}></div>
            <strong>"Meet Our Dedicated Team Committed to a Sustainable Future and Empowered Communities"</strong>
        </div>
        <div className='idea_grid desktop_idea_grid'>
            
                <div className="idea_cont">
                    <h1 className='short_text'>Sneha Puri</h1>
                    <span className='short_text'>President</span>
                    <p className='short_text'> I am a final-year Bachelor's student in social work, deeply passionate about making a positive impact in society. My work is centered on social initiatives that drive meaningful change, particularly in the areas of climate action and environmental sustainability. With a strong commitment to creating positive social impacts, I actively engage in climate change initiatives to promote a more sustainable future. My goal is to ensure that my efforts contribute to both social welfare and environmental protection, fostering a world where communities thrive in harmony with nature.
                        <br /><br />
                        As the President of my organization, I am focused on leading by example and inspiring others to join me in making a difference. My journey in social work is driven by a desire to address pressing issues that affect both people and the planet, aiming to leave a lasting legacy of social and environmental responsibility
                    </p>
                </div>
                <div className="idea_photo">
                    <img src={sneha} alt="" />
                </div>
                <div className="idea_photo">
                    <img src={atish} alt="" />
                </div>
                <div className="idea_cont">
                    <h1>Atish Mahato</h1>
                    <span >Excutive Director</span>
                    <p> I am a final-year Bachelor's student in Business Studies with a deep passion for uplifting the economy of Nepal. My work focuses on creating sustainable economic growth while promoting environmental sustainability. I am particularly interested in addressing the pressing economic challenges faced by Nepal through innovative solutions that not only drive development but also align with global climate change initiatives.
                        <br /><br />
                        As the Executive Director of my organization, I aim to lead efforts that foster economic empowerment in harmony with environmental protection. I am committed to finding ways to integrate economic advancement with sustainability, ensuring a better future for communities in Nepal while contributing to global climate action efforts. My vision is to build a thriving economy that exists in balance with nature.
                    </p>
                </div>
                <div className="idea_cont">
                    <h1 className='short_text'> Shabana parbin</h1>
                    <span className='short_text'>Progarm director</span>
                    <p className='short_text'> I am Shabana Parbin, the Program Director with a Bachelor’s degree from the Institute of Forestry Hetauda. My educational background has given me a deep understanding of forests, agriculture, and climate-related issues. I am passionate about these critical topics, and my commitment lies in making a meaningful impact in these areas.
                        <br /><br />
                        As the Program Director, I oversee various initiatives related to conservation, sustainable farming practices, and climate action. My goal is to bring about positive, lasting change in environmental preservation and adaptation to climate change. I work closely with different stakeholders, including local communities, environmental organizations, and government bodies, to implement projects that contribute to the well-being of ecosystems and promote sustainable agricultural systems.
                        </p>
                </div>
                <div className="idea_photo">
                    <img src={shabana} alt="" />
                </div>
                
            
        </div>
        <div className='idea_grid mobile_idea_grid'>
                <div className="idea_photo">
                    <img src={sneha} alt="" />
                </div>
                <div className="idea_cont idea_cont_gap">
                    <h1 className='short_text'>Sneha Puri</h1>
                    <span className='short_text'>President</span>
                    <p className='short_text'> I am a final-year Bachelor's student in social work, deeply passionate about making a positive impact in society. My work is centered on social initiatives that drive meaningful change, particularly in the areas of climate action and environmental sustainability. With a strong commitment to creating positive social impacts, I actively engage in climate change initiatives to promote a more sustainable future. My goal is to ensure that my efforts contribute to both social welfare and environmental protection, fostering a world where communities thrive in harmony with nature.
                        <br /><br />
                        As the President of my organization, I am focused on leading by example and inspiring others to join me in making a difference. My journey in social work is driven by a desire to address pressing issues that affect both people and the planet, aiming to leave a lasting legacy of social and environmental responsibility.
                    </p>
                </div>
                
                <div className="idea_photo">
                    <img src={atish} alt="" />
                </div>
                <div className="idea_cont idea_cont_gap">
                    <h1>Atish Mahato</h1>
                    <span >Excutive Director</span>
                    <p> I am a final-year Bachelor's student in Business Studies with a deep passion for uplifting the economy of Nepal. My work focuses on creating sustainable economic growth while promoting environmental sustainability. I am particularly interested in addressing the pressing economic challenges faced by Nepal through innovative solutions that not only drive development but also align with global climate change initiatives.
                        <br /><br />
                        As the Executive Director of my organization, I aim to lead efforts that foster economic empowerment in harmony with environmental protection. I am committed to finding ways to integrate economic advancement with sustainability, ensuring a better future for communities in Nepal while contributing to global climate action efforts. My vision is to build a thriving economy that exists in balance with nature.
                    </p>
                </div>
                <div className="idea_photo">
                    <img src={shabana} alt="" />
                </div>
                <div className="idea_cont idea_cont_gap">
                    <h1 className='short_text'> Shabana parbin</h1>
                    <span className='short_text'>Progarm director</span>
                    <p className='short_text'> I am Shabana Parbin, the Program Director with a Bachelor’s degree from the Institute of Forestry Hetauda. My educational background has given me a deep understanding of forests, agriculture, and climate-related issues. I am passionate about these critical topics, and my commitment lies in making a meaningful impact in these areas.
                        <br /><br />
                        As the Program Director, I oversee various initiatives related to conservation, sustainable farming practices, and climate action. My goal is to bring about positive, lasting change in environmental preservation and adaptation to climate change. I work closely with different stakeholders, including local communities, environmental organizations, and government bodies, to implement projects that contribute to the well-being of ecosystems and promote sustainable agricultural systems.
                        </p>
                </div>
                
                
            
        </div>
    </div>
    </div>
  )
}

export default OurTeam