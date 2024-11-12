import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import Coins from "../../../../commons/icons/coin.png";

export default function ListCard({
  userId = 0,
  responseId = 0,
  img = "https://img.freepik.com/free-photo/abstract-glowing-flame-drops-electric-illumination-generative-ai_188544-8092.jpg",
  username = "@namanaga",
  followers = 3462,
  sarvinscore = 492,
  showDetail = false,
  isViewed = false,
  setShowDetail = () => {},
}) {
  const [creatorInfo, setCreatorInfo] = useState();
  const [loading, setLoading] = useState(false);
  const [Accepted, setAccepted] = useState(false);

  const onShowFunction = (id) => {
    const token = localStorage.getItem("token");
    console.log("Token:", token); // Log the token

    if (!token) {
      console.error("No token found!");
      return; // Prevent the API call if no token
    }

    setLoading(true);

    axios
      .get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/brand/view_creator_info/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        setShowDetail(true);
        setCreatorInfo(response.data?.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  };

  const onHireFunction = (id) => {
    const token = localStorage.getItem("token");
    console.log("Token:", token); // Log the token

    if (!token) {
      console.error("No token found!");
      return; // Prevent the API call if no token
    }

    setLoading(true);

    axios
      .patch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/brand/accept_deal`,
        {
          response_id: id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        setAccepted(true);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <>
      <div
        className={
          showDetail || isViewed
            ? "relative w-full h-[6vh] px-[10px] py-[36px]  rounded-md flex border-[1px] border-[#E7E7E7] bg-[#fbfbfd] shadow text-gray-700 hover:bg-slate-200 hover:text-[#F27430]"
            : "relative bg-blend-saturation w-full h-[6vh] px-[10px] py-[36px] rounded-md flex border-[1px] border-[#E7E7E7] bg-[#fbfbfd] shadow text-gray-700 hover:bg-slate-200 hover:text-[#F27430]"
        }
      >
        <div
          className={
            showDetail || isViewed
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
            {username || "SarvinCreator"}
          </div>
          <div className="text-sm flex justify-center font-semibold w-1/4 truncate hover:text-[#F27430]">
            {followers || "123"}
          </div>
          <div className="text-sm flex justify-center font-semibold w-1/4 truncate hover:text-[#F27430]">
            {sarvinscore || "234"}
          </div>
        </div>

        {/* Button that appears on hover */}
        {!isViewed && !showDetail && (
          <div className="absolute inset-0 m-4 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <button
              className="bg-[#ee8750] flex justify-center text-white px-2 py-2 rounded-md"
              onClick={() => onShowFunction(responseId)}
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
      {(showDetail || isViewed) && (
        <div class="flex w-full justify-between my-2">
          <button className="bg-green-500 flex justify-center transition-all text-white px-2 py-2 rounded-md hover:bg-red-600">
            {!Accepted ? (
              <div
                data-te-chip-init
                data-te-ripple-init
                class="[word-wrap: break-word] font-semibold flex -mt-0.5 cursor-pointer items-center justify-between rounded-[21px] bg-[transparent] px-[12px] py-0  font-normal normal-case leading-loose px-[12px] py-0  transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#4185f4] dark:bg-[transparent] dark:text-[#4185f4]"
                onClick={() => onHireFunction(responseId)}
              >
                Hire Me!!
              </div>
            ) : (
              <div
                data-te-chip-init
                data-te-ripple-init
                class="[word-wrap: break-word] font-semibold flex -mt-0.5 cursor-pointer items-center justify-between rounded-[21px] bg-[transparent] px-[12px] py-0  font-normal normal-case leading-loose px-[12px] py-0  transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#4185f4] dark:bg-[transparent] dark:text-[#4185f4]"
              >
                Accepted
              </div>
            )}
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
