import React, { useState } from "react";
import SlideIn from "../components/SlideIn";
import { useDisclosure } from "../utils/useDisclosure";
import TeamMemberModal from "../components/Modals/TeamMemberModal";
import AboutBanner from "../components/About/AboutBanner";
const board = [
  {
    name: "chris oshiafi",
    title: "chairman",
    image: "man",
  },
  {
    name: "sina alimi",
    title: "director",
    image: "man",
  },
  {
    name: "eric okoruwa",
    title: "director",
    image: "man",
  },
  {
    name: "nemtok gomwalk",
    title: "director",
    image: "man",
  },
];

const team = [
  {
    name: "kunle olufowora",
    title: "general manager",
    image: "man",
  },
  {
    name: "angela anetor",
    title: "business dev. manager",
    image: "man",
  },
  {
    name: "olusola agbeyi",
    title: "HCM/ CORP. Services",
    image: "man",
  },
  {
    name: "egbe oshikena",
    title: "legal/ co.",
    image: "man",
  },
];

const Team = () => {
  const [selectedTeamMember, setSelectedTeamMember] = useState(board[0]);

  const teamMemberModal = useDisclosure();

  return (
    <section className="w-full pb-40">
      <AboutBanner heading={"PROPERTY SEARCH"} text="" />
      <SlideIn duration={1200} distance={70} direction="bottom" delay={150}>
        <h1 className="text-center mt-40 text-[50px] font-semibold text-primaryPurple">
          OUR{" "}
          <span className="text-primaryRed border-b-4 border-primaryRed pb-1">
            BOARD
          </span>
        </h1>
      </SlideIn>

      <div className="grid  grid-cols-2 w-full max-w-[50%] mx-auto mt-20  gap-20 justify-center">
        {board.map((item, index) => (
          <SlideIn
            duration={1200}
            distance={70}
            direction="left"
            delay={index * 150}
          >
            <div
              onClick={() => {
                teamMemberModal.open();
                setSelectedTeamMember(item);
              }}
              key={index}
              className="w-full overflow-hidden cursor-pointer"
            >
              <img
                src={`/${item.image}.png`}
                alt={item.name}
                className="h-[300px] object-cover"
              />
              <div className="relative  bg-primaryPurple px-6 pb-4  text-white">
                <div className="absolute -rotate-[15deg] -top-[85%] left-0 h-[140px] w-[130%] flex justify-end bg-primaryPurple">
                  <div className="bg-primaryRed h-[15px] w-[70%] mt-3"></div>
                </div>
                <div className="relative flex flex-col gap-2 z-[2]">
                  <p className="text-xl uppercase text-primaryGrey">
                    {item.name}
                  </p>
                  <p className="text-lg uppercase font-light">{item.title}</p>
                </div>
              </div>
            </div>
          </SlideIn>
        ))}
      </div>

      <SlideIn duration={1200} distance={70} direction="bottom" delay={150}>
        <h1 className="text-center mt-40 text-[50px] font-semibold text-primaryPurple">
          OUR{" "}
          <span className="text-primaryRed border-b-4 border-primaryRed pb-1">
            TEAM
          </span>
        </h1>
      </SlideIn>

      <div className="grid  grid-cols-4 w-full max-w-max mx-auto mt-20  gap-20 justify-center">
        {team.map((item, index) => (
          <SlideIn
            duration={1200}
            distance={70}
            direction="left"
            delay={index * 150}
          >
            <div key={index} className="w-full overflow-hidden cursor-pointer">
              <img
                src={`/${item.image}.png`}
                alt={item.name}
                className="h-[300px] object-cover"
              />
              <div className="relative  bg-primaryPurple px-6 pb-4  text-white">
                <div className="absolute -rotate-[15deg] -top-[85%] left-0 h-[140px] w-[130%] flex justify-end bg-primaryPurple">
                  <div className="bg-primaryRed h-[15px] w-[70%] mt-3"></div>
                </div>
                <div className="relative flex flex-col gap-2 z-[2]">
                  <p className="text-xl uppercase text-primaryGrey">
                    {item.name}
                  </p>
                  <p className="text-lg uppercase font-light">{item.title}</p>
                </div>
              </div>
            </div>
          </SlideIn>
        ))}
      </div>

      {teamMemberModal.isOpen && (
        <TeamMemberModal
          selectedTeamMember={selectedTeamMember}
          modal={teamMemberModal}
        />
      )}
    </section>
  );
};

export default Team;
