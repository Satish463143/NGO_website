import React from 'react'
import './Vision.css'

const Vision = () => {
  return (
    <div className="vision">
        <div className='container'>
            <div className="mission_title" >
                <h1 id='environment'>Our Vision</h1>  
                <div style={{width:'100px', height:'5px', background:'var(--pri_color)',margin:'20px auto 20px auto',}}></div>
            </div>
            <div className="vision_title">
                <span>"A sustainable future where empowered communities thrive in harmony with nature."</span>
            </div>
            <div className="vidion_content">
                <h3>Detailed Description:</h3>
                <p>
                    This vision encapsulates a long-term goal where both people and the environment coexist in a balanced, sustainable relationship. The core elements of this vision include:
                </p>
                <ol>
                    <li>
                        <span>Empowered Communities: </span>
                        <p>The vision highlights the importance of empowering communities, particularly those in rural and underserved areas. Empowerment comes through access to education, skills development, and economic opportunities, allowing individuals—especially women—to take control of their lives and contribute meaningfully to the development of their families, villages, and society at large.</p>
                    </li>
                    <li>
                        <span>Focus on Women’s Economic Empowerment:</span>
                        <p>A key component of this vision is enhancing the economic roles of women in rural communities. Empowered women become agents of change, improving not only their own pves but also driving economic growth and sustainability within their communities. The vision sees women as the cornerstone for developing self-sustaining, resilient economies.</p>
                    </li>
                    <li>
                        <span>Sustainable Development:</span>
                        <p>The vision promotes sustainable development, where economic growth does not come at the cost of environmental degradation. It envisions communities that adopt sustainable practices, respecting natural resources while benefiting from them. The balance between economic progress and environmental protection is at the heart of this future.                        </p>
                    </li>
                    <li>
                        <span>Harmony with Nature:</span>
                        <p>Achieving harmony with nature involves fostering a deep respect and understanding of the environment, where communities work to protect biodiversity, reduce pollution, and mitigate climate change. The vision aspires to create eco-friendly societies that live sustainably within the means of the planet, ensuring the health of ecosystems for future generations.</p>
                    </li>
                    <li>
                        <span>Climate Resilience:</span>
                        <p>A future of climate resilience is integral to the vision. As the planet faces climate change, the goal is to create communities that are equipped to handle environmental challenges through adaptive and resilient strategies. This includes preparing communities for the effects of climate change and actively working to reduce their carbon footprint</p>
                    </li>
                    <li>
                        <span>Education for Awareness and Action:</span>
                        <p>The vision recognizes that education is the foundation for creating lasting change. It aims for an educated populace that is aware of the interconnectedness between human well-being and the health of the environment. Education not only raises awareness but also equips individuals with the tools to take action, innovate, and drive sustainable practices in their communities.</p>
                    </li>
                </ol>

            </div>

        </div>
    </div>
  )
}

export default Vision