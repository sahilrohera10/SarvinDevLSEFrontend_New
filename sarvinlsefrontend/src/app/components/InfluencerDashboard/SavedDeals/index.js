"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import BrandsDealCards from "../commons/BrandsDealCards";
import Lottie from "react-lottie-player";
import Handwave from "../../commons/icons/404Notfound.json";
const SavedDeals = () => {
  const [branddeals, setBranddeals] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/user/get_saved_deal`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setBranddeals(response.data?.data);

        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {branddeals ? (
        <div class="mx-4">
          {" "}
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <div class="flex justify-between gap-2 m-5 "></div>
          </div>
          <BrandsDealCards
            branddeals={branddeals}
            setBranddeals={setBranddeals}
            loading={loading}
            setLoading={setLoading}
            type={2}
          />
        </div>
      ) : (
        <div class="flex w-full justify-center m-6">
          <div class="w-full max-w-xl p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div class="p-5 bg-slate-200 rounded-md">
              <Lottie
                loop
                animationData={Handwave}
                play
                style={{
                  marginLeft: 4,
                  marginTop: 4,
                }}
              />
            </div>
            <div class="px-5 pb-5  ">
              <div class="text-2xl flex justify-center my-2 font-normal tracking-tight text-gray-700 dark:text-white">
                Nothing is Here For Now...
              </div>
              <div class="text-lg flex justify-center my-1 font-thin tracking-tight text-gray-700 dark:text-white">
                only on
              </div>
              <div
                class="text-4xl flex justify-center my-1 font-thin tracking-tight"
                style={{
                  color: "#E65C55",
                  transition: "color 2s",
                }}
              >
                SARVIN
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default SavedDeals;
