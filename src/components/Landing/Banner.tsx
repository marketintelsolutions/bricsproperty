import React from "react";

const Banner = () => {
  return (
    <section className="h-screen">
      <div className="relative h-full">
        <video
          className="absolute"
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
          <h1 className="uppercase max-w-[800px] text-center text-[48px]">
            Property Search In Nigeria Made Easy
          </h1>
          <p className="text-[17px]">
            This is where dreams come to life. You can discover a dreamy real
            estate opportunity.
          </p>
          <button className="px-4 py-3 border border-primaryPurple hover:border-white hover:bg-transparent font-semibold bg-primaryPurple">
            GET STARTED NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
