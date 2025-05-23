import React from "react";
import { assets } from "../assets/assets_frontend/assets";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          Contact <span className="text-gray-700 font-medium">US</span>
        </p>
        <div className="my-10 flex flex-col justify-center md:flex-row gap-12 ">
          <img
            src={assets.contact_image}
            alt="contact-img"
            className="w-full md:max-w-[20rem]"
          />
          <div className="flex flex-col gap-4 justify-center md:w-2/4 text-sm text-gray-500 text-left">
            <p className="uppercase text-xl font-medium text-gray-700">
              Our Office
            </p>
            <p>
              166 Riverland Street, <br /> ST 12345, <br />
              Riverland, USA
            </p>
            <p className="cursor-pointer">
              <span className="font-medium text-primary"> Tel :</span> +1 234
              567 8900 <br />{" "}
              <span className="font-medium text-primary"> Email: </span>{" "}
              prescripto@hotmail.com
            </p>
            <p className="uppercase text-xl font-medium text-gray-700">
              Careers at Prescripto
            </p>
            <p> Learn more about our teams and job openings. </p>
            <button className="w-[10rem] border px-6 py-2 border-gray-600 rounded hover:bg-primary hover:text-white hover:border-none transition-all duration-300 cursor-pointer text-gray-600">
              Explore jobs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
