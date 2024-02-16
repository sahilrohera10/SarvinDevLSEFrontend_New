"use client";

import React, { useState } from "react";
import Modal from "../commons/modal";
import PartyEmoji from "../../components/commons/icons/partyEmoji.json";
import Image from "next/image";
import Confetti from "react-confetti";
import Lottie from "react-lottie-player";

const SuccessModal = ({ openModal = False, setOpenModal = () => {} }) => {
  return (
    <>
      <div style={{ zIndex: 1000 }}>
        {openModal ? (
          <Confetti width={screen.width} height={screen.height} />
        ) : (
          <></>
        )}
      </div>
      <div style={{ maxWidth: "50%" }}>
        <Modal openModal={openModal} setOpenModal={setOpenModal}>
          <>
            <div>
              <div class="flex flex-col justify-center px-6 py-12 lg:px-8">
                <div class="sm:mx-auto">
                  <div class="flex justify-center">
                    <Lottie
                      loop
                      animationData={PartyEmoji}
                      play
                      style={{ width: "10%", height: "10%" }}
                    />
                  </div>
                  <h2 class="m-4 text-center text-2xl font-semibold  text-gray-900">
                    Your account has been successfully verified!
                  </h2>
                  <p class="m-4 text-center  text-gray-900">
                    Your account is now eligible to access all our features and
                    services.
                  </p>
                  <p class="m-4 text-center text-md font-semibold  text-gray-900">
                    Thank you for choosing our platform.
                  </p>
                </div>

                <div class="sm:mx-auto">
                  <button
                    type="button"
                    class="flex w-80 justify-center rounded-sm bg-[#F27430] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={() => {
                      setOpenModal(!openModal);
                    }}
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </>
        </Modal>
      </div>
    </>
  );
};

export default SuccessModal;
