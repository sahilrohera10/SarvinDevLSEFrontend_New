"use client";

import React, { useState } from "react";
import Modal from "../commons/modal";
import PartyEmoji from "../../components/commons/icons/celebrateconfetti.json";
import Image from "next/image";
import Confetti from "react-confetti";
import Lottie from "react-lottie-player";
import { FooterDivider } from "flowbite-react";

const LocationInputModal = ({ openModal = False, setOpenModal = () => {} }) => {
  return (
    <>
      <div style={{ maxWidth: "50%" }}>
        <Modal openModal={openModal} setOpenModal={setOpenModal}>
          <>
            <div>
              <div class="flex flex-col justify-center px-3 py-6 lg:px-8">
                <div class="sm:mx-auto">
                  <div class="flex align-middle">
                    <h2 class=" text-2xl font-semibold  text-gray-900">
                      Your account confirmed!
                    </h2>
                    <Lottie
                      loop
                      animationData={PartyEmoji}
                      play
                      style={{ width: "5%", height: "5%", marginTop: 1 }}
                    />
                  </div>

                  <p class="mt-4 text-gray-900">
                    We need just a few more details so we can deliver a more
                    personalized experience for you.
                  </p>
                  <div class="mt-4">
                    <FooterDivider />
                  </div>

                  <form class="max-w-full mx-auto mt-4">
                    <label
                      for="countries"
                      class="block mb-2 text-sm font-semibold text-gray-900 dark:text-white"
                    >
                      Locations
                    </label>
                    <select
                      id="countries"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option selected>Search your country or city</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </select>
                    <label
                      for="language"
                      class="block mb-2 text-sm font-semibold mt-8 text-gray-900 dark:text-white"
                    >
                      Language
                    </label>
                    <select
                      id="language"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option selected>Select language</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </select>
                    <label
                      for="categories"
                      class="block mb-2 text-sm font-semibold mt-8 text-gray-900 dark:text-white"
                    >
                      Category
                    </label>
                    <select
                      id="categories"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option selected>Select categories</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </select>
                    <div class="mt-6">
                      <FooterDivider />
                    </div>
                    <div class="sm:mx-auto mt-6 flex justify-end">
                      <button
                        type="button"
                        class="rounded-lg bg-[#F27430] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        onClick={() => {
                          setOpenModal(!openModal);
                        }}
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </>
        </Modal>
      </div>
    </>
  );
};

export default LocationInputModal;
