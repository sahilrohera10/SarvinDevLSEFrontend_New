"use client";

import React, { useState } from "react";
import BackGroundImage from "../BackGroundImage/index";
import Toast from "../Toast"; // Ensure you have a Toast component for notifications

const TaskDescription = ({
  taskDescription,
  setTaskDescription,
  handleNext,
  handlePrevious,
}) => {
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  const handleCloseError = () => {
    setError(false);
  };

  const handleNextClick = () => {
    if (taskDescription.trim() === "") {
      setMessage("Task description cannot be empty");
      setError(true);
    } else if (taskDescription.trim().length < 20) {
      setMessage("Task description must be greater than length 20");
      setError(true);
    } else {
      setError(false);
      handleNext();
    }
  };

  return (
    <>
      <BackGroundImage />
      <div style={{ position: "relative", opacity: 1, overflow: "hidden" }}>
        <div className="w-full sm:h-[70vh] flex flex-col justify-center items-center px-6 py-12 lg:px-8">
          <div className="w-2/3 h-full px-10 flex flex-col items-center justify-between">
            <div className="w-full">
              <div className="my-4 text-center flex justify-center text-6xl text-gray-900">
                Task Description
              </div>
              <div className="mt-10">
                <h3 className="text-start text-gray-900">
                  Write a description for your task
                </h3>
                <div className="mt-2">
                  <textarea
                    id="task-description"
                    name="task-description"
                    placeholder="Value"
                    value={taskDescription}
                    onChange={(e) => setTaskDescription(e.target.value)}
                    required
                    className="block w-full rounded-md border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                    rows="4"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="flex w-full justify-between">
              <button
                onClick={handlePrevious}
                type="button"
                className="flex justify-center rounded-md bg-gray-600 px-7 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
              >
                Previous
              </button>
              <button
                onClick={handleNextClick}
                type="button"
                className="flex justify-center rounded-md bg-[#F27430] px-7 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
      {error && <Toast handleCloseError={handleCloseError} message={message} />}
    </>
  );
};

export default TaskDescription;
