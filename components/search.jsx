import React from "react";

function Search() {
  return (
    <div className="bg-[#fde0e0] py-10 flex justify-center font-sans w-full mt-[10px]">
      <div className="w-[900px] bg-white rounded-md shadow-lg overflow-hidden">
        {/* Tabs */}
        <div className="flex border-b border-gray-100">
          <div className="px-6 py-4 text-red-500 font-bold border-b-2 border-red-500 bg-white cursor-pointer">
            Instant Rent
          </div>
          <div className="px-6 py-4 text-gray-400 bg-gray-50 cursor-pointer">
            Private Driver
          </div>
          <div className="px-6 py-4 text-gray-400 bg-gray-50 cursor-pointer">
            Long Trip
          </div>
        </div>
        {/* Content */}
        <div className="flex items-center px-10 py-9">
          {/* Pickup */}
          <div className="flex-1">
            <div className="text-gray-700 mb-2 text-[15px]">Pickup</div>
            <div className="flex items-center text-gray-300 text-lg">
              <span className="mr-2 text-xl">📍</span>
              Point Location
            </div>
          </div>
          {/* Drop Off */}
          <div className="flex-1">
            <div className="text-gray-700 mb-2 text-[15px]">Drop Off</div>
            <div className="flex items-center text-gray-300 text-lg">
              <span className="mr-2 text-xl">📍</span>
              Point Location
            </div>
          </div>
          {/* Estimate Time */}
          <div className="flex-1">
            <div className="text-gray-700 mb-2 text-[15px]">Estimate Time</div>
            <div className="flex items-center text-gray-300 text-lg">
              <span className="mr-2 text-xl">🕒</span>
              Point Location
            </div>
          </div>
          {/* Pricing */}
          <div className="flex-[0.5]">
            <div className="text-gray-700 mb-2 text-[15px]">Pricing</div>
            <div className="text-gray-300 text-lg">$ 0.00</div>
          </div>
          {/* Button */}
          <div>
            <button className="bg-red-500 text-white font-bold rounded px-8 py-4 ml-4 text-base shadow-md hover:bg-red-600 transition">
              Rent Now !
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
