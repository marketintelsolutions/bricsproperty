import React from "react";

const QuickSearch = () => {
  return (
    <div className="w-full max-w-[400px] flex flex-col gap-20">
      <div className=" bg-white p-6 h-fit">
        <h2 className=" text-lg font-medium">Quick Search</h2>

        <form className="mt-8 flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <span className="text-sm text-red-400">Required*</span>
            <div className="py-3 px-4 border">
              <select
                name="propertyType"
                id="propertyType"
                className="w-full font-light text-sm"
              >
                <option value="self contain" hidden>
                  Property Types
                </option>
                <option value="self contain">Self Contain</option>
                <option value="flat">Flat</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-sm text-red-400">Required*</span>
            <div className="py-3 px-4 border">
              <select
                name="propertyStatus"
                id="propertyStatus"
                className="w-full font-light text-sm"
              >
                <option value="self contain" hidden>
                  Property Status
                </option>
                <option value="self contain">Self Contain</option>
                <option value="flat">Flat</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-sm text-red-400">Required*</span>
            <div className="py-3 px-4 border">
              <select
                name="state"
                id="state"
                className="w-full font-light text-sm"
              >
                <option value="self contain" hidden>
                  Select State
                </option>
                <option value="self contain">Lagos</option>
                <option value="flat">Abuja</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-sm text-red-400">Required*</span>
            <div className="py-3 px-4 border">
              <input
                type="text"
                name="city"
                id="city"
                className="w-full font-light text-sm"
                placeholder="City/Area"
              />
            </div>
          </div>
          <div className="py-3 px-4 border">
            <select
              name="rooms"
              id="rooms"
              className="w-full font-light text-sm"
            >
              <option value="self contain" hidden>
                No of Room
              </option>
              <option value="self contain">1 room</option>
              <option value="flat">2 rooms</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="py-3 px-4 border">
              <select
                name="minprice"
                id="minprice"
                className="w-full font-light text-sm"
              >
                <option value="self contain" hidden>
                  Min Price
                </option>
                <option value="self contain">50,000</option>
                <option value="flat">100,000</option>
              </select>
            </div>
            <div className="py-3 px-4 border">
              <select
                name="maxprice"
                id="maxprice"
                className="w-full font-light text-sm"
              >
                <option value="self contain" hidden>
                  Max Price
                </option>
                <option value="self contain">100,000</option>
                <option value="flat">200,000</option>
              </select>
            </div>
          </div>
          <button className="py-3 w-full bg-primaryPurple mt-0 text-white">
            SEARCH
          </button>
        </form>
      </div>
      <div className="bg-white p-6">
        <h2 className=" text-lg font-medium">Property Category</h2>

        <div className="flex flex-col gap-3 mt-6">
          <p className="pb-3 border-b">Flats</p>
          <p className="pb-3 border-b">Land</p>
        </div>
      </div>
    </div>
  );
};

export default QuickSearch;
