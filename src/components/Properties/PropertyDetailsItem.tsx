import { useEffect, useState } from "react";
import {
  IoCalendarOutline,
  IoLocationSharp,
  IoMailOutline,
} from "react-icons/io5";
import { CiWarning } from "react-icons/ci";
import { MdOutlineBed, MdOutlinePersonOutline } from "react-icons/md";
import { TbBath } from "react-icons/tb";
import { LuToilet } from "react-icons/lu";
import { FaChevronLeft, FaChevronRight, FaPhone } from "react-icons/fa6";
import FeaturedPropertyItem from "../Landing/FeaturedPropertyItem";
import QuickSearch from "./QuickSearch";

const images = ["building", "buildingtwo", "building", "buildingtwo"];

const PropertyDetailsItem = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const { pathname } = window.location;

  const id = pathname.split("/")[2];

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (activeIndex >= images.length - 1) {
        setActiveIndex(0);
        return;
      }
      setActiveIndex((prev) => prev + 1);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [activeIndex]);

  const handleToggle = (mode: string) => {
    if (mode === "right") {
      if (activeIndex >= images.length - 1) {
        setActiveIndex(0);
        return;
      }
      setActiveIndex((prev) => prev + 1);
    } else if (mode === "left") {
      if (activeIndex === 0) {
        setActiveIndex(images.length - 1);
        return;
      }
      setActiveIndex((prev) => prev - 1);
    }
  };

  return (
    <section className="py-40 bg-slate-100">
      <div className="w-full max-w-max mx-auto flex gap-14">
        <div className="w-full max-w-[65%]">
          <div className="bg-white py-6 px-8 flex flex-col gap-2">
            <h2 className="text-2xl font-semibold flex justify-between">
              <span>ROOM SELF CONTAINED</span>
              <span>₦ 150,000</span>
            </h2>
            <p className="flex gap-2 font-light items-center">
              <span>
                <IoLocationSharp />
              </span>
              <span>
                OFF ALAJA RD, MEGIDA, AYOBO IPAJA , LAGOS MAINLAND, LAGOS
              </span>
            </p>
            <p className="font-light">
              <span>PROPERTY ID: </span>
              <span>{id}</span>
            </p>

            <div className="flex gap-2 items-center">
              <p className="text-white flex gap-1 items-center bg-red-400 py-1 px-2 rounded-[3px] w-fit text-sm">
                <span>
                  <CiWarning />
                </span>
                <span>WARNING:</span>
              </p>
              <p className="text-red-400 text-sm uppercase">
                Do not make any payment until you confirm the property
              </p>
            </div>
          </div>
          <div className="mt-10 p-8 bg-white">
            <div className="relative w-full h-[800px]">
              <img
                src={`/${images[activeIndex]}.jpg`}
                alt="image"
                className="w-full h-full object-cover"
              />
              <div className="absolute h-full flex items-center left-5 top-0">
                <button
                  onClick={() => handleToggle("left")}
                  className="p-2 bg-primaryPurple text-white rounded-full"
                >
                  <span>
                    <FaChevronLeft size={30} />
                  </span>
                </button>
              </div>
              <div className="absolute h-full flex items-center right-5 top-0">
                <button
                  onClick={() => handleToggle("right")}
                  className="p-2 bg-primaryPurple text-white rounded-full"
                >
                  <span>
                    <FaChevronRight size={30} />
                  </span>
                </button>
              </div>
            </div>
            <div className="flex">
              {images.map((item, index) => (
                <div
                  key={index}
                  className={`w-full  h-[150px] max-w-[100px] ${
                    activeIndex === index && "opacity-60"
                  } `}
                  onClick={() => setActiveIndex(index)}
                >
                  <img
                    src={`/${item}.jpg`}
                    alt="image"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            <h2 className="mt-10 text-lg font-medium">Description</h2>
            <p className="my-5 font-light">
              ROOM SELF CONTAINED, TO LET A ROOM SELF AT ALAJA ROAD AYOBO 150K
              PER ANNUM OLAMIDE.
            </p>
            <p className="font-light">Self Contain, For Rent.</p>

            <h2 className="mt-10 text-lg font-medium">Condition</h2>

            <div className="grid grid-cols-3 mt-5">
              <p className="flex items-center font-light gap-2">
                <span>
                  <MdOutlineBed />
                </span>
                <span>1 Rooms</span>
              </p>
              <p className="flex items-center font-light gap-2">
                <span>
                  <TbBath />
                </span>
                <span>1 Bathroom</span>
              </p>
              <p className="flex items-center font-light gap-2">
                <span>
                  <LuToilet />
                </span>
                <span>1 Toilet</span>
              </p>
            </div>

            <h2 className="mt-10 text-lg font-medium">Agent</h2>

            <button className="flex gap-2 px-10 py-4 bg-primaryPurple text-white items-center text-sm mt-5 rounded-full">
              <span>
                <FaPhone />
              </span>
              <span>
                <IoMailOutline />
              </span>
              <span>CONTACT AGENT</span>
            </button>

            <div className="grid grid-cols-2 gap-5 mt-10">
              <p className="flex items-center gap-2 text-sm font-light">
                <span>
                  <MdOutlinePersonOutline />
                </span>
                <span>Marketed by: Grandview Integrated Link</span>
              </p>
              <p className="flex items-center gap-2 text-sm font-light">
                <span>
                  <IoCalendarOutline />
                </span>
                <span>
                  <span className="font-medium">Added:</span> July 5th, 2024
                </span>
              </p>
              <p className="flex items-center gap-2 text-sm font-light">
                <span>
                  <MdOutlinePersonOutline />
                </span>
                <span>Telephone: 0803003000</span>
              </p>
              <p className="flex items-center gap-2 text-sm font-light">
                <span>
                  <IoCalendarOutline />
                </span>
                <span>
                  <span className="font-medium">Updated:</span> July 7th, 2024
                </span>
              </p>
              <p className="flex items-center gap-2 text-sm font-light">
                <span>
                  <MdOutlinePersonOutline />
                </span>
                <span>Mail: info@brics.com</span>
              </p>
            </div>
          </div>
        </div>
        <QuickSearch />
      </div>
      <div className="mt-20 w-full max-w-max mx-auto">
        <h3 className="text-xl font-medium">Related Properties</h3>
        <div className="mt-10 flex gap-10">
          {Array.from({ length: 4 }, (_, index) => (
            <FeaturedPropertyItem key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyDetailsItem;
