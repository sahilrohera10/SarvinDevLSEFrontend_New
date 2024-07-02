import Image from "next/image";
import { FaTwitter, FaInstagram, FaPinterestP, FaSave } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import FirstPlace from "../../../commons/icons/FirstPlace.png";
import SecondPlace from "../../../commons/icons/SecondPlace.png";
import ThirdPlace from "../../../commons/icons/ThirdPlace.png";
import Modal from "../../../commons/modal";
import BrandDetail from "../DealDetailModal";
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
  isTabletOrMobile = false,
}) {
  const [openModal, setOpenModal] = useState(false);
  if (cardType == "Event") {
    return (
      <div
        className={
          isTabletOrMobile
            ? "w-full bg-black relative group border shadow-lg rounded-lg mb-10"
            : "w-full flex bg-black relative group border shadow-lg rounded-lg mb-10"
        }
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
              Fixed Cost- TBD
            </span>
            <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">
              Sales Commission = 14%
            </span>
          </div>

          <div class="text-left mx-4 my-6">
            <div CLASS="FLEX GAP-4 my-1">
              <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                Audience Location - Civil Lines,Bareilly
              </span>
              <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                Audience Age - 24-50
              </span>
            </div>
            <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
              Audience Gender - Any
            </span>
            <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
              Target Audience - 10k
            </span>
          </div>
          <div class="mx-4 font-600">Requirements</div>
          <div class="text-left mx-4 mt-2">
            <div CLASS="FLEX GAP-4 my-1">
              <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                Influencer Required - 19k Followers
              </span>
              <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                Influencer Required Age - 24-50
              </span>
            </div>
            <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
              Influencer Gender - Any
            </span>
          </div>
        </div>

        <div class="p-4 bg-white flex flex-col justify-between">
          <div class="flex justify-end">
            <span class="bg-blue-100  text-blue-800 text-xs pt-1.5 font-medium px-2.5 h-7 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
              Comedy
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
    );
  } else if (cardType == "Cracked") {
    return (
      <div
        className={
          isTabletOrMobile
            ? "w-full bg-black relative group border shadow-lg rounded-lg mb-10"
            : "w-full flex bg-black relative group border shadow-lg rounded-lg mb-10"
        }
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
          <div class="flex mx-3 my-2">
            <span class=" bg-[#ccdfff] text-[#3858f9] text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
              Fixed Cost- Null
            </span>
            <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">
              Sales Commission = 14%
            </span>
          </div>
          <div CLASS="flex gap-4 mx-3 my-1">
            <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
              Post Link-Null
            </span>
            <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
              Deal Owner Remark - Null
            </span>
          </div>
          <div class="mx-4 mt-6 font-600">
            <div>Deal Status</div>

            <ol class="flex items-center w-full mt-2">
              <li class="flex w-full items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-blue-800">
                <span class="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0">
                  <svg
                    class="w-3.5 h-3.5 text-blue-600 lg:w-4 lg:h-4 dark:text-blue-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                </span>
              </li>
              <li class="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700">
                <span class="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                  <svg
                    class="w-4 h-4 text-gray-500 lg:w-5 lg:h-5 dark:text-gray-100"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 16"
                  >
                    <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z" />
                  </svg>
                </span>
              </li>
              <li class="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700">
                <span class="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                  <svg
                    class="w-4 h-4 text-gray-500 lg:w-5 lg:h-5 dark:text-gray-100"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 16"
                  >
                    <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z" />
                  </svg>
                </span>
              </li>
              <li class="flex items-center w-full">
                <span class="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                  <svg
                    class="w-4 h-4 text-gray-500 lg:w-5 lg:h-5 dark:text-gray-100"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 20"
                  >
                    <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z" />
                  </svg>
                </span>
              </li>
            </ol>
          </div>{" "}
          <ol class="flex items-center w-full">
            <li class="flex text-xs items-center w-full">Accepted By Author</li>
            <li class="flex text-xs items-center w-full">
              Deal Posted <br />
              on Social Media
            </li>
            <li class="flex text-xs items-center w-full">
              Target <br /> Completion
            </li>
            <li class="flex text-xs items-center w-full">
              Prize Money <br /> Recieved
            </li>
          </ol>
        </div>

        <div class="px-4 py-8 bg-white flex flex-col justify-between">
          <div class="flex justify-end">
            <span class="bg-blue-100  text-blue-800 text-xs pt-1.5 font-medium px-2.5 h-7 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
              Comedy
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
              onClick={() => setOpenModal(!openModal)}
            >
              View Details
            </button>
          </div>
        </div>
        <Modal
          openModal={openModal}
          setOpenModal={setOpenModal}
          closeOutside={false}
        >
          <BrandDetail
            heading={heading}
            subheading={subheading}
            img={img}
            cardType={cardType}
          />
        </Modal>
      </div>
    );
  }
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
                Fixed Cost- TBD
              </span>
              <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">
                Sales Commission = 14%
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
