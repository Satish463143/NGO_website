import React from 'react'
import './WhatWeDo.css'
import project_2 from '../../../src/assets/images/hiraya Education Distribution.png';
import project_3 from '../../../src/assets/images/hiraya Economic Development.jpg';
import project_4 from '../../../src/assets/images/hiraya research.jpg';
import project_5 from '../../../src/assets/images/hiraya Environment Conservation.jpg';
import project_6 from '../../../src/assets/images/hiraya Partnership.jpg';
import project_7 from '../../../src/assets/images/hiraya Communities.png';


const WhatWeDo = () => {
  return (
    <div style={{background:'var(--sec_color)'}}>
    <div className='container'>
      <div className='whatwedo'>
        <div className="mission_title">
            <h1>What We Do</h1>  
            <div style={{width:'100px', height:'5px', background:'var(--pri_color)',margin:'20px auto 30px auto',}}></div>
        </div>
        <div className='desktop_idea_grid'>
          <div className='what_we_do_grid'>            
              <div className="what_we_do_img">
                <img src={project_2} alt="" />
              </div>
              <div className="what_we_do_title">
                <h1>Education Distribution</h1>
              </div>
              <div className="what_we_do_cont">
                <p> As for HIRAYA, liberty remains to be a product of education coming from the principle that every individual has the right to learn. It is our purpose and mission to ensure that educational materials get to the needy schools particularly in the rural areas. Our programs’ core direction is ensured through such competencies as life skills, critical thinking, leadership, and digital literacy that will enable students to succeed in the fast-paced world. By the efforts of our company, we try to close the gap in education and open the path to success for each learner irrespective of his or her financial status

                </p>
              </div>          
          </div>
          <div className='what_we_do_grid'> 
              <div className="what_we_do_cont">
                <p> The strategy of development of our economy is focused on providing productive engagement through employment for the less fortunate groups of the society especially women in the rural areas. The areas of training offered are mainly entrepreneurship, financial management, and market linkages thus enhancing individuals’ ability to earn an income and support themselves. Our strategy links both economic development and the necessary responsibility for the environmental impact for successful development that raises the standard of living for individuals while not overexploiting resources in the community. 

                </p>
              </div> 
              <div className="what_we_do_title">
                <h1>Economic Development</h1>
              </div>
              <div className="what_we_do_img">
                <img src={project_3} alt="" />
              </div> 
          </div>
          <div className='what_we_do_grid'>            
              <div className="what_we_do_img">
                <img src={project_4} alt="" />
              </div>
              <div className="what_we_do_title">
                <h1>Research</h1>
              </div>
              <div className="what_we_do_cont">
                <p>Research is the core of what we work for in HIRAYA. We also carry out further research on education, economic and the environment sector in order to determine key issues affecting different communities in Nepal. Our research guides our programs and enables us to create unique, effective programs that are at the heart of global problems such as climate change, poverty, and education. Proactively updating ourselves we also make sure that each venture we undertake remains useful in the society. 

                </p>
              </div>          
          </div>
          <div className='what_we_do_grid'> 
              <div className="what_we_do_cont">
                <p> Environmental conservation is among the cardinal principles that are implemented by the organization. It will be our policy to save the Natural wealth of Nepal through conservation activities along with involving the community. Whether it's environmental conservation, support for reforestation and clean energy projects, or raising awareness on climate change, we always aim at enhancing interaction between people and the natural world. They accepted with the belief that the objective of development is not only inclusion and economic growth, but also sustainability of the planet for future generations.

                </p>
              </div> 
              <div className="what_we_do_title">
                <h1>Environment Conservation</h1>
              </div>
              <div className="what_we_do_img">
                <img src={project_5} alt="" />
              </div> 
          </div>
          <div className='what_we_do_grid'>            
              <div className="what_we_do_img">
                <img src={project_6} alt="" />
              </div>
              <div className="what_we_do_title">
                <h1>Partnership of Education with Environment & Economy </h1>
              </div>
              <div className="what_we_do_cont">
                <p> At HIRAYA, we understand that education is an excellent way through which the environment and the economy can be linked. Our goal is the main focus of environmental sensitivity and economics for our educational courses where we explain how to strike a balance between the two worlds. Our strategy on learning helps foster the spirit of leadership in the students with a view to fostering change in the society to embrace environmental conservation whilst at the same time embracing economic growth. 

                </p>
              </div>          
          </div>
          <div className='what_we_do_grid'> 
              <div className="what_we_do_cont">
                <p> Therefore, we aim to support the communities across Nepal by the cooperation of the company. For any educational program, economics, and/or environmental enhancement programme, our goal is to connect people for development and prosperity. That is why we invest in the creation of strong, flexible networks that, as a result, enable people to help each other build sustainable lives. This empowers the people we serve in our targeted community by being at the center of development hence promoting unity, cooperation and growth.

                </p>
              </div> 
              <div className="what_we_do_title">
                <h1>Connect Communities</h1>
              </div>
              <div className="what_we_do_img">
                <img src={project_7} alt="" />
              </div> 
          </div>
        </div>
        <div className='mobile_idea_grid'>
          <div className='what_we_do_grid'>            
              <div className="what_we_do_img">
                <img src={project_2} alt="" />
              </div>
              <div className="what_we_do_title">
                <h1>Education Distribution</h1>
              </div>
              
              <div className="what_we_do_cont">
                <p> As for HIRAYA, liberty remains to be a product of education coming from the principle that every individual has the right to learn. It is our purpose and mission to ensure that educational materials get to the needy schools particularly in the rural areas. Our programs’ core direction is ensured through such competencies as life skills, critical thinking, leadership, and digital literacy that will enable students to succeed in the fast-paced world. By the efforts of our company, we try to close the gap in education and open the path to success for each learner irrespective of his or her financial status

                </p>
                </div>          
          </div>
          <div className='what_we_do_grid'> 
              <div className="what_we_do_img">
                <img src={project_3} alt="" />
              </div> 
              <div className="what_we_do_title">
                <h1>Economic Development</h1>
              </div>
              <div className="what_we_do_cont">
              <p> The strategy of development of our economy is focused on providing productive engagement through employment for the less fortunate groups of the society especially women in the rural areas. The areas of training offered are mainly entrepreneurship, financial management, and market linkages thus enhancing individuals’ ability to earn an income and support themselves. Our strategy links both economic development and the necessary responsibility for the environmental impact for successful development that raises the standard of living for individuals while not overexploiting resources in the community. 

              </p>
              </div> 
              
              
          </div>
          <div className='what_we_do_grid'>            
              <div className="what_we_do_img">
                <img src={project_4} alt="" />
              </div>
              <div className="what_we_do_title">
                <h1>Research</h1>
              </div>
              <div className="what_we_do_cont">
              <p>Research is the core of what we work for in HIRAYA. We also carry out further research on education, economic and the environment sector in order to determine key issues affecting different communities in Nepal. Our research guides our programs and enables us to create unique, effective programs that are at the heart of global problems such as climate change, poverty, and education. Proactively updating ourselves we also make sure that each venture we undertake remains useful in the society. 

            </p>
            </div>          
          </div>
          <div className='what_we_do_grid'> 
              <div className="what_we_do_img">
                <img src={project_5} alt="" />
              </div> 
              <div className="what_we_do_title">
                <h1>Environment Conservation</h1>
              </div>    
              <div className="what_we_do_cont">
              <p> Environmental conservation is among the cardinal principles that are implemented by the organization. It will be our policy to save the Natural wealth of Nepal through conservation activities along with involving the community. Whether it's environmental conservation, support for reforestation and clean energy projects, or raising awareness on climate change, we always aim at enhancing interaction between people and the natural world. They accepted with the belief that the objective of development is not only inclusion and economic growth, but also sustainability of the planet for future generations.
              </p>
              </div> 
              
              
          </div>
          <div className='what_we_do_grid'>            
              <div className="what_we_do_img">
                <img src={project_6} alt="" />
              </div>
              <div className="what_we_do_title">
                <h1>Partnership of Education with Environment & Economy </h1>
              </div>
              <div className="what_we_do_cont">
              <p> At HIRAYA, we understand that education is an excellent way through which the environment and the economy can be linked. Our goal is the main focus of environmental sensitivity and economics for our educational courses where we explain how to strike a balance between the two worlds. Our strategy on learning helps foster the spirit of leadership in the students with a view to fostering change in the society to embrace environmental conservation whilst at the same time embracing economic growth. 

            </p></div>          
          </div>
          <div className='what_we_do_grid'>
              <div className="what_we_do_img">
                    <img src={project_7} alt="" />
                  </div> 
              <div className="what_we_do_title">
                <h1>Connect Communities</h1>
              </div>
              
              <div className="what_we_do_cont">
              <p> Therefore, we aim to support the communities across Nepal by the cooperation of the company. For any educational program, economics, and/or environmental enhancement programme, our goal is to connect people for development and prosperity. That is why we invest in the creation of strong, flexible networks that, as a result, enable people to help each other build sustainable lives. This empowers the people we serve in our targeted community by being at the center of development hence promoting unity, cooperation and growth.

              </p></div> 
               
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default WhatWeDo