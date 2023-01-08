import React from "react";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import MyProjects from "./MyProjects";

const Home = () => {
  return (
   <div>
     <div className="text-white flex md:h-[450px] my-4">
      <div className="w-full md:w-3/5 md:p-12 ml-14 md:ml-11">
        <h2 className="md:text-6xl font-bold mb-2">Hey! I Am</h2>
        <h3 className="text-3xl md:text-6xl font-bold text-yellow-500 mb-5 md:mb-10">Mohammed Shakil</h3>
        <p className="text-gray-400">I am a junior full stack web developer.</p>
        <p className="mb-10 text-gray-500">
          “Great web design without functionality is like a sports car with no
          engine.” <br />– Paul Cookson
        </p>
        <button className="btn btn-warning btn-sm text-white font-bold capitalize">Hire Me</button>
      </div>
      <div className="w-2/5 rounded-t-lg flex justify-end">
        <img
          className="h-full rounded-md hidden md:block"
          src="https://i.ibb.co/WpXYjXC/homepage3.jpg"
          alt=""
        />
      </div>
    </div>
    <AboutMe></AboutMe>
     <MyProjects></MyProjects>
     <ContactMe></ContactMe>
   </div>
  );
};

export default Home;
