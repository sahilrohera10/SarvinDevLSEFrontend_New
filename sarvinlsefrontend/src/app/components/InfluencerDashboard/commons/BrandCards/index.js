import Image from "next/image";
import { FaTwitter, FaInstagram, FaPinterestP } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import FirstPlace from "../../../commons/icons/FirstPlace.png";
import SecondPlace from "../../../commons/icons/SecondPlace.png";
import ThirdPlace from "../../../commons/icons/ThirdPlace.png";
import { FaGift } from "react-icons/fa";
import Chips from "../../../commons/Chips";
import Modal from "../../../commons/modal";
import { useState, useEffect } from "react";
import DealDetailModal from "../DealDetailModal";
import Link from "next/link";
import axios from "axios";

const Tags = {
  1: FirstPlace,
  2: SecondPlace,
  3: ThirdPlace,
};

export default function BrandCard({
  brandId = 0,
  dealId = 0,
  heading = "Naman Agarwal",
  subheading = "No Description Available",
  img = "https://images.ctfassets.net/trvmqu12jq2l/1v5PXxoGdoHdO1LOyk6ClR/81f9ff431d0bc22c2b15ef2245ab0750/1x1_DD-SB-KV-FINAL-color-6_012624.jpg",
  tags = 0,
  cardType = "Deals",
  deal_count = 0,
  fixed_price = 0,
  category = "Food",
  cost_avg = 0,

  type = 1,
  isSaved = false,
  is_followed = false,
  onUnfollow = () => {},
}) {
  const [openModal, setOpenModal] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isSave, setIsSave] = useState(isSaved);
  const [isFollowed, setIsFollowed] = useState(is_followed);
  const [isLoading, setIsLoading] = useState(false);
  const SaveDealFunction = () => {
    setIsLoading(true);
    const token = localStorage.getItem("token");
    axios
      .post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/user/save_deal`,
        { deal_id: dealId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => {
        alert("Deal saved successfully!");
        setIsSave(true);
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
        setIsLoading(false);
      });
  };

  const FollowBrand = () => {
    setIsLoading(true);
    const token = localStorage.getItem("token");
    axios
      .post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/user/follow_brand`,
        { brand_id: brandId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => {
        setIsFollowed(true);
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
        setIsLoading(false);
      });
  };
  const UnfollowBrand = () => {
    setIsLoading(true);
    const token = localStorage.getItem("token");
    axios
      .delete(`${process.env.NEXT_PUBLIC_BASE_URL}/api/user/unfollow_brand`, {
        data: { brand_id: brandId },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        setIsFollowed(false);
        onUnfollow();
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
        setIsLoading(false);
      });
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setIsVisible((prev) => !prev); // Toggle visibility
  //   }, 1000); // Change the interval duration as needed

  //   return () => clearInterval(interval); // Cleanup on unmount
  // }, []);

  if (cardType == "Deals") {
    return (
      <div className="max-w-sm bg-black relative group border shadow-lg rounded-lg mb-10">
        <a
          href="#"
          className="relative block rounded-md  group-hover:opacity-70 transition-opacity duration-300"
        >
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
            <div style={{ width: 300, height: 270 }}>
              <Image alt="alt text." src={img} width={300} height={50} />
            </div>

            <div
              className="absolute inset-0 bg-black opacity-0 hover:opacity-20 transition-opacity duration-300"
              onClick={() => setOpenModal(!openModal)}
            ></div>
          </div>

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-90 transition-opacity duration-300">
            <div className="flex items-center space-x-3">
              <div class="text-white text-xl text-semibold opacity-100 group-hover:opacity-100">
                View Deal
              </div>
            </div>
          </div>
        </a>
        <div className="p-3.5 bg-white">
          <div class="flex justify-between">
            <div className="text-black text-xl font-medium">{heading}</div>
            <span class="bg-blue-100 text-blue-800 text-xs pt-1.5 font-medium px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
              Food
            </span>
          </div>
          <div className="text-gray-400 text-sm">{subheading}</div>
          <div class="flex mt-1">
            <span class=" bg-[#ccdfff] text-[#3858f9] text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
              Fixed Cost- {fixed_price}
            </span>
            <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">
              Sales Commission - 3%
            </span>
          </div>
          <div className="text-gray-400 text-md mt-2 mr-2">
            <button
              type="submit"
              class="flex w-full justify-center rounded-md bg-[#F27430] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={() => setOpenModal(!openModal)}
            >
              View Deal
            </button>
          </div>
          {type == 1 && (
            <div className="text-gray-400 text-md mt-2 mr-2">
              <button
                type="submit"
                class="flex w-full justify-center rounded-md bg-gray-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={SaveDealFunction}
                disabled={isSave}
              >
                {isSave ? (
                  "Deal Saved"
                ) : isLoading ? (
                  <svg
                    aria-hidden="true"
                    class="w-6 h-6 mx-2 text-gray-200 animate-spin dark:text-gray-600 fill-[#F27430]"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                ) : (
                  "Save Deal"
                )}
              </button>
            </div>
          )}
          <Modal
            openModal={openModal}
            setOpenModal={setOpenModal}
            closeOutside={false}
          >
            <DealDetailModal
              id={dealId}
              heading={heading}
              subheading={subheading}
              img={img}
              cardType="Deals"
              openModal={openModal}
              setOpenModal={setOpenModal}
            />
          </Modal>
        </div>
      </div>
    );
  } else if (cardType == "Brands") {
    return (
      <div className="max-w-md bg-black relative group border shadow-lg rounded-lg mb-10">
        <a
          href="#"
          className="relative block rounded-md  group-hover:opacity-70 transition-opacity duration-300"
        >
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
            <div style={{ width: 300, height: 270, display: "flex" }}>
              <Image alt="alt text." src={img} width={300} height={50} />
            </div>

            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
          </div>

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-90 transition-opacity duration-300">
            <div className="flex items-center space-x-3">
              <div className="rounded-full p-3 hover:bg-green-600 transition-all duration-300">
                <FaFacebookF className="text-white text-xl opacity-80 group-hover:opacity-100" />
              </div>
              <div className="rounded-full p-3 hover:bg-green-600 transition-all duration-300">
                <FaTwitter className="text-white text-xl opacity-80 group-hover:opacity-100" />
              </div>
              <div className="rounded-full p-3 hover:bg-green-600 transition-all duration-300">
                <FaPinterestP className="text-white text-xl opacity-80 group-hover:opacity-100" />
              </div>
              <div className="rounded-full p-3 hover:bg-green-600 transition-all duration-300">
                <FaInstagram className="text-white text-xl opacity-80 group-hover:opacity-100" />
              </div>
            </div>
          </div>
        </a>
        <div className="p-3.5 bg-white">
          <div class="flex justify-between">
            <div className="text-black text-xl font-medium">{heading}</div>
            <span class="bg-blue-100 text-blue-800 text-xs pt-1.5 font-medium px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
              {category}
            </span>
          </div>
          <div className="text-gray-400 text-sm">{subheading}</div>
          <div class="flex my-2">
            <span class=" bg-[#ccdfff] text-[#3858f9] text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
              Average Cost- {cost_avg}
            </span>
            <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">
              No.Of Deals = {deal_count}
            </span>
          </div>
          <Link
            className="text-gray-400 text-md mt-2 mr-2"
            href={`/brand-dashboard?influencerView=true&id=${brandId}`}
          >
            <button
              type="submit"
              class="flex w-full justify-center rounded-md bg-[#F27430] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              View Details
            </button>
          </Link>
          <div className="text-gray-400 text-md mt-2 mr-2 w-full">
            <button
              class="flex w-full justify-center rounded-md bg-gray-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={() => (isFollowed ? UnfollowBrand() : FollowBrand())}
            >
              {isFollowed ? (
                isLoading ? (
                  <svg
                    aria-hidden="true"
                    class="w-6 h-6 mx-2 text-gray-200 animate-spin dark:text-gray-600 fill-[#F27430]"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                ) : (
                  "Unfollow"
                )
              ) : isLoading ? (
                <svg
                  aria-hidden="true"
                  class="w-6 h-6 mx-2 text-gray-200 animate-spin dark:text-gray-600 fill-[#F27430]"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
              ) : (
                "Follow"
              )}
            </button>
          </div>
        </div>
      </div>
    );
  } else if (cardType == "Bid") {
    return (
      <div className="max-w-md bg-black relative group border shadow-lg rounded-lg mb-10">
        <a
          href="#"
          className="relative block rounded-md  group-hover:opacity-70 transition-opacity duration-300"
        >
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
            <div
              style={{
                position: "absolute",
                display: "flex",
                flexDirection: "row",
                border: 1,
                borderRadius: 6,
                margin: 4,
                color: "red",
                fontWeight: 700,
                alignItems: "center",
                gap: 3,
                backgroundColor: "#FFF",
                paddingRight: 6,
                paddingLeft: 6,
              }}
            >
              {" "}
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  backgroundColor: "red",
                  borderRadius: 50,
                  opacity: isVisible ? 1 : 0 /* Initially transparent */,
                  transition: "opacity 0.5s ease",
                }}
              ></div>
              <div>Live</div>
            </div>
            <div style={{ width: 300, height: 270 }}>
              <Image alt="alt text." src={img} width={300} height={50} />
            </div>

            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
          </div>

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-90 transition-opacity duration-300">
            <div className="flex items-center space-x-3">
              <div className="rounded-full p-3 hover:bg-green-600 transition-all duration-300">
                <FaFacebookF className="text-white text-xl opacity-80 group-hover:opacity-100" />
              </div>
              <div className="rounded-full p-3 hover:bg-green-600 transition-all duration-300">
                <FaTwitter className="text-white text-xl opacity-80 group-hover:opacity-100" />
              </div>
              <div className="rounded-full p-3 hover:bg-green-600 transition-all duration-300">
                <FaPinterestP className="text-white text-xl opacity-80 group-hover:opacity-100" />
              </div>
              <div className="rounded-full p-3 hover:bg-green-600 transition-all duration-300">
                <FaInstagram className="text-white text-xl opacity-80 group-hover:opacity-100" />
              </div>
            </div>
          </div>
        </a>
        <div className="p-3.5 bg-white">
          <div class="flex justify-between">
            <div className="text-black text-xl font-medium">{heading}</div>
            <span class="bg-blue-100 text-blue-800 text-xs pt-1.5 font-medium px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
              Food
            </span>
          </div>
          <div className="text-gray-400 text-sm">{subheading}</div>
          <div class="flex my-2">
            <span class=" bg-[#ccdfff] text-[#3858f9] text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
              Latest Bid Price=5000
            </span>
            <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">
              No.Of Bids = deal_count
            </span>
          </div>

          <button
            type="submit"
            class="flex w-full justify-center rounded-md bg-[#F27430] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => setOpenModal(!openModal)}
          >
            Bid for Deal
          </button>
        </div>
        <Modal openModal={openModal} setOpenModal={setOpenModal}>
          <DealDetailModal
            heading={heading}
            subheading={subheading}
            img={img}
            cardType="Bid"
          />
        </Modal>
      </div>
    );
  } else {
    <div className="max-w-md bg-black relative group border shadow-lg rounded-lg mb-10">
      <a
        href="#"
        className="relative block rounded-md  group-hover:opacity-70 transition-opacity duration-300"
      >
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
          <div style={{ width: 300, height: 270 }}>
            <Image alt="alt text." src={img} width={300} height={50} />
          </div>

          <div className="absolute inset-0 bg-black opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
        </div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-90 transition-opacity duration-300">
          <div className="flex items-center space-x-3">
            <div className="rounded-full p-3 hover:bg-green-600 transition-all duration-300">
              <FaFacebookF className="text-white text-xl opacity-80 group-hover:opacity-100" />
            </div>
            <div className="rounded-full p-3 hover:bg-green-600 transition-all duration-300">
              <FaTwitter className="text-white text-xl opacity-80 group-hover:opacity-100" />
            </div>
            <div className="rounded-full p-3 hover:bg-green-600 transition-all duration-300">
              <FaPinterestP className="text-white text-xl opacity-80 group-hover:opacity-100" />
            </div>
            <div className="rounded-full p-3 hover:bg-green-600 transition-all duration-300">
              <FaInstagram className="text-white text-xl opacity-80 group-hover:opacity-100" />
            </div>
          </div>
        </div>
      </a>
      <div className="p-3.5 bg-white">
        <div class="flex justify-between">
          <div className="text-black text-xl font-medium">{heading}</div>
          <span class="bg-blue-100 text-blue-800 text-xs pt-1.5 font-medium px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
            Food
          </span>
        </div>
        <div className="text-gray-400 text-sm">{subheading}</div>
        <div class="flex my-2">
          <span class=" bg-[#ccdfff] text-[#3858f9] text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
            Average Cost- TBD
          </span>
          <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">
            No.Of Deals = deal_count
          </span>
        </div>
        <Link
          className="text-gray-400 text-md mt-2 mr-2"
          href="/brand-dashboard"
        >
          <button
            type="submit"
            class="flex w-full justify-center rounded-md bg-[#F27430] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            View Details
          </button>
        </Link>
      </div>
    </div>;
  }
}
