"use client";
import React from "react";
import Activity from "../../commons/icons/activity.json";
// import Lottie from "react-lottie-player";
import NotFound from "../../commons/NotFound";
import { FaCalendar } from "react-icons/fa";

function ActivityModal() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* <Lottie
        loop
        animationData={Activity}
        play
        style={{ width: "40%", height: "40%", marginRight: 20 }}
      /> */}

      <form>
        <div class="space-y-2">
          <div class="border-b border-gray-900/10 pb-2 mt-8 ">
            <div style={{ display: "flex", alignItems: "center" }}>
              <FaCalendar />
              <h2 class="text-base font-semibold leading-7 text-gray-900 ml-4">
                Your Activites
              </h2>
            </div>

            <p class="mt-1 text-sm leading-6 text-gray-600">
              This information will be displayed publicly so be careful what you
              share.
            </p>
          </div>

          <div class="border-b border-gray-900/10 pb-12">
            <NotFound />
          </div>
        </div>
        <div class="mt-6 flex items-center justify-end gap-x-6 mb-4">
          <button
            type="button"
            class="text-sm font-semibold leading-6 text-gray-900 border-0"
          >
            Cancel
          </button>
          <button
            type="submit"
            class="rounded-md bg-[#f27430] px-3 py-2 mb-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
export default ActivityModal;
