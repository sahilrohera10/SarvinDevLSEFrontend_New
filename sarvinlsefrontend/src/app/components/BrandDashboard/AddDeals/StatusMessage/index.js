import React from "react";

const StatusMessage = ({ isSuccess, message, openAddDealsModal, setOpenAddDealsModal }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-full w-full text-center bg-gray-100 p-6 rounded-lg shadow-lg space-y-7">
        <div className="mb-6">
          {isSuccess ? (
            <div className="h-24 w-24 rounded-full border-8 border-[#34A853] flex justify-center items-center animate-checkmark">
              <svg
                className="w-16 h-16 text-[#34A853]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  d="M5 11.917 9.724 16.5 19 7.5"
                />
              </svg>
            </div>
          ) : (
            // <div className=" text-6xl">✖</div>

            <div className="h-24 w-24 rounded-full border-8 border-red-500 flex justify-center items-center animate-checkmark">
              <svg
                className="w-16 h-16 text-red-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18 17.94 6M18 18 6.06 6"
                />
              </svg>
            </div>
          )}
        </div>
        <h1 className="text-4xl font-bold">
          {isSuccess ? "The deal has been successfully created" : "Sorry, we couldn't complete your deal"}
        </h1>
        <div>
          {!isSuccess && <p className="text-gray-600 mt-2">Your request can’t be created due to this</p>}
          <p className="text-red-600 mt-2">{message}</p>
        </div>

        <button
          onClick={() => setOpenAddDealsModal(!openAddDealsModal)}
          type="button"
          className="flex justify-center rounded-md bg-[#F27430] px-7 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
        >
          Continue
        </button>
      </div>
      <style jsx>{`
        @keyframes checkmark {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          50% {
            transform: scale(1.1);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-checkmark {
          animation: checkmark 0.5s ease-out;
        }
      `}</style>
    </>
  );
};

export default StatusMessage;
