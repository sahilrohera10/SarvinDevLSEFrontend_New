"use client";

import React, { useState } from "react";
import BackGroundImage from "../BackGroundImage/index";
import Toast from "../Toast"; // Ensure you have a Toast component for notifications

const InfluencerRequirement = ({
  influencerSize,
  setInfluencerSize,
  influencerCategory,
  setInfluencerCategory,
  influencerAge,
  setInfluencerAge,
  influencerLocation,
  setInfluencerLocation,
  handleNext,
  handlePrevious,
}) => {
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  const handleCloseError = () => {
    setError(false);
  };

  const handleNextClick = () => {
    if (!influencerSize) {
      setMessage("Please select an influencer size.");
      setError(true);
    } else if (!influencerCategory) {
      setMessage("Please select an influencer category.");
      setError(true);
    } else if (!influencerAge) {
      setMessage("Please select an influencer age group.");
      setError(true);
    } else if (!influencerLocation) {
      setMessage("Please select an influencer location.");
      setError(true);
    } else {
      setError(false);
      handleNext();
    }
  };

  return (
    <>
      <BackGroundImage />
      <div style={{ position: "relative", opacity: 1, overflow: "hidden" }}>
        <div className="w-full sm:h-[70vh] flex flex-col justify-center items-center px-6 py-12 lg:px-8">
          <div className="w-2/3 h-full px-10 flex flex-col items-center justify-between">
            <div className="w-full">
              <div className="my-4 text-center  text-6xl text-gray-900">
                Influencer Requirement
              </div>
              <div className="mt-10 w-2/3 mx-auto">
                <h3 className="text-start text-gray-900">
                  Enter the following details
                </h3>
                <div className="mt-2">
                  <select
                    id="influencer-size"
                    name="influencer-size"
                    value={influencerSize}
                    onChange={(e) => setInfluencerSize(e.target.value)}
                    required
                    className="block w-full rounded-md border-0 px-4 py-3 text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                  >
                    <option className="text-black" value="" disabled>
                      Influencer Size
                    </option>
                    <option className="text-black" value="size1">
                      Size 1
                    </option>
                    <option className="text-black" value="size2">
                      Size 2
                    </option>
                  </select>
                </div>
                <div className="mt-2">
                  <select
                    id="category"
                    name="category"
                    value={influencerCategory}
                    onChange={(e) => setInfluencerCategory(e.target.value)}
                    required
                    className="block w-full rounded-md border-0 px-4 py-3 text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                  >
                    <option className="text-black" value="" disabled>
                      Category
                    </option>
                    <option className="text-black" value="category1">
                      Category 1
                    </option>
                    <option className="text-black" value="category2">
                      Category 2
                    </option>
                  </select>
                </div>
                <div className="mt-2">
                  <select
                    id="age"
                    name="age"
                    value={influencerAge}
                    onChange={(e) => setInfluencerAge(e.target.value)}
                    required
                    className="block w-full rounded-md border-0 px-4 py-3 text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                  >
                    <option className="text-black" value="" disabled>
                      Age
                    </option>
                    <option className="text-black" value="age1">
                      Age 1
                    </option>
                    <option className="text-black" value="age2">
                      Age 2
                    </option>
                  </select>
                </div>
                <div className="mt-2">
                  <select
                    id="location"
                    name="location"
                    value={influencerLocation}
                    onChange={(e) => setInfluencerLocation(e.target.value)}
                    required
                    className="block w-full rounded-md border-0 px-4 py-3 text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                  >
                    <option className="text-black" value="" disabled>
                      Location
                    </option>
                    <option className="text-black" value="location1">
                      Location 1
                    </option>
                    <option className="text-black" value="location2">
                      Location 2
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex w-full justify-between">
              <button
                onClick={handlePrevious}
                type="button"
                className="flex justify-center rounded-md bg-gray-600 px-7 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
              >
                Previous
              </button>
              <button
                onClick={handleNextClick}
                type="button"
                className="flex justify-center rounded-md bg-[#F27430] px-7 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
      {error && <Toast handleCloseError={handleCloseError} message={message} />}
    </>
  );
};

export default InfluencerRequirement;
