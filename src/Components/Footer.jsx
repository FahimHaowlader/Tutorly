import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
    <div className="bg-[rgb(18,26,34)] px-20 sm:grid md:flex grid-cols-2 row-auto  md:px-32 text-white pt-20 pb-10 flex flex-col md:flex-row justify-between gap-5 sm:items-start sm:gap-16 md:gap-5 ">
      <div>
        {" "}
        <img
          src="https://wpappointify.com/tutorly/elementor/demo/wp-content/uploads/2022/05/logo.png"
          alt="logo"
          className="object-cover w-32 text-white "
        />
        <p className="w-60 text-xl font-semibold pt-2 ">
          Home to best instructors across the industry.
        </p>
        <div className="space-y-3 pt-3">
        <h2 className="text-3xl font-bold text-white">About Us</h2>
        <p className="text-xl  ">help@tutorly.com</p>
        <p className="text-xl  "> 0132300000</p>
        <p className="text-xl  w-60 ">
          84/4 anol Dkkhin Khan Dhaka 1230
        </p>
      </div>
      </div>
      
      <div className="flex flex-col gap-3">
        <h2 className="text-3xl font-bold text-white pb-1">Links</h2>
        <p className="text-xl  ">App</p>
        <Link to="signup" className="text-xl  ">Register</Link>
        <Link to="login" className="text-xl  ">SingIn</Link>
        <Link  className="text-xl  ">Find your tutor</Link>
        <p className="text-xl  ">Privacy Policy</p>
        <p className="text-xl  ">How it works</p>
      </div>
      <div className="space-y-5">
        <h2 className="text-3xl font-bold text-white pb-3">Best in Class</h2>

        <p className="text-xl  ">Operating in 120 countries,</p>
        <p className="text-xl  pt-1 "> 1000+ Instructors</p>
        <p className="text-xl  pt-1  ">10k+ Students</p>
        <p className="text-xl  pt-1  ">70+ Language</p>
        
      </div>
      <div>
      <img src="https://wpappointify.com/tutorly/elementor/demo/wp-content/uploads/2022/05/v2-600x323.png" alt="" className="h-60 w-60 object-cover" />
      </div>
    </div>
      <p className="bg-[rgb(18,26,34)] text-center text-white text-xl font-semibold pb-6">All right reserved by Tutorly</p>
    </div>
  );
};

export default Footer;
