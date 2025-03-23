import React, { useState } from "react";
import { useDisclosure } from "../../utils/useDisclosure";
import TeamMemberModal from "../Modals/TeamMemberModal";

const values = [
  {
    image: "building",
    text: "service",
  },
  {
    image: "building",
    text: "professionalism",
  },
  {
    image: "building",
    text: "integrity",
  },
  {
    image: "building",
    text: "respect",
  },
  {
    image: "building",
    text: "innovation",
  },
  {
    image: "building",
    text: "team spirit",
  },
];

const team = [
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

const AboutDetails = () => {
  const [selectedTeamMember, setSelectedTeamMember] = useState(team[0]);

  const teamMemberModal = useDisclosure();

  return (
    <section className="w-full max-w-max mx-auto py-40">
      <h1 className="text-center text-[50px] font-semibold text-primaryPurple">
        ABOUT US
      </h1>

      <div className="w-full flex items-center justify-between mt-20 gap-20">
        <div className="w-full max-w-[45%] text-justify flex flex-col gap-10">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex
            possimus, nesciunt et animi neque hic, deserunt quae impedit
            cupiditate libero blanditiis, cum alias eius maxime pariatur
            repellat dolores molestias temporibus!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
            tempore voluptatum repudiandae voluptatibus, quidem at iste
            inventore iure eos ducimus dolor architecto recusandae est
            accusantium tenetur quod assumenda libero eum exercitationem nam ea.
            Cumque nisi doloremque distinctio eaque! Dolore, aut.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
            itaque qui nulla libero corrupti aperiam officiis ratione aliquid,
            deserunt eligendi!
          </p>
        </div>

        <div className="w-full h-[350px] max-w-[45%]">
          <img
            src="/building.jpg"
            alt="building"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <h1 className="text-center mt-40 text-[50px] font-semibold text-primaryPurple">
        OUR MISSION
      </h1>

      <p className="text-center max-w-[600px] mt-10 text-[#373737] font-light text-lg mx-auto">
        To help our customers generate maximum returns through efficient
        development, targeted marketing, and effective management of
        infrastructure{" "}
      </p>
      <h1 className="text-center mt-40 text-[50px] font-semibold text-primaryPurple">
        OUR VISION
      </h1>

      <p className="text-center max-w-[600px] mt-10 text-[#373737] font-light text-lg mx-auto">
        To be the best-in-class and preferred ifrastructure <br /> organisation
        in Africa
      </p>

      <h1 className="text-center mt-40 text-[50px] font-semibold text-primaryPurple">
        OUR VALUES
      </h1>

      <div className="grid grid-cols-3 gap-8 mt-10">
        {values.map((item, index) => (
          <div key={index} className="flex flex-col">
            <img
              src={`/${item.image}.jpg`}
              alt={item.text}
              className="h-[250px] object-cover"
            />
            <p className="bg-primaryGrey uppercase py-3 text-[#373737] font-light text-center">
              {item.text}
            </p>
          </div>
        ))}
      </div>

      <h1 className="text-center mt-40 text-[50px] font-semibold text-primaryPurple">
        OUR BOARD
      </h1>

      <div className="grid  grid-cols-2 w-full max-w-[50%] mx-auto mt-20  gap-20 justify-center">
        {team.map((item, index) => (
          <div
            onClick={() => {
              teamMemberModal.open();
              setSelectedTeamMember(item);
            }}
            key={index}
            className="w-full overflow-hidden "
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

export default AboutDetails;
