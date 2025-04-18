import React from "react";
import SlideIn from "../SlideIn";
import { Slide } from "@mui/material";

const Banner = () => {
  return (
    <section className="h-screen">
      <div className="relative h-full">
        <video
          className="absolute object-cover h-full"
          autoPlay
          loop
          muted
          width="100%"
          height="100%"
        >
          <source src="bannervid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="z-3 absolute w-full h-full flex justify-center items-center flex-col gap-10 text-white bg-[#00000066]">
          <SlideIn duration={1200} distance={70} direction="bottom" delay={150}>
            <h1 className="uppercase max-w-[400px] md:max-w-[800px] text-center text-[30px] md:text-[40px] lg:text-[48px]">
              Property Search In Nigeria Made Easy
            </h1>
          </SlideIn>
          <SlideIn duration={1200} distance={70} direction="bottom" delay={250}>
            <p className="text-[14px] max-w-[400px] md:max-w-[800px] text-center md:text-[17px]">
              This is where dreams come to life. You can discover a dreamy real
              estate opportunity.
            </p>
          </SlideIn>
          <SlideIn duration={1200} distance={70} direction="bottom" delay={350}>
            <button className="px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border border-primaryPurple hover:border-white hover:bg-transparent font-semibold bg-primaryPurple">
              GET STARTED NOW
            </button>
          </SlideIn>
        </div>
      </div>
    </section>
  );
};

export default Banner;
