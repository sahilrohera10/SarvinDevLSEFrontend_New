"use client";

import { DropdownDivider, FooterDivider } from "flowbite-react";
import Link from "next/link";
import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const SignIn = () => {
  const [show, setShow] = useState(true);
  return (
    <div>
      <div>
        <div
          style={{
            height: "100vh",
            width: "50vw",
            overflow: "hidden",
            background: `url(
          "https://hips.hearstapps.com/hmg-prod/images/hbz-black-creators-influencers-index-1591119518.jpg"
        ) `,
            backgroundBlendMode: 2,
            opacity: 0.1,
            position: "absolute",
          }}
        ></div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flex: 1,
        }}
      >
        <div>
          <a href="/">
            <span
              style={{
                boxSizing: "border-box",
                display: "inline-block",
                overflow: "hidden",
                width: "initial",
                height: "initial",
                position: "relative",
                maxWidth: "100%",
                display: "flex",
                justifyContent: "center",
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

                  padding: 0,
                  position: "relative",
                  maxWidth: "100%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 4,
                  }}
                >
                  <div
                    style={{
                      color: "#E65C55",
                      fontSize: 100,
                    }}
                  >
                    SARVIN
                  </div>
                </div>
              </span>
            </span>
            {/* Your logo */}
          </a>
        </div>
        <div
          style={{
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 80,
          }}
        >
          <div>
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
                  display: "flex",
                  justifyContent: "center",
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
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      justifyContent: "center",
                      gap: 4,
                    }}
                  >
                    <div
                      style={{
                        color: "#E65C55",

                        fontSize: 30,
                      }}
                    >
                      SARVIN
                    </div>
                    <i style={{ fontSize: 14 }}>For Influencers & Businesses</i>
                  </div>
                </span>
              </span>
              {/* Your logo */}
            </a>

            <div class="flex flex-col justify-center px-6 py-12 lg:px-8">
              <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 class="m-4 text-center text-2xl font-semibold  text-gray-900">
                  Happening Now! Sign In here....
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
                      class="block text-md font-medium leading-6 text-gray-900"
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
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <div class="flex items-center justify-between">
                      <label
                        for="password"
                        class="block text-md font-medium leading-6 text-gray-900"
                      >
                        Password
                      </label>
                      <div class="text-sm">
                        <a
                          href="/forget-password"
                          class="font-semibold text-gray-600 hover:text-gray-500"
                        >
                          Forgot password?
                        </a>
                      </div>
                    </div>
                    <div class="mt-2 flex align-middle gap-2">
                      <input
                        id="password"
                        name="password"
                        type={show ? "password" : "text"}
                        autocomplete="current-password"
                        placeholder="Set your password (at least 8 characters)"
                        required
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                      />
                      <div class="flex flex-col justify-center">
                        {show ? (
                          <FaEye onClick={() => setShow(!show)} />
                        ) : (
                          <FaEyeSlash onClick={() => setShow(!show)} />
                        )}
                      </div>
                    </div>
                    <br />
                  </div>

                  <div class="gap-2">
                    <button
                      type="submit"
                      class="flex w-full mb-2 justify-center rounded-md bg-[#F27430] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                    >
                      Continue
                    </button>
                    <div class="text-gray-300 flex justify-center">--or--</div>
                    <button class="px-4 py-2 mt-2 w-full flex justify-center border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150">
                      <img
                        class="w-6 h-6"
                        src="https://www.svgrepo.com/show/475656/google-color.svg"
                        loading="lazy"
                        alt="google logo"
                      />
                      <span>Login with Google</span>
                    </button>
                  </div>
                </form>

                <div class="mt-10 text-center text-sm text-gray-500 gap-2 ">
                  <div>Not a member?</div>
                  <Link
                    href="/sign-up-influencer"
                    class="font-semibold leading-6 text-indigo-500 hover:text-indigo-700 mx-4"
                  >
                    SignUp as Influencer
                  </Link>
                  <Link
                    href="#"
                    class="font-semibold leading-6 text-indigo-500 hover:text-indigo-700"
                  >
                    SignUp as Business
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
