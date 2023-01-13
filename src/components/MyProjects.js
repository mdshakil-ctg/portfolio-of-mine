import React from 'react';
import resalePlanet from '../assetments/Screenshot_1.jpg'
import resalePlanet2 from '../assetments/Screenshot_2.jpg'
import resalePlanet3 from '../assetments/Screenshot_3.jpg'

const MyProjects = () => {
   return (
      <div>
       <h3 className=" text-white font-bold text-sm text-center">My Portfolio _______</h3>
       <p className="text-white text-center text-3xl font-bold mb-2">
         <span className="text-yellow-500">Projects</span>
        </p>
        <p className='text-gray-300 text-center'>There is some web application which <br /> I want to share.</p>
        <div className='w-full grid grid-cols-1 md:grid-cols-3 md:pl-4 gap-10 mt-10'>
         {/* project card  */}
         <div className="card md:w-80 glass">
  <figure><img className='h-52 w-full' src={resalePlanet} alt="car!"/></figure>
  <div className="card-body ">
    <h2 className="card-title text-white font-semibold">Resale Planet</h2>
    <p className='text-gray-400 mb-2'>A website for selling secondhand products.</p>
    <div className="card-actions justify-end">
    <a href='/projects/resale-planet'><button className="btn btn-warning btn-sm">View Details</button></a>
    </div>
  </div>
</div>
         <div className="card md:w-80 glass">
  <figure><img className='h-52 w-full' src={resalePlanet2} alt="car!"/></figure>
  <div className="card-body ">
    <h2 className="card-title text-white font-semibold">Photo Hunters</h2>
    <p className='text-gray-400 mb-2'>Photography-related web app.</p>
    <div className="card-actions justify-end">
    <a href='/projects/photo-hunters'><button className="btn btn-warning btn-sm">View Details</button></a>
    </div>
  </div>
</div>
         <div className="card md:w-80 glass">
  <figure><img className='h-52 w-full' src={resalePlanet3} alt="car!"/></figure>
  <div className="card-body ">
    <h2 className="card-title text-white font-semibold">Deep Web School</h2>
    <p className='text-gray-400 mb-2'>Online course provided website.</p>
    <div className="card-actions justify-end">
      <a href='/projects/deep-web'><button className="btn btn-warning btn-sm">View Details</button></a>
    </div>
  </div>
</div>
        </div>
      </div>
   );
};

export default MyProjects;