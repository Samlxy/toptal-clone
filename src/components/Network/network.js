import React, { useState } from 'react';
import { NavHashLink as NavLink } from "react-router-hash-link";
import Javascript from '../../images/gabriel-courtemanche-js.jpg';
import Java from '../../images/justin-michela-java.jpg';
import Python from '../../images/frederick_mittel.jpg';
import Product from '../../images/adan-perez-08.jpg';
import Visual from '../../images/saim-korlu-03.jpg';
import Design from '../../images/ruth-madrigal-01.jpg';
import Manager from '../../images/casey-arrington-09.jpg';
import Finance from '../../images/vladimir-peric-05.jpg';
import Interim from '../../images/fabio-muniz.jpg';
import './network.css'


function Network() {
    const developersGrid =  <div className='network-grid'>
    <div className='network-item'>
        <img src={Javascript} className='network-image' alt='javascript-developer' />
        <div className='network-name'>Gabriel Courtemanche</div>
        <div className='network-role'>JavaScript Developer</div><br />
        <div className='network-text'>Gabriel is a highly efficient and reliable professional who 
            possesses a broad skill set for web application development. He's been working 
            on a range of products and clients—from working on scalability problems in production 
            engineering teams at Shopify and Autodesk to launching new applications for startups. 
            Most of his work consists of leading technical teams, by creating an easy development 
            environment, fixing technical debts, providing best practices code examples, and mentoring devs. 
        </div><br />
        <div className='network-prev'>Previously at</div>
        <div className='network-company'>SHOPIFY</div>
        <div className='network-view'>View Gabriel</div>
    </div>
    <div className='network-item'>
        <img src={Java} className='network-image' alt='java-developer' />
        <div className='network-name'>Justin Michela</div>
        <div className='network-role'>Java Developer</div><br />
        <div className='network-text'>Justin is a technical professional with a passion for learning and 15+
            years of experience leading teams to build enterprise-grade distributed applications that solve
            real-world problems. He is a firm believer that collaboration across all facets of a business,
            from development to marketing to sales, is required to succeed in this endeavor. He excels at building
            full-stack systems with the web, desktop, and mobile apps,  microservices, and external integrations. 
            He's been working on a range of products and clients.
        </div><br />
        <div className='network-prev'>Previously at</div>
        <div className='network-company'>GOOGLE</div>
        <div className='network-view' >View Justin</div>
    </div>
    <div className='network-item'>
        <img src={Python} className='network-image' alt='python-developer' />
        <div className='network-name'>Frédérique Mittelstaedt</div>
        <div className='network-role'>Python Developer</div><br />
        <div className='network-text'>Frédérique is a software engineer and entrepreneur with an MSc in
            theoretical physics from Imperial College London. He excels at building full-stack systems with the web,
            desktop, and mobile apps, microservices, and external integrations. Frédérique co-founded an international
            marketing agency and three startups in developer tools, cybersecurity, and AI. 
            Frédérique regularly releases TypeScript packages and contributes to other open-source projects.
            He's been working on a range of products and clients.
        </div><br />
        <div className='network-prev'>Previously at</div>
        <div className='network-company'>EXXON</div>
        <div className='network-view' >View Frederick</div>
    </div>
</div>

    const designersGrid =  <div className='network-grid'>
    <div className='network-item'>
        <img src={Product} className='network-image' alt='product-designer' />
        <div className='network-name'>Osandi Sekoú Robinson</div>
        <div className='network-role'>Product Designer</div><br />
        <div className='network-text'>Osandi is a highly efficient and reliable professional who 
            possesses a broad skill set for web application development. He's been working 
            on a range of products and clients—from working on scalability problems in production 
            engineering teams at Shopify and Autodesk to launching new applications for startups. 
            Most of his work consists of leading technical teams, by creating an easy development 
            environment, fixing technical debts, providing best practices code examples, and mentoring devs. 
        </div><br />
        <div className='network-prev'>Previously at</div>
        <div className='network-company'>Apple</div>
        <div className='network-view'>View Osandi</div>
    </div>
    <div className='network-item'>
        <img src={Visual} className='network-image' alt='visual-designer' />
        <div className='network-name'>Jake Kahana</div>
        <div className='network-role'>Visual Designer</div><br />
        <div className='network-text'>Jake is a technical professional with a passion for learning and 15+
            years of experience leading teams to build enterprise-grade distributed applications that solve
            real-world problems. He is a firm believer that collaboration across all facets of a business,
            from development to marketing to sales, is required to succeed in this endeavor. He excels at building
            full-stack systems with the web, desktop, and mobile apps,  microservices, and external integrations. 
            He's been working on a range of products and clients.
        </div><br />
        <div className='network-prev'>Previously at</div>
        <div className='network-company'>Facebook</div>
        <div className='network-view' >View Jake</div>
    </div>
    <div className='network-item'>
        <img src={Design} className='network-image' alt='ux-designer' />
        <div className='network-name'>Adrien Valesa</div>
        <div className='network-role'>UI/UX Designer</div><br />
        <div className='network-text'>Adrien is a software engineer and entrepreneur with an MSc in
            theoretical physics from Imperial College London. He excels at building full-stack systems with the web,
            desktop, and mobile apps, microservices, and external integrations. Frédérique co-founded an international
            marketing agency and three startups in developer tools, cybersecurity, and AI. 
            Frédérique regularly releases TypeScript packages and contributes to other open-source projects.
            He's been working on a range of products and clients.
        </div><br />
        <div className='network-prev'>Previously at</div>
        <div className='network-company'>Lego</div>
        <div className='network-view' >View Adrien</div>
    </div>
</div>
/* Finance */

const financeGrid =  <div className='network-grid'>
<div className='network-item'>
    <img src={Python} className='network-image' alt='product-designer' />
    <div className='network-name'>Anuar Heberlein</div>
    <div className='network-role'>M&A Expert</div><br />
    <div className='network-text'>Anuar is a highly efficient and reliable professional who 
        possesses a broad skill set for web application development. He's been working 
        on a range of products and clients—from working on scalability problems in production 
        engineering teams at Shopify and Autodesk to launching new applications for startups. 
        Most of his work consists of leading technical teams, by creating an easy development 
        environment, fixing technical debts, providing best practices code examples, and mentoring devs. 
    </div><br />
    <div className='network-prev'>Previously at</div>
    <div className='network-company'>Bain & Company</div>
    <div className='network-view'>View Anuar</div>
</div>
<div className='network-item'>
    <img src={Finance} className='network-image' alt='visual-designer' />
    <div className='network-name'>Francesco Castellano</div>
    <div className='network-role'>Market Researcher</div><br />
    <div className='network-text'>Francesco is a technical professional with a passion for learning and 15+
        years of experience leading teams to build enterprise-grade distributed applications that solve
        real-world problems. He is a firm believer that collaboration across all facets of a business,
        from development to marketing to sales. He excels at building
        full-stack systems with the web, desktop, and mobile apps,  microservices, and external integrations. 
        He's been working on a range of products and clients.
    </div><br />
    <div className='network-prev'>Previously at</div>
    <div className='network-company'>Bain & Company</div>
    <div className='network-view' >View Francesco</div>
</div>
<div className='network-item'>
    <img src={Interim} className='network-image' alt='ux-designer' />
    <div className='network-name'>Neil Portus | CFA, CMA</div>
    <div className='network-role'>Interim CFO</div><br />
    <div className='network-text'>Neil is a software engineer and entrepreneur with an MSc in
        theoretical physics from Imperial College London. He excels at building full-stack systems with the web,
        desktop, and mobile apps, microservices, and external integrations. Frédérique co-founded an international
        marketing agency and three startups in developer tools, cybersecurity, and AI. 
        Frédérique regularly releases TypeScript packages and contributes to other open-source projects.
        He's been working on a range of products and clients.
    </div><br />
    <div className='network-prev'>Previously at</div>
    <div className='network-company'>Goldman Sachs</div>
    <div className='network-view' >View Neil</div>
</div>
</div>
/* Project */

const projectGrid =  <div className='network-grid'>
<div className='network-item'>
    <img src={Design} className='network-image' alt='product-designer' />
    <div className='network-name'>Marco De Stefano</div>
    <div className='network-role'>Agile Project Manager</div><br />
    <div className='network-text'>Marco is a highly efficient and reliable professional who 
        possesses a broad skill set for web application development. He's been working 
        on a range of products and clients—from working on scalability problems in production 
        engineering teams at Shopify and Autodesk to launching new applications for startups. 
        Most of his work consists of leading technical teams, by creating an easy development 
        environment, fixing technical debts, providing best practices code examples, and mentoring devs. 
    </div><br />
    <div className='network-prev'>Previously at</div>
    <div className='network-company'>Amazon</div>
    <div className='network-view'>View Marco</div>
</div>
<div className='network-item'>
    <img src={Java} className='network-image' alt='visual-designer' />
    <div className='network-name'>Meko Kofahl</div>
    <div className='network-role'>Mobile Project Manager</div><br />
    <div className='network-text'>Meko is a technical professional with a passion for learning and 15+
        years of experience leading teams to build enterprise-grade distributed applications that solve
        real-world problems. He is a firm believer that collaboration across all facets of a business,
        from development to marketing to sales, is required to succeed in this endeavor. He excels at building
        full-stack systems with the web, desktop, and mobile apps,  microservices, and external integrations. 
        He's been working on a range of products and clients.
    </div><br />
    <div className='network-prev'>Previously at</div>
    <div className='network-company'>Vodafone</div>
    <div className='network-view' >View Meko</div>
</div>
<div className='network-item'>
    <img src={Visual} className='network-image' alt='ux-designer' />
    <div className='network-name'>Geeta Acharya</div>
    <div className='network-role'>IT Project Manager</div><br />
    <div className='network-text'>Geeta is a software engineer and entrepreneur with an MSc in
        theoretical physics from Imperial College London. He excels at building full-stack systems with the web,
        desktop, and mobile apps, microservices, and external integrations. Frédérique co-founded an international
        marketing agency and three startups in developer tools, cybersecurity, and AI. 
        Frédérique regularly releases TypeScript packages and contributes to other open-source projects.
        He's been working on a range of products and clients.
    </div><br />
    <div className='network-prev'>Previously at</div>
    <div className='network-company'>Morgan Stanley</div>
    <div className='network-view' >View Geeta</div>
</div>
</div>

/* Product */

const productGrid =  <div className='network-grid'>
<div className='network-item'>
    <img src={Product} className='network-image' alt='product-owner' />
    <div className='network-name'>Adan Perez</div>
    <div className='network-role'>Product Owner</div><br />
    <div className='network-text'>Adan is a highly efficient and reliable professional who 
        possesses a broad skill set for web application development. He's been working 
        on a range of products and clients—from working on scalability problems in production 
        engineering teams at Shopify and Autodesk to launching new applications for startups. 
        Most of his work consists of leading technical teams, by creating an easy development 
        environment, fixing technical debts, providing best practices code examples, and mentoring devs. 
    </div><br />
    <div className='network-prev'>Previously at</div>
    <div className='network-company'>AT & T</div>
    <div className='network-view'>View Adan</div>
</div>
<div className='network-item'>
    <img src={Visual} className='network-image' alt='visual-designer' />
    <div className='network-name'>Greg Prickril</div>
    <div className='network-role'>Interim CPO</div><br />
    <div className='network-text'>Greg is a technical professional with a passion for learning and 15+
        years of experience leading teams to build enterprise-grade distributed applications that solve
        real-world problems. He is a firm believer that collaboration across all facets of a business,
        from development to marketing to sales, is required to succeed in this endeavor. He excels at building
        full-stack systems with the web, desktop, and mobile apps,  microservices, and external integrations. 
        He's been working on a range of products and clients.
    </div><br />
    <div className='network-prev'>Previously at</div>
    <div className='network-company'>Microsoft</div>
    <div className='network-view' >View Greg</div>
</div>
<div className='network-item'>
    <img src={Manager} className='network-image' alt='product-manager' />
    <div className='network-name'>Casey Arington</div>
    <div className='network-role'>Product Manager</div><br />
    <div className='network-text'>Casey is a software engineer and entrepreneur with an MSc in
        theoretical physics from Imperial College London. He excels at building full-stack systems with the web,
        desktop, and mobile apps, microservices, and external integrations. Frédérique co-founded an international
        marketing agency and three startups in developer tools, cybersecurity, and AI. 
        Frédérique regularly releases TypeScript packages and contributes to other open-source projects.
        He's been working on a range of products and clients.
    </div><br />
    <div className='network-prev'>Previously at</div>
    <div className='network-company'>Space X</div>
    <div className='network-view' >View Casey</div>
</div>
</div>



    const [network, setNetwork] = useState(developersGrid);

    const showDevelopers = () => {
        setNetwork(developersGrid);
    }

    const showDesigners = () => {
        setNetwork(designersGrid);
    }

    const showFinance = () => {
        setNetwork(financeGrid);
    }

    const showProject = () => {
        setNetwork(projectGrid);
    }

    const showProduct = () => {
        setNetwork(productGrid);
    }
    
    return(
        <div className='network'>
            <h2 id='network'>Meet Talent in Our Network</h2>
            <ul className='network-roles'>
                <li className='roles-item'><NavLink to='#developers' activeClassName='selected' onClick={showDevelopers}>Developers</NavLink></li>
                <li className='roles-item'><NavLink to='#designers' activeClassName='selected' onClick={showDesigners}>Designers</NavLink></li>
                <li className='roles-item'><NavLink to='#finance' activeClassName='selected'  onClick={showFinance}>Finance Experts</NavLink></li>
                <li className='roles-item'><NavLink to='#project' activeClassName='selected'  onClick={showProject}>Project Managers</NavLink></li>
                <li className='roles-item'><NavLink to='#product' activeClassName='selected'  onClick={showProduct}>Product Managers</NavLink></li>
            </ul>
            <div>{network}</div>
           
        </div>
    );
}

export default Network;
