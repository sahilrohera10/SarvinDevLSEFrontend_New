"use client";

import React from "react";
import Navbar from "../Navbar/index";
import BackGroundImage from "../BackGroundImage/index"

const TargetPlatform = ({ handleNext, handlePrevious }) => {
  return (
    <>
      <BackGroundImage />
      <div style={{ position: "relative", opacity: 1, overflow: "hidden" }}>
        <div className="w-full sm:h-[70vh] flex flex-col justify-center items-center px-6 py-12 lg:px-8">
          <div className="w-2/3 h-full px-10 flex flex-col items-center justify-between">
            {/* <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700" style={{ marginTop: 10 }}>
              <div
                className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0 leading-none rounded-full"
                style={{ width: "18%", height: "15px" }}
              ></div>
            </div> */}
            <div className="w-1/2">
              <h1 className="my-4 text-start text-5xl font-sans font-extrabold text-gray-900">Target Platform</h1>
              <div className="mt-10">
                <div className="mt-2">
                  <div className="flex items-center mb-4 ml-2">
                    <input
                      id="youtube"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 bg-white border border-gray-300 rounded focus:ring-blue-500 shadow-lg"
                    />
                    <label htmlFor="youtube" className="ml-2 text-base font-normal text-gray-900">
                      Youtube
                    </label>
                  </div>
                  <div className="flex items-center mb-4 ml-2">
                    <input
                      id="instagram"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 shadow-lg"
                    />
                    <label htmlFor="instagram" className="ml-2 text-base font-normal text-gray-900">
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
                onClick={handleNext}
                type="submit"
                className="flex justify-center rounded-md bg-[#F27430] px-7 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TargetPlatform;
