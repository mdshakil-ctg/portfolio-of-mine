import React from "react";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import MyProjects from "./MyProjects";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  function reveal() {
    let reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let elementTop = reveals[i].getBoundingClientRect().top;
      let elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);

  return (
    <div>
      <div className="text-white flex md:h-[560px] my-4">
        <div className="w-full md:w-3/5 md:p-12 ml-14 md:ml-11">
          <h2 className="md:text-6xl font-bold mb-2">Hey! I Am</h2>
          <h3 className="text-3xl md:text-6xl font-bold text-yellow-500 mb-5 md:mb-10">
            Mohammed Shakil
          </h3>
          <p className="text-gray-300 mb-1">
            I am a junior full stack web developer.
          </p>
          <p className="mb-10 text-gray-300">
            “Great web design without functionality is like a sports car with no
            engine.” <br />– Paul Cookson
          </p>
          <Link to="/" className="btn-primary">
            <span>Hire me</span>
          </Link>
        </div>

        <div></div>

        <div className="w-2/5 rounded-t-lg flex justify-end home-thumbnail">
          <img
            className="h-full rounded-md hidden md:block"
            src="https://i.ibb.co/WpXYjXC/homepage3.jpg"
            alt=""
          />
        </div>
      </div>
      
      <div>
        <section className="text-white my-project">
          <div class="container reveal fade-bottom">
      <AboutMe></AboutMe>
            
          </div>
        </section>
      </div>
      <div>
        <section className="text-white my-project">
          <div class="container reveal fade-bottom">
            <MyProjects></MyProjects>
          </div>
        </section>
      </div>
      <div>
        <section className="text-white my-project">
          <div class="container reveal fade-bottom">
      <ContactMe></ContactMe>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
