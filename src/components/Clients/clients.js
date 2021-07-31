import React from 'react';
import Zac from '../../images/zac-carman.jpg';
import Ryan from '../../images/ryan-walker.jpg';
import Conor from '../../images/conor-kenney.jpg';
import './clients.css';


function Clients() {
    return(
        <div className='clients'>
            <h1 id='clients'>Hear From Our Clients</h1>
            <p className='clients-sub'>Our customers say <strong>Excellent &nbsp;&nbsp;</strong>
                <span className='stars'>&#9733;</span>&nbsp;
                <span className='stars'>&#9733;</span>&nbsp;
                <span className='stars'>&#9733;</span>&nbsp;
                <span className='stars'>&#9733;</span>&nbsp;
                <span id='star'>&#9733;</span>&nbsp;&nbsp;
                <strong>&nbsp;&nbsp;4.3 </strong>out of 5 based on <strong>1,235 reviews &nbsp;&nbsp;</strong>
                <strong><span id='clients-star'>&#9733;</span>Trustpilot</strong>
            </p>
            <div className='clients-grid'>
                <div className='clients-item'>
                    <p className='clients-quote'>&#8220;</p>
                    <p>With Toptal, we are able to find talented developers in a matter of weeks instead of months.
                        The quality of talent they supply is extremely high as the developers are able to immediately 
                        onboard and ramp incredibly fast.
                    </p>
                    <img src={Zac} className='clients-image' alt='client' />
                    <div className='clients-detail'>
                        <p className='clients-name' id='name-zac'>Zac Carman, CEO</p>
                        <p className='clients-comp'>ConsumerAffairs</p>
                    </div>
                </div>
                <div className='clients-item'>
                    <p className='clients-quote'>&#8220;</p>
                    <p>We've been very pleased with our experience working with Toptal.
                        Their team was incredibly helpful in helping us find the perfect developer for our project. 
                        We're excited to work with Toptal for more projects in the future!
                    </p>
                    <img src={Ryan} className='clients-image' alt='client' />
                    <div className='clients-detail'>
                        <p className='clients-name'>Ryan Walker, Director of Product</p>
                        <p className='clients-comp'>Rand McNally</p>
                    </div>
                </div>
                <div className='clients-item'>
                    <p className='clients-quote'>&#8220;</p>
                    <p>With the pressure on and millions watching the Cleveland Cavaliers during the NBA Playoffs,
                        Toptal delivered the talent and expertise needed to launch a brand new fan engagement platform with
                        a high quality of supply.
                    </p>
                    <img src={Conor} className='clients-image' alt='client'  />
                    <div className='clients-detail'>
                        <p className='clients-name' id='name-conor'>Conor Kenney, Director of Professional Services</p>
                        <p className='clients-comp'>Cleveland Cavaliers</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Clients;
