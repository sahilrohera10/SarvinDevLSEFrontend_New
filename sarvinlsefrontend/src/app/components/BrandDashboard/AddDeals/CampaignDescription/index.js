"use client";

import React from "react";
import Navbar from "../Navbar/index";
import BackGroundImage from "../BackGroundImage/index"

const CampaignDescription = ({handleNext, handlePrevious}) => {

  return (
    <>
      <BackGroundImage />
      <div style={{ position: "relative", opacity: 1, overflow: "hidden" }}>
        <div className="w-full sm:h-[70vh] flex flex-col justify-center items-center px-6 py-12 lg:px-8">
          <div className="w-2/3 h-full px-10 flex flex-col items-center justify-between">
            {/* <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700" style={{ marginTop: 10 }}>
              <div
                className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0 leading-none rounded-full"
                style={{ width: "35%", height: "15px" }}
              ></div>
            </div> */}
            <div className="w-2/3"> 
              <h1 className="my-4 text-start text-5xl font-sans font-bold text-gray-900">Campaign Description</h1>
              <div className="mt-10">
                <h3 className="text-start font-normal font-sans text-gray-900">Write a description for your campaign</h3>
                <div className="mt-2">
                  <textarea
                    id="description"
                    name="description"
                    rows="4"
                    placeholder="Write your description here..."
                    required
                    className="block w-full rounded-md border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                  ></textarea>
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

export default CampaignDescription;
