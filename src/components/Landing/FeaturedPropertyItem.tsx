import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineBed } from "react-icons/md";
import { TbBath } from "react-icons/tb";
import { LuToilet } from "react-icons/lu";

const FeaturedPropertyItem = () => {
  return (
    <div>
      <img
        src="/building.jpg"
        alt="building"
        className="h-[350px] object-cover"
      />
      <div className="bg-white">
        <div className="p-5 flex flex-col gap-3">
          <h3>3 BEDROOM APARTMENT</h3>
          <p className="flex items-center gap-1">
            <span>
              <IoLocationSharp />
            </span>
            <span>Asokoro Axis, Area 11</span>
          </p>
        </div>
        <div className="border-t grid grid-cols-3 border-slate-100">
          <p className="flex gap-2 p-2 items-center border-r border-slate-100">
            <span>
              <MdOutlineBed />
            </span>
            <span>3 Bed</span>
          </p>
          <p className="flex gap-2 p-2 items-center border-r border-slate-100">
            <span>
              <TbBath />
            </span>
            <span>1 bath</span>
          </p>
          <p className="flex gap-2 p-2 items-center border-r border-slate-100">
            <span>
              <LuToilet />
            </span>
            <span>2 toilet</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPropertyItem;
