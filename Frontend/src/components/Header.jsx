import React, { useEffect } from "react";
import { assets } from "../assets/assets_frontend/assets";
const Header = () => {
  return (
    <div
      className="flex flex-col gap-20 sm:gap-28 md:gap-0 md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20"
      id="top"
    >
      {/* Left Side */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto mb-32 md:py-[10vw] md:mb-[-30px]">
        <p className="capitalize text-4xl lg:text-5xl text-white font-semibold leading-tight">
          Book Appointment <br className="hidden sm:block" /> with trusted
          Doctors.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light">
          <img className="w-28" src={assets.group_profiles} alt="grp-pic" />
          <p>
            Simply browse through our extensive list of trusted doctors <br />{" "}
            schedule an appointment hustle free.{" "}
          </p>
        </div>
        <a
          className="flex items-center gap-2 mb-10 bg-white py-3 px-4 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300"
          href="#speciality"
        >
          Book appointment
          <img src={assets.arrow_icon} alt="arrow" className="w-3" />
        </a>
      </div>

      {/* Right Side */}
      <div className="md:w-1/2 relative">
        <img
          className="w-3/4 md:w-full absolute h-auto rounded-lg bottom-0"
          src={assets.header_img}
          alt="header"
        />
      </div>
    </div>
  );
};

export default Header;
