"use client";

import React, { useRef, useState } from "react";
import Navbar from "../Navbar/index";
import BackGroundImage from "../BackGroundImage/index";
import Toast from "../Toast";

const DealTitle = ({ handleNext, dealTitle, setDealTitle }) => {
  const inputRef = useRef();
  const [error, setError] = useState(false);

  const handleClick = () => {
    if (inputRef.current.value !== "") {
      setError(false);
      handleNext();
    } else {
      setError(true);
    }
  };

  const handleCloseError = () => {
    setError(false);
  };

  return (
    <>
      <div className="overflow-hidden h-full w-full">
        <BackGroundImage />
        <div style={{ position: "relative", opacity: 1, overflow: "hidden" }}>
          <div className="w-full sm:h-[70vh] flex flex-col justify-center items-center px-6 py-12 lg:px-8">
            <div className="w-2/3 h-full px-10 flex flex-col items-center justify-between">
              <div className="w-full">
                <div className="my-4 text-center text-6xl text-gray-900">
                  Deal Title
                </div>
                <div className="mt-10">
                  <h3 className="text-start text-gray-900 ">
                    Write a title for your deal
                  </h3>
                  <div className="mt-2">
                    <input
                      ref={inputRef}
                      id="value"
                      name="value"
                      value={dealTitle}
                      type="text"
                      autoComplete="value"
                      placeholder="Value"
                      className="block w-full rounded-md border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                      onChange={(e) => setDealTitle(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>
              <div>
                <button
                  onClick={handleClick}
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-[#F27430] px-7 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {error && (
        <Toast
          handleCloseError={handleCloseError}
          message="Enter your Deal Title"
        />
      )}
    </>
  );
};

export default DealTitle;
