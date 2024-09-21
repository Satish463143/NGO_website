import React from 'react'
import './WhoWeAreItem.css'
import project_2 from '../../../src/assets/images/hiraya rural.jpg';
import project_3 from '../../../src/assets/images/hiraya women.webp';
import project_4 from '../../../src/assets/images/hiraya youth.jpg';
import project_5 from '../../../src/assets/images/hiraya Marginalized.jpg';
import project_6 from '../../../src/assets/images/hiraya Farmers.jpg';
import project_8 from '../../../src/assets/images/hiraya disaster.jpg';
import project_9 from '../../../src/assets/images/hiraya Environmentally Impacted Communities.jpg';
import project_10 from '../../../src/assets/images/hiraya Uneducated.jpg';
import project_7 from '../../../src/assets/images/hiraya Local Business people and Small Business Persons.jpg';
import project_11 from '../../../src/assets/images/hiraya Stewards.jpg';
const WhoWeAreItem = () => {
  return (
    <div className=' who_we_are'>
        <div className='container'>
            <div className="mission_title">
                <h1>Who We Care For ?</h1>  
                <div style={{width:'100px', height:'5px', background:'var(--pri_color)',margin:'20px auto 30px auto',}}></div>
            </div>
            <div className="who_we_are_grid">
                <div className="who_we_are_box">
                    <div className="who_we_are_img">
                        <img src={project_2} alt="" />
                    </div>
                    <div className="who_we_are_title">
                        <h2>
                        Rural Communities
                        </h2>
                    </div>
                    <div className="who_we_are_cont">
                    We have a very strong passion about supporting rural, underserved populations who often lack adequate access to education and economic development tools. Such an approach is aimed at supporting these communities and raising them to a better level of life while ensuring they know how to do this without destroying their habitat. 
                    </div>
                </div>
                <div className="who_we_are_box">
                    <div className="who_we_are_img">
                        <img src={project_3} alt="" />
                    </div>
                    <div className="who_we_are_title">
                        <h2>

                        Women and Girls
                        </h2>
                    </div>
                    <div className="who_we_are_cont">
                    Women and girls’ rights are central to our mission with a special emphasis on the rural community. Thus, we are fighting for girls’ right to education, as well as providing women with opportunities to acquire professional skills and become financially independent. We hold the view that any society where the wives and mothers are educated and empowered they act as a catalyst for change in the households as well as societies in large.
                    </div>
                </div>
                <div className="who_we_are_box">
                    <div className="who_we_are_img">
                        <img src={project_4} alt="" />
                    </div>
                    <div className="who_we_are_title">
                        <h2>
                        Youth 
                        </h2>
                    </div>
                    <div className="who_we_are_cont">
                    Youth are our community of tomorrow and children and youths are endowed with prospects for education, vocational training, and leadership. Thus, imparting knowledge and skills to young people, it can be certain that they are capable of meeting the conditions of the modern world and become active members of society, the nation. 
                    </div>
                </div>
                <div className="who_we_are_box">
                    <div className="who_we_are_img">
                        <img src={project_5} alt="" />
                    </div>
                    <div className="who_we_are_title">
                        <h2>
                        Marginalized Groups
                        </h2>
                    </div>
                    <div className="who_we_are_cont">
                    We stand for the protection of the voiceless, the discrimination of the minorities, the disabled and other economically vulnerable groups in society. We endeavor to promote Equity so that nobody is locked out from education, employment and environmental conservation. 
                    </div>
                </div>
                <div className="who_we_are_box">
                    <div className="who_we_are_img">
                        <img src={project_6} alt="" />
                    </div>
                    <div className="who_we_are_title">
                        <h2>
                        Farmers and Agricultural Workers 
                        </h2>
                    </div>
                    <div className="who_we_are_cont">
                    Understanding the position farmers and agricultural workforce hold in the economy of the country, we train farmers in intensive sustainable agriculture, organic farming and environmentally friendly methodologies. Thus, enhancing people’s livelihoods and supporting sustainability, world resources are preserved, and food safety is secured.
                    </div>
                </div>
                <div className="who_we_are_box">
                    <div className="who_we_are_img">
                        <img src={project_8} alt="" />
                    </div>
                    <div className="who_we_are_title">
                        <h2>
                        Natural Disaster Survivors 
                        </h2>
                    </div>
                    <div className="who_we_are_cont">
                    We are there for communities that have been devastated by natural disasters as a short-term and a long-term solution provider. Regardless of whether it is the process of reconstructing an area or rebuilding a subject’s life, our focus is to provide for the needs of those who have been affected to help them overcome the adversities of life and the next disasters that are yet to happen. 
                    </div>
                </div>
                <div className="who_we_are_box">
                    <div className="who_we_are_img">
                        <img src={project_9} alt="" />
                    </div>
                    <div className="who_we_are_title">
                        <h2>
                        Environmentally Impacted Communities 
                        </h2>
                    </div>
                    <div className="who_we_are_cont">
                    Climate change and environmental degradation are adverse effects experienced by the society and particularly affects some groups of persons in the society. We work with the affected people, especially those that are directly dealing with the effects of climate change in their day-to-day activities; to mitigate the effects of climate change and also to promote sustainable management of ecosystems in their areas. 
                    </div>
                </div>
                <div className="who_we_are_box">
                    <div className="who_we_are_img">
                        <img src={project_10} alt="" />
                    </div>
                    <div className="who_we_are_title">
                        <h2>
                        Uneducated and Underprivileged Individuals
                        </h2>
                    </div>
                    <div className="who_we_are_cont">
                    Education to us is quite an important right and we ensure that people who have never gone to school are given the chance to go to school. They cover areas such as non-formal education, adult literacy and vocational training hence helping them to receive a better quality of life and better chances of employment. 
                    </div>
                </div>
                <div className="who_we_are_box">
                    <div className="who_we_are_img">
                        <img src={project_7} alt="" />
                    </div>
                    <div className="who_we_are_title">
                        <h2>
                        Local Business people and Small Business Persons
                        </h2>
                    </div>
                    <div className="who_we_are_cont">
                    We also have a social responsibility of helping local businessmen and small businesses to acquire skills, capital and market outlets that would help them grow. Empowering such people assists in the creation of employment opportunities and economic growth at the regional level thus promoting community sustainability. 
                    </div>
                </div>
                <div className="who_we_are_box">
                    <div className="who_we_are_img">
                        <img src={project_11} alt="" />
                    </div>
                    <div className="who_we_are_title">
                        <h2>
                        Environmental Stewards 
                        </h2>
                    </div>
                    <div className="who_we_are_cont">
                    It is, therefore, geared towards reaching out to individuals and communities with interest in environmental conservation so as to enable them make the necessary efforts to conserve, preserve or rehabilitate their environment. In this way, we assist the environment care takers in order that future generations will have the ability of inheriting a healthy environment.
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default WhoWeAreItem