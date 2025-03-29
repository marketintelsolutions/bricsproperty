import { ReactElement, useEffect, useState, useRef, useCallback } from "react";
import { IoLocationOutline, IoSearchOutline } from "react-icons/io5";
import { FiHome } from "react-icons/fi";
import { MdOutlineBed } from "react-icons/md";

interface ActiveGroupDetails {
  icon: ReactElement | null;
  items: string[] | null;
  minPrices: string[];
  maxPrices: string[];
}

const propertiesData = {
  rent: {
    heading: "rent",
    locations: {
      icon: <IoLocationOutline />,
      items: ["Lekki", "Ajah", "Ikeja", "Ibadan", "Victoria Island"],
    },
    propertyType: {
      icon: <FiHome />,
      items: ["Flat / Apartment", "Commercial Properties", "Land", "Houses"],
    },
    bedroom: {
      icon: <MdOutlineBed />,
      items: [
        "Any Bedroom",
        "2 bedroom",
        "3 bedroom",
        "4 bedroom",
        "5 bedroom",
        "6 bedroom",
        "7 bedroom",
      ],
    },
    minPrices: [
      "1,000,000",
      "2,500,000",
      "4,000,000",
      "6,000,000",
      "10,000,000",
      "15,000,000",
      "20,000,000",
    ],
    maxPrices: [
      "2,500,000",
      "4,000,000",
      "6,000,000",
      "10,000,000",
      "15,000,000",
      "20,000,000",
      "30,000,000",
    ],
  },
  sale: {
    heading: "Sale",
    locations: {
      icon: <IoLocationOutline />,
      items: ["Edo", "Bauchi", "Abuja", "Ibadan", "Victoria Island"],
    },
    propertyType: {
      icon: <FiHome />,
      items: ["Bungalow", "Story Building", "Land", "Houses"],
    },
    bedroom: {
      icon: <MdOutlineBed />,
      items: [
        "Any Bedroom",
        "2 bedroom",
        "3 bedroom",
        "4 bedroom",
        "5 bedroom",
        "6 bedroom",
        "7 bedroom",
      ],
    },
    minPrices: [
      "1,000,000",
      "2,500,000",
      "4,000,000",
      "6,000,000",
      "10,000,000",
      "15,000,000",
      "20,000,000",
    ],
    maxPrices: [
      "2,500,000",
      "4,000,000",
      "6,000,000",
      "10,000,000",
      "15,000,000",
      "20,000,000",
      "30,000,000",
    ],
  },
};

