import React from "react";
import AboutBanner from "../components/About/AboutBanner";
import SlideIn from "../components/SlideIn";

const Projects = () => {
  return (
    <div>
      <AboutBanner heading={"PROPERTY SEARCH"} text="" />
      <SlideIn duration={1200} distance={70} direction="bottom" delay={150}>
        <h2 className="text-center mt-40 text-4xl font-semibold">
          HEALTH SAFETY AND{" "}
          <span className="text-primaryRed border-b-4 border-primaryRed pb-1">
            MANAGEMENT
          </span>
        </h2>
      </SlideIn>

      <div className="flex gap-20 justify-center h-[1150px] my-20">
        <div className="w-fit h-full flex flex-col  gap-0 justify-between ">
          <SlideIn duration={1200} distance={70} direction="left" delay={150}>
            <div className="flex border flex-col items-center p-10 gap-0 bg-primaryRed w-full max-w-[450px] ">
              <div className="border-b-2 pb-5 w-[200px] border-white">
                <img
                  src="/worker.png"
                  alt="worker"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-black text-left w-full mt-10 mb-5 text-2xl font-semibold">
                Health and Safety
              </h3>
              <p className="text-white text-justify text-lg">
                BRICS is committed to maintaining a safe and healthy environment
                for Houseownwers, residents, employees, contractors and other
                stakeholders who partner with us
              </p>
            </div>
          </SlideIn>
          <SlideIn duration={1200} distance={70} direction="bottom" delay={150}>
            <div className="flex border flex-col items-center p-10 gap-0 bg-primaryRed w-full max-w-[450px] ">
              <div className="border-b-2 pb-5 w-[200px] border-white">
                <img
                  src="/meeting.png"
                  alt="worker"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-black text-left w-full mt-10 mb-5 text-2xl font-semibold">
                Environment
              </h3>
              <p className="text-white text-justify text-lg">
                BRICS continually accesses and minimizes environmental impact to
                as low as resonably practicable. We operate with compliance with
                all relevant legislation
              </p>
            </div>
          </SlideIn>
        </div>
        <div className="w-full  max-w-[40%] h-full">
          <img
            src="/safety.jpg"
            alt="safety"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
