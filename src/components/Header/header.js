import React, { useState } from "react";
import Location from '../../images/location-map.png';
import Airbnb from '../../images/airbnb.jpg';
import Bridgestone from '../../images/Bridgestone.png';
import Duolingo from '../../images/duolingo.png';
import Usc from '../../images/usc-single.png';
import Shopify from '../../images/shopify.png';
import Cavaliers from '../../images/cavaliers.jpg';
//slideShow
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
import './header.css';


function Header() {
    const imageOne = <img src={Image01} className='image-style' alt='srum-master'/>
    const detailsOne = <div className='details'><span className='sp-nm'>Ruth Madrigal</span><br />
                        <span className='sp-ro'>Scrum Master</span><br />
                        <span className='sp-prev'>Previously at <strong>IBM</strong></span>
                      </div>

    const imageTwo = <img src={Image02} className='image-style' alt='c-developer'/>
    const detailsTwo = <div className='details'><span className='sp-nm'>Vladimir Mitrovic</span><br />
                        <span className='sp-ro'>C# Developer</span><br />
                        <span className='sp-prev'>Previously at <strong>Apple</strong></span>
                    </div>

    const imageThree = <img src={Image03} className='image-style' alt='ma-expert' />
    const detailsThree = <div className='details'><span className='sp-nm'>Saim Korlu</span><br />
                        <span className='sp-ro'>M&A Expert</span><br />
                        <span className='sp-prev'>Previously at <strong>J.P Morgan & Co.</strong></span>
                    </div>

    const imageFour = <img src={Image04} className='image-style' alt='finance-expert'/>
    const detailsFour = <div className='details'><span className='sp-nm'>Ellen Su</span><br />
                        <span className='sp-ro'>Finance Expert</span><br />
                        <span className='sp-prev'>Previously at <strong>Lehman Brothers</strong></span>
                    </div>

    const imageFive = <img src={Image05} className='image-style' alt='js-developer'/>
    const detailsFive = <div className='details'><span className='sp-nm'>Vladimir Peric</span><br />
                        <span className='sp-ro'>JavaScript Developer</span><br />
                        <span className='sp-prev'>Previously at <strong>Ubisoft</strong></span>
                    </div>

    const imageSix = <img src={Image06} className='image-style' alt='python-developer'/>
    const detailsSix = <div className='details'><span className='sp-nm'>Matthew Warkentin</span><br />
                        <span className='sp-ro'>Python Developer</span><br />
                        <span className='sp-prev'>Previously at <strong>Cornell</strong></span>
                    </div>

    const [image, setImage] = useState(imageOne);
    const [details, setDetails] = useState(detailsOne);

    const bannerUpdateOne = () => {
        setImage(imageOne);
        setDetails(detailsOne);
    } 

    const bannerUpdateTwo = () => {
        setImage(imageTwo);
        setDetails(detailsTwo);
    }

    const bannerUpdateThree = () => {
        setImage(imageThree);
        setDetails(detailsThree);
    } 

    const bannerUpdateFour = () => {
        setImage(imageFour);
        setDetails(detailsFour);
    } 

    const bannerUpdateFive = () => {
        setImage(imageFive);
        setDetails(detailsFive);
    } 

    const bannerUpdateSix = () => {
        setImage(imageSix);
        setDetails(detailsSix);
    } 

    return (
        <div>
            <div className='header'>
                <p className='top-three'>Hire the <u>Top 3%</u> of<br></br>Freelance Talent<sup>&reg;</sup></p> 
                <p className='top-three-text'>Toptal is an exclusive network of the top freelance<br></br>
                        software developers, designers, finance experts, product<br></br>
                        managers, and project managers in the world. Top<br></br>
                        companies hire Toptal freelancers for their most important<br></br>
                        projects.
                </p>
                <button className='talent-button'>Hire Top Talent</button>
                
                <div>{image}</div>
                <div className='location-div'>
                    <img src={Location} className='location' alt='brands' />
                    <div className='location-circle'>
                        <div className='location-dot'></div>
                    </div>
                    <p>{details}</p>
                </div>
            </div>
           <div className='header-next'>
               <p className='brand-startup'>TRUSTED BY LEADING<br></br>BRANDS AND STARTUPS</p>
               <ul className='brand-logo'>
                   <li className='logo'><img src={Airbnb} className='airbnb' alt='brands' /></li>
                   <li className='logo'><img src={Bridgestone} className='bridgestone' alt='brands' /></li>
                   <li className='logo'><img src={Duolingo} className='duolingo' alt='brands' /></li>
                   <li className='logo'><img src={Usc} className='usc' alt='brands' /></li>
                   <li className='logo'><img src={Shopify} className='shopify' alt='brands' /></li>
                   <li className='logo'><img src={Cavaliers} className='cavaliers' alt='brands' /></li>
                </ul>    
            </div>
            {/* Carousel */}
            <div className='slide-show'>
                <ul className='carousel-container'>
                <p><i className='slide left'></i></p>   
                    <li className='carousel'>
                        <div className='carousel-div'><img src={Image01} className='carousel-item' alt='slideshow' onClick={bannerUpdateOne} />
                        <span className='span-name'>Ruth Madrigal</span><br></br>
                        <span className='span-role'>Scrum Master</span>
                        </div>
                    </li>
                    <li className='carousel'>
                        <div className='carousel-div'><img src={Image02} className='carousel-item' alt='slideshow' onClick={bannerUpdateTwo} />
                        <span className='span-name'>Vladimir Mitrovic</span><br></br>
                        <span className='span-role'>C# Developer</span>
                        </div>
                    </li>
                    <li className='carousel'>
                        <div className='carousel-div'><img src={Image03} className='carousel-item' alt='slideshow' onClick={bannerUpdateThree} />
                        <span className='span-name'>Saim Korlu</span><br></br>
                        <span className='span-role'>M&A Expert</span>
                        </div>
                    </li>
                    <li className='carousel'>
                        <div className='carousel-div'><img src={Image04} className='carousel-item' alt='slideshow' onClick={bannerUpdateFour}/>
                        <span className='span-name'>Ellen Su</span><br></br>
                        <span className='span-role'>Finance Expert</span>
                        </div>
                    </li>
                    <li className='carousel'>
                        <div className='carousel-div'><img src={Image05} className='carousel-item' alt='slideshow' onClick={bannerUpdateFive} />
                        <span className='span-name'>Vladimir Peric</span><br></br>
                        <span className='span-role'>JavaScript Developer</span>
                        </div>
                    </li>
                    <li className='carousel'>
                        <div className='carousel-div'><img src={Image06} className='carousel-item' alt='slideshow' onClick={bannerUpdateSix} />
                        <span className='span-name'>Matthew Warkentin</span><br></br>
                        <span className='span-role'>Python Developer</span> 
                        </div>
                    </li>
                </ul>
                 <p><i className='slide right'></i></p> 
                {/* <i class="fas fa-greater-than"></i> */}
            </div>
        </div>
    );
}

export default Header;
