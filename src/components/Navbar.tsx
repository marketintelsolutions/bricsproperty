import React, { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaChevronDown, FaLinkedin, FaPhone } from "react-icons/fa6";
import { IoLogoFacebook, IoMail } from "react-icons/io5";
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

      <nav className="w-full sticky z-[99] bg-white top-0 left-0">
        <div className="flex py-1 justify-between max-w-max mx-auto">
          <Link to={"/"}>
            {" "}
            <span className="inline-flex w-full max-w-[250px] py-3">
              <img src="/logo.png" alt="logo" className="w-full h-full" />
            </span>
          </Link>

          <div className="flex  items-center">
            {navLinks.map((item, index) => {
              if (item.items) {
                return (
                  <div
                    onMouseEnter={() => setIsDropDown(true)}
                    onMouseLeave={() => setIsDropDown(false)}
                    className="relative"
                  >
                    <p
                      className={`font-light flex gap-2 items-center tracking-[2px] text-sm px-[25px]  ${
                        navLinks.length !== index + 1 &&
                        "border-r border-primaryPurple"
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
                  to={item.path}
                  key={index}
                  className={`font-light tracking-[2px] text-sm px-[25px]  ${
                    navLinks.length !== index + 1 &&
                    "border-r border-primaryPurple"
                  }`}
                >
                  {item.text}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
