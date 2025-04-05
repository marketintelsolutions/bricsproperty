import React, { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaChevronDown, FaLinkedin, FaPhone } from "react-icons/fa6";
import { IoLogoFacebook, IoMail, IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";

const navLinks = [
  {
    text: "ABOUT US",
    path: "/about",
    items: [
      {
        text: "About",
        path: "/about",
      },
      {
        text: "Team",
        path: "/team",
      },
    ],
  },
  {
    text: "SERVICES",
    path: "/services",
  },
  {
    text: "PROJECTS",
    path: "/projects",
  },
  {
    text: "CAREERS",
    path: "/careers",
  },
  {
    text: "CONTACT US",
    path: "/contact",
  },
];

const Navbar = () => {
  const [isDropdown, setIsDropDown] = useState(false);
  const [isMenu, setIsMenu] = useState(false);

  return (
    <>
      <div className="bg-primaryPurple py-4 zr:hidden lg:flex">
        <div className="w-full max-w-max mx-auto flex justify-between">
          <p className="flex gap-2 text-white items-center">
            <span>
              <CiLocationOn />{" "}
            </span>
            <span>Victoria Island, Lagos, Nigeria</span>
          </p>
          <div className="flex gap-12 items-center">
            <div className="flex text-white text-2xl gap-8">
              <span>
                <IoLogoFacebook />
              </span>
              <span>
                <FaLinkedin />
              </span>
            </div>
            <div className="flex gap-2 items-center text-l text-white">
              <span>
                <FaPhone />
              </span>
              <p>+234 80 300 0000</p>
            </div>
            <div className="flex gap-2 items-center text-l text-white">
              <span>
                <IoMail />
              </span>
              <p>info@brics.com</p>
            </div>
          </div>
        </div>
      </div>

      <nav className=" w-full sticky z-[99] px-6 lg:px-0 bg-white top-0 left-0">
        <div className="flex py-1 justify-between items-center max-w-max mx-auto">
          <Link to={"/"}>
            {" "}
            <span className="inline-flex w-full max-w-[200px] md:max-w-[250px] py-3">
              <img src="/logo.png" alt="logo" className="w-full h-full" />
            </span>
          </Link>

          <div
            className={`absolute md:relative w-full md:w-max py-10 px-6 md:py-0 md:px-0 bg-white top-full left-0 flex-col md:flex-row  items-center gap-10 md:gap-0 ${
              isMenu ? "flex" : "zr:hidden md:flex"
            } `}
          >
            {navLinks.map((item, index) => {
              if (item.items) {
                return (
                  <div
                    onMouseEnter={() => setIsDropDown(true)}
                    onMouseLeave={() => setIsDropDown(false)}
                    className="relative"
                  >
                    <p
                      className={`font-light flex gap-2 items-center tracking-[2px] text-sm md:px-[25px]  ${
                        navLinks.length !== index + 1 &&
                        "md:border-r border-primaryPurple"
                      }`}
                    >
                      <span>{item.text}</span>
                      <span
                        className={`${isDropdown ? "rotate-180" : "rotate-0"}`}
                      >
                        <FaChevronDown />
                      </span>
                    </p>
                    {isDropdown && (
                      <div className="absolute top-full pt-[40px] left-0 w-full">
                        <div className="  flex flex-col gap-2 bg-white">
                          {item.items.map((subItem) => (
                            <Link
                              onClick={() => setIsMenu(false)}
                              to={subItem.path}
                              key={index}
                              className={`font-light hover:bg-primaryPurple hover:text-white tracking-[2px] text-sm px-[25px] py-4 `}
                            >
                              {subItem.text}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  onClick={() => setIsMenu(false)}
                  to={item.path}
                  key={index}
                  className={`font-light tracking-[2px] text-sm md:px-[25px]  ${
                    navLinks.length !== index + 1 &&
                    "md:border-r border-primaryPurple"
                  }`}
                >
                  {item.text}
                </Link>
              );
            })}
          </div>
          <button
            onClick={() => setIsMenu((prev) => !prev)}
            className="zr:flex md:hidden"
          >
            <IoMenu size={35} />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
