"use client";

import React, { useState } from "react";
import Image from "next/image";
import BackGroundImage from "../BackGroundImage/index";
import Toast from "../Toast";

const BudgetDetails = ({
  biddingFrom,
  setBiddingFrom,
  biddingTo,
  setBiddingTo,
  fixedPriceValue,
  setFixedPriceValue,
  handleSubmit,
  handlePrevious,
  loginStatus,
  setIsBidAvailable
}) => {
  const [bidding, setBidding] = useState(false);
  const [fixedPrice, setFixedPrice] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  const handleBiddingClick = () => {
    setFixedPrice(false);
    setIsBidAvailable(true);
    setBidding(!bidding);
  };

  const handleFixedPriceClick = () => {
    setBidding(false);
    setIsBidAvailable(false);
    setFixedPrice(!fixedPrice);
  };

  const handleBiddingFromChange = (e) => {
    setBiddingFrom(e.target.value);
  };

  const handleBiddingToChange = (e) => {
    setBiddingTo(e.target.value);
  };

  const handleFixedPriceChange = (e) => {
    setFixedPriceValue(e.target.value);
  };

  const handleSubmitClick = () => {
    if (
      bidding &&
      (biddingFrom <= 0 || biddingTo <= 0 || biddingFrom >= biddingTo)
    ) {
      setMessage("Please enter valid bidding amounts.");
      setError(true);
    } else if (fixedPrice && fixedPriceValue <= 0) {
      setMessage("Please enter a valid fixed price.");
      setError(true);
    } else {
      setError(false);
      handleSubmit();
    }
  };

  const handleCloseError = () => {
    setError(false);
  };

  return (
    <>
      <BackGroundImage />
      <div className="relative z-10 h-full w-full overflow-hidden">
        <div className="w-full sm:h-[70vh] flex flex-col justify-center items-center px-6 py-12 lg:px-8">
          <div className="w-2/3 h-full px-10 flex flex-col items-center justify-between">
            <div className="w-2/3">
              <h1 className="my-4 text-center text-6xl text-gray-900">
                Budget Details
              </h1>
              <div className="mt-10 flex justify-evenly items-center">
                <div>
                  <div className="w-full flex justify-center items-center">
                    <button
                      onClick={handleBiddingClick}
                      className={`bg-white px-10 py-4 rounded-3xl border-2 ${
                        bidding ? "border-blue-500 border-4" : "border-gray-300"
                      }`}
                    >
                      <Image
                        src="/bidding.png"
                        width={100}
                        height={100}
                        alt="Bidding Option"
                      />
                      <span className="font-semibold">Bidding</span>
                    </button>
                  </div>
                </div>
                <div>
                  <div className="w-full flex justify-center items-center">
                    <button
                      onClick={handleFixedPriceClick}
                      className={`bg-white px-10 py-4 rounded-3xl border-2 ${
                        fixedPrice
                          ? "border-blue-500 border-4"
                          : "border-gray-300"
                      }`}
                    >
                      <span className="relative">
                        <Image
                          src="/fixedPrice.png"
                          width={100}
                          height={100}
                          alt="Fixed Price Option"
                        />
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
                      value={biddingFrom}
                      placeholder="&#x20B9; 100"
                      className="block w-full rounded-md border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                      onChange={handleBiddingFromChange}
                      required
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
                      value={biddingTo}
                      className="block w-full rounded-md border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                      onChange={handleBiddingToChange}
                      required
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
                      value={fixedPriceValue}
                      className="block w-full rounded-md border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                      onChange={handleFixedPriceChange}
                      required
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
                type="button"
                onClick={handleSubmitClick}
                className={`flex justify-center rounded-md bg-[#4285F4] px-7 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 ${loginStatus.loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={loginStatus.loading}
              >
                {loginStatus.loading ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </div>
        </div>
      </div>
      {error && <Toast handleCloseError={handleCloseError} message={message} />}
    </>
  );
};

export default BudgetDetails;
