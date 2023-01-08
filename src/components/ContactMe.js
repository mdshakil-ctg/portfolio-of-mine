import React from "react";

const ContactMe = () => {
  return (
    <div id="contact-me" className="bg-yellow-500 h-[350px] flex mt-24 md:mt-48">
      <div className="w-1/3">
         <img className="h-full w-full" src="https://i.ibb.co/GcWB5dV/homepage2.jpg" alt="" />
      </div>
      <div className="w-2/3">
        <div className="p-10">
        <h3 className="mb-2 text-white font-bold text-sm">Touch By _______</h3>
        <p className="text-black text-3xl font-bold mb-2">
          Contact <span className="text-white">Me</span>
        </p>
        <p className="text-gray-500 font-semibold">4043, Raozan, Chittagong.</p>
        <p className="text-gray-500 font-semibold mb-10">+880 1815 149399</p>
        <input type="email" placeholder="Your Email"  className="w-full md:w-1/2 block mb-3 px-2 py-2 focus:border-0 focus:input-error focus:bg-gray-100 focus:outline-offset-0 rounded-none"/>
        <textarea className="textarea w-full md:w-1/2 rounded-none block mb-3 p-2 input input-bordered focus:border-0 focus:input-error focus:bg-gray-100 text-amber-500 focus:outline-offset-0" placeholder="Your message"></textarea>
        <button className="btn btn-sm">Send</button>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