const SearchFilter = () => {
  const [activeTab, setActiveTab] = useState("rent");
  const [activeGroup, setActiveGroup] = useState<string | null>("");
  const [activeGroupDetails, setActiveGroupDetails] = useState<
    ActiveGroupDetails
  >();
  const [dropdownPosition, setDropdownPosition] = useState({ left: 0 });
  const [isDropdownVisible, setIsDropdownVisible] = useState(true);

  // Define a proper type for the ref object
  const buttonRefs = useRef<{
    locations: HTMLButtonElement | null;
    propertyType: HTMLButtonElement | null;
    bedroom: HTMLButtonElement | null;
    price: HTMLButtonElement | null;
  }>({
    locations: null,
    propertyType: null,
    bedroom: null,
    price: null,
  });

  // Ref for the component wrapper
  const componentRef = useRef<HTMLDivElement>(null);
  // Ref for the dropdown
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activeGroup === "price") {
      setActiveGroupDetails({
        minPrices: propertiesData[activeTab].minPrices,
        maxPrices: propertiesData[activeTab].maxPrices,
      } as ActiveGroupDetails);
      return;
    }

    if (activeGroup) {
      setActiveGroupDetails(propertiesData[activeTab][activeGroup]);
    }
  }, [activeGroup, activeTab]);

  // Update position when active group changes
  useEffect(() => {
    if (activeGroup) {
      const buttonElement = buttonRefs.current[activeGroup];
      if (buttonElement) {
        const rect = buttonElement.getBoundingClientRect();
        setDropdownPosition({
          left: rect.left - 90,
        });
      }
    }
  }, [activeGroup]);

  // Close dropdown when clicking outside
  const handleClickOutside = useCallback((event: MouseEvent) => {
    // If the click is outside both the component and dropdown
    if (
      componentRef.current &&
      !componentRef.current.contains(event.target as Node) &&
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsDropdownVisible(false);
    }
  }, []);

  // Set up click outside listener
  useEffect(() => {
    // Only add the event listener if the dropdown is visible
    if (isDropdownVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Clean up the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownVisible, handleClickOutside]);

  const handleGroupChange = (group) => {
    // If clicking the same group, toggle the dropdown visibility
    if (activeGroup === group) {
      setIsDropdownVisible(!isDropdownVisible);
    } else {
      // If clicking a different group, show the dropdown and set active group
      setActiveGroup(group);
      setIsDropdownVisible(true);
    }
  };

  return (
    <div
      ref={componentRef}
      className="w-full max-w-[1250px] mx-auto relative flex flex-col justify-center items-center translate-y-[-0px]"
    >
      <div className="flex py-3 px-8 bg-white rounded-t-[20px]">
        {Object.keys(propertiesData).map((item, index) => (
          <button
            onClick={() => setActiveTab(item)}
            key={index}
            className={`py-3 px-8 rounded-[6px] capitalize ${
              activeTab === item && "bg-primaryGrey"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="w-full grid grid-cols-5 px-10 py-8 rounded-[20px] bg-white">
        <div className="border-r text-sm px-4">
          <button
            ref={(el) => {
              buttonRefs.current.locations = el;
            }}
            onClick={() => handleGroupChange("locations")}
            className={`flex flex-col items-start px-6 py-3 border-primaryGrey gap-3 ${
              activeGroup === "locations" && isDropdownVisible
                ? "shadow-[0px_2px_25px_15px_rgba(0,0,0,0.1)] rounded-full"
                : ""
            }`}
          >
            <span>Location</span>
            <span className="text-gray-400">Search Location</span>
          </button>
        </div>

        <div className="border-r text-sm px-4">
          <button
            ref={(el) => {
              buttonRefs.current.propertyType = el;
            }}
            onClick={() => handleGroupChange("propertyType")}
            className={`flex flex-col items-start px-6 py-3 border-primaryGrey gap-3 ${
              activeGroup === "propertyType" && isDropdownVisible
                ? "shadow-[0px_2px_25px_15px_rgba(0,0,0,0.1)] rounded-full"
                : ""
            }`}
          >
            <span>Property Type</span>
            <span className="text-gray-400">Type</span>
          </button>
        </div>

        <div className="border-r text-sm px-4">
          <button
            ref={(el) => {
              buttonRefs.current.bedroom = el;
            }}
            onClick={() => handleGroupChange("bedroom")}
            className={`flex flex-col items-start px-6 py-3 border-primaryGrey gap-3 ${
              activeGroup === "bedroom" && isDropdownVisible
                ? "shadow-[0px_2px_25px_15px_rgba(0,0,0,0.1)] rounded-full"
                : ""
            }`}
          >
            <span>Bedroom</span>
            <span className="text-gray-400">Number of Bedroom</span>
          </button>
        </div>

        <div className="border-r text-sm px-4">
          <button
            ref={(el) => {
              buttonRefs.current.price = el;
            }}
            onClick={() => handleGroupChange("price")}
            className={`flex flex-col items-start px-6 py-3 border-primaryGrey gap-3 ${
              activeGroup === "price" && isDropdownVisible
                ? "shadow-[0px_2px_25px_15px_rgba(0,0,0,0.1)] rounded-full"
                : ""
            }`}
          >
            <span>Price</span>
            <span className="text-gray-400">Min - Max Price</span>
          </button>
        </div>

        <div className="h-full flex items-center">
          <button className="bg-primaryGrey flex h-fit items-center gap-1 py-4 px-8 rounded-[6px] text-white w-fit mx-auto">
            <span>
              <IoSearchOutline size={25} />
            </span>
            <span>Search</span>
          </button>
        </div>
      </div>

      {isDropdownVisible && activeGroup && (
        <div
          ref={dropdownRef}
          className="absolute top-[110%] bg-white px-10 min-w-[400px] py-8 flex flex-col gap-5 rounded-[20px] shadow-lg z-10"
          style={dropdownPosition}
        >
          {activeGroup === "price" ? (
            <div className="flex gap-20">
              <div className="flex flex-col gap-10">
                <h4>Min Price</h4>
                <div className="flex flex-col gap-5">
                  {activeGroupDetails?.minPrices?.map((item, index) => (
                    <p key={index} className="">
                      <span>#{item}</span>
                    </p>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-10">
                <h4>Max Price</h4>
                <div className="flex flex-col gap-5">
                  {activeGroupDetails?.maxPrices?.map((item, index) => (
                    <p key={index} className="">
                      <span>#{item}</span>
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            activeGroupDetails?.items?.map((item, index) => (
              <p key={index} className="flex gap-3 items-center">
                <span className="inline-flex p-3 text-xl bg-primaryGrey rounded-[4px]">
                  {activeGroupDetails?.icon}
                </span>
                <span>{item}</span>
              </p>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default SearchFilter;
