import { Link } from "react-router-dom";
import FeaturedPropertyItem from "./FeaturedPropertyItem";
import Partners from "./Partners";
import SlideIn from "../SlideIn";

const SectionThree = () => {
  return (
    <div className="py-20 bg-slate-100">
      <SlideIn duration={1200} distance={70} direction="bottom" delay={150}>
        <h2 className="text-center text-4xl font-semibold">
          FEATURED{" "}
          <span className="text-primaryRed border-b-4 border-primaryRed pb-1">
            PROPERTIES
          </span>
        </h2>
      </SlideIn>

      <div className="w-full mt-10 max-w-max mx-auto  flex gap-10 ">
        {Array.from({ length: 4 }, (_, index) => (
          <SlideIn
            duration={1200}
            distance={70}
            direction="right"
            delay={150 * index}
          >
            <FeaturedPropertyItem key={index} />
          </SlideIn>
        ))}
      </div>

      <SlideIn duration={1200} distance={70} direction="bottom" delay={150}>
        <h2 className="text-center mt-40 text-4xl font-semibold">
          PROPERTIES{" "}
          <span className="text-primaryRed border-b-4 border-primaryRed pb-1">
            CATEGORIES
          </span>
        </h2>
      </SlideIn>

      <div className="flex justify-center mt-20 gap-3">
        <button className="bg-white px-6 py-1 uppercase rounded-full">
          All
        </button>
        <button className="bg-white px-6 py-1 uppercase rounded-full">
          Shop
        </button>
        <button className="bg-white px-6 py-1 uppercase rounded-full">
          Duplex
        </button>
        <button className="bg-white px-6 py-1 uppercase rounded-full">
          Bungalow
        </button>
        <button className="bg-white px-6 py-1 uppercase rounded-full">
          Spaces
        </button>
      </div>

      <div className="grid grid-cols-3 gap-10 max-w-max mx-auto mt-20">
        {Array.from({ length: 9 }, (_, index) => (
          <Link to={`/property-details/${index}`}>
            <SlideIn
              duration={1200}
              distance={70}
              direction="left"
              delay={index * 150}
            >
              <div
                key={index}
                className="relative  h-[400px] "
                style={{
                  backgroundImage: `url(/building.jpg)`,
                  backgroundSize: "cover",
                }}
              >
                <div className="absolute top-0  left-0 flex flex-col justify-between p-5  w-full h-full hover:bg-[#000000d1] bg-[#00000062]">
                  <div className="flex justify-between">
                    <p className="py-2 px-4 bg-black text-white">FEATURED</p>
                    <p className="py-2 px-4 bg-black text-white">FOR RENT</p>
                  </div>

                  <div className="text-white">
                    <h3 className="text-2xl">ROOM SELF CONTAINED</h3>
                    <p className="flex gap-10">
                      <span>1 bed</span>
                      <span>1 bath</span>
                      <span>1 toilet</span>
                    </p>
                    <p className="flex gap-8">
                      <span>Posted by 22nd February, 2020</span>
                      <span>#150000</span>
                    </p>
                  </div>
                </div>
              </div>
            </SlideIn>
          </Link>
        ))}
      </div>

      <Partners />
    </div>
  );
};

export default SectionThree;
