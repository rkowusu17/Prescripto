import React, { use, useState, useEffect } from "react";
import { assets } from "../assets/assets_frontend/assets";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector("#navbar");
      if (window.scrollY > 80) {
        navbar.classList.add(
          "fixed",
          "right-[5%]",
          "left-[5%]",
          "bg-gray-300/65",
          "z-20",
          "p-8"
        );
      } else {
        navbar.classList.remove("bg-gray-300/65", "z-20", "fixed", "p-8");
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);
  return (
    <div
      className="flex items-center justify-between top-0  text-sm py-4 mb-5 border-b border-b-gray-400"
      id="navbar"
    >
      <a href="#top">
        <img
          // onClick={() => {
          //   navigate("/");
          // }}
          className="w-44 cursor-pointer"
          src={assets.logo}
          alt="logo"
        />
      </a>
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink to={"/"} className={scrollTo(0, 0)}>
          <li className="py-1 uppercase hover:opacity-50">Home</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden " />
        </NavLink>

        <NavLink to={"/doctors"} className={scrollTo(0, 0)}>
          <li className="py-1 uppercase hover:opacity-50 ">All Doctors</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden " />
        </NavLink>
        <NavLink to={"/about"} className={scrollTo(0, 0)}>
          <li className="py-1 uppercase hover:opacity-50 ">About</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden " />
        </NavLink>
        <NavLink to={"/contact"} className={scrollTo(0, 0)}>
          <li className="py-1 uppercase hover:opacity-50 ">Contact</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden " />
        </NavLink>
      </ul>

      <div className="flex items-center gap-4">
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img
              className="w-8 rounded-full"
              src={assets.profile_pic}
              alt="profile-pic"
            />
            <img
              className="w-2.5 "
              src={assets.dropdown_icon}
              alt="drop-down"
            />
            <div className="absolute top-0 right-0 pt-14 text-small font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4 shadow-md">
                <p
                  onClick={() => navigate("/my-profile")}
                  className="hover:text-black cursor-pointer"
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate("/my-appointments")}
                  className="whitespace-nowrap hover:text-black cursor-pointer"
                >
                  My Appointments
                </p>
                <p
                  onClick={() => setToken(false)}
                  className="hover:text-black cursor-pointer"
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block active:outline-none focus:outline-none hover:bg-[#263ad8] transition duration-200 ease-in-out"
          >
            Create account
          </button>
        )}
        <img
          onClick={() => setShowMenu(true)}
          src={assets.menu_icon}
          alt="menu-icon"
          className="w-6 md:hidden"
        />
        {/* Mobile Menu */}
        <div
          className={` ${
            showMenu ? "fixed w-full" : "h-0 w-0"
          } md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all ease-in-out duration-300`}
        >
          <div className="flex items-center justify-between p-8">
            <img className="w-36" src={assets.logo} alt="" />

            <img
              className="w-8"
              src={assets.cross_icon}
              alt="cancel"
              onClick={() => setShowMenu(false)}
            />
          </div>
          <ul className="flex flex-col justify-center items-center gap-2 mt-5 text-lg font-medium">
            <NavLink to={"/"} onClick={() => setShowMenu(false)}>
              <p className="px-4 py-2 rounded inline-block">Home</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to={"/doctors"}>
              <p className="px-4 py-2 rounded inline-block">All doctors</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to={"/about"}>
              <p className="px-4 py-2 rounded inline-block">About</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to={"/contact"}>
              <p className="px-4 py-2 rounded inline-block">Contact</p>
            </NavLink>
            {token ? (
              ""
            ) : (
              <NavLink onClick={() => setShowMenu(false)} to={"/login"}>
                <p className="px-4 py-2 rounded inline-block">Create account</p>
              </NavLink>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
