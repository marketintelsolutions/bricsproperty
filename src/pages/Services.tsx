import React from "react";
import AboutBanner from "../components/About/AboutBanner";
import { services } from "../utils/data";
import { GoDotFill } from "react-icons/go";

const Services = () => {
  return (
    <div>
      <AboutBanner heading={"PROPERTY SEARCH"} text="" />

      <div className="flex flex-col gap-28 w-full max-w-max mx-auto py-40">
        {services.map((item, index) => (
          <div
            key={index}
            className={`flex items-center gap-20 pb-28 border-b-2 border-primaryGrey ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            <div className="w-full max-w-[45%] h-[500px]">
              <img
                src={`/${item.image}.jpg`}
                alt={item.heading}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full max-w-[50%] flex flex-col gap-10">
              <h2 className="text-4xl font-semibold text-primaryPurple">
                {item.heading}
              </h2>
              <div className="flex flex-col gap-5">
                {item.text.map((textItem, index) => (
                  <p key={index} className="text-lg">
                    {textItem}
                  </p>
                ))}
              </div>
              {item.list.length > 0 && (
                <ul className="flex flex-col gap-3">
                  {item.list.map((listItem, index) => (
                    <li key={index} className="flex gap-2 items-center text-lg">
                      <span>
                        <GoDotFill />
                      </span>
                      <span>{listItem}</span>
                    </li>
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
