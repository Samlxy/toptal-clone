import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import Toptal from '../../images/toptal-logo.png';
import './navbar.css';


function Navbar() {
    const [navbar, setNavbar] = useState(false);
    const changeBackground = () => {
        if (window.scrollY >= 10) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    window.addEventListener('scroll', changeBackground);

    return (
        <div className={navbar ? 'navbar active' : 'navbar'}>
            <Menu></Menu>
            <img src={Toptal} className='toptal-logo' alt='toptal'/>
            <ul className='left-nav'>
                <li className='nav-items'>Top 3%</li>
                <li className='nav-items'>Why</li>
                <li className='nav-items'>Clients</li>
                <li className='nav-items'>  
                
                <div className="dropdown">
                <button className="dropbtn">Dropdown<i className='arrow down'></i></button>
                <div className="dropdown-content">
                    <a href='https://www.liveindustries.com'>Industries</a>
                    <a href='https://www.healthcaresciences.com'>Healthcare and Life Sciences</a>
                    <a href='https://www.consumerproducts.com'>Consumer Products and Services</a>
                    <a href='https://www.financeservices.com'>Financial Services</a>
                    <a href='https://www.industrials.com'>Industrials</a>
                    <a href='https://www.communicationmedia.com'>Communication, Media and Entertainment</a>
                    <a href='https://www.technology.com'>Technology</a>
                </div>
                </div>
                </li>
                
                <li className='nav-items'>Community</li>
                <li className='nav-items'>Blog</li>
                <li className='nav-items'>About Us</li>
            </ul>

            <ul className='right-nav'>
                <li className='nav-item'>Apply as a Freelancer</li>
                <li className='nav-item'><button className='hire-talent'>Hire Top Talent</button></li>
                <li className='nav-item'>Log In</li>
            </ul>
        </div>         
    );
}

export default Navbar;
