import SearchFilter from "./SearchFilter";

const SectionTwo = () => {
  return (
    <div
      className="relative  pb-0"
      style={{ backgroundImage: `url(/building.jpg)`, backgroundSize: "cover" }}
    >
      <div className="absolute w-full h-full bg-[#0000007d]"></div>
      <div className="relative z-[2]">
        <SearchFilter />

        <div>
          <h1 className="text-center uppercase font-semibold text-4xl text-white">
            Property Search In Nigeria Made Easy
          </h1>

          <div className="w-full mt-20 max-w-max mx-auto flex gap-40">
            <div className="py-10 px-14 w-full max-w-[45%] h-fit bg-primaryPurple flex flex-col gap-10 text-white">
              <div className="flex items-center gap-10">
                <img src="/setting.png" alt="setting" className="w-[80px]" />
                <div className="flex flex-col gap-2">
                  <p className="text-xl">
                    Ensuring your properties are assets, not headaches
                  </p>
                  <p className="text-sm">
                    To ensure your properties are valuable assets and not
                    sources of stress.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-10">
                <img src="/setting.png" alt="setting" className="w-[80px]" />
                <div className="flex flex-col gap-2">
                  <p className="text-xl">Unlock the Value of Your Property</p>
                  <p className="text-sm">
                    Converting underused areas like attics and basements.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-10">
                <img src="/setting.png" alt="setting" className="w-[80px]" />
                <div className="flex flex-col gap-2">
                  <p className="text-xl">Where Dreams Become Homes</p>
                  <p className="text-sm">
                    This is where dreams come to life. You can discover a dreamy
                    real estate opportunity.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full max-w-[50%]">
              <img src="/man.png" alt="man" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
