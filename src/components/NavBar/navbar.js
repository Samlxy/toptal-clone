import React, { useState, useEffect } from "react";
import { slide as Menu } from "react-burger-menu";
import { HashLink as Link } from 'react-router-hash-link';
// import { animateScroll as scroll } from 'react-scroll';
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
            <Menu>
            </Menu>
            <img src={Toptal} alt='toptal' className='toptal-logo'/>
            <ul className='left-nav'>
                <li className='nav-items'><Link to='#top3' scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })} activeClassName='focus'>Top 3%</Link></li>
                <li className='nav-items'><Link to='#why' scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })} activeClassName='focus'>Why</Link></li>
                <li className='nav-items'><Link to='#clients' scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })} activeClassName='focus'>Clients</Link></li>
                <li className='nav-items'><Link to='#about' scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })} activeClassName='focus'>  
                
                <div className="dropdown">
                <button className="dropbtn">Dropdown<i className='arrow down'></i></button>
                <div className="dropdown-content">
                    <a href="#">Industries</a>
                    <a href="#">Healthcare and Life Sciences</a>
                    <a href="#">Consumer Products and Services</a>
                    <a href="#">Financial Services</a>
                    <a href="#">Industrials</a>
                    <a href="#">Communication, Media and Entertainment</a>
                    <a href="#">Technology</a>
                </div>
                </div>
                </Link></li>
                
                <li className='nav-items'><Link to='#community' scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })} activeClassName='focus'>Community</Link></li>
                <li className='nav-items'><Link to='#blog' scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })} activeClassName='focus'>Blog</Link></li>
                <li className='nav-items'><Link to='#about' scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })} activeClassName='focus'>About Us</Link></li>
            </ul>

            <ul className='right-nav'>
                <li className='nav-item'><Link to='#top3' scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })} activeClassName='focus'>Apply as a Freelancer</Link></li>
                <li className='nav-item'><Link to='#why' scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })} activeClassName='focus'><button className='hire-talent'>Hire Top Talent</button></Link></li>
                <li className='nav-item'><Link to='#clients' scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })} activeClassName='focus'>Log In</Link></li>
            </ul>
        </div>         
    );
}

export default Navbar;
