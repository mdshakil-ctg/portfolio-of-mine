import React from 'react';
import photo1 from '../assetments/photo1.jpg'
import photo2 from '../assetments/photo2.jpg'
import photo3 from '../assetments/photo3.jpg'

const PhotoCarousel = () => {
   return (
      <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={photo1} className="w-full" alt=''/>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">❮</a> 
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div> 
      <div id="slide2" className="carousel-item relative w-full">
        <img src={photo2} className="w-full" alt='' />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">❮</a> 
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div> 
      <div id="slide3" className="carousel-item relative w-full">
        <img src={photo3} className="w-full" alt=''/>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">❮</a> 
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div> 
      
    </div>
   );
};

export default PhotoCarousel;