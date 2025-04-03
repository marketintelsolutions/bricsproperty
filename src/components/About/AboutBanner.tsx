import { Link } from "react-router-dom";
import CinemaBg from "../CinemaBg";

const AboutBanner: React.FC<{ heading: string; text: string }> = ({
  heading,
  text,
}) => {
  return (
    <div className="flex">
      <div className="flex flex-col gap-5 justify-center items-center py-40 px-20 min-h-[600px] w-full  max-w-[40%] bg-primaryRed text-white">
        <h1 className="text-6xl">BRICS</h1>
        {/* <Link to={"/"}>
          {" "}
          <span className="inline-flex w-full max-w-[250px] py-3">
            <img src="/logo.png" alt="logo" className="w-full h-full" />
          </span>
        </Link> */}
        <p className="text-4xl font-semibold mt-20">{heading}</p>
        <p className="text-lg text-center">
          {text ||
            `This is where dreams come to life. You can discover a dreamy real
          estate opportunity.`}
        </p>
      </div>
      <div className="w-full">
        <img src="/building.jpg" alt="building" className="h-full" />
        {/* <CinemaBg /> */}
      </div>
    </div>
  );
};

export default AboutBanner;
