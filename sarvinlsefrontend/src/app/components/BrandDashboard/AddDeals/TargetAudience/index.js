"use client";

import React from "react";
import Navbar from "../Navbar/index";
import BackGroundImage from "../BackGroundImage/index"

const TargetAudience = ({handleNext, handlePrevious}) => {

  return (
    <>
      <BackGroundImage />
      <div style={{ position: "relative", opacity: 1, overflow: "hidden" }}>
        <div className="w-full sm:h-[70vh] flex flex-col justify-center items-center px-6 py-12 lg:px-8">
          <div className="w-2/3 h-full px-10 flex flex-col items-center justify-between">
            {/* <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700" style={{ marginTop: 10 }}>
              <div
                className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0 leading-none rounded-full"
                style={{ width: "50%", height: "15px" }}
              >
                {" "}
              </div>
            </div> */}
            <div className="w-2/3">
              <h1 className="my-4 text-start text-5xl font-sans font-bold text-gray-900">Target Audience</h1>
              <div className="mt-10">
                <h3 className="text-start font-normal text-gray-900">Enter the following details</h3>
                <div className="mt-2">
                  <select
                    id="location"
                    name="location"
                    required
                    className="block w-full rounded-md border-0 px-4 py-3 text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                  >
                    <option className="text-black" value="" disabled selected>
                      Audience Location
                    </option>
                    <option className="text-black" value="location1">Location 1</option>
                    <option className="text-black" value="location2">Location 2</option>
                  </select>
                </div>
                <div className="mt-2">
                  <select
                    id="age-group"
                    name="age-group"
                    required
                    className="block w-full rounded-md border-0 px-4 py-3 text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                  >
                    <option className="text-black" value="" disabled selected>
                      Audience age group
                    </option>
                    <option className="text-black" value="18-24">18-24</option>
                    <option className="text-black" value="25-34">25-34</option>
                  </select>
                </div>
                <div className="mt-2">
                  <select
                    id="gender"
                    name="gender"
                    required
                    className="block w-full rounded-md border-0 px-4 py-3 text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                  >
                    <option className="text-black" value="" disabled selected>
                      Audience gender
                    </option>
                    <option className="text-black" value="male">Male</option>
                    <option className="text-black" value="female">Female</option>
                  </select>
                </div>
                <div className="mt-2">
                  <select
                    id="reach"
                    name="reach"
                    required
                    className="block w-full rounded-md border-0 px-4 py-3 text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                  >
                    <option className="text-black" value="" disabled selected>
                      Audience reach target
                    </option>
                    <option className="text-black" value="1000">1000</option>
                    <option className="text-black" value="5000">5000</option>
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

export default TargetAudience;
