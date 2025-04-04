import React from "react";
import AboutBanner from "../components/About/AboutBanner";
import { services } from "../utils/data";
import { GoDotFill } from "react-icons/go";
import SlideIn from "../components/SlideIn";

const Services = () => {
  return (
    <div>
      <AboutBanner heading={"PROPERTY SEARCH"} text="" video="services" />

      <div className="flex flex-col gap-20 md:gap-24 lg:gap-28 w-full max-w-max mx-auto px-6 lg:px-0 py-40">
        {services.map((item, index) => (
          <div
            key={index}
            className={`flex items-center gap-14 md:gap-20 pb-28 border-b-2 border-primaryGrey ${
              index % 2 === 0
                ? "flex-col md:flex-row"
                : "flex-col md:flex-row-reverse"
            }`}
          >
            <div className="w-full md:max-w-[45%] h-[300px] md:h-[500px]">
              <img
                src={`/${item.image}.jpg`}
                alt={item.heading}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full md:max-w-[50%] flex flex-col gap-10">
              <SlideIn
                duration={1200}
                distance={70}
                direction="left"
                delay={150}
              >
                <h2 className="text-2xl md:text-4xl font-semibold text-primaryPurple">
                  {item.heading}
                </h2>
              </SlideIn>
              <div className="flex flex-col gap-5">
                {item.text.map((textItem, index) => (
                  <SlideIn
                    duration={1200}
                    distance={70}
                    direction="left"
                    delay={index * 250}
                  >
                    <p key={index} className="text-base md:text-lg">
                      {textItem}
                    </p>
                  </SlideIn>
                ))}
              </div>
              {item.list.length > 0 && (
                <ul className="flex flex-col gap-3">
                  {item.list.map((listItem, index) => (
                    <SlideIn
                      duration={1200}
                      distance={70}
                      direction="left"
                      delay={index * 250}
                    >
                      <li
                        key={index}
                        className="flex gap-2 items-center text-base md:text-lg"
                      >
                        <span>
                          <GoDotFill />
                        </span>
                        <span>{listItem}</span>
                      </li>
                    </SlideIn>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
