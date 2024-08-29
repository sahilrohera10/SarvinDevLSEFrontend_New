import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Coins from "../../../../commons/icons/coin.png";

export default function ListCard({
  img = "https://img.freepik.com/free-photo/abstract-glowing-flame-drops-electric-illumination-generative-ai_188544-8092.jpg",
  username = "@namanaga",
  followers = 3462,
  sarvinscore = 492,
}) {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <>
      <div
        className={
          showDetail
            ? "relative w-full h-[6vh] px-[10px] py-[36px]  rounded-md flex border-[1px] border-[#E7E7E7] bg-[#fbfbfd] shadow text-gray-700 hover:bg-slate-200 hover:text-[#F27430]"
            : "relative bg-blend-saturation w-full h-[6vh] px-[10px] py-[36px] rounded-md flex border-[1px] border-[#E7E7E7] bg-[#fbfbfd] shadow text-gray-700 hover:bg-slate-200 hover:text-[#F27430]"
        }
      >
        <div
          className={
            showDetail
              ? "w-full flex items-center justify-between transition-all duration-300"
              : "w-full flex items-center justify-between blur-sm hover:blur-none transition-all duration-300"
          }
        >
          <div className="w-1/4 flex justify-center">
            <Image
              className="w-[50px] h-[50px] rounded-full"
              src={img}
              alt="logo"
              width={400}
              height={800}
            />
          </div>

          <div className="text-sm flex justify-center w-1/4 truncate hover:text-[#F27430]">
            {username}
          </div>
          <div className="text-sm flex justify-center font-semibold w-1/4 truncate hover:text-[#F27430]">
            {followers}
          </div>
          <div className="text-sm flex justify-center font-semibold w-1/4 truncate hover:text-[#F27430]">
            {sarvinscore}
          </div>
        </div>

        {/* Button that appears on hover */}
        {!showDetail && (
          <div className="absolute inset-0 m-4 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <button
              className="bg-[#ee8750] flex justify-center text-white px-2 py-2 rounded-md"
              onClick={() => setShowDetail(!showDetail)}
            >
              <div
                data-te-chip-init
                data-te-ripple-init
                class="[word-wrap: break-word] font-semibold flex -mt-0.5 cursor-pointer items-center justify-between rounded-[21px] bg-[transparent] px-[12px] py-0  font-normal normal-case leading-loose px-[12px] py-0  transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#4185f4] dark:bg-[transparent] dark:text-[#4185f4]"
              >
                Show
                <Image
                  class="my-0 h-5 w-5 mx-1 mr-[4px] rounded-[100%]"
                  src={Coins}
                  alt="Contact Person"
                />
                1
              </div>
            </button>
          </div>
        )}
      </div>
      {showDetail && (
        <div class="flex w-full justify-between my-2">
          <button className="bg-green-500 flex justify-center transition-all text-white px-2 py-2 rounded-md hover:bg-red-600">
            <div
              data-te-chip-init
              data-te-ripple-init
              class="[word-wrap: break-word] font-semibold flex -mt-0.5 cursor-pointer items-center justify-between rounded-[21px] bg-[transparent] px-[12px] py-0  font-normal normal-case leading-loose px-[12px] py-0  transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#4185f4] dark:bg-[transparent] dark:text-[#4185f4]"
            >
              Hire Me!!
            </div>
          </button>
          <Link href="/influencer-dashboard?brandView=True&id=cjndcdjcndjcndc">
            <button className="bg-red-400 flex justify-center text-white px-2 py-2 rounded-md hover:bg-red-700">
              <div
                data-te-chip-init
                data-te-ripple-init
                class="[word-wrap: break-word] font-semibold flex -mt-0.5 cursor-pointer items-center justify-between rounded-[21px] bg-[transparent] px-[12px] py-0  font-normal normal-case leading-loose px-[12px] py-0  transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#4185f4] dark:bg-[transparent] dark:text-[#4185f4]"
              >
                View Details
              </div>
            </button>
          </Link>
        </div>
      )}
    </>
  );
}
