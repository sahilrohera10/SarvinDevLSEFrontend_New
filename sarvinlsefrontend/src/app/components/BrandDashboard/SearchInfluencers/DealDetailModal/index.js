"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import { FaTwitter, FaInstagram, FaPinterestP, FaSave } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import Modal from "../../../commons/modal";
import { FaIndianRupeeSign } from "react-icons/fa6";
import Coins from "../../../commons/icons/coin.png";
import SuccessModal from "../../../SuccessModal";
import ContentVideos from "../ContentVideos";

const BrandDetail = ({
  name = "Naman Agarwal",
  img = "https://t4.ftcdn.net/jpg/02/61/52/95/360_F_261529596_YZWJaMnYFSCM0FSCrxs71o6RrZ9MpP4D.jpg",
  defaultimg = "https://t4.ftcdn.net/jpg/02/61/52/95/360_F_261529596_YZWJaMnYFSCM0FSCrxs71o6RrZ9MpP4D.jpg",
  description = "Not Available",
  content = [],
  dob = "1-1-1990",
  engagement = 0,
  gender = "",
  location = "",
  phone = "",
  category = ["Any"],
  qualityScore = 0,
  socialmedia = [],
  email = "",
  openModal,
  setOpenModal = () => {},
}) => {
  return (
    <>
      {" "}
      <div className="relative rounded-lg mb-2" style={{ display: "flex" }}>
        <div className="pb-3 px-3 mx-3" style={{ flex: 2 }}>
          <div class="flex justify-between align-middle">
            <div class=" flex text-black text-xl font-medium">
              {" "}
              <div class="mt-2 mr-2 rounded">
                {img.length == 0 ? (
                  <Image
                    alt="alt text."
                    src={defaultimg}
                    width={40}
                    height={42}
                  />
                ) : (
                  <Image alt="No Image" src={img} width={40} height={42} />
                )}
              </div>
              <div>
                <div class="mt-4 mx-2 text-left">{name}</div>
                <div class="text-gray-400 text-sm mx-2">{description}</div>
              </div>
            </div>
          </div>
          <div class="flex gap-2 mt-2">
            {category.length > 0 ? (
              category.map((categories) => (
                <div class="flex justify-center items-center font-medium my-1 py-1 px-2  rounded-full text-blue-700 bg-blue-100 border border-blue-300 ">
                  <div class="text-xs font-normal leading-none max-w-full flex-initial">
                    {categories}
                  </div>
                </div>
              ))
            ) : (
              <div>
                {" "}
                <div class="flex justify-center items-center font-medium my-1 py-1 px-2  rounded-full text-blue-700 bg-blue-100 border border-blue-300 ">
                  <div class="text-xs font-normal leading-none max-w-full flex-initial">
                    Any Category
                  </div>
                </div>
              </div>
            )}

            {/* <div>
              <div class="mt-4 text-gray-400">Platforms</div>
              {socialmedia.length > 0 && (
                <div class="flex justify-center items-center font-medium my-1 py-1 px-2  rounded-full text-blue-700 bg-blue-100 border border-blue-300 ">
                  <div class="text-xs font-normal leading-none max-w-full flex-initial">
                    {socialmedia[0]}
                  </div>
                </div>
              )}
            </div> */}
          </div>
          <div>
            <div class="text-left mt-4 text-gray-400">Overview</div>
            <div class="text-left">
              <div>
                <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                  Location - {location || "Not Defined"}
                </span>
              </div>
            </div>
          </div>
          <div>
            <div class="text-left mt-4 text-gray-400">Contact Details</div>
            <div class="text-left">
              <div CLASS="FLEX GAP-4">
                <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                  Instagram Username - {name}
                </span>
                <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                  Phone Number - {phone}
                </span>
                <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                  Email - {email}
                </span>
                <br />
                <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                  Target Audience - 10k
                </span>
              </div>
            </div>
            <div class="text-left mt-4 text-gray-400">
              Delivery Performance Information
            </div>
            <div class="text-left">
              <div CLASS="FLEX GAP-4">
                <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                  Engagement Rate - {engagement}
                </span>
                <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                  Quality Score - {qualityScore}
                </span>
                <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                  Total Deal Cracked - 10
                </span>
              </div>
            </div>
          </div>
          <div>
            <div class="text-left mt-4 text-gray-400">
              Influencer Reach Dependable Details
            </div>
            <div class="text-left">
              <div CLASS="FLEX GAP-4">
                <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                  Influencer Reach Size-10k
                </span>
                <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                  Influencer Age - 25
                </span>
                <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                  Influencer Gender - {gender}
                </span>
              </div>
            </div>
          </div>
          <div class="mt-4">
            <div class="font-medium text-xl text-left">Past Content</div>
            <div class=" font-sm px-2 w-41rem py-0.5 rounded overflow-auto dark:bg-gray-700 dark:text-gray-100 border border-gray-200">
              {content.length > 0 ? (
                <ContentVideos links={content} />
              ) : (
                "No Data Available"
              )}
            </div>
          </div>
        </div>

        <div class="m-4 flex flex-col" style={{ flex: 1 }}>
          <div class="flex justify-end">
            <span class="bg-blue-100  text-blue-800 text-xs pt-1.5 font-medium px-2.5 h-7 rounded-full dark:bg-blue-900 dark:text-blue-300">
              Date of Birth:<b>{dob || "Not Defined"}</b>
            </span>
          </div>
          <div className="space-x-3 mt-2">
            <div class="text-right font-medium mt-4 mx-2">
              Social Media Metrics
            </div>
            <div class="flex mx-2 my-2 justify-end">
              <span class=" bg-[#ccdfff] text-[#3858f9] text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                Instagram Followers- TBD
              </span>
              <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">
                FaceBook Followers - TBD
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-3 mt-4 align-middle justify-end">
            <div className="rounded-full p-3 hover:bg-green-600 transition-all duration-300">
              <FaFacebookF className="text-gray-300 text-xl opacity-80 group-hover:opacity-100" />
            </div>
            <div className="rounded-full p-3 hover:bg-green-600 transition-all duration-300">
              <FaTwitter className="text-gray-300 text-xl opacity-80 group-hover:opacity-100" />
            </div>
            <div className="rounded-full p-3 hover:bg-green-600 transition-all duration-300">
              <FaPinterestP className="text-gray-300 text-xl opacity-80 group-hover:opacity-100" />
            </div>
            <div className="rounded-full p-3 hover:bg-green-600 transition-all duration-300">
              <FaInstagram className="text-gray-300 text-xl opacity-80 group-hover:opacity-100" />
            </div>
            <div className="rounded-full p-3 hover:bg-green-600 transition-all duration-300">
              <FaSave className="text-gray-300 text-xl opacity-80 group-hover:opacity-100" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-2 text-gray-400 text-md mr-2">
        <button
          type="submit"
          class="flex w-full justify-center border-2  border-gray-200 rounded-md bg-gray-0  py-1 text-sm font-medium leading-6 text-gray-200 bg-[#F27430] shadow border-1 hover:bg-gray-300 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={() => setOpenModal(!openModal)}
        >
          Close
        </button>
      </div>
    </>
  );
};

export default BrandDetail;
