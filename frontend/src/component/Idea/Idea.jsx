import React from 'react'
import './Idea.css'
import idea_1 from '../../../src/assets/images/idea_4.jpg';
import idea_2 from '../../../src/assets/images/ide_2.jpg';
import idea_3 from '../../../src/assets/images/idea_3.jpg';
import idea_4 from '../../../src/assets/images/idea.jpg';

const Idea = () => {
  return (
    <div className='container'>
        <div className='team_title'>
            <h1>Germination of the Idea</h1>
            <div style={{width:'100px', height:'5px', background:'var(--pri_color)',margin:'20px auto 50px auto',}}></div>
            <strong>The Birth of a Vision: Empowering Communities for a Sustainable Future</strong>
        </div>
        <div className='idea_grid'>
            
                <div className="idea_cont">
                    <p> The germination of the idea to establish our NGO was driven
                         by the urgent need for sustainable solutions to interconnected issues we saw firsthand in 
                         Nepal. <br /><br /> Over the years, we witnessed growing environmental challenges, particularly in rural areas where 
                         deforestation, pollution, and climate change were taking a toll on ecosystems and livelihoods. Simultaneously, we 
                         noticed gaps in education, especially among marginalized communities, where access to quality education and skills
                          development was limited. <br /><br /> Furthermore, economic opportunities, especially for women and youth, were scarce, leaving many families trapped in cycles of poverty.
 
                    </p>
                </div>
                <div className="idea_photo">
                    <img src={idea_1} alt="" />
                </div>
                <div className="idea_photo">
                    <img src={idea_2} alt="" />
                </div>
                <div className="idea_cont">
                    <p> As a group of like-minded individuals passionate about social justice, environmental preservation, and
                         community empowerment, we realized that addressing these issues in isolation wouldn’t create the long-lasting 
                         change we aspired to see. <br /><br /> Instead, we envisioned a holistic approach where education, environment, and economic
                          empowerment work hand in hand.

                    </p>
                </div>
                <div className="idea_cont">
                    <p> Our vision of “A sustainable future where empowered communities thrive in harmony
                         with nature” emerged from this belief. We saw that empowering people through education—both formal
                          and practical—could equip them with the tools to not only improve their economic situation but also 
                          to act as stewards of their natural surroundings. <br /><br /> By fostering a deep understanding of the environment
                           and integrating sustainable practices into their daily lives, communities could drive their own development
                            while protecting the natural resources they depend on.

                    </p>
                </div>
                <div className="idea_photo">
                    <img src={idea_3} alt="" />
                </div>
                <div className="idea_photo">
                    <img src={idea_4} alt="" />
                </div>
                <div className="idea_cont">
                    <p> The idea was also rooted in the belief that collaboration is key. We knew that we needed to build networks and partnerships,
                         mobilize resources, and engage with local stakeholders—ranging from schools to government bodies—to make a real impact. <br /><br />
                         Thus, the founding of our NGO was both a response to the urgent needs we observed and a commitment to creating a sustainable model for development that centers on education, environmental preservation, and economic empowerment.
                        <br /> <br />
                        In essence, our NGO was born out of a desire to create a future where communities are empowered not just to survive, but to thrive in a sustainable and self-sufficient way.
                    </p>
                </div>
                
            
        </div>
    </div>
  )
}

export default Idea