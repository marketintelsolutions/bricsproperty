import React, { useState } from "react";
import { useDisclosure } from "../../utils/useDisclosure";
import TeamMemberModal from "../Modals/TeamMemberModal";
import SlideIn from "../SlideIn";

const values = [
  {
    image: "building",
    text: "service",
  },
  {
    image: "building",
    text: "professionalism",
  },
  {
    image: "building",
    text: "integrity",
  },
  {
    image: "building",
    text: "respect",
  },
  {
    image: "building",
    text: "innovation",
  },
  {
    image: "building",
    text: "team spirit",
  },
];

const whychooseus = [
  {
    title: "Bespoke Solutions",
    text:
      "For us at BRICS, each client's requirements are different. Our approach is tailor-made to your unique requirement.",
    icon: "solution",
  },
  {
    title: "Committed to Innovation",
    text:
      "We provide comprehensive solutions and best-in-class technology delivery service excellence that not only meets but exceeds expectations. The permanent quest for better solutions has shaped our uniquely integrated solutions.",
    icon: "innovation",
  },
  {
    title: "Unique Engineering Solutions",
    text:
      "Our engineering solution team brings a full spectrum technical expertise to address the most complex facilities challenges.",
    icon: "engineer",
  },
  {
    title: "Quality",
    text:
      "We are dedicated in delivering exceptional services across all sectors we operate in. Our clients can always expect unparalleled value and top-tier quality from us.",
    icon: "quality",
  },
  {
    title: "Superb Human Touch",
    text:
      "As your strategic partners we have the people empowerment developed to have the best service mindset in the industry, turning local best practices into global procedures.",
    icon: "touch",
  },
];

const AboutDetails = () => {
  return (
    <section className="w-full max-w-max mx-auto py-20 md:py-40">
      <SlideIn duration={1200} distance={70} direction="bottom" delay={150}>
        <h1 className="text-center text-[35px] md:text-[40px] lg:text-[50px] font-semibold text-primaryPurple">
          ABOUT{" "}
          <span className="text-primaryRed border-b-4 border-primaryRed pb-1">
            US
          </span>
        </h1>
      </SlideIn>

      <div className="w-full flex flex-wrap items-center justify-between px-6 mt-10 md:mt-20 gap-20">
        <div className="w-full md:max-w-[45%] text-justify flex flex-col gap-10">
          <SlideIn duration={1200} distance={70} direction="left" delay={150}>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex
              possimus, nesciunt et animi neque hic, deserunt quae impedit
              cupiditate libero blanditiis, cum alias eius maxime pariatur
              repellat dolores molestias temporibus!
            </p>
          </SlideIn>
          <SlideIn duration={1200} distance={70} direction="left" delay={250}>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Sapiente, tempore voluptatum repudiandae voluptatibus, quidem at
              iste inventore iure eos ducimus dolor architecto recusandae est
              accusantium tenetur quod assumenda libero eum exercitationem nam
              ea. Cumque nisi doloremque distinctio eaque! Dolore, aut.
            </p>
          </SlideIn>
          <SlideIn duration={1200} distance={70} direction="left" delay={350}>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
              itaque qui nulla libero corrupti aperiam officiis ratione aliquid,
              deserunt eligendi!
            </p>
          </SlideIn>
        </div>

        <div className="w-full h-[350px] md:max-w-[45%]">
          <img
            src="/building.jpg"
            alt="building"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <SlideIn duration={1200} distance={70} direction="bottom" delay={150}>
        <h1 className="text-center mt-20 md:mt-40 text-[35px] md:text-[40px] lg:text-[50px] font-semibold text-primaryPurple">
          OUR{" "}
          <span className="text-primaryRed border-b-4 border-primaryRed pb-1">
            MISSION
          </span>
        </h1>
      </SlideIn>

      <SlideIn duration={1200} distance={70} direction="bottom" delay={250}>
        <p className="text-center max-w-[600px] px-6 md:px-0 mt-10 text-[#373737] font-light text-base md:text-lg mx-auto">
          To help our customers generate maximum returns through efficient
          development, targeted marketing, and effective management of
          infrastructure{" "}
        </p>
      </SlideIn>
      <SlideIn duration={1200} distance={70} direction="bottom" delay={150}>
        <h1 className="text-center mt-20 md:mt-40 text-[35px] md:text-[40px] lg:text-[50px] font-semibold text-primaryPurple">
          OUR{" "}
          <span className="text-primaryRed border-b-4 border-primaryRed pb-1">
            VISION
          </span>
        </h1>
      </SlideIn>

      <SlideIn duration={1200} distance={70} direction="bottom" delay={250}>
        <p className="text-center max-w-[600px] px-6 md:px-0 mt-10 text-[#373737] font-light text-base md:text-lg mx-auto">
          To be the best-in-class and preferred ifrastructure <br />{" "}
          organisation in Africa
        </p>
      </SlideIn>

      <SlideIn duration={1200} distance={70} direction="bottom" delay={150}>
        <h1 className="text-center mt-20 md:mt-40 text-[35px] md:text-[40px] lg:text-[50px] font-semibold text-primaryPurple">
          OUR{" "}
          <span className="text-primaryRed border-b-4 border-primaryRed pb-1">
            VALUES
          </span>
        </h1>
      </SlideIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-10 lg:px-0 gap-8 mt-10">
        {values.map((item, index) => (
          <SlideIn
            duration={1200}
            distance={70}
            direction="left"
            delay={index * 150}
          >
            <div key={index} className="flex flex-col">
              <img
                src={`/${item.image}.jpg`}
                alt={item.text}
                className="h-[250px] object-cover"
              />
              <p className="bg-primaryGrey uppercase py-3 text-[#373737] font-light text-center">
                {item.text}
              </p>
            </div>
          </SlideIn>
        ))}
      </div>

      <SlideIn duration={1200} distance={70} direction="bottom" delay={150}>
        <h1 className="text-center mt-40 text-[35px] md:text-[40px] lg:text-[50px] font-semibold text-primaryPurple">
          WHY CHOOSE{" "}
          <span className="text-primaryRed border-b-4 border-primaryRed pb-1">
            US
          </span>
        </h1>
      </SlideIn>

      <div className="mt-20 gap-14 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-10 lg:px-0 w-full max-w-max">
        {whychooseus.map((item, index) => (
          <SlideIn
            duration={1200}
            distance={70}
            direction="left"
            delay={index * 150}
          >
            <div
              key={index}
              className="bg-primaryRed text-white flex h-full flex-col items-center py-8 md:py-10 px-8 md:px-10"
            >
              <img
                src={`/${item.icon}.png`}
                alt={item.title}
                className="h-[100px]"
              />
              <h3 className="mt-8 h-[40px] text-2xl text-center font-semibold">
                {item.title}
              </h3>
              <p className="mt-14">{item.text}</p>
            </div>
          </SlideIn>
        ))}
      </div>
    </section>
  );
};

export default AboutDetails;
