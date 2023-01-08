import React from 'react';
import './Navbar.css'

const Navbar = () => {
   return (
      <div className="navbar text-white py-5">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content text-gray-300 mt-3 p-2 shadow bg-black glass rounded-box w-60">
        <li><a href='/'><span>Home</span></a></li>
        <li><a href='#about-me'>About Me</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#contact-me'>Contact Me</a></li>
      </ul>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-gray-300">
      <li><a href='/' className='btn-nav mr-4'><span>Home</span></a></li>
        <li><a href='#about-me' className='btn-nav mr-4'><span>About</span></a></li>
        <li><a href='#services' className='btn-nav mr-4'><span>Services</span></a></li>
        <li><a href='#contact-me' className='btn-nav mr-4'><span>Contact</span></a></li>
    </ul>
  </div>
  <div className="navbar-end mr-5">
    <a className='btn-resume' href='https://drive.google.com/file/d/1A3zpCkU9yQfG-K5x3KA9JA4KwmicXQsE/view?usp=share_link'><span>Resume</span></a>
  </div>
</div>
   );
};

export default Navbar;
