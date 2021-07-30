import React from 'react';
import Hire from '../../images/hire-quickly.svg';
import Three from '../../images/developers.svg';
import Future from '../../images/leading-the-future.svg';
import Level from '../../images/level-above.svg';
import Top from '../../images/vladimir-peric-05.jpg';
import Right from '../../images/teams-image-right.jpg';
import Down from '../../images/fabio-muniz.jpg';
import './teams.css';


function Teams() {
    return (
        <div className='teams'>
            <div className='teams-left'>
                <h1 id='teams'>Build Amazing Teams,<br></br>On Demand</h1>
                <p className='teams-text'>Quickly assemble the teams you need, exactly when you need them.<br></br>
                </p>
                <div className='teams-category'>
                    <div className='teams-grid'>
                        <div className='teams-item'>
                            <img src={Hire} className='teams-image' />
                            <div className='teams-name'>Hire Quickly</div>
                            <div className='teams-item-text'>Hire in under 48 hours. Scale up or down, no strings attached. We offer flexible engagements from hourly to full-time.</div>
                            </div>
                        <div className='teams-item'>
                            <img src={Three} className='teams-image' />
                            <div className='teams-name'>The Top 3%</div>
                            <div className='teams-item-text'>Every applicant to the Toptal network is rigorously tested and vetted. Our highly selective process leads to a 98% trial-to-hire success rate.</div>
                        </div>
                        <div className='teams-item'>
                            <img src={Future} className='teams-image' />
                            <div className='teams-name'>Leading the Future of Work</div>
                            <div className='teams-item-text'>Our network is ready for tomorrow's business challenges by embracing advanced and specialized skills including blockchain and AI.</div>
                        </div>
                        <div className='teams-item'>
                            <img src={Level} className='teams-image' />
                            <div className='teams-name'>A Level Above</div>
                            <div className='teams-item-text'>Every single freelancer in our global network embodies the highest levels of integrity, professionalism, and communication.</div>
                        </div>
                    </div>
                </div>
            </div>
            {/*Right image column */}
            <span className='teams-top'>
                <div className='teams-div'>
                    <div><img src={Top} className='images-right' />
                        <span id='span-name'>Vladimir Peric</span><br />
                        <span id='span-role'>JavaScript Developer</span>
                        <span id='span-prev'>Previously at</span><br />
                        <span id='span-company'>Google</span>
                    </div>
                </div>
            </span>
            <span className='teams-right'>
                <div className='teams-div'>
                    <div><img src={Right} className='images-right' />
                        <span id='span-name'>Emily Dubow</span><br />
                        <span id='span-role'>UI/UX Designer</span>
                        <span id='span-prev'>Previously at</span><br />
                        <span id='span-company'>Accenture</span>
                    </div>
                </div>
            </span>
            <span className='teams-down'>
                <div className='teams-div'>
                    <div><img src={Down} className='images-right' />
                        <span id='span-name'>Fabio Muniz</span><br />
                        <span id='span-role'>React Developer</span>
                        <span id='span-prev'>Previously at</span><br />
                        <span id='span-company'>Amazon</span>
                    </div>
                </div>
            </span>
        </div>
    );
}

export default Teams;
