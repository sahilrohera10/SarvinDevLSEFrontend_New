import React from "react";
import Image from "next/image";
import Podium from "../../commons/icons/podium.png";

const StatsCards = ({ isTabletOrMobile }) => {
  return (
    <>
      {" "}
      <div
        style={{
          fontSize: isTabletOrMobile ? 24 : 30,
          fontWeight: 400,
          margin: "0px 40px",
          display: "flex",
          justifyContent: isTabletOrMobile && "center",
          gap: 10,
          alignItems: "center",
        }}
      >
        Sarvin's Stats{" "}
        <Image src={Podium} alt="podium" width={34} height={34} />
      </div>
      <div
        style={{
          fontSize: isTabletOrMobile ? 12 : 14,
          fontWeight: 200,
          margin: "0px 40px",
          display: "flex",
          justifyContent: isTabletOrMobile && "center",
        }}
      >
        Influencers Cracked Most Brand Deals in Last 30 Days{" "}
      </div>
      <section class="grid gap-6 m-10 md:grid-cols-3">
        <div class="p-6 bg-white shadow-lg rounded-2xl">
          <dl class="space-y-2">
            <dt
              class={
                !isTabletOrMobile
                  ? "text-sm font-medium text-gray-500"
                  : "text-sm font-medium text-gray-500 flex justify-center"
              }
            >
              Unique views
            </dt>

            <dd
              class={
                isTabletOrMobile
                  ? "text-5xl font-light md:text-6xl flex justify-center"
                  : "text-5xl font-light md:text-6xl"
              }
            >
              192.1k
            </dd>

            <dd
              class={
                isTabletOrMobile
                  ? "flex items-center space-x-1 text-sm font-medium text-green-500 justify-center"
                  : "flex items-center space-x-1 text-sm font-medium text-green-500"
              }
            >
              <span>32k increase</span>

              <svg
                class="w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M17.25 15.25V6.75H8.75"
                ></path>
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M17 7L6.75 17.25"
                ></path>
              </svg>
            </dd>
          </dl>
        </div>

        <div class="p-6 bg-white shadow-lg rounded-2xl">
          <dl class="space-y-2">
            <dt
              class={
                !isTabletOrMobile
                  ? "text-sm font-medium text-gray-500"
                  : "text-sm font-medium text-gray-500 flex justify-center"
              }
            >
              Bounce rate
            </dt>

            <dd
              class={
                isTabletOrMobile
                  ? "text-5xl font-light md:text-6xl flex justify-center"
                  : "text-5xl font-light md:text-6xl"
              }
            >
              21%
            </dd>

            <dd
              class={
                isTabletOrMobile
                  ? "flex items-center space-x-1 text-sm font-medium text-red-500 justify-center"
                  : "flex items-center space-x-1 text-sm font-medium text-red-500"
              }
            >
              <span>7% increase</span>

              <svg
                class="w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M17.25 8.75V17.25H8.75"
                ></path>
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M17 17L6.75 6.75"
                ></path>
              </svg>
            </dd>
          </dl>
        </div>

        <div class="p-6 bg-white shadow-lg rounded-2xl">
          <dl class="space-y-2">
            <dt
              class={
                !isTabletOrMobile
                  ? "text-sm font-medium text-gray-500"
                  : "text-sm font-medium text-gray-500 flex justify-center"
              }
            >
              Average time on page
            </dt>

            <dd
              class={
                isTabletOrMobile
                  ? "text-5xl font-light md:text-6xl flex justify-center"
                  : "text-5xl font-light md:text-6xl"
              }
            >
              03:12
            </dd>

            <dd
              class={
                isTabletOrMobile
                  ? "flex items-center space-x-1 text-sm font-medium text-green-500 justify-center"
                  : "flex items-center space-x-1 text-sm font-medium text-green-500"
              }
            >
              <span>3% increase</span>

              <svg
                class="w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M17.25 15.25V6.75H8.75"
                ></path>
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M17 7L6.75 17.25"
                ></path>
              </svg>
            </dd>
          </dl>
        </div>
      </section>
    </>
  );
};

export default StatsCards;
