import React from "react";
import { FaLinkedin, FaPhone } from "react-icons/fa6";
import { IoLogoFacebook, IoMail } from "react-icons/io5";
import { Link } from "react-router-dom";

const navLinks = [
  {
    text: "ABOUT US",
    path: "/about",
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
  return (
    <nav>
      <div className="bg-primaryGrey py-4 zr:hidden lg:flex">
        <div className="w-full max-w-max mx-auto flex justify-end">
          <div className="flex gap-12 items-center">
            <div className="flex text-primaryPurple text-2xl gap-8">
              <span>
                <IoLogoFacebook />
              </span>
              <span>
                <FaLinkedin />
              </span>
            </div>
            <div className="flex gap-2 items-center text-l text-primaryPurple">
              <span>
                <FaPhone />
              </span>
              <p>+234 80 300 0000</p>
            </div>
            <div className="flex gap-2 items-center text-l text-primaryPurple">
              <span>
                <IoMail />
              </span>
              <p>info@brics.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="flex py-1 justify-between max-w-max mx-auto">
          <Link to={"/"}>
            {" "}
            <span className="text-[60px]">BRICS</span>
          </Link>

          <div className="flex  items-center">
            {navLinks.map((item, index) => (
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
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
