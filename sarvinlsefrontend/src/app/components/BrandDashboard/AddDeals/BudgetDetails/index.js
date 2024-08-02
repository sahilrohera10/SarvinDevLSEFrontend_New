"use client";

import React, { useState } from "react";
import Navbar from "../Navbar/index";
import Image from "next/image";
import BackGroundImage from "../BackGroundImage/index"

const BudgetDetails = ({handlePrevious}) => {
  const [bidding, setBidding] = useState(false);
  const [fixedPrice, setFixedPrice] = useState(false);

  const handleBiddingClick = () => {
    setFixedPrice(false);
    setBidding(!bidding);
  };

  const handleFixedClick = () => {
    setFixedPrice(!fixedPrice);
    setBidding(false);
  };

  return (
    <>
      <BackGroundImage />
      <div className="relative z-10 h-full w-full overflow-hidden">
        <div className="w-full sm:h-[70vh] flex flex-col justify-center items-center px-6 py-12 lg:px-8">
          <div className="w-2/3 h-full px-10 flex flex-col items-center justify-between">
            {/* <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 mt-10">
              <div
                className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0 leading-none rounded-full"
                style={{ width: "90%", height: "15px" }}
              ></div>
            </div> */}
            <div className="w-2/3">
              <h1 className="my-4 text-center text-5xl font-bold font-sans text-gray-900">Budget Details</h1>
              <div className="mt-10 flex justify-evenly items-center">
                <div>
                  <div className="w-full flex justify-center items-center">
                    <button
                      onClick={handleBiddingClick}
                      className={`bg-white px-10 py-4 rounded-3xl border-2 ${
                        bidding ? "border-blue-500 border-4" : "border-gray-300"
                      }`}
                    >
                      <Image src="/bidding.png" width={100} height={100} alt="Bidding Option" />
                      <span className="font-semibold">Bidding</span>
                    </button>
                  </div>
                </div>
                <div>
                  <div className="w-full flex justify-center items-center">
                    <button
                      onClick={handleFixedClick}
                      className={`bg-white px-10 py-4 rounded-3xl border-2 ${
                        fixedPrice ? "border-blue-500 border-4" : "border-gray-300"
                      }`}
                    >
                      <span className="relative">
                        <Image src="/fixedPrice.png" width={100} height={100} alt="Fixed Price Option" />
                        <span className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-70%] rotate-[45deg] text-4xl text-white font-extrabold">
                          &#x20B9;
                        </span>
                      </span>
                      <span className="font-semibold">Fixed Price</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className={`${bidding ? "flex justify-evenly" : ""}`}>
                {bidding && (
                  <div className="mt-14">
                    <label className="font-light" htmlFor="from">
                      From
                    </label>
                    <input
                      id="from"
                      name="from"
                      type="number"
                      autoComplete="from"
                      placeholder="&#x20B9; 100"
                      required
                      className="block w-full rounded-md border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                )}
                {bidding && (
                  <div className="mt-14">
                    <label className="font-light" htmlFor="to">
                      To
                    </label>
                    <input
                      id="to"
                      name="to"
                      type="number"
                      autoComplete="to"
                      placeholder="&#x20B9; 500"
                      required
                      className="block w-full rounded-md border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                )}
                {fixedPrice && (
                  <div className="mt-14">
                    <label className="font-light" htmlFor="fixedPrice">
                      Enter your budget
                    </label>
                    <input
                      id="fixedPrice"
                      name="fixedPrice"
                      type="number"
                      autoComplete="fixedPrice"
                      placeholder="&#x20B9; 50000"
                      required
                      className="block w-full rounded-md border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="flex w-full justify-between">
              <button
                onClick={handlePrevious}
                type="button"
                className="flex justify-center rounded-md bg-[#F27430] px-7 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
              >
                Previous
              </button>
              <button
                type="submit"
                className="flex justify-center rounded-md bg-[#4285F4] px-7 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BudgetDetails;
