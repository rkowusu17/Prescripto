import React from "react";
import { assets } from "../assets/assets_frontend/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          About <span className="text-gray-700 font-medium">Us</span>
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12 ">
        <img
          src={assets.about_image}
          alt="about image"
          className="w-full md:max-w-[20rem] rounded-lg"
        />
        <div className="flex flex-col gap-6 justify-center md:w-2/4 text-sm  text-gray-600">
          <p>
            Welcome to Prescripto, your trusted partner in managing your
            healthcare needs and ensuring a proper connection and timely
            bookings with you and your health personeels.
          </p>
          <p>
            At Prescripto, we understand that your health is your most valuable
            asset. That's why we are committed to providing you with the best
            healthcare services available. Our platform connects you with a wide
            range of healthcare professionals, including doctors, specialists,
            and therapists, all in one convenient place.
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            Our vision is to empower individuals to take control of their health
            and well-being. We believe that everyone deserves access to quality
            healthcare, and we strive to make that a reality through our user-
            friendly platform.
          </p>
        </div>
      </div>

      <div className="text-xl my-4">
        <p className="uppercase font-semibold ">
          Why <span className="text-gray-700">choose Us </span>{" "}
        </p>
      </div>
      <div className="flex flex-col gap-6 md:flex-row  mb-10">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer text-gray-600 rounded-lg">
          <b className="underline">Efficiency:</b>
          <p>
            Our platform streamlines the process of finding and booking
            healthcare services, saving you time and effort.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-white hover:text-gray-600 transition-all duration-300 cursor-pointer bg-primary  rounded-lg text-white">
          <b className="underline">Convenience:</b>
          <p>
            With Prescripto, you can access healthcare services from the comfort
            of your home. No more long waits in crowded waiting rooms.
          </p>
        </div>
        <div className="border px-8 md:px-12 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer text-gray-600 rounded-lg">
          <b className="underline">Personalization: </b>
          <p>
            We understand that every individual has unique healthcare needs. Our
            platform allows you to find professionals who specialize in your
            specific requirements.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
