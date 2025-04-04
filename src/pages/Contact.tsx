import React, { useEffect } from "react";
import { IoLocationOutline, IoMailOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import AboutBanner from "../components/About/AboutBanner";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import SlideIn from "../components/SlideIn";

const Contact = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <section>
      <div className="w-full h-[400px]">
        <img
          src="/contact.jpg"
          alt="contact"
          className="w-full h-full object-cover"
        />
      </div>
      <h1 className="w-full max-w-[60%] py-6 translate-y-[-50px] bg-primaryRed mx-auto text-center text-4xl text-white">
        CONTACT US
      </h1>

      <SlideIn duration={1200} distance={70} direction="bottom" delay={150}>
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl text-primaryPurple font-semibold mt-28 mb-10">
          Get In{" "}
          <span className="text-primaryRed border-b-4 border-primaryRed pb-1">
            Touch
          </span>
        </h1>
      </SlideIn>
      <SlideIn duration={1200} distance={70} direction="bottom" delay={250}>
        <p className="text-lg text-center px-6 lg:px-0 max-w-[600px] mx-auto">
          Do you want to make an inquiry, a complaint or do you just want to
          know more about us? Then you’re on the right page. Send us a message
          right here or contact us on any of the channels listed below
        </p>
      </SlideIn>

      <div className="py-20 w-full max-w-[1100px] mx-auto px-6 lg:px-0 flex flex-row-reverse flex-wrap gap-4  justify-between">
        {/* <SlideIn duration={1200} distance={70} direction="right" delay={150}> */}
        <div className="w-full md:w-fit flex flex-col gap-4 shadow-[0px_0px_15px_5px_rgba(0,0,0,0.1)] p-10 h-fit rounded-[6px]">
          <h1 className="text-[40px]">Contact Channels</h1>
          <p className="text-[20px] font-light">
            We would love to hear from you
          </p>
          <p className="text-[17px] font-extralight mt-12 flex gap-4">
            <span className="text-primaryRed">
              <IoLocationOutline size={50} />
            </span>
            <span>
              PLot 22, Akiogun New Market Road,
              <br /> Oniru Victoria Island, Lagos
            </span>
          </p>
          <p className="text-[17px] font-extralight mt-8 flex gap-4 items-center">
            <span className="text-primaryRed">
              <IoMailOutline size={50} />
            </span>
            <span className="text-black">
              hello@truebondglobalinvestments.com
            </span>
          </p>
          <p className="text-[17px] font-extralight mt-8 flex gap-4">
            <span className="text-primaryRed">
              <LuPhone size={50} />
            </span>
            <span className="text-black">
              {" "}
              09062447811, 07074521822, 09062979783,
              <br /> 09131038886, 09062979787
            </span>
          </p>
          <div className="flex mt-8 gap-5">
            <span className="text-primaryRed text-5xl">
              <FaFacebook />
            </span>
            <span className="text-primaryRed text-5xl">
              <FaInstagram />
            </span>
            <span className="text-primaryRed text-5xl">
              <FaLinkedin />
            </span>
          </div>
        </div>
        {/* </SlideIn> */}

        <form className="w-full lg:max-w-[50%] flex flex-col gap-10 p-10 rounded-[6px] bg-white shadow-[0px_0px_15px_5px_rgba(0,0,0,0.1)]">
          <h2>Send us a mail</h2>
          <div className="w-full flex flex-col gap-4">
            <label
              htmlFor="name"
              className="text-[15px] font-semibold text-gray-400"
            >
              Your name
            </label>
            <input
              type="text"
              id="name"
              className="focus:outline-none  focus:border-black pb-4 rounded-full px-4 py-5 bg-[rgba(194,196,200,0.48)]  text-base w-full"
            />
          </div>
          <div className="w-full flex flex-col gap-4">
            <label
              htmlFor="email"
              className="text-[15px] font-semibold text-gray-400"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="focus:outline-none focus:border-black pb-4 rounded-full px-4 py-5 bg-[rgba(194,196,200,0.48)]  text-sm w-full"
            />
          </div>
          {/* <div className="w-full flex flex-col gap-4">
            <label
              htmlFor="phone"
              className="text-[15px] font-semibold text-gray-400"
            >
              Phone number
            </label>
            <input
              type="number"
              id="phone"
              className="focus:outline-none focus:border-black pb-4 rounded-full px-4 py-5 bg-[rgba(194,196,200,0.48)] text-sm w-full"
            />
          </div> */}
          <div className="w-full flex flex-col gap-4">
            <label
              htmlFor="subject"
              className="text-[15px] font-semibold text-gray-400"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="focus:outline-none focus:border-black pb-4 rounded-full px-4 py-5 bg-[rgba(194,196,200,0.48)] text-sm w-full"
            />
          </div>
          <div className="w-full flex flex-col gap-4 mt-0">
            <label
              htmlFor="message"
              className="text-[15px] font-semibold text-gray-400"
            >
              Your Message
            </label>
            <textarea
              id="message"
              className="h-[120px] resize-none focus:outline-none focus:border-black pb-4 rounded-[10px] px-4 py-5 bg-[rgba(194,196,200,0.48)]  text-sm w-full"
            />
          </div>
          <button
            type="button"
            className="w-full py-4 mt-10 rounded-full bg-primaryRed  text-white hover:bg-black hover:text-white "
          >
            Send Message
          </button>
        </form>
      </div>

      {/* <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7489422254266!2d3.452132680637935!3d6.426292876971863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf508f117bcad%3A0xb4bb382611a28ced!2s22%20Akiogun%20Rd%2C%20Maroko%2C%20Lagos%20106104%2C%20Lagos!5e0!3m2!1sen!2sng!4v1732228086997!5m2!1sen!2sng"
          width="600"
          height="450"
          style={{ border: 0, width: "100%" }}
        ></iframe>
      </div> */}
    </section>
  );
};

export default Contact;
