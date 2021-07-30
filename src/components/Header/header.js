import React from 'react';
import Location from '../../images/location-map.png';
import Airbnb from '../../images/airbnb.jpg';
import Bridgestone from '../../images/Bridgestone.png';
import Duolingo from '../../images/duolingo.png';
import Usc from '../../images/usc-single.png';
import Shopify from '../../images/shopify.png';
import Cavaliers from '../../images/cavaliers.jpg';
import './header.css';


function Header() {
    return (
        <header>
            <div className='header'>
                <p className='top-three'>Hire the <u>Top 3%</u> of<br></br>Freelance Talent<sup>&reg;</sup></p> 
                <p className='top-three-text'>Toptal is an exclusive network of the top freelance<br></br>
                        software developers, designers, finance experts, product<br></br>
                        managers, and project managers in the world. Top<br></br>
                        companies hire Toptal freelancers for their most important<br></br>
                        projects.
                    </p>
                <button className='talent-button'>Hire Top Talent</button>
                <div className='location-div'>
                    <img src={Location} className='location' />
                </div>
                </div>
           <div className='header-next'>
               <p className='brand-startup'>TRUSTED BY LEADING<br></br>BRANDS AND STARTUPS</p>
               <ul className='brand-logo'>
                   <li className='logo'><img src={Airbnb} className='airbnb' /></li>
                   <li className='logo'><img src={Bridgestone} className='bridgestone' /></li>
                   <li className='logo'><img src={Duolingo} className='duolingo' /></li>
                   <li className='logo'><img src={Usc} className='usc' /></li>
                   <li className='logo'><img src={Shopify} className='shopify' /></li>
                   <li className='logo'><img src={Cavaliers} className='cavaliers' /></li>
                </ul>    
            </div>   
        </header>
        );
    }

export default Header;
            