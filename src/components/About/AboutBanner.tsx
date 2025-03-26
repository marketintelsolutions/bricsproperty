const AboutBanner: React.FC<{ heading: string; text: string }> = ({
  heading,
  text,
}) => {
  return (
    <div className="flex">
      <div className="flex flex-col gap-5 justify-center items-center py-40 px-20 min-h-[600px] w-full  max-w-[40%] bg-primaryPurple text-white">
        <h1 className="text-6xl">BRICS</h1>
        <p className="text-4xl font-semibold mt-20">{heading}</p>
        <p className="text-lg text-center">
          {text ||
            `This is where dreams come to life. You can discover a dreamy real
          estate opportunity.`}
        </p>
      </div>
      <div className="w-full">
        <img src="/building.jpg" alt="building" className="h-full" />
      </div>
    </div>
  );
};

export default AboutBanner;
