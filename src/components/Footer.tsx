import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { IoLocationOutline, IoMail } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";

const links = [
  {
    text: "Home",
    path: "/",
  },
  {
    text: "About",
    path: "/about",
  },
  {
    text: "Projects",
    path: "/projects",
  },
  {
    text: "Careers",
    path: "/careers",
  },
  {
    text: "Contact Us",
    path: "/contact",
  },
];

const Footer = () => {
  return (
    <footer className="relative border-2 text-primaryGrey pt-10 md:pt-40 pb-5 w-full ">
      <div className="h-full absolute top-0 left-0 w-full">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          width="100%"
          height="100%"
        >
          <source src={`/videos/footer.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="h-full absolute top-0 left-0 w-full bg-[#000000bc]"></div>
      <div className="relative z-[2] w-full max-w-max mx-auto">
        <div className="flex flex-wrap gap-20 px-6 justify-between">
          <div className="flex flex-col gap-6 md:gap-10 lg:gap-14">
            {links.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="text-sm uppercase underline"
              >
                {item.text}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-40">
            <h1 className="text-6xl text-center zr:hidden md:flex ">BRICS</h1>

            <div className="flex flex-col gap-10">
              <div className="flex items-center gap-5">
                <span>
                  <IoLocationOutline size={30} />
                </span>
                <p className="text-sm">
                  8a, Elsie Femi Pearse Street, Victoria Island, Lagos, Nigeria
                </p>
              </div>
              <div className="flex items-center gap-5">
                <span>
                  <FaPhoneAlt size={30} />
                </span>
                <p className="text-sm">+234(0)7076622382 | +234(0)2012718630</p>
              </div>
              <div className="flex items-center gap-5">
                <span>
                  <IoMail size={30} />
                </span>
                <p className="text-sm">info@bricsinfrastructure.com</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row md:flex-col gap-5">
            <span className="text-primaryGrey text-5xl">
              <FaFacebook />
            </span>
            <span className="text-primaryGrey text-5xl">
              <FaInstagram />
            </span>
            <span className="text-primaryGrey text-5xl">
              <FaLinkedin />
            </span>
          </div>
        </div>
        <div className="w-[80%] mx-auto border-t-2 border-white flex justify-center pt-16 mt-20">
          <Link to={"/projects"}>
            <button className="border border-primaryGrey hover:bg-primaryPurple hover:text-primaryGrey py-3 px-8 bg-primaryGrey text-primaryPurple">
              PROJECTS
            </button>
          </Link>
        </div>
        <p className="text-xs mt-10 text-center md:text-left">
          © {new Date().getFullYear()} By Brics Limited
        </p>
      </div>
    </footer>
  );
};

export default Footer;
