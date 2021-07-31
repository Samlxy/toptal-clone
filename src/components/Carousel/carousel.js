import React from 'react';
import Image01 from '../../images/ruth-madrigal-01.jpg';
import Image02 from '../../images/vladimir-mitrovic-02.jpg';
import Image03 from '../../images/saim-korlu-03.jpg';
import Image04 from '../../images/ellen-su-04.jpg';
import Image05 from '../../images/vladimir-peric-05.jpg';
import Image06 from '../../images/matthew-warkentin-06.jpg';
/*
import Image07 from '../../images/daniella-thompson-07.jpg';
import Image08 from '../../images/adan-perez-08.jpg';
import Image09 from '../../images/casey-arrington-09.jpg';
import Image10 from '../../images/emily-dubow-10.jpg';
*/
import './carousel.css';


function Carousel() {
    return (
        <div className='slide-show'>
            <ul className='carousel-container'>
            <p><i className='slide left'></i></p>   
                <li className='carousel'>
                    <div className='carousel-div'><img src={Image01} className='carousel-item' alt='slideshow' />
                    <span className='span-name'>Ruth Madrigal</span><br></br>
                    <span className='span-role'>Scrum Master</span>
                    </div>
                </li>
                <li className='carousel'>
                    <div className='carousel-div'><img src={Image02} className='carousel-item' alt='slideshow' />
                    <span className='span-name'>Vladimir Mitrovic</span><br></br>
                    <span className='span-role'>C# Developer</span>
                    </div>
                </li>
                <li className='carousel'>
                    <div className='carousel-div'><img src={Image03} className='carousel-item' alt='slideshow' />
                    <span className='span-name'>Saim Korlu</span><br></br>
                    <span className='span-role'>M&A Expert</span>
                    </div>
                </li>
                <li className='carousel'>
                    <div className='carousel-div'><img src={Image04} className='carousel-item' alt='slideshow' />
                    <span className='span-name'>Ellen Su</span><br></br>
                    <span className='span-role'>Finance Expert</span>
                    </div>
                </li>
                <li className='carousel'>
                    <div className='carousel-div'><img src={Image05} className='carousel-item' alt='slideshow' />
                    <span className='span-name'>Vladimir Peric</span><br></br>
                    <span className='span-role'>JavaScript Developer</span>
                    </div>
                </li>
                <li className='carousel'>
                    <div className='carousel-div'><img src={Image06} className='carousel-item' alt='slideshow' />
                    <span className='span-name'>Matthew Warkentin</span><br></br>
                    <span className='span-role'>Python Developer</span> 
                    </div>
                </li>
            </ul>
            <p><i className='slide right'></i></p>
        </div>
    );
}

export default Carousel;
