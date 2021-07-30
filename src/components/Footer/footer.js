import React from 'react';
import Toptal from '../../images/toptal-logo.png';
import './footer.css';


function Footer() {
    return(
        <div className='footer'>
              <div className='header-grid'>
                  <div className='header-item'>Most In-Demand Talent</div>
                  <div className='header-item'>About</div>
                  <div className='header-item'>Contact</div>
                  <div className='header-item'>Social</div>
                </div>
            <div className='footer-grid'>
                <div className='footer-item'>
                    <p>iOS Developers</p>
                    <p>Front-End Developers</p>
                    <p>UX Designers</p>
                    <p>UI Designers</p>
                    <p>Financial Modelling Consultants</p>
                    <p>Interim CFOs</p>
                    <p>Digital Project Managers</p>
                    <p>AWS Experts</p>
                </div>
                <div className='footer-item'>
                    <p>Top 3%</p>
                    <p>Clients</p>
                    <p>Freelance Developers</p>
                    <p>Freelance Designers</p>
                    <p>Freelance Finance Experts</p>
                    <p>Freelance Project Managers</p>
                    <p>Freelance Product Managers</p>
                    <p>Freelance Jobs</p>
                    <p>Specialized Services</p>
                    <p>About Us</p>
                </div>
                <div className='footer-item'>
                    <p>Contact Us</p>
                    <p>Press Center</p>
                    <p>Careers</p>
                    <p>FAQ</p>
                </div>
                <div className='footer-item'>
                    <a href="#" class="fa fa-linkedin"></a>
                    <a href="#" class="fa fa-twitter"></a>
                    <a href="#" class="fa fa-facebook"></a>
                    <a href="#" class="fa fa-instagram"></a>
                </div>
                <div className='footer-item'>
                </div>
            </div>
            <hr id='footer-line' />
            <img src={Toptal} alt='toptal' className='toptal-logo' id='toptal-logo' />
            <div className='line'></div>
            <p className='world-top'>The World's Top Talent, On Demand<sup id='footer-sup'>&reg;</sup></p>
            <p className='copyright'>Copyright 2010 - 2021 Toptal, LLC</p>
            <div className='line' id='line-two'></div> 
            <p className='privacy'>Privacy Policy &nbsp;&nbsp; Website Terms &nbsp;&nbsp; Accessibility</p>
            
        </div>
    );
}

export default Footer;
