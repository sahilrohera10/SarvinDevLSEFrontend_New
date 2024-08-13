import React from "react";

import "react-alice-carousel/lib/alice-carousel.css";
import Lottie from "react-lottie-player";
import ProfilePic from "../../commons/icons/profilepic.json";
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
}) {
  if (crackedSteps == 0) {
    return (
      <div class="w-full flex justify-center">
        <div class="w-full font-semibold text-xl">
          {" "}
          <Lottie
            loop
            animationData={ProfilePic}
            play
            style={{ width: "100%", height: "50%" }}
          />
          <br />
          Your request has been forwarded to the brand.
          <br /> If the brand accepts your request, Sarvin will notify you and
          provide details of the next steps.
          <br />
          <div
            style={{ display: "flex", justifyContent: "center", marginTop: 20 }}
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
    );
  } else if (crackedSteps == 1) {
    return (
      <div class="w-full flex justify-center">
        <div class="w-full font-semibold text-xl">
          {" "}
          <Lottie
            loop
            animationData={Activity}
            play
            style={{ width: "100%", height: "40%" }}
          />
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
            <Button style={{ backgroundColor: "#E65C55" }}>Submit</Button>
            <Button
              style={{ backgroundColor: "gray" }}
              onClick={() => setOpenModal(!openModal)}
            >
              Close
            </Button>
          </div>
        </div>
      </div>
    );
  } else if (crackedSteps == 2) {
    return (
      <>
        <div class="flex justify-around w-full gap-20">
          <div class="flex-col gap-4">
            <div class="text-xl font-medium mb-10">Target</div>
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
          <div class="flex-col gap-4">
            <div class="text-xl font-medium mb-10">Current</div>{" "}
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
        {" "}
        <Lottie
          loop
          animationData={ProfilePic}
          play
          style={{ width: "40%", height: "40%", marginRight: 20 }}
        />
      </div>
    );
  } else if (crackedSteps == 4) {
    return (
      <div>
        {" "}
        <Lottie
          loop
          animationData={ProfilePic}
          play
          style={{ width: "40%", height: "40%", marginRight: 20 }}
        />
      </div>
    );
  }

  return <div>ButtonStatement</div>;
}

export default ButtonStatement;
