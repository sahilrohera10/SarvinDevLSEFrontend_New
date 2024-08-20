"use client";

import React, { useState } from "react";
import BackGroundImage from "../BackGroundImage/index";
import Toast from "../Toast";

const TargetPlatform = ({ youtube, setYoutube, instagram, setInstagram, handleNext, handlePrevious }) => {
  const [error, setError] = useState(false);

  const handleCloseError = () => {
    setError(false);
  };

  const handleNextClick = () => {
    if (youtube || instagram) {
      setError(false);
      handleNext();
    } else {
      setError(true);
    }
  };

  return (
    <>
      <BackGroundImage />
      <div style={{ position: "relative", opacity: 1, overflow: "hidden" }}>
        <div className="w-full sm:h-[70vh] flex flex-col justify-center items-center px-6 py-12 lg:px-8">
          <div className="w-2/3 h-full px-10 flex flex-col items-center justify-between">
            <div className="w-full">
              <div className="my-4 text-center text-6xl text-gray-900">
                Target Platform
              </div>
              <div className="mt-10">
                <div className="flex justify-center mt-2">
                  <div className="flex justify-center items-center mb-4 ml-2">
                    <input
                      id="youtube"
                      type="checkbox"
                      checked={youtube}
                      onChange={() => setYoutube((prev) => !prev)}
                      className="w-4 h-4 bg-white border border-gray-300 rounded focus:ring-blue-500 shadow-lg"
                    />
                    <label
                      htmlFor="youtube"
                      className="ml-2 text-base font-normal text-gray-900"
                    >
                      Youtube
                    </label>
                  </div>
                  <div className="flex justify-center mb-4 ml-2">
                    <input
                      id="instagram"
                      type="checkbox"
                      checked={instagram}
                      onChange={() => setInstagram((prev) => !prev)}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 shadow-lg"
                    />
                    <label
                      htmlFor="instagram"
                      className="ml-2 text-base font-normal text-gray-900"
                    >
                      Instagram
                    </label>
                  </div>
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
      {error && (
        <Toast
          handleCloseError={handleCloseError}
          message="Select at least one platform"
        />
      )}
    </>
  );
};

export default TargetPlatform;
