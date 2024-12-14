import React, { useState } from "react";
import axios from "axios";
import "react-alice-carousel/lib/alice-carousel.css";
import Lottie from "react-lottie-player";
import sarvinBrand from "../../commons/icons/sarvinBrandOK.png";
import HappyInfluencer from "../../commons/icons/happyInfluencer.png";
import Activity from "../../commons/icons/activity.json";

import { Button } from "../../commons/button";
import MetricCard from "../../commons/MetricCard";
import Ca from "../../commons/icons/ca.png";
import Man from "../../commons/icons/actor.png";
import Image from "next/image";

function ButtonStatement({
  crackedSteps = 0,
  openModal,
  setOpenModal = () => {},
  responseId = 0,
}) {
  const [Url, setUrl] = useState("");
  const [successMediaUrl, setSuccessMediaUrl] = useState(false);
  const MediaUrlInsertion = (responseId, url) => {
    const token = localStorage.getItem("token");
    axios
      .patch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/response/media_posted`,
        { response_id: responseId, media_url: url },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => {
        setSuccessMediaUrl(true);
        console.log("URL SUBMITTED");
      })
      .catch((error) => {
        if (error.response) {
          console.error("Error response from server:", error.response.data);
          console.error("Status:", error.response.status);
        } else if (error.request) {
          console.error("No response received:", error.request);
        } else {
          console.error("Axios request error:", error.message);
        }
      })
      .finally(() => {
        console.log("finally");
      });
  };
  if (crackedSteps == 0) {
    return (
      <>
        <div
          style={{
            color: "#E65C55",
            fontSize: 30,
            marginBottom: 10,
          }}
        >
          {" "}
          SARVIN <i style={{ fontSize: 14, color: "gray" }}>Influencers</i>
        </div>
        <div class="w-full flex justify-center rounded-md p-4 border-[1px] border-gray-500">
          <div class="w-full font-semibold text-xl">
            {" "}
            <div class="flex justify-center">
              <Image
                src={sarvinBrand}
                alt="Successful Pic"
                width={150}
                height={150}
              />
            </div>
            <br />
            Your request has been forwarded to the brand.
            <br /> If the brand accepts your request, Sarvin will notify you and
            provide details of the next steps.
            <br />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: 20,
              }}
            >
              <Button
                style={{ backgroundColor: "#E65C55" }}
                onClick={() => setOpenModal(!openModal)}
              >
                CLOSE
              </Button>
            </div>
          </div>
        </div>
      </>
    );
  } else if (crackedSteps == 1) {
    return (
      <>
        <div
          style={{
            color: "#E65C55",
            fontSize: 30,
            marginBottom: 10,
          }}
        >
          {" "}
          SARVIN <i style={{ fontSize: 14, color: "gray" }}>Influencers</i>
        </div>
        {!successMediaUrl ? (
          <div class="w-full flex justify-center order-dashed rounded-md p-4 border-[1px] border-gray-500">
            <div class="font-medium text-xl">
              {" "}
              <div class="flex justify-center">
                <Image
                  src={HappyInfluencer}
                  alt="Happy_Influencers"
                  width={150}
                  height={150}
                />
              </div>
              <br />
              Congratulations!! You got the deal.
              <br />
              Just Post the related brand ads on your social media and paste the
              related URL here...
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 20,
                  marginTop: 20,
                }}
              >
                <input
                  type="search"
                  id="default-search"
                  class="block w-3/5 p-2 ps-4 text-md text-gray-900 border text-center border-gray-300 rounded-lg bg-[#F3F9FB] focus:ring-blue-500 focus:border-blue-500 dark:bg-[#F3F9FB] dark:border-gray-200 dark:placeholder-gray-400 dark:text-white dark:focus:gray-500 dark:focus:gray-500"
                  placeholder="Paste your social media URL"
                  onChange={(e) => {
                    setUrl(e.target.value);
                  }}
                  required
                />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 20,
                  marginTop: 20,
                }}
              >
                <Button
                  onClick={() => MediaUrlInsertion(responseId, Url)}
                  style={{ backgroundColor: "#E65C55" }}
                >
                  Submit
                </Button>
                <Button
                  style={{ backgroundColor: "gray" }}
                  onClick={() => setOpenModal(!openModal)}
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div class="flex justify-center">
            Congratulations! Your Social Media URL is Submitted! Just Wait for
            the Target to Complete!
            <br />
            <Button
              style={{
                backgroundColor: "gray",
                display: "flex",
                justifyContent: "center",
              }}
              onClick={() => setOpenModal(!openModal)}
            >
              Close
            </Button>
          </div>
        )}
      </>
    );
  } else if (crackedSteps == 2) {
    return (
      <>
        <div
          style={{
            color: "#E65C55",
            fontSize: 30,
            marginBottom: 10,
          }}
        >
          {" "}
          SARVIN{" "}
          <i style={{ fontSize: 14, color: "gray" }}>Target Comparision</i>
        </div>
        <div class="flex justify-around w-full gap-20 border-dashed rounded-md p-4 border-[1px] border-gray-500">
          <div class="flex-col gap-4">
            <div class="text-xl mb-10">Target</div>
            <div class="mb-4">
              <MetricCard
                value={"245390"}
                title="Views"
                icon={<Image src={Man} width={48} height={0} alt="Icon" />}
                trend={{
                  slope: -1,
                  description: "Compared to last week",
                  value: "0.5%",
                }}
              />
            </div>
            <div class="mb-4">
              <MetricCard
                value={"245390"}
                title="Quality Audience"
                icon={<Image src={Ca} width={48} height={0} alt="Icon" />}
                trend={{
                  slope: -1,
                  description: "Compared to last week",
                  value: "0.5%",
                }}
              />
            </div>
            <div class="mb-4">
              <MetricCard
                value={"245390"}
                title="Quality Audience"
                icon={<Image src={Ca} width={48} height={0} alt="Icon" />}
                trend={{
                  slope: -1,
                  description: "Compared to last week",
                  value: "0.5%",
                }}
              />
            </div>
          </div>
          <div
            class="absolute left-1/2 border  border-dashed w-px bg-gray-400"
            style={{ height: "60%" }}
          ></div>
          <div class="flex-col gap-4">
            <div class="text-xl mb-10">Current</div>{" "}
            <div class="mb-4">
              <MetricCard
                value={"240"}
                title="Views"
                icon={<Image src={Man} width={48} height={0} alt="Icon" />}
                trend={{
                  slope: -1,
                  description: "Not Completed",
                  value: "24356 Left",
                }}
                backgroundcolor="#FFEAEB"
              />
            </div>
            <div class="mb-4">
              <MetricCard
                value={"245390"}
                title="Quality Audience"
                icon={<Image src={Ca} width={48} height={0} alt="Icon" />}
                trend={{
                  slope: -1,
                  description: "Compared to last week",
                  value: "0.5%",
                }}
                backgroundcolor="#FFEAEB"
              />
            </div>
            <div class="mb-4">
              <MetricCard
                value={"245390"}
                title="Quality Audience"
                icon={<Image src={Ca} width={48} height={0} alt="Icon" />}
                trend={{
                  slope: 1,
                  description: "Completed",
                  value: "234 Ahead",
                }}
                backgroundcolor="#ecfadc"
              />
            </div>
          </div>
        </div>
        <div>
          As soon as all the targets are achieved, this step will be completed
          and you will receive the award
        </div>
        <div class="flex w-full justify-center mt-16">
          <Button
            style={{ backgroundColor: "gray" }}
            onClick={() => setOpenModal(!openModal)}
          >
            Close
          </Button>
        </div>
      </>
    );
  } else if (crackedSteps == 3) {
    return (
      <div>
        <div
          style={{
            color: "#E65C55",
            fontSize: 30,
            marginBottom: 10,
          }}
        >
          {" "}
          SARVIN <i style={{ fontSize: 14, color: "gray" }}>Rewards</i>
        </div>

        <div class="flex justify-between items-center w-full gap-10 border-dashed rounded-md p-4 border-[1px] border-gray-500">
          <div className="relative w-full h-28 mx-auto p-10 bg-white rounded-lg flex items-center justify-between border-y ">
            {/* Left semi-circle */}
            <div className="absolute top-1/2 -right-0 -translate-y-1/2 w-4 h-8 bg-[#f8f7fe] border border-gray-50 rounded-l-full"></div>
            {/* Right semi-circle */}
            <div className="absolute top-1/2 -left-0 -translate-y-1/2 w-4 h-8 bg-[#f8f7fe] border border-gray-50 rounded-r-full"></div>
            <div className="flex items-center h-full ">
              <div className="text-yellow-500 text-4xl font-bold mx-3">M</div>
              <div class="absolute left-1/4 border  border-dashed h-full w-px bg-gray-300"></div>

              <div className="text-gray-700 mx-8">
                <div className="text-md font-semibold">10% Off</div>
                <div className="text-sm text-gray-500">McDonalds</div>
                <div className="text-gray-400 text-xs">
                  Valid until 01 February 2022
                </div>
              </div>
            </div>
            <div
              class="flex block w-2/4 h-10 border-2 font-medium items-center justify-center bg-gray-100 text-gray-900  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              style={{ fontSize: 12, letterSpacing: 4 }}
            >
              CODE : 7742
            </div>
          </div>
          <br />
          <div className="relative w-2/3 mx-auto p-6 bg-white rounded-lg  border-y border-gray-200">
            {/* Top Section */}
            <div className="flex justify-between items-start mb-4">
              <div className="text-red-600 text-xl font-bold">KFC</div>
              <div className="text-gray-700 text-sm text-right">
                <div className="font-semibold">25% OFF</div>
              </div>
            </div>

            {/* Content Section */}
            <div className="text-gray-700 mb-4">
              <p className="font-semibold mb-3">Get 25% at your next KFC buy</p>
              <ul className="list-disc text-xs">
                <li>Redeemable at all KFC restaurants in the India.</li>
                <li>Not valid with any other discounts and promotions.</li>
                <li>No Cash Value</li>
              </ul>
            </div>

            {/* QR Code Section */}
            <div className="flex justify-center items-center mb-4 mt-20">
              <div className="w-20 h-20  flex justify-center items-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/5e/QR_Code_example.png"
                  alt="QR Code"
                  className="w-full h-full"
                />
              </div>
            </div>

            {/* Bottom Section */}
            <div className="text-gray-400 text-xs text-center">
              Valid until 01 February 2022
            </div>
            <div class="flex-row justify-center w-full">
              {" "}
              <div
                class=" absolute mt-8  top-1/2 border-t border-dashed border-gray-300"
                style={{ width: "83%" }}
              ></div>
            </div>

            {/* Left semi-circle */}
            <div className="absolute top-1/2 mt-8 right-0 -translate-y-1/2 w-4 h-8 bg-[#f8f7fe]  rounded-l-full"></div>

            {/* Right semi-circle */}
            <div className="absolute top-1/2 mt-8 left-0 -translate-y-1/2 w-4 h-8 bg-[#f8f7fe] rounded-r-full"></div>
          </div>
        </div>
        <div class="flex w-full justify-center">
          *For Redeem this coupon ,kindly show the CODE or QR to a
          Brand/Business. This is applicable for a single use.
        </div>
        <div class="flex w-full justify-center mt-16">
          <Button
            style={{ backgroundColor: "gray" }}
            onClick={() => setOpenModal(!openModal)}
          >
            Close
          </Button>
        </div>
      </div>
    );
  }

  return <div>ButtonStatement</div>;
}

export default ButtonStatement;
