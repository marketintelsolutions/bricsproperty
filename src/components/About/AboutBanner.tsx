const AboutBanner: React.FC<{
  heading: string;
  text: string;
  video: string;
}> = ({ heading, text, video }) => {
  return (
    <div className="flex flex-col md:flex-row md:max-h-[600px]">
      <div className="flex flex-col gap-5 justify-center items-center py-20 md:py-40 px-6 md:px-20 md:min-h-[600px] w-full  md:max-w-[40%] bg-primaryRed text-white">
        <h1 className="text-4xl md:text-6xl">BRICS</h1>

        <p className="text-2xl text-center md:text-4xl font-semibold mt-10 md:mt-20">
          {heading}
        </p>
        <p className="text-base md:text-lg text-center">
          {text ||
            `This is where dreams come to life. You can discover a dreamy real
          estate opportunity.`}
        </p>
      </div>
      <div className="w-full">
        <div className="h-full  w-full">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            width="100%"
            height="100%"
          >
            <source src={`/videos/${video}.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        {/* <img src="/building.jpg" alt="building" className="h-full" /> */}
        {/* <CinemaBg /> */}
      </div>
    </div>
  );
};

export default AboutBanner;
