import React from 'react';
import Play from '../../images/play-button.svg';
import './organizations.css';


function Organizations() {
    return(
        <div className='double-grid'>
            {/* First - Organizations grid */}
            <div className='organizations-grid'>
                <div id='org-item01' className='organizations-item'>
                    <h1 id='organizations'>Why Organizations<br />Choose Toptal</h1>
                    <p className='organizations-text'>
                        Discover the many ways in which our clients have embraced the benefits of the Toptal network.
                    </p>
                </div>
                <div id='org-item02' className='organizations-item'>
                    <p className='org-name'>BRIDGESTONE</p>
                    <p className='org-description'>Building a cross-platform app to be used worldwide</p>
                    <ul className='play-contain'>
                        <li className='play-item'><img src={Play} className='play-icon'  alt='play video' /></li>
                        <li className='play-item'><p className='org-video'>Watch the video</p></li>
                    </ul>
                </div>
                <div id='org-item03' className='organizations-item'>
                    <p className='org-name'>CAVALIERS</p>
                    <p className='org-description'>Creating world class applications for the game</p>
                    <ul className='play-contain'>
                        <li className='play-item'><img src={Play} className='play-icon'  alt='play video' /></li>
                        <li className='play-item'><p className='org-video'>Watch the video</p></li>
                    </ul>
                </div>
                <div id='org-item04' className='organizations-item'>
                    <p className='org-name'>CSR</p>
                    <p className='org-description'>Leading a digital transformation accross the world</p>
                    <ul className='play-contain'>
                        <li className='play-item'><img src={Play} className='play-icon'  alt='play video' /></li>
                        <li className='play-item'><p className='org-video'>Watch the video</p></li>
                    </ul>
                </div>
                <div id='org-item05' className='organizations-item'>
                    <p className='org-name'>USC-UNIVERSITY</p>
                    <p className='org-description'>Developing a virtual assistant to improve mental wellness</p>
                    <ul className='play-contain'>
                        <li className='play-item'><img src={Play} className='play-icon'  alt='play video' /></li>
                        <li className='play-item'><p className='org-video'>Watch the video</p></li>
                    </ul>
                </div>
                <div id='org-item06' className='organizations-item'>
                    <p className='org-name'>ADCRUSH</p>
                    <p className='org-description'>Scaling revenue with marketing automation</p>
                    <ul className='play-contain'>
                        <li className='play-item'><img src={Play} className='play-icon' alt='play video' /></li>
                        <li className='play-item'><p className='org-video'>Watch the video</p></li>
                    </ul>
                </div>
            </div>
            {/* Second - Collaborations grid */}
            <div className='collaborations-grid'>
                <div id='collab-item01' className='organizations-item'>
                    <h1 id='organizations'>Collaborations<br />With Leading<br /> Brands</h1>
                    <p className='organizations-text'>
                    We collaborate with a number of top tier companies on imagining the future of work, have a look.
                    </p>
                </div>
                <div id='collab-item02' className='organizations-item'>
                    <p className='org-name'>Motorola</p>
                    <p className='org-description'>The Opportunity Loop: How to Attract and Retain Top Talent</p>
                    <ul className='play-contain'>
                        <li className='play-item'><p className='read-more'>Read more</p></li>
                        <li className='play-item'><hr className='read-arrow' /><span className='greater-arrow'>&#62;</span></li>
                    </ul>
                </div>
                <div id='collab-item03' className='organizations-item'>
                    <p className='org-name'>Salesforce</p>
                    <p className='org-description'>Industry Perspective: Salesforce On Team Alignment And Agile Talent</p>
                    <ul className='play-contain'>
                        <li className='play-item'><p className='read-more'>Read more</p></li>
                        <li className='play-item'><hr className='read-arrow' /><span className='greater-arrow'>&#62;</span></li>
                    </ul>
                </div>
                <div id='collab-item04' className='organizations-item'>
                    <p className='org-name'>Microsoft</p>
                    <p className='org-description'>Call to Action: The On-Demand World Class Business Model</p>
                    <ul className='play-contain'>
                        <li className='play-item'><p className='read-more'>Read more</p></li>
                        <li className='play-item'><hr className='read-arrow' /><span className='greater-arrow'>&#62;</span></li>
                    </ul>
                </div>
            </div>
            {/* Third - center text and button */}
            <div className='mid-div'>
                <div className='get-started'>Ready To Get Started?</div>
                <button className='talent-btn'>Hire Top Talent</button>
            </div>
            {/* Fourth - CNBC image div &#8594; */}
            <div className='cnbc-div'>
                <ul className='cnbc-texts'>
                   <li><p className='left-quote'>&#8220;</p></li>
                   <li><p className='cnbc-text'>We're known as a high-skilled marketplace, and we see an acute pain<br />point within that area.</p></li>
                    <li><p className='cnbc-name'>CNBC</p></li>
                    <li><div className='cnbc-align'>
                            <p className='play-item'><img src={Play} className='play-icon' alt='play video'/></p>
                            <p className='play-item'><p className='org-video'>Watch the video</p></p>
                        </div>
                    </li>

                </ul>
            </div>
        </div>
    );
}

export default Organizations;
