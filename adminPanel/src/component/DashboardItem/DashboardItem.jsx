import React, { useEffect, useState } from 'react';
import './DashboardItem.css'
import { Link } from 'react-router-dom'
import axios from 'axios';
const DashboardItem = () => {
    const [counts, setCounts] = useState({
        users: 0,
        projects: 0,
        properties: 0,
        partners: 0,
        blogs: 0,
        Contact: 0,
        inquiry: 0,
    });

    return (
        <div className='banner_box'>
            <div className='back_link'>
                <h4> &gt;&gt; </h4>
                <Link to='/dashboard'><h4>Dashboard </h4></Link>
            </div>
            <hr />
            <div className='Dashboard_title'>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
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
                <Link to='/project'>
                    <div className="dashboard_box" style={{ background: '#D1E6D0' }}>
                        <span>
                            <svg class="feather feather-users" fill="none" height="44" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="44" xmlns="http://www.w3.org/2000/svg"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                        </span>
                        <h4>
                            -----
                        </h4>
                        <h1>
                            Initiatives
                        </h1>
                    </div>
                </Link>
                <Link to='/partnerList'>
                    <div className="dashboard_box" style={{ background: '#F1BEA0' }}>
                        <span>
                            <svg viewBox="0 0 256 256" height="44" width="44" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="128" cy="120" fill="none" r="40" stroke="#000" stroke-miterlimit="10" stroke-width="16" />
                                <path d="M63.8,199.4a72,72,0,0,1,128.4,0" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" />
                                <circle cx="200" cy="56" fill="none" r="16" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" />
                                <line fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" x1="200" x2="200" y1="40" y2="28" />
                                <line fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" x1="186.1" x2="175.8" y1="48" y2="42" />
                                <line fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" x1="186.1" x2="175.8" y1="64" y2="70" />
                                <line fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" x1="200" x2="200" y1="72" y2="84" />
                                <line fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" x1="213.9" x2="224.2" y1="64" y2="70" />
                                <line fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" x1="213.9" x2="224.2" y1="48" y2="42" />
                                <path d="M223.3,116.5A87.7,87.7,0,0,1,224,128a96,96,0,1,1-96-96,87,87,0,0,1,8.9.4" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" />
                            </svg>
                        </span>
                        <h4>
                            -----
                        </h4>
                        <h1>
                            Partners
                        </h1>
                    </div>
                </Link>
                <Link to="/inquery">
                    <div className="dashboard_box" style={{ background: '#93C8E6' }}>
                        <span>
                            <svg enable-background="new 0 0 48 48" height="44px" id="Layer_1" version="1.1" viewBox="0 0 48 48" width="44px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Layer_3"><g><path d="M23.262,30.516c-0.899,0-1.585,0.225-2.056,0.674c-0.471,0.451-0.707,1.115-0.707,1.994    c0,0.848,0.241,1.504,0.723,1.971c0.482,0.466,1.161,0.697,2.04,0.697c0.858,0,1.528-0.237,2.009-0.713    c0.481-0.478,0.723-1.129,0.723-1.955c0-0.857-0.238-1.518-0.715-1.979C24.803,30.745,24.131,30.516,23.262,30.516z" fill="#241F20" /><path d="M29.329,13.703c-1.271-1.036-2.985-1.554-5.141-1.554c-2.616,0-5.092,0.654-7.425,1.962l1.711,3.438    c2.009-1.025,3.799-1.539,5.368-1.539c0.9,0,1.602,0.178,2.104,0.534c0.503,0.355,0.754,0.874,0.754,1.554    c0,0.607-0.176,1.156-0.525,1.648c-0.351,0.492-1.074,1.13-2.174,1.915c-1.141,0.837-1.926,1.627-2.354,2.37    c-0.43,0.742-0.644,1.617-0.644,2.621v1.162h4.159v-0.941c0-0.628,0.134-1.137,0.399-1.523c0.268-0.387,0.902-0.952,1.907-1.695    c1.466-1.046,2.459-1.988,2.982-2.826c0.522-0.838,0.784-1.832,0.784-2.982C31.236,16.12,30.602,14.738,29.329,13.703z" fill="#241F20" /><path d="M24,0C10.745,0,0,10.745,0,24s10.745,24,24,24s24-10.745,24-24S37.255,0,24,0z M24,44    C12.954,44,4,35.046,4,24C4,12.955,12.954,4,24,4s20,8.955,20,20C44,35.046,35.046,44,24,44z" fill="#241F20" /></g></g></svg>
                        </span>
                        <h4>
                            -----
                        </h4>
                        <h1>
                            Inquries
                        </h1>
                    </div>
                </Link>
                <Link to="/gallery">
                    <div className="dashboard_box" style={{ background: '#F1BEA0' }}>
                        <span>
                            <svg version="1.1" viewBox="0 0 96 96" height="40" width="40" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M59.5 20h-23c-6.056 0-10.624 4.296-10.624 10s4.568 10 10.624 10h23c8.5 0 16.5 10.52 16.5 18.672v1.656c0 8.204-7.864 15.672-16.5 15.672h-23c-8.48 0-16.5-7.82-16.5-16.092v-49.72c0-5.904-4.204-10.188-10-10.188s-10 4.284-10 10.188v49.812c0 0.228 0.060 0.436 0.128 0.64-0.072 0.204-0.128 0.416-0.128 0.64 0 19.792 15.692 34.72 36.5 34.72h23c21.152 0 36.5-14.132 36.5-33.608v-3.172c0-20.892-17.056-39.22-36.5-39.22z" fill="#000000" /></svg></span>
                        <h4>
                            -----
                        </h4>
                        <h1>
                            Gallery
                        </h1>
                    </div>
                </Link>
                <a href="https://www.youtube.com/@Hirayasamajnepal">
                    <div className="dashboard_box" style={{ background: '#93C8E6' }}>
                        <span>
                            <svg class="feather feather-youtube" fill="none" height="40" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg>
                        </span>
                        <h4>
                            -----
                        </h4>
                        <h1>
                            YouTube
                        </h1>
                    </div>
                </a>
                <a href='https://hirayasamaj.org/'>
                    <div className="dashboard_box" style={{ background: '#D1E6D0' }}>
                        <span>
                            <svg height="40" version="1.1" viewBox="0 0 20 20" width="40" xmlns="http://www.w3.org/2000/svg" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" xmlns:xlink="http://www.w3.org/1999/xlink"><title /><desc /><defs /><g fill="none" fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="1"><g fill="#000000" id="Core" transform="translate(-296.000000, -296.000000)"><g id="language" transform="translate(296.000000, 296.000000)"><path d="M10,0 C4.5,0 0,4.5 0,10 C0,15.5 4.5,20 10,20 C15.5,20 20,15.5 20,10 C20,4.5 15.5,0 10,0 L10,0 Z M16.9,6 L14,6 C13.7,4.7 13.2,3.6 12.6,2.4 C14.4,3.1 16,4.3 16.9,6 L16.9,6 Z M10,2 C10.8,3.2 11.5,4.5 11.9,6 L8.1,6 C8.5,4.6 9.2,3.2 10,2 L10,2 Z M2.3,12 C2.1,11.4 2,10.7 2,10 C2,9.3 2.1,8.6 2.3,8 L5.7,8 C5.6,8.7 5.6,9.3 5.6,10 C5.6,10.7 5.7,11.3 5.7,12 L2.3,12 L2.3,12 Z M3.1,14 L6,14 C6.3,15.3 6.8,16.4 7.4,17.6 C5.6,16.9 4,15.7 3.1,14 L3.1,14 Z M6,6 L3.1,6 C4.1,4.3 5.6,3.1 7.4,2.4 C6.8,3.6 6.3,4.7 6,6 L6,6 Z M10,18 C9.2,16.8 8.5,15.5 8.1,14 L11.9,14 C11.5,15.4 10.8,16.8 10,18 L10,18 Z M12.3,12 L7.7,12 C7.6,11.3 7.5,10.7 7.5,10 C7.5,9.3 7.6,8.7 7.7,8 L12.4,8 C12.5,8.7 12.6,9.3 12.6,10 C12.6,10.7 12.4,11.3 12.3,12 L12.3,12 Z M12.6,17.6 C13.2,16.5 13.7,15.3 14,14 L16.9,14 C16,15.7 14.4,16.9 12.6,17.6 L12.6,17.6 Z M14.4,12 C14.5,11.3 14.5,10.7 14.5,10 C14.5,9.3 14.4,8.7 14.4,8 L17.8,8 C18,8.6 18.1,9.3 18.1,10 C18.1,10.7 18,11.4 17.8,12 L14.4,12 L14.4,12 Z" id="Shape" /></g></g></g></svg>
                        </span>
                        <h4>
                            -----
                        </h4>
                        <h1>
                            Web
                        </h1>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default DashboardItem