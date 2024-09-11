import React, {useEffect, useState} from 'react';
import './DashboardItem.css'
import { Link } from 'react-router-dom'
import axios from 'axios';
const DashboardItem = () => {
    const [counts, setCounts] = useState({
        users: 0,
        properties: 0,
        ourexpertise: 0,
        blogs: 0,
        Contact: 0,
        inquiry: 0,
      });
      useEffect(() => {
        const fetchCounts = async () => {
          try {
            const response = await axios.get('http://localhost:4000/api/count/all-counts');
            setCounts(response.data.data);
          } catch (error) {
            console.error('Error fetching counts:', error);
          }
        };
    
        fetchCounts();
      }, []);
  return (
    <div className='banner_box'>
        <div className='back_link'>
            <h4> &gt;&gt; </h4>
            <Link to='/dashboard'><h4>Dashboard </h4></Link>            
        </div>
        <hr />
        <div className='Dashboard_title'>
            <div style={{display:'flex', alignItems:'center',gap:'10px'}}>
                <span>
                    <svg 
                        height="32" 
                        id="icon"  
                        viewBox="0 0 32 32" 
                        width="32" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <defs>
                        <style>
                            {`
                            .cls-1 {
                                fill: none;
                            }
                            `}
                        </style>
                        </defs>
                        
                        <path d="M30,20a13.8535,13.8535,0,0,0-2.2291-7.5288l-1.4452,1.4453A11.8917,11.8917,0,0,1,28,20Z" />
                        <path d="M28,9.414,26.5859,8,18.019,16.5669A3.9521,3.9521,0,0,0,16,16a4,4,0,1,0,4,4,3.9533,3.9533,0,0,0-.5669-2.0191ZM16,22a2,2,0,1,1,2-2A2.0023,2.0023,0,0,1,16,22Z" />
                        <path d="M16,8a11.9086,11.9086,0,0,1,6.0833,1.6743l1.4536-1.4536A13.9773,13.9773,0,0,0,2,20H4A12.0137,12.0137,0,0,1,16,8Z" />
                        <rect className="cls-1" data-name="&lt;Transparent Rectangle&gt;" height="32" id="_Transparent_Rectangle_" width="32" />
                    </svg>
                </span>
                <h1>Dashboard</h1>
            </div>
        </div>
        <div className='Dashboard_grid'>
            <div className="dashboard_box"style={{background:'#D1E6D0'}}>
                <span>
                        <svg class="feather feather-users" fill="none" height="44" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="44" xmlns="http://www.w3.org/2000/svg"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                    </span>
                    <h4>
                        Total Users
                    </h4>
                    <h1>
                    {counts.users}
                    </h1>
                </div>
                <div className="dashboard_box"style={{background:'#F1BEA0'}}>
                    <span>
                        <svg id="Glyph" viewBox="0 0 64 64" height="44" width="44" xmlns="http://www.w3.org/2000/svg"><g data-name="Glyph" id="Glyph-2"><path d="M58,54H54l.09-27.86,1.01.7a3.936,3.936,0,1,0,4.47-6.48L33.71,2.53a3.047,3.047,0,0,0-3.42,0L4.43,20.36A3.936,3.936,0,1,0,8.9,26.84l1.01-.7L10,54H6a4,4,0,0,0,0,8H58a4,4,0,0,0,0-8Zm-6,0H12l-.09-29.24L31.42,11.25a1.024,1.024,0,0,1,1.16,0L52.09,24.76Z"/><circle cx="27" cy="31.79" r="4"/><circle cx="39" cy="43.79" r="4"/><path d="M42,31.79a2.973,2.973,0,0,1-.88,2.12L29.2,45.98a3.108,3.108,0,1,1-4.39-4.4L36.88,29.66a3.085,3.085,0,0,1,4.24,0A2.979,2.979,0,0,1,42,31.79Z"/></g></svg> </span>
                    <h4>
                        All Properties
                    </h4>
                    <h1>
                    {counts.property}
                    </h1>
                </div>
                <div className="dashboard_box" style={{background:'#93C8E6'}}>
                    <span>
                        <svg viewBox="0 0 32 32" height="44" width="44" xmlns="http://www.w3.org/2000/svg"><title/><g data-name="Layer 2" id="Layer_2"><path d="M7.94,27.59l7,3a2.79,2.79,0,0,0,2.22,0l6.92-3A3.64,3.64,0,0,0,26.41,24l-.75-13.51A3.67,3.67,0,0,0,22,7H17V4h1a1,1,0,0,0,0-2H14a1,1,0,0,0,0,2h1V7H10a3.67,3.67,0,0,0-3.66,3.46L5.59,24A3.62,3.62,0,0,0,7.94,27.59Zm.4-17A1.67,1.67,0,0,1,10,9H22a1.67,1.67,0,0,1,1.66,1.57l.75,13.51a1.67,1.67,0,0,1-1.09,1.66l-.06,0-7,3a.83.83,0,0,1-.62,0l-7-3a1.67,1.67,0,0,1-1.09-1.66Z"/><path d="M9.68,25l5.44,1.81a2.66,2.66,0,0,0,.88.14,2.62,2.62,0,0,0,.88-.14L22.32,25A1,1,0,0,0,23,24V11a1,1,0,0,0-1-1H10a1,1,0,0,0-1,1V24A1,1,0,0,0,9.68,25ZM11,12H21V23.28l-4.75,1.58a.72.72,0,0,1-.5,0L11,23.28Z"/><path d="M18,23a1,1,0,0,0-1-1H15a1,1,0,0,0,0,2h2A1,1,0,0,0,18,23Z"/></g></svg>
                    </span>

                    <h4>
                        Available Properties
                    </h4>
                    <h1>
                    {counts.property}
                    </h1>
                </div>
            <div className="dashboard_box" style={{background:'#93C8E6'}}>
                <span>
                    <img src="../src/assets/images/sold.png" alt="" width='44'/>
                    </span>
                <h4>
                    Sold Properties
                </h4>
                <h1>
                {counts.property}
                </h1>
            </div>
            <div className="dashboard_box"style={{background:'#D1E6D0'}}>
                <span>
                    <svg  version="1.1" viewBox="0 0 96 96"  height="40" width="40" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M59.5 20h-23c-6.056 0-10.624 4.296-10.624 10s4.568 10 10.624 10h23c8.5 0 16.5 10.52 16.5 18.672v1.656c0 8.204-7.864 15.672-16.5 15.672h-23c-8.48 0-16.5-7.82-16.5-16.092v-49.72c0-5.904-4.204-10.188-10-10.188s-10 4.284-10 10.188v49.812c0 0.228 0.060 0.436 0.128 0.64-0.072 0.204-0.128 0.416-0.128 0.64 0 19.792 15.692 34.72 36.5 34.72h23c21.152 0 36.5-14.132 36.5-33.608v-3.172c0-20.892-17.056-39.22-36.5-39.22z" fill="#000000"/></svg></span>
                <h4>
                   Blogs
                </h4>
                <h1>
                {counts.blogs}
                </h1>
            </div>
            <div className="dashboard_box"style={{background:'#F1BEA0'}}>
                <span>
                    <svg viewBox="0 0 256 256" height="44" width="44" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="128" cy="120" fill="none" r="40" stroke="#000" stroke-miterlimit="10" stroke-width="16"/>
                      <path d="M63.8,199.4a72,72,0,0,1,128.4,0" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
                      <circle cx="200" cy="56" fill="none" r="16" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
                      <line fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" x1="200" x2="200" y1="40" y2="28"/>
                      <line fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" x1="186.1" x2="175.8" y1="48" y2="42"/>
                      <line fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" x1="186.1" x2="175.8" y1="64" y2="70"/>
                      <line fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" x1="200" x2="200" y1="72" y2="84"/>
                      <line fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" x1="213.9" x2="224.2" y1="64" y2="70"/>
                      <line fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" x1="213.9" x2="224.2" y1="48" y2="42"/>
                      <path d="M223.3,116.5A87.7,87.7,0,0,1,224,128a96,96,0,1,1-96-96,87,87,0,0,1,8.9.4" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
                    </svg>
                  </span>
                <h4>
                    Our Experts
                </h4>
                <h1>
                    {counts.ourexpertise}
                </h1>
            </div>
            <div className="dashboard_box"style={{background:'#F1BEA0'}}>
                <span>
                    <svg enable-background="new 0 0 48 48" height="44px" id="Layer_1" version="1.1" viewBox="0 0 48 48" width="44px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Layer_3"><g><path d="M23.262,30.516c-0.899,0-1.585,0.225-2.056,0.674c-0.471,0.451-0.707,1.115-0.707,1.994    c0,0.848,0.241,1.504,0.723,1.971c0.482,0.466,1.161,0.697,2.04,0.697c0.858,0,1.528-0.237,2.009-0.713    c0.481-0.478,0.723-1.129,0.723-1.955c0-0.857-0.238-1.518-0.715-1.979C24.803,30.745,24.131,30.516,23.262,30.516z" fill="#241F20"/><path d="M29.329,13.703c-1.271-1.036-2.985-1.554-5.141-1.554c-2.616,0-5.092,0.654-7.425,1.962l1.711,3.438    c2.009-1.025,3.799-1.539,5.368-1.539c0.9,0,1.602,0.178,2.104,0.534c0.503,0.355,0.754,0.874,0.754,1.554    c0,0.607-0.176,1.156-0.525,1.648c-0.351,0.492-1.074,1.13-2.174,1.915c-1.141,0.837-1.926,1.627-2.354,2.37    c-0.43,0.742-0.644,1.617-0.644,2.621v1.162h4.159v-0.941c0-0.628,0.134-1.137,0.399-1.523c0.268-0.387,0.902-0.952,1.907-1.695    c1.466-1.046,2.459-1.988,2.982-2.826c0.522-0.838,0.784-1.832,0.784-2.982C31.236,16.12,30.602,14.738,29.329,13.703z" fill="#241F20"/><path d="M24,0C10.745,0,0,10.745,0,24s10.745,24,24,24s24-10.745,24-24S37.255,0,24,0z M24,44    C12.954,44,4,35.046,4,24C4,12.955,12.954,4,24,4s20,8.955,20,20C44,35.046,35.046,44,24,44z" fill="#241F20"/></g></g></svg>
                  </span>
                <h4>
                    New Inquries
                </h4>
                <h1>
                 {counts.inquiry}
                </h1>
            </div>
            <div className="dashboard_box"style={{background:'#93C8E6'}}>
                <span>
                    <svg viewBox="0 0 32 32"height="44px" width="44px" xmlns="http://www.w3.org/2000/svg"><title/><g data-name="phone celuler contact call" id="phone_celuler_contact_call"><path d="M27.36,6.15,25.09,3.88a3,3,0,0,0-4.54.35l-2.21,3a3,3,0,0,0-.44,2.66l.13.38c.27.89.62,2,.84,2.74a1,1,0,0,1-.05.7,12.44,12.44,0,0,1-2.08,3,1,1,0,0,0,0,1.42,1,1,0,0,0,1.41,0,14.14,14.14,0,0,0,2.46-3.51,2.92,2.92,0,0,0,.17-2.17c-.21-.72-.57-1.86-.85-2.75l-.12-.39A1,1,0,0,1,20,8.44l2.21-3a1,1,0,0,1,1.51-.12l.67.67-2,3.1a1,1,0,0,0,.84,1.54,1,1,0,0,0,.84-.45l1.77-2.74.16.15a2.59,2.59,0,0,1,.68,1.88c0,1.76-1.19,5-6.73,10.44-5.81,5.7-10.42,8-12.33,6.07L5.29,23.68A1,1,0,0,1,5,22.9a1,1,0,0,1,.41-.73l3-2.21a1,1,0,0,1,.88-.15l1.89.59L9.05,21.91a1,1,0,0,0-.24,1.4,1,1,0,0,0,.82.42,1,1,0,0,0,.57-.18L14,20.88a1,1,0,0,0,.25-1.4,1,1,0,0,0-.53-.36v0L9.92,17.9a3,3,0,0,0-2.66.44l-3,2.21a3,3,0,0,0-.35,4.54l2.27,2.28A4.31,4.31,0,0,0,9.3,28.63c2.52,0,6.32-1.75,12-7.32,4.84-4.75,7.31-8.74,7.33-11.86A4.46,4.46,0,0,0,27.36,6.15Z"/></g></svg></span>
                <h4>
                Contacts
                </h4>
                <h1>
                {counts.contact}
                </h1>
            </div>
        </div>
    </div>
  )
}

export default DashboardItem