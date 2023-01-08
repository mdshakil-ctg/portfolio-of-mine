import React from 'react';

const AboutMe = () => {
   return (
      <div id='about-me' className='flex flex-col md:flex-row items-center md:h-[500px] my-12 md:my-24'>
         <div className='w-full md:w-1/2 px-5 md:px-20'>
            <img className='h-full rounded-lg border-l-2 border-t-2 border-yellow-500' src="https://i.ibb.co/zRZ9QVm/aboutme.jpg" alt="" />
         </div>
         <div className='p-5 md:p-0 md:w-1/2'>
         <h3 className='mt-10 md:mt-0 mb-4 text-white font-bold text-sm' >About Me _______</h3>
         <h2 className='text-4xl font-bold text-white mb-2'>Why Hire Me For Your</h2>
         <p className='text-4xl font-bold text-yellow-500 mb-10'>Next Mission</p>
         <p className='mb-5 text-gray-500 text-sm'>I'm a Mern Stack Web Developer focused on developing Javascript based web applications and web design. I create successful websites that are fast, easy to use, and built with best practices.</p>
         <p className='mb-5 text-gray-500 text-sm'>I work to make a better web; one that is fast, easy to use, beautiful, accessible to all, and frustration-free. I believe having experience in both design and development allows for making the most optimal user experiences. Feel free to take a look at my latest projects on projects section.</p>
         <div className='grid grid-cols-3 gap-6 py-6 md:pr-6'>
            <div className='border-l-2 border-lime-400 px-3 py-4 bg-gray-900 rounded-sm text-center'>
               <p className='text-[#7FE593] text-3xl font-bold ' >50+</p>
               <p className='text-gray-400 font-semibold text-sm'>Happy Client</p>
            </div>
            <div className='border-l-2 border-[#F57B7A] px-3 py-4 bg-gray-900 rounded-sm text-center'>
            <p className='text-[#F57B7A] text-3xl font-bold'>70+</p>
               <p className='text-gray-400 font-semibold text-sm'>Projects Done</p>
            </div>
            <div className='border-l-2 border-[#3538b7] px-3 py-4 bg-gray-900 rounded-sm text-center'>
            <p className='text-[#31328c] text-3xl font-bold'>100+</p>
               <p className='text-gray-400 font-semibold text-sm'>Review</p>
            </div>
         </div>
      </div>
      </div>
   );
};

export default AboutMe;
