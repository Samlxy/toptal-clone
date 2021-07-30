import React from 'react';
import Javascript from '../../images/gabriel-courtemanche-js.jpg';
import Java from '../../images/justin-michela-java.jpg';
import Python from '../../images/frederick_mittel.jpg';
import './network.css'


function Network() {
    return(
        <div className='network'>
            <h2 id='network'>Meet Talent in Our Network</h2>
            <ul className='network-roles'>
                <li className='roles-item' id='role-item'><u id='underline'>Developers</u></li>
                <li className='roles-item'>Designers</li>
                <li className='roles-item'>Finance Experts</li>
                <li className='roles-item'>Project Managers</li>
                <li className='roles-item'>Product Managers</li>
            </ul>
            <div className='network-grid'>
                <div className='network-item'>
                    <img src={Javascript} className='network-image' />
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
                    <img src={Java} className='network-image' />
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
                    <img src={Python} className='network-image' />
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
        </div>
    );
}

export default Network;
