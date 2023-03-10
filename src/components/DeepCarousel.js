import React from 'react';
import deep1 from '../assetments/deep1.jpg'
import deep2 from '../assetments/deep2.jpg'
import deep3 from '../assetments/deep3.jpg'

const DeepCarousel = () => {
   return (
       <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={deep1} className="w-full" alt=''/>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">❮</a> 
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div> 
      <div id="slide2" className="carousel-item relative w-full">
        <img src={deep2} className="w-full" alt='' />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">❮</a> 
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div> 
      <div id="slide3" className="carousel-item relative w-full">
        <img src={deep3} className="w-full" alt=''/>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">❮</a> 
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div> 
      
    </div>
   );
};

export default DeepCarousel;