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
        <div className='idea_grid desktop_idea_grid'>
            
                <div className="idea_cont">
                    <p> The decision to start our NGO was made after a casual conversation of 3 close 
                        friends that have the same dream to help people. It all started with a discussion
                        on what we found irritating in the society we live in and escalated to be a much
                        bigger thing. <br /> <br /> We discussed the problems that communities have today: deforestation,
                        people’s ignorance, and poverty and therefore, we were unable to sit idly. That is 
                        when the idea started and we began imagining the possibility of founding an organization 
                        that would be focused on tackling all of these interlinked problems.  <br /> <br />
                        We transitioned from calling the problems we identified as real to envisioning possible
                        solutions and our perceived competencies and past experiences could be the building blocks
                        for a new project. It was more of a divine revelation that one wants to establish an 
                        NGO than just a mere imagination. It was really important for us to create an organization 
                        that is more than just responsive; one that was also a catalyst, a place where education,
                        environment, and economy could make a difference. 
                    </p>
                    <p>
                        
                    </p>
                </div>
                <div className="idea_photo">
                    <img src={idea_1} alt="" />
                </div>
                <div className="idea_photo">
                    <img src={idea_2} alt="" />
                </div>
                <div className="idea_cont">
                    <p>It was that conversation that paved the way to the formation of what
                        will be our NGO ; an organization where our passion will be translated to action because 
                        of our vision to make lives better and preserve the environment. <br /> <br /> This then gave birth from
                        three friends, by just having fun but without the knowledge turned into a huge idea that can
                        change the community and maybe inspire others to be part of. <br /> <br />
                        Since we are a team of people who are keen on social justice, environmental conservation and 
                        empower the communities, it was easy for us to identify that the issues faced in Nepal were 
                        closely related to one another. Solving each of them separately would not bring the kind of 
                        change that we ambitions to bring about. However, we thought in terms of sustainable systems where
                        education, conservation of the environment and economic development would complement each other in the
                        creation of sustainable communities.
                    </p>
                </div>
                <div className="idea_cont">
                    <p>  Thus, the belief led to the development of the Vision ‘A sustainable future where empowered communities 
                        thrive in harmony with nature’. We began to view education not only as booming character and individual 
                        development but as a way for people to transform their lives from such unfavorable status as poverty, to
                        fight for their environment, and to build a sustainable economy. <br /><br /> Through providing the people with 
                        education and vocational training we thought they could become change agents, capable of changing
                        their lot for the better and their interaction with the environment.  <br /><br />
                        When founding our NGO, I believed that people could add principles of sustainable living into 
                        their lives when they were introduced to those principles through a profound understanding of the environment.
                        Thus there was no difference the communities could drive their own development while at the same time 
                        protecting the resources on which they rely. Sustainability was not an afterthought; it was integral to 
                        economic and education development strategies.
                    </p>
                </div>
                <div className="idea_photo">
                    <img src={idea_3} alt="" />
                </div>
                <div className="idea_photo">
                    <img src={idea_4} alt="" />
                </div>
                <div className="idea_cont">
                    <p> We also realized that partnerships would be more essential in driving long-term success as well.
                        For a positive change to be achieved in this kind of societal practice, networks and partnership 
                        with relevant schools, local charitable organizations, bodies or departments and other stakeholders
                        had to be established. <br /><br /> This approach was to mobilize resources and involve communities on all levels
                        so as to find effective and sustainable solutions for the future generation. <br /><br /> 
                        In other words, the formation of our NGO, we realized that there was deforestation, pollution,
                        there was a low literacy rate, people were jobless and were lacking necessary education as they
                        were in Nepal. But more importantly, it was a promise to engender a development paradigm that will
                        integrate education, environment as well as economic development. It is our hope and vision that the 
                        communities we work with become capable of learning as well as maintaining a sustainable environment for
                        humans and their surrounding system.
                    </p>
                </div>               
            
        </div>
        <div className='idea_grid mobile_idea_grid'>
            
                <div className="idea_cont idea_cont_p">
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
                <div className="idea_cont idea_cont_p">
                    <p> As a group of like-minded individuals passionate about social justice, environmental preservation, and
                         community empowerment, we realized that addressing these issues in isolation wouldn’t create the long-lasting 
                         change we aspired to see. <br /><br /> Instead, we envisioned a holistic approach where education, environment, and economic
                          empowerment work hand in hand.

                    </p>
                </div>
                <div className="idea_photo">
                    <img src={idea_2} alt="" />
                </div>                
                <div className="idea_cont idea_cont_p">
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
                <div className="idea_cont idea_cont_p">
                    <p> The idea was also rooted in the belief that collaboration is key. We knew that we needed to build networks and partnerships,
                         mobilize resources, and engage with local stakeholders—ranging from schools to government bodies—to make a real impact. <br /><br />
                         Thus, the founding of our NGO was both a response to the urgent needs we observed and a commitment to creating a sustainable model for development that centers on education, environmental preservation, and economic empowerment.
                        <br /> <br />
                        In essence, our NGO was born out of a desire to create a future where communities are empowered not just to survive, but to thrive in a sustainable and self-sufficient way.
                    </p>
                </div>
                <div className="idea_photo">
                    <img src={idea_4} alt="" />
                </div>
                
                
            
        </div>
    </div>
  )
}

export default Idea