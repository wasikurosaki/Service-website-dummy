import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


import img1 from "../Assets/web1.jpeg"
import img2 from "../Assets/web2.jpeg"



const Services = () => {
    return (
        <div className='Services'>
            
            <Carousel infiniteLoop autoPlay showStatus={false} showArrows={false} interval={1000}
            showThumbs={false} >
                <div>
                    <img src={img1} alt="Item1"/>
                    <p className='legend'>Full Stack</p>
                </div>
                <div>
                    <img src={img2} alt="Item2"/>
                    <p className='legend'>Data Science</p>
                </div>
            </Carousel>
        </div>
    );
};

export default Services;