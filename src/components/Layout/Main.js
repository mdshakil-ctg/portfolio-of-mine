import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';
import Navbar from './../Navbar';
import './Main.css'

const Main = () => {
   const [view, setView] = useState(false);

   useEffect(() => {
    const timer = setTimeout(() => setView(true), 3000);
    return () => clearTimeout(timer);
  }, []);
  
  if(!view){
   return(
      <div className='start-container'>
          
         <h1 className='start-text'><span>W</span>elcome To <span>My</span> Portfolio</h1>
      </div>
   )
  }
  else{
   return (
      <div>
         <Navbar></Navbar>
         <Outlet></Outlet>
         <Footer></Footer>
      </div>
   );
  }

   
};

export default Main;