import React from 'react';
import DeepCarousel from './DeepCarousel';

const Deep = () => {
   return (
      <div>
      <div>
         <DeepCarousel></DeepCarousel>
      </div>
      <div className='border-l-2 border-lime-400 px-3 py-4 bg-gray-900 rounded-sm text-center'>
      <h2 className='text-3xl font-semibold text-start text-yellow-500'>Resale <span className='text-white'>Planet</span></h2>
         <ul className='text-gray-400 text-start mt-5'>
            <li className='list'>== I had use firebase authentication service so that an unauthorized person are not seeing all the services.</li>
            <li>== In the mongodb server all data are inserted there. I use access token for more application security. </li>
            <li>== Configured for three kind of users, like buyer, seller and admin Also use tailwind css and daisyUI components for styles and responsive features.</li>
            <li>== There are three layer of security checking to perform role of users. </li>
            <li>== To dynamic routes I used the react router for better UI experinces. Also many kind of features like auto refetch and many more. Thanks for reading.</li>
            </ul>
         <a className='btn btn-outline btn-warning btn-sm mt-10' href='https://deep-web-b8d1d.web.app/'>Live Website</a>
         <a className='btn btn-outline btn-warning btn-sm mt-10 mx-3' href='https://github.com/mdshakil-ctg/deep-web-school'>Github Client Code</a>
         <a className='btn btn-outline btn-warning btn-sm mt-10' href='https://github.com/programming-hero-web-course1/b610-lerning-platform-server-side-mdshakil-ctg'>Github Server Code</a>
         </div>
   </div>
   );
};

export default Deep;