"use client";

import React from "react";
import NavBar from "../commons/Navbar";

const SignUp = () => {
  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          overflow: "hidden",
          background: `url(
          "https://thesulfurgroup.com/wp-content/uploads/2017/12/collage-std.png"
        )`,
          backgroundColor: "#FFF",
          opacity: 0.1,
          position: "absolute",
        }}
      ></div>
      <div style={{ position: "relative", opacity: 1, overflow: "hidden" }}>
        <a href="/">
          <span
            style={{
              boxSizing: "border-box",
              display: "inline-block",
              overflow: "hidden",
              width: "initial",
              height: "initial",
              background: "none",
              opacity: 1,
              border: 0,
              margin: 0,
              padding: 0,
              position: "relative",
              maxWidth: "100%",
            }}
          >
            <span
              style={{
                boxSizing: "border-box",
                display: "block",
                overflow: "hidden",
                width: "initial",
                height: "initial",
                background: "transparent",
                opacity: 1,
                border: 0,
                margin: "34px 34px 2px 34px",
                padding: 0,
                position: "relative",
                maxWidth: "100%",
              }}
            >
              <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
                <div
                  style={{
                    color: "#E65C55",

                    fontSize: 30,
                  }}
                >
                  SARVIN
                </div>
                <i style={{ fontSize: 14 }}>For Influencers</i>
              </div>
            </span>
          </span>
          {/* Your logo */}
        </a>

        <div class="flex flex-col justify-center px-6 py-12 lg:px-8">
          <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 class="m-4 text-center text-2xl font-semibold  text-gray-900">
              Create your free account
            </h2>
            <h3 class="text-center  text-gray-900">
              More Discoverability, More Opportunities
            </h3>
          </div>

          <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-6" action="#" method="POST">
              <div>
                <label
                  for="email"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email
                </label>
                <div class="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autocomplete="email"
                    placeholder="name@example.com"
                    required
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div class="flex items-center justify-between">
                  <label
                    for="password"
                    class="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  <div class="text-sm">
                    {/* <a
                    href="#"
                    class="font-semibold text-gray-600 hover:text-gray-500"
                  >
                    Forgot password?
                  </a> */}
                  </div>
                </div>
                <div class="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autocomplete="current-password"
                    placeholder="Set your password (at least 8 characters)"
                    required
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <br />
                <label
                  for="email"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Full Name
                </label>
                <div class="mt-2">
                  <input
                    id="fullname"
                    name="fullname"
                    type="text"
                    autocomplete="name"
                    placeholder="Enter your name"
                    required
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  class="flex w-full justify-center rounded-md bg-[#F27430] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                >
                  Continue
                </button>
              </div>
            </form>

            <p class="mt-10 text-center text-sm text-gray-500 ">
              Already a member?
              <a
                href="#"
                class="font-semibold leading-6 text-indigo-500 hover:text-indigo-700"
              >
                SignIn
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
