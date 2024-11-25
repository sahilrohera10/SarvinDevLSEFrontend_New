"use client";

import React, { useState } from "react";
import Modal from "../commons/modal";
import PartyEmoji from "../../components/commons/icons/partyEmoji.json";
import Confetti from "react-confetti";
import  from "react--player";

const SuccessModal = ({
  openModal = false,
  setOpenModal = () => {},
  role = "Verify",
}) => {
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
                    <
                      loop
                      animationData={PartyEmoji}
                      play
                      style={{ width: "10%", height: "10%" }}
                    />
                  </div>
                  {role == "Deals" ? (
                    <div>
                      <h2 class="m-4 text-center text-2xl font-semibold  text-gray-900">
                        Your Deal Application is sent to Brand Owner
                      </h2>
                      <p class="m-4 text-center  text-gray-900">
                        You Can Check Your Further Status On Cracked Deal
                        Section.
                      </p>
                    </div>
                  ) : (
                    <div>
                      <h2 class="m-4 text-center text-2xl font-semibold  text-gray-900">
                        Your account has been successfully verified!
                      </h2>
                      <p class="m-4 text-center  text-gray-900">
                        Your account is now eligible to access all our features
                        and services.
                      </p>
                    </div>
                  )}

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
