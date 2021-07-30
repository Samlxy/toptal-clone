import React from 'react';
import './staff.css';


function Staff() {
    return(
        <div className='toptal-staff'>
            <h2 id='toptal-developers'>Toptal Developers</h2>
            <div className='developers-grid'>
                <div className='developers-item'>
                    <p>Android Developers</p>
                    <p>Angular Developers</p>
                    <p>AWS Developers</p>
                    <p>C# Developers</p>
                    <p>C++ Developers</p>
                    <p>Django Developers</p>
                </div>
                <div className='developers-item'>
                    <p>Go Engineers</p>
                    <p>iOS Developers</p>
                    <p>Java Developers</p>
                    <p>JavaScript Developers</p>
                    <p>.NET Developers</p>
                    <p>Node.js Developers</p>
                </div>
                <div className='developers-item'>
                    <p>PHP Developers</p>
                    <p>Python Developers</p>
                    <p>React.js Developers</p>
                    <p>React Native Developers</p>
                    <p>Ruby Developers</p>
                    <p>Ruby on Rails Developers</p>
                </div>
                <div className='developers-item'>
                    <p>Swift Developers</p>
                    <p>WordPress Developers</p>
                    <p id='view-developers'>View More Freelance Developers &nbsp;&#8594;</p>
                </div>
            </div>
            <hr id='division-line' />

            <h2 id='toptal-developers'>Toptal Designers</h2>
            <div className='designers-grid'>
                <div className='designers-item'>
                    <p>Brand Designers</p>
                    <p>Dashboard Designers</p>
                    <p>Data Visualization Designers</p>
                    <p>E-Commerce Website Designers</p>
                    <p>Game Designers</p>
                </div>
                <div className='designers-item'>
                    <p>Illustrators</p>
                    <p>Information Architecture Experts</p>
                    <p>Mobile App Designers</p>
                    <p>Presentation Designers</p>
                    <p>Product Designers</p>
                </div>
                <div className='designers-item'>
                    <p>Prototype Designers</p>
                    <p>UI Designers</p>
                    <p>UX Designers</p>
                    <p>Virtual Reality Designers</p>
                    <p>Visual Designers</p>
                </div>
                <div className='designers-item'>
                    <p>Web Application Designers</p>
                    <p>Web Designers</p>
                    <p>WordPress Designers</p>
                    <p id='view-developers'>View More Freelance Designers &nbsp;&#8594;</p>
                </div>
            </div>
            <hr id='division-line' />
            
            <h2 id='toptal-developers'>Toptal Finance Experts</h2>
            <div className='finance-grid'>
                <div className='finance-item'>
                    <p>Blockchain Consultants </p>
                    <p>Business Consultants</p>
                    <p>Equity Research Analysts</p>
                    <p>Financial Analysts</p>
                </div>
                <div className='finance-item'>
                    <p>Financial Modeling Consultants</p>
                    <p>FP&A Managers</p>
                    <p>Fundraising Consultants</p>
                    <p>Interim CEOs</p>
                </div>
                <div className='finance-item'>
                    <p>M&A Consultants</p>
                    <p>Market Research Analysts</p>
                    <p>Part-time CFOs</p>
                    <p>Profitability Analysis Experts</p>
                </div>
                <div className='finance-item'>
                    <p>Real Estate Experts</p>
                    <p>Valuation Specialists</p>
                    <p>Venture Capital Consultants</p>
                    <p id='view-developers'>View More Freelance Finance Experts &nbsp;&#8594;</p>
                </div>
            </div>
            <hr id='division-line' />

            <h2 id='toptal-developers'>Toptal Project Managers</h2>
            <div className='project-grid'>
                <div className='project-item'>
                    <p>Digital Project Managers </p>
                    <p>Freelance Project Managers</p>
                    <p>JIRA Administrators</p>
                </div>
                <div className='project-item'>
                    <p>PMO Specialists</p>
                    <p>Program Managers</p>
                    <p>SAP Delivery Managers</p>
                </div>
                <div className='project-item'>
                    <p>Scrum Project Managers</p>
                    <p>Scrum Masters</p>
                    <p>Technical Business Analysts</p>
                </div>
                <div className='project-item'>
                    <p>Transformation Delivery Managers</p>
                    <p>Web Project Managers</p>
                    <p id='view-developers'>View More Freelance Project Managers &nbsp;&#8594;</p>
                </div>
            </div>
            <hr id='division-line' />

            <h2 id='toptal-developers'>Toptal Product Managers</h2>
            <div className='product-grid'>
                <div className='product-item'>
                    <p>Agile Product Managers </p>
                    <p>Artificial Intelligence Product Managers</p>
                    <p>Blockchain Product Managers</p>
                    <p>Brand Managers</p>
                    <p>Business Analysts</p>
                </div>
                <div className='product-item'>
                    <p>Cloud Product Managers</p>
                    <p>Contract Product Managers</p>
                    <p>Data Science Product Managers</p>
                    <p>Digital Product Managers</p>
                    <p>Freelance Product Managers</p>
                </div>
                <div className='product-item'>
                    <p>Kanban Product Owners</p>
                    <p>Mobile Product Managers</p>
                    <p>Product Owners</p>
                    <p>SaaS Product Managers</p>
                    <p>Salesforce Product Managers</p>
                </div>
                <div className='product-item'>
                    <p>Web Product Managers</p>
                    <p id='view-developers'>View More Freelance Product Managers &nbsp;&#8594;</p>
                </div>
            </div>
            <hr id='division-line' />

            <ul id='talent-demand'>
               <li className='demand'><p id='toptal-developers'>Top talent is in high demand.</p></li>
                <li className='demand'><button id='start-button'>Start Hiring</button></li>
            </ul>
        </div>
    );
}

export default Staff;
