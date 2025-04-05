import CinemaBg from "../CinemaBg";
import SlideIn from "../SlideIn";
import SearchFilter from "./SearchFilter";

const SectionTwo = () => {
  return (
    <section className="relative  w-full">
      <div
        className="relative   pb-0"
        style={{
          backgroundImage: "url(/proptech.jpg)",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute w-full h-full bg-[#29272646]"></div>

        <div className="relative">
          <SearchFilter />

          <div>
            <SlideIn duration={1200} distance={70} direction="left" delay={150}>
              <h1 className="text-center uppercase mt-10 font-semibold text-2xl md:text-3xl lg:text-4xl text-white">
                Property Search In Nigeria Made Easy
              </h1>
            </SlideIn>

            <div className="w-full mt-20 max-w-max mx-auto flex flex-wrap gap-40">
              <div className="py-10 px-14 w-full md:max-w-[45%] h-fit bg-primaryPurple flex flex-col gap-10 text-white">
                <div className="flex items-center gap-6 md:gap-10">
                  <img
                    src="/asset.png"
                    alt="setting"
                    className="w-[50px] md:w-[80px]"
                  />
                  <SlideIn
                    duration={1200}
                    distance={70}
                    direction="left"
                    delay={250}
                  >
                    <div className="flex flex-col gap-2">
                      <p className="text-base md:text-xl">
                        Ensuring your properties are assets, not headaches
                      </p>
                      <p className="text-xs md:text-sm">
                        To ensure your properties are valuable assets and not
                        sources of stress.
                      </p>
                    </div>
                  </SlideIn>
                </div>
                <div className="flex items-center gap-6 md:gap-10">
                  <img
                    src="/unlock.png"
                    alt="setting"
                    className="w-[50px] md:w-[80px]"
                  />
                  <SlideIn
                    duration={1200}
                    distance={70}
                    direction="left"
                    delay={350}
                  >
                    <div className="flex flex-col gap-2">
                      <p className="text-base md:text-xl">
                        Unlock the Value of Your Property
                      </p>
                      <p className="text-xs md:text-sm">
                        Converting underused areas like attics and basements.
                      </p>
                    </div>
                  </SlideIn>
                </div>
                <div className="flex items-center gap-6 md:gap-10">
                  <img
                    src="/home.png"
                    alt="setting"
                    className="w-[50px] md:w-[80px]"
                  />
                  <SlideIn
                    duration={1200}
                    distance={70}
                    direction="left"
                    delay={450}
                  >
                    <div className="flex flex-col gap-2">
                      <p className="text-base md:text-xl">
                        Where Dreams Become Homes
                      </p>
                      <p className="text-xs md:text-sm">
                        This is where dreams come to life. You can discover a
                        dreamy real estate opportunity.
                      </p>
                    </div>
                  </SlideIn>
                </div>
              </div>
              <div className="w-full md:max-w-[50%]">
                <img src="/man.png" alt="man" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
