import React from "react";

const StatsCards = () => {
  return (
    <section class="grid gap-6 m-10 md:grid-cols-3">
      <div class="p-6 bg-white shadow-lg rounded-2xl">
        <dl class="space-y-2">
          <dt class="text-sm font-medium text-gray-500">Unique views</dt>

          <dd class="text-5xl font-light md:text-6xl">192.1k</dd>

          <dd class="flex items-center space-x-1 text-sm font-medium text-green-500">
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
          <dt class="text-sm font-medium text-gray-500">Bounce rate</dt>

          <dd class="text-5xl font-light md:text-6xl">21%</dd>

          <dd class="flex items-center space-x-1 text-sm font-medium text-red-500">
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
          <dt class="text-sm font-medium text-gray-500">
            Average time on page
          </dt>

          <dd class="text-5xl font-light md:text-6xl">03:12</dd>

          <dd class="flex items-center space-x-1 text-sm font-medium text-green-500">
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
  );
};

export default StatsCards;
