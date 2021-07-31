import React from 'react';
import Developers from '../../images/developers.svg';
import Designers from '../../images/designers.svg';
import Finance from '../../images/finance-experts.svg';
import Project from '../../images/project-managers.svg';
import Product from '../../images/product-managers.svg';
import Toptal from '../../images/toptal-projects.svg';
import './talent.css';


function Talent() {
    return (
        <div className='talent'>
            <div className='talent-header'>
            <h2 id='talent'>Leverage World-Class Talent</h2>
            <p className='talent-text'>We are the largest, globally-distributed network of top business, design, and<br></br>
                technology talent, ready to tackle your most important initiatives.
            </p>
            </div>
            <div className='talent-category'>
                <div className='talent-grid'>
                    <div className='talent-item'>
                        <img src={Developers} className='talent-image' alt='developers' />
                        <div className='talent-name'>Developers</div>
                        <div className='talent-item-text'>Seasoned software engineers, coders, and architects with expertise across hundreds of technologies.</div>
                        <div className='talent-view'>View Developers<span className='talent-arrow'>&#8594;</span></div>
                    </div>
                    <div className='talent-item'>
                        <img src={Designers} className='talent-image' alt='designers' />
                        <div className='talent-name'>Designers</div>
                        <div className='talent-item-text'>Expert UI, UX, Visual, and interaction designers as well as a wide range of illustrators, animators, and more.</div>
                        <div className='talent-view'>View Designers<span className='talent-arrow'>&#8594;</span></div>
                    </div>
                    <div className='talent-item'>
                        <img src={Finance} className='talent-image' alt='finance' />
                        <div className='talent-name'>Finance Experts</div>
                        <div className='talent-item-text'>Experts in financial modeling & valuation, startup funding, interim CFO work, and market sizing. </div>
                        <div className='talent-view'>View Experts<span className='talent-arrow'>&#8594;</span></div>
                    </div>
                    <div className='talent-item'>
                        <img src={Project} className='talent-image' alt='project' />
                        <div className='talent-name'>Project Managers</div>
                        <div className='talent-item-text'>Digital and technical project managers, scrum masters, and more with expertise in numerous PM tools, frameworks, and styles.</div>
                        <div className='talent-view'>View Project Managers<span className='talent-arrow2'>&#8594;</span></div>
                    </div>
                    <div className='talent-item'>
                        <img src={Product} className='talent-image' alt='product'/>
                        <div className='talent-name'>Product Managers</div>
                        <div className='talent-item-text'>Digital product managers, scrum product owners with expertise in numerous industries like banking, healthcare, ecommerce, and more.</div>
                        <div className='talent-view'>View Product Managers<span className='talent-arrow2'>&#8594;</span></div>
                    </div>
                    <div className='talent-item'>
                        <img src={Toptal} className='talent-image' alt='toptal' />
                        <div className='talent-name'>Toptal<sup id='talent-sup'>&reg;</sup> Projects</div>
                        <div className='talent-item-text'>Toptal Project Consultants assemble managed teams of seasoned experts for your most urgent business needs.</div>
                        <div className='talent-view'>Explore Toptal<sup id='explore-sup'>&reg;</sup> Projects<span className='talent-arrow2'>&#8594;</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Talent;
