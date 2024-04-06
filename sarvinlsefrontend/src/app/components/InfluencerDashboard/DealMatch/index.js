"use client";
import React from "react";

const DealMatch = () => {
  return (
    <div class="flex w-full justify-center m-6">
      <div class="w-full max-w-xl p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div class="p-5 bg-slate-200 rounded-md">
          <img
            class="p-4 rounded-lg "
            src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/330801066/original/cc6bb227a37e0989f38e72cd72a1e9424016bb7e/design-an-attractive-dating-app-ui-ux-like-tinder.png"
            alt="product image"
          />
        </div>
        <div class="px-5 pb-5  ">
          <div class="text-2xl flex justify-center my-2 font-normal tracking-tight text-gray-700 dark:text-white">
            Coming Soon...
          </div>
          <div class="text-lg flex justify-center my-1 font-thin tracking-tight text-gray-700 dark:text-white">
            only on
          </div>
          <div
            class="text-4xl flex justify-center my-1 font-thin tracking-tight"
            style={{
              color: "#E65C55",
              transition: "color 2s",
            }}
          >
            SARVIN
          </div>
        </div>
      </div>
    </div>
  );
};
export default DealMatch;
