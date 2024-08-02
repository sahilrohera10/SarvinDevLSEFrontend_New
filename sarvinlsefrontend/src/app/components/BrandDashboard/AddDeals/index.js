"use client";

import React, { useState } from "react";
import DealTitle from "./DealTitle/index";
import BudgetDetails from "./BudgetDetails/index";
import CampaignDescription from "./CampaignDescription/index";
import DeliveryInformation from "./DeliveryInformation/index";
import InfluencerRequirement from "./InfluencerRequirement/index";
import TargetAudience from "./TargetAudience/index";
import TargetPlatform from "./TargetPlatform/index";
import TaskDescription from "./TaskDescription/index";
import Navbar from "./Navbar";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const steps = [
    { component: <DealTitle key={0} handleNext={handleNext} />, width: "10%" },
    { component: <TargetPlatform key={1} handleNext={handleNext} handlePrevious={handlePrevious} />, width: "20%" },
    {
      component: <CampaignDescription key={2} handleNext={handleNext} handlePrevious={handlePrevious} />,
      width: "35%",
    },
    { component: <TargetAudience key={3} handleNext={handleNext} handlePrevious={handlePrevious} />, width: "45%" },
    {
      component: <DeliveryInformation key={4} handleNext={handleNext} handlePrevious={handlePrevious} />,
      width: "60%",
    },
    {
      component: <InfluencerRequirement key={5} handleNext={handleNext} handlePrevious={handlePrevious} />,
      width: "75%",
    },
    { component: <TaskDescription key={6} handleNext={handleNext} handlePrevious={handlePrevious} />, width: "85%" },
    { component: <BudgetDetails key={7} handlePrevious={handlePrevious} />, width: "95%" },
  ];

  return (
    <div className=" w-[80vw]">
      {/* <Navbar /> */}
      <div className="w-full bg-[#cacaca] rounded-full dark:bg-gray-700" style={{ marginTop: 10 }}>
        <div
          className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0 leading-none rounded-full transition-all ease-out duration-500"
          style={{ width: steps[currentStep].width, height: "15px" }}
        >
          {" "}
        </div>
      </div>
      {steps[currentStep].component}
    </div>
  );
}
