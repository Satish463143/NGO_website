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
                    <p className='short_text'> 
                        Sneha Puri, an undergraduate Social Work Final year Bachelor’s student, who has dedication and passion
                        towards tackling climate change as well as uplifting society. She illustrates how organizational social
                        responsibilities are linked with sustainable practices by arguing that the developments today ultimately 
                        pave the way for future advancements. <br /><br /> Sneha also agrees that practice occurs through community
                        improvement and environmental preservation, and is pro-preparedness to manage climate change.
                        Her vision is to have the future generations living in harmony with nature, in a world that trusts
                        in taking responsibility for social welfare and environmental responsibility. In this capacity,
                        she hopes to mobilize people to work on practical endeavors that are both helpful to people and the globe, through HIRAYA.
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
                    <p> Atish Mahato, a final year Bachelor’s student in Business Studies, has a burning desire to change 
                        the economic map of Nepal by establishing an organization whose primary goal is to give priority
                        to the welfare of the environment. For example, while HIRAYA’s Executive Director, he directs programs
                        that seek to develop wealth besides confirming environmentalism or climate change Mandates. <br /><br /> He always
                        dreams of Nepal being an inspiration for sustainable development, in which economic, social, cultural,
                        political and physical development go hand in hand with the development of coherent and complimentary
                        communities and industries. His vision for the future is an economy that will provide both material
                        wealth and environmental quality to the society to allow the next generations prosper.
                    </p>
                </div>     
        </div>
        <div className='idea_grid mobile_idea_grid'>
                <div className="idea_photo">
                    <img src={sneha} alt="" />
                </div>
                <div className="idea_cont idea_cont_gap">
                    <h1 className='short_text'>Sneha Puri</h1>
                    <span className='short_text'>President</span>
                    <p className='short_text'> 
                        Sneha Puri, an undergraduate Social Work Final year Bachelor’s student, who has dedication and passion
                        towards tackling climate change as well as uplifting society. She illustrates how organizational social
                        responsibilities are linked with sustainable practices by arguing that the developments today ultimately 
                        pave the way for future advancements. <br /><br /> Sneha also agrees that practice occurs through community
                        improvement and environmental preservation, and is pro-preparedness to manage climate change.
                        Her vision is to have the future generations living in harmony with nature, in a world that trusts
                        in taking responsibility for social welfare and environmental responsibility. In this capacity,
                        she hopes to mobilize people to work on practical endeavors that are both helpful to people and the globe, through HIRAYA.
                    </p>
                </div>
                
                <div className="idea_photo">
                    <img src={atish} alt="" />
                </div>
                <div className="idea_cont idea_cont_gap">
                    <h1>Atish Mahato</h1>
                    <span >Excutive Director</span>
                    <p> Atish Mahato, a final year Bachelor’s student in Business Studies, has a burning desire to change 
                        the economic map of Nepal by establishing an organization whose primary goal is to give priority
                        to the welfare of the environment. For example, while HIRAYA’s Executive Director, he directs programs
                        that seek to develop wealth besides confirming environmentalism or climate change Mandates. <br /><br /> He always
                        dreams of Nepal being an inspiration for sustainable development, in which economic, social, cultural,
                        political and physical development go hand in hand with the development of coherent and complimentary
                        communities and industries. His vision for the future is an economy that will provide both material
                        wealth and environmental quality to the society to allow the next generations prosper.
                    </p>
                </div>
        </div>
    </div>
    </div>
  )
}

export default OurTeam