import Image from "next/image";
import { FaTwitter, FaInstagram, FaPinterestP, FaSave } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import FirstPlace from "../../../commons/icons/FirstPlace.png";
import SecondPlace from "../../../commons/icons/SecondPlace.png";
import ThirdPlace from "../../../commons/icons/ThirdPlace.png";
import { FaGift } from "react-icons/fa";
import Chips from "../../../commons/Chips";
import { useState } from "react";

const Tags = {
  1: FirstPlace,
  2: SecondPlace,
  3: ThirdPlace,
};
export default function BrandListCard({
  heading = "Naman Agarwal",
  subheading = "CEO and Founder",
  img = "https://tse1.mm.bing.net/th?id=OIP.K7lG3005eY-tEHwlxf61qgHaFx&pid=Api&P=0&w=300&h=300",
  tags = 0,
  cardType = "Deals",
}) {
  return (
    <>
      {" "}
      {cardType == "Deals" ? (
        <div className="w-full flex bg-black relative group border shadow-lg rounded-lg mb-10">
          <div className="relative overflow-hidden">
            {tags > 0 && tags < 4 && (
              <div
                style={{
                  position: "absolute",
                  display: "flex",
                  flexDirection: "row-reverse",
                  width: "100%",
                }}
              >
                {" "}
                <Image alt="Badge" src={Tags[tags]} width={36} height={36} />
              </div>
            )}
            <div style={{ width: 500, height: 270 }}>
              <Image alt="alt text." src={img} width={300} height={50} />
            </div>

            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
          </div>

          <div className="pb-3 px-3 bg-white w-full">
            <div class="flex justify-between align-middle">
              <div class=" flex text-black text-xl font-medium align-middle my-4">
                {" "}
                <div class="flex flex-col justify-center mt-2 mx-2">
                  <Image alt="alt text." src={img} width={50} height={42} />
                </div>
                <div class="flex flex-col justify-center">
                  <div class="mt-2">{heading}</div>
                  <div className="text-gray-400 text-sm">{subheading}</div>
                </div>
              </div>
            </div>

            <div class="flex mx-4 my-2">
              <span class=" bg-[#ccdfff] text-[#3858f9] text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                Average Cost- TBD
              </span>
              <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">
                No.Of Deals = 1432
              </span>
            </div>
            <div class="flex gap-4">
              <div>
                <div class="mx-4 mt-4 font-600">Location</div>
                <div className="text-gray-400 text-sm mx-4">Brand Location</div>
              </div>
              <div>
                <div class="mx-4 mt-4 font-600">Followers</div>
                <div className="text-gray-400 text-sm mx-4">123</div>
              </div>
              <div>
                <div class="mx-4 mt-4 font-600">Engagement Rate</div>
                <div className="text-gray-400 text-sm mx-4">2%</div>
              </div>
            </div>
          </div>
          <div class="p-4 bg-white flex flex-col justify-between">
            <div class="flex justify-end">
              <span class="bg-blue-100  text-blue-800 text-xs pt-1.5 font-medium px-2.5 h-7 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
                Food
              </span>
            </div>
            <div className="flex items-center space-x-3 align-middle">
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
            <div className="text-gray-400 text-md mt-2 mr-2">
              <button
                type="submit"
                class="flex w-full justify-center border-2 border-gray-200 b rounded-md bg-gray-0 px-3 py-1.5 text-sm font-medium leading-6 text-gray-900 shadow border-1 hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full flex bg-white relative group border shadow-lg rounded-lg mb-10 align-middle">
          <div className="pb-3 px-3 bg-white w-full">
            <div class="flex justify-between align-middle">
              <div class=" flex text-black text-xl font-medium align-middle my-4">
                {" "}
                <div class="flex flex-col justify-center mt-2 mx-2">
                  <Image alt="alt text." src={img} width={50} height={42} />
                </div>
                <div class="flex flex-col justify-center">
                  <div class="mt-2">{heading}</div>
                  <div className="text-gray-400 text-sm">{subheading}</div>
                </div>
              </div>
            </div>

            <div class="flex mx-4 my-2">
              <span class=" bg-[#ccdfff] text-[#3858f9] text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                Average Cost- TBD
              </span>
              <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">
                No.Of Deals = 1432
              </span>
            </div>
            <div class="flex gap-4">
              <div>
                <div class="mx-4 mt-4 font-600">Location</div>
                <div className="text-gray-400 text-sm mx-4">Brand Location</div>
              </div>
              <div>
                <div class="mx-4 mt-4 font-600">Followers</div>
                <div className="text-gray-400 text-sm mx-4">123</div>
              </div>
              <div>
                <div class="mx-4 mt-4 font-600">Engagement Rate</div>
                <div className="text-gray-400 text-sm mx-4">2%</div>
              </div>
            </div>
          </div>
          <div class="m-4 flex flex-col justify-between">
            <div class="flex justify-end">
              <span class="bg-blue-100  text-blue-800 text-xs pt-1.5 font-medium px-2.5 h-7 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
                Food
              </span>
            </div>
            <div className="flex items-center space-x-3 align-middle">
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
            <div className="text-gray-400 text-md mt-2 mr-2">
              <button
                type="submit"
                class="flex w-full justify-center border-2 border-gray-200 b rounded-md bg-gray-0 px-3 py-1.5 text-sm font-medium leading-6 text-gray-900 shadow border-1 hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
