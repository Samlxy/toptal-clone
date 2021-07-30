import React from 'react';
import './footer.css';


function Footer() {
    return(
        <div className='footer'>
              <ul className='footer-header'>
                  <li className='header-item'>Most In-Demand Talent</li>
                  <li className='header-item'>About</li>
                  <li className='header-item'>Contact</li>
                  <li className='header-item'>Social</li>
                </ul>
                
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
                </div>
            </div>
            <hr id='division-line' />
        </div>
    );
}

export default Footer;