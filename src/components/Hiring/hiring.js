import React from 'react';
import './hiring.css'


function Hiring() {
    return(
        <div className='hiring'>
            <h2 id='hiring'>Hiring Made Easy</h2>
            <ul className='counting-arrow'>
                <li className='arrow-item'><hr className='arrow-one' />
                    <span className='arrow-o'>&#62;</span>
                    <div id='circle-one'><span className='number-one'>1</span></div>   
                </li>
                <li className='arrow-item'><hr className='arrow-two' />
                    <span className='arrow-t'>&#62;</span>
                    <div className='circle-two'><span className='number-one'>2</span></div>  
                </li>
                <li className='arrow-item'><hr className='arrow-two' />
                    <span className='arrow-t'>&#62;</span>
                    <div className='circle-two'><span className='number-one'>3</span></div>   
                </li>
                <li className='arrow-item'><hr className='arrow-one' />
                    <span className='arrow-o'>&#62;</span>  
                </li>  
            </ul>
            <ul className='hiring-text'>
                <li className='hiring-texts'>
                    <p className='text-head'>Talk to One of Our Industry Experts</p>
                    <p className='text-body'>An expert on our team will work with you to<br />understand your goals, technical need,  and<br /> team dynamics.</p>
                </li>
                <li className='hiring-texts'>
                    <p className='text-head' id='text-head'>Work With Hand-Selected Talent</p>
                    <p className='text-body'  id='text-body'>Within days, we'll introduce you to the right talent for<br />your project. Average time to match is under 24 hours.</p>
                </li>
                <li className='hiring-texts'>
                    <p className='text-head'>The Right Fit, Guaranteed</p>
                    <p className='text-body'>Work with your new team member on a trial basis (pay<br />only if satisfied), ensuring you hire the right people for<br />the job.</p>
                </li>
            </ul>

        </div>
    );
}

export default Hiring;
