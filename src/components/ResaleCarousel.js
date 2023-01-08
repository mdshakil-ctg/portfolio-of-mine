import React from 'react';
import resale1 from '../assetments/resale01.jpg'
import resale2 from '../assetments/resale02.jpg'
import resale3 from '../assetments/resale03.jpg'

const ResaleCarousel = () => {
   return (
      <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={resale1} className="w-full" alt=''/>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">❮</a> 
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div> 
      <div id="slide2" className="carousel-item relative w-full">
        <img src={resale2} className="w-full" alt='' />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">❮</a> 
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div> 
      <div id="slide3" className="carousel-item relative w-full">
        <img src={resale3} className="w-full" alt=''/>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">❮</a> 
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div> 
      
    </div>
   );
};

export default ResaleCarousel;