import React from 'react';
import Frontend from '../../images/engineering-frontend.png';
import Fimage from '../../images/frederick_mittel.jpg';
import Insights from '../../images/toptal-insights.png';
import Iimage from '../../images/insights-taso-du-val.jpg';
import Backend from '../../images/engineering-backend.png';
import Bimage from '../../images/backend-vimal-paliwal.jpg';
import Design from '../../images/motorola.jpg';
import Dimage from '../../images/ruth-madrigal-01.jpg';
import Technology from '../../images/engineering-technology.png';
import Timage from '../../images/technology-michael-mcdonald.png';
import './publications.css';


function Publications() {
    return(
        <div className='publications'>
            <h1 id='publications'>Explore Trending Toptal Publications</h1>
            <div className='publications-grid'>
                <div className='publications-item'>
                    <img src={Frontend} id='pub-image' alt='frontend developer' />
                    <img src={Fimage} className='tiny-image' alt='frontend developer' />
                    <p className='pub-category'>Engineering &#62; Web Front-end</p>
                    <p id='pub-theme'>The Best React State Management Tools<br />for Enterprise Applications</p>
                    <p className='pub-author'>by <strong>Teimur Gasanov</strong></p>
                    <p className='pub-text'>State management in React has been a hotly debated topic for years,
                    yet little attention seems to be paid to enterprise-level applications and their specific requirements.
                    Let's take a closer look and compare three of the most popular state management tools available today.</p>
                    <p id='pub-time'>9 MINUTE READ</p>
                    <p id='read-more'>CONTINUE READING<span id='more-arrw'>&nbsp; &#8594;</span></p>
                </div>
                <div className='publications-item'>
                    <img src={Insights} className='pub-image' alt='insights' />
                    <img src={Iimage} className='tiny-image' alt='insights' />
                    <p className='pub-category'>Toptal Insights &#62; Future of Work</p>
                    <p className='pub-theme'>Remote, not re-moat</p><div id='empty'></div>
                    <p className='pub-author'>by <strong>TASO DU VAL</strong></p>
                </div>
                <div className='publications-item'>
                    <img src={Backend} className='pub-image' alt='backend developer' />
                    <img src={Bimage} className='tiny-image' alt='backend developer' />
                    <p className='pub-category'>Engineering &#62; Back-end</p>
                    <p className='pub-theme'>SSH Logging and Session<br />Management<br />
                    Using AWS SSM</p>
                    <p className='pub-author'>by <strong>VIMAL PALIWAL</strong></p>
                </div>
                <div className='publications-item'>
                    <img src={Design} className='pub-image' alt='designer' />
                    <img src={Dimage} className='tiny-image' alt='designer' />
                    <p className='pub-category'>Design &#62; Design Process</p>
                    <p className='pub-theme'>Building and Scaling a<br />Design System in Figma:<br />
                    A Case Study</p>
                    <p className='pub-author'>by <strong>ABIGAIL BESHKIN</strong></p>
                </div>
                <div className='publications-item'>
                    <img src={Technology} className='pub-image' alt='technology' />
                    <img src={Timage} className='tiny-image' alt='developer' />
                    <p className='pub-category'>Engineering &#62; Technology</p>
                    <p className='pub-theme'>University of Minnesota:<br />
                    Questions About Open<br />Source</p>
                    <p className='pub-author'>by <strong>MICHAEL J. MCDONALD</strong></p>
                </div>
            </div>
            <div id='style-button'>
            <button id='read-button'>Read More Thought Leadership</button>
            </div>
        </div>
    );
}

export default Publications;
