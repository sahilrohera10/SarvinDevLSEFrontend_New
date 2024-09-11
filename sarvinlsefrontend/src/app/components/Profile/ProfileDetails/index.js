"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Modals from "../../commons/modal";
import AccountStatModal from "../AccountStatModal";
import ActivitySection from "../ActivityModal";
import ResumeUploads from "../ResumeUpload";

import MetricCards from "../../commons/MetricCard";
import Follower from "../../commons/icons/follower.png";
import Engagement from "../../commons/icons/engagmentrate.png";
import Score from "../../commons/icons/score.png";
import Image from "next/image";
import ProductAndServicesLinks from "../ProductAndServicesLinks";
import ContentVideos from "../../InfluencerDashboard/ContentVideos/index";

// import SearchBar from "../../commons/SearchBar";

function ProfileDetails() {
  const [openExperience, setOpenExperience] = useState(false);
  const [openEducation, setOpenEducation] = useState(false);
  const [openResume, setOpenResume] = useState(false);
  const [openProductAndServices, setOpenProductAndServices] = useState(false);

  return (
    <div style={{ margin: "0px 20px" }} className="pb-10">
      <div className={styles.work_experience}>
        <div>
          <div className={styles.work_experience_text}>
            <div>Your Metrics</div>
            <div
              className={styles.image}
              onClick={() => {
                setOpenExperience(true);
              }}
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Plus_symbol.svg/500px-Plus_symbol.svg.png" />
            </div>
          </div>
        </div>
        <div className={styles.no_experience_text} style={{ marginBottom: 10 }}>
          Average values of core metrics for 30 days, Metrics updated 15 hours ago.
        </div>
        <div class="flex gap-3">
          <div style={{ flex: 2 }}>
            <MetricCards
              value={216}
              title="Followers"
              icon={<Image src={Follower} width={48} height={0} alt="Icon" />}
              trend={{
                slope: -1,
                description: "Compared to last week",
                value: "0.5%",
              }}
            />
          </div>
          <div style={{ flex: 2 }}>
            <MetricCards
              value={"27.5%"}
              title="Engagement Rate"
              icon={<Image src={Engagement} width={48} height={0} alt="Icon" />}
              trend={{
                slope: -1,
                description: "Compared to last week",
                value: "0.5%",
              }}
            />
          </div>
          <div style={{ flex: 2 }}>
            <MetricCards
              value={"87"}
              title="Account Quality Score"
              icon={<Image src={Score} width={48} height={0} alt="Icon" />}
              trend={{
                slope: 1,
                description: "Compared to last week",
                value: "0.5%",
              }}
            />
          </div>
        </div>
        <div style={{ marginTop: "20px", color: "#4285F4", fontSize: 12 }}>Switch to Creator Account</div>
      </div>
      <Modals openModal={openExperience} setOpenModal={setOpenExperience}>
        <div style={{ width: "95%" }}>
          <AccountStatModal />
        </div>
      </Modals>
      <div className={styles.education}>
        <div className={styles.work_experience_text}>
          <div>Your Activity</div>
          <div
            className={styles.image}
            onClick={() => {
              setOpenEducation(true);
            }}
          >
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Plus_symbol.svg/500px-Plus_symbol.svg.png" />
          </div>
        </div>
        <div className={styles.no_experience_text}>
          Please complete your contact info, education, work experience, resume, links, and equal employment info to
          finish your profile.
        </div>
      </div>
      <Modals openModal={openEducation} setOpenModal={setOpenEducation}>
        <ActivitySection />
      </Modals>
      <div className={styles.resume}>
        <div className={styles.work_experience_text}>
          <div>Skills</div>

          <div
            style={{ width: "14px", height: "14px", marginRight: "4px" }}
            onClick={() => {
              setOpenResume(true);
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 64 64">
              <path
                fill="#ed7899"
                d="M46.2,7.92h9.63a4,4,0,0,1,4,4V17.1a0,0,0,0,1,0,0H42.2a0,0,0,0,1,0,0V11.92a4,4,0,0,1,4-4Z"
                transform="rotate(45 51.017 12.512)"
              ></path>
              <path
                fill="#c2cde7"
                d="M32.5 15.51H55.129999999999995V24.869999999999997H32.5z"
                transform="rotate(45 43.817 20.19)"
              ></path>
              <path
                fill="#f9e3ae"
                d="M17.12 17.45H35.5V57.92999999999999H17.12z"
                transform="rotate(45 26.318 37.691)"
              ></path>
              <path
                fill="#f6d397"
                d="M27.38 21.7H33.74V62.17999999999999H27.38z"
                transform="rotate(45 30.567 41.941)"
              ></path>
              <path fill="#faefde" d="M5 57L6 46 13 47 14 50 16.92 51.5 19 59 7 59 5 57z"></path>
              <path
                fill="#faefde"
                d="M18.88 13.2H25.24V53.67999999999999H18.88z"
                transform="rotate(45 22.068 33.441)"
              ></path>
              <path
                fill="#8d6c9f"
                d="M60.59,15.9a4,4,0,0,0-1.17-2.83L50.93,4.59a4.09,4.09,0,0,0-5.66,0L41,8.83a2,2,0,0,0-2.83,0l-5.66,5.66a2,2,0,0,0,0,2.83l.05.05L5.52,44.4a3,3,0,0,0-.87,1.88L4,54.68l-.7,4.92a1,1,0,0,0,1,1.14H4.4L9.32,60l8.45-.62a3,3,0,0,0,1.9-.87l27.08-27a2,2,0,0,0,2.77,0l5.66-5.66a2,2,0,0,0,0-2.83l4.24-4.24A4,4,0,0,0,60.59,15.9Zm-48.69,32,.58,2.88a1,1,0,0,0,.78.78l2.88.58,1.07,5.34L9.59,58,6,54.41l.61-7.6ZM19,56.35l-1-4.77L34.67,35a1,1,0,0,0-1.41-1.41L16.66,50.17,14.3,49.7l-.47-2.36L27.59,33.58a1,1,0,0,0-1.41-1.41L12.42,45.93,7.75,45,34,18.78,45.32,30.09ZM52.34,25.8h0a1,1,0,0,0-1.41,0l-1.41,1.41a1,1,0,0,0,0,1.41h0L48.1,30h0L34,15.9l1.41-1.41a1,1,0,0,0,1.41,0l1.41-1.41a1,1,0,0,0,0-1.41l1.41-1.41.71.71L53.05,23.68l.71.71ZM58,17.31l-4.24,4.24L42.44,10.24,46.69,6a2,2,0,0,1,2.83,0L58,14.49a2,2,0,0,1,0,2.83Z"
              ></path>
              <path
                fill="#8d6c9f"
                d="M40.32 15.19l-1.41 1.41A1 1 0 1 0 40.32 18l1.41-1.41a1 1 0 0 0-1.41-1.41zM43.86 18.73l-1.41 1.41a1 1 0 1 0 1.41 1.41l1.41-1.41a1 1 0 0 0-1.41-1.41zM47.39 22.26L46 23.68a1 1 0 1 0 1.41 1.41l1.41-1.41a1 1 0 0 0-1.41-1.41zM31.84 26.51L29 29.33a1 1 0 1 0 1.41 1.41l2.83-2.83a1 1 0 0 0-1.41-1.41z"
              ></path>
            </svg>
          </div>
        </div>

        <div className={styles.no_experience_text}>Add Skills Here</div>
        <div style={{ display: "flex", margin: "20px 0px" }}>
          {["Actors", "Musician", "Creator", "Plumber", "Astronaut", "Artist"].map((index) => (
            <span class="inline-flex items-center mr-2 gap-x-1.5 py-1.5 ps-3 pe-2 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
              {index}
              <button
                type="button"
                class="flex-shrink-0 size-4 inline-flex items-center justify-center rounded-full hover:bg-blue-200 focus:outline-none focus:bg-blue-200 focus:text-blue-500 dark:hover:bg-blue-900"
              >
                <span class="sr-only">Remove badge</span>
                <svg
                  class="flex-shrink-0 size-3"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </span>
          ))}
        </div>
        <form class="pr-20">
          <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg width="20" height="20" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11.439 19C13.2139 18.9996 14.9378 18.4054 16.336 17.312L20.732 21.708L22.146 20.294L17.75 15.898C18.844 14.4997 19.4385 12.7754 19.439 11C19.439 6.589 15.85 3 11.439 3C7.02797 3 3.43896 6.589 3.43896 11C3.43896 15.411 7.02797 19 11.439 19ZM11.439 5C14.748 5 17.439 7.691 17.439 11C17.439 14.309 14.748 17 11.439 17C8.12996 17 5.43896 14.309 5.43896 11C5.43896 7.691 8.12996 5 11.439 5Z"
                  fill="#4285F4"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              class="block shadow w-full p-4 ps-10 text-sm text-gray-900 border border-gray-100 rounded-lg bg-[#FFF] focus:ring-blue-500 focus:border-blue-500 dark:bg-[#F3F9FB] dark:border-gray-100 dark:placeholder-gray-400 dark:text-white dark:focus:gray-500 dark:focus:gray-500 "
              placeholder="Search for products, services and creators nearby"
              required
            />
          </div>
        </form>
        <div class="flex justify-end mt-4">
          <button
            type="submit"
            class="flex justify-center rounded-md bg-[#F27430] px-6 py-2.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Done
          </button>
        </div>
      </div>
      <Modals openModal={openResume} setOpenModal={setOpenResume}>
        <ResumeUploads />
      </Modals>
      <div className={styles.portfolio}>
        <div className={styles.work_experience_text}>
          <div>Social Profiles</div>

          <div style={{ width: "14px", height: "14px", marginRight: "24px" }}>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 64 64">
              <path
                fill="#ed7899"
                d="M46.2,7.92h9.63a4,4,0,0,1,4,4V17.1a0,0,0,0,1,0,0H42.2a0,0,0,0,1,0,0V11.92a4,4,0,0,1,4-4Z"
                transform="rotate(45 51.017 12.512)"
              ></path>
              <path
                fill="#c2cde7"
                d="M32.5 15.51H55.129999999999995V24.869999999999997H32.5z"
                transform="rotate(45 43.817 20.19)"
              ></path>
              <path
                fill="#f9e3ae"
                d="M17.12 17.45H35.5V57.92999999999999H17.12z"
                transform="rotate(45 26.318 37.691)"
              ></path>
              <path
                fill="#f6d397"
                d="M27.38 21.7H33.74V62.17999999999999H27.38z"
                transform="rotate(45 30.567 41.941)"
              ></path>
              <path fill="#faefde" d="M5 57L6 46 13 47 14 50 16.92 51.5 19 59 7 59 5 57z"></path>
              <path
                fill="#faefde"
                d="M18.88 13.2H25.24V53.67999999999999H18.88z"
                transform="rotate(45 22.068 33.441)"
              ></path>
              <path
                fill="#8d6c9f"
                d="M60.59,15.9a4,4,0,0,0-1.17-2.83L50.93,4.59a4.09,4.09,0,0,0-5.66,0L41,8.83a2,2,0,0,0-2.83,0l-5.66,5.66a2,2,0,0,0,0,2.83l.05.05L5.52,44.4a3,3,0,0,0-.87,1.88L4,54.68l-.7,4.92a1,1,0,0,0,1,1.14H4.4L9.32,60l8.45-.62a3,3,0,0,0,1.9-.87l27.08-27a2,2,0,0,0,2.77,0l5.66-5.66a2,2,0,0,0,0-2.83l4.24-4.24A4,4,0,0,0,60.59,15.9Zm-48.69,32,.58,2.88a1,1,0,0,0,.78.78l2.88.58,1.07,5.34L9.59,58,6,54.41l.61-7.6ZM19,56.35l-1-4.77L34.67,35a1,1,0,0,0-1.41-1.41L16.66,50.17,14.3,49.7l-.47-2.36L27.59,33.58a1,1,0,0,0-1.41-1.41L12.42,45.93,7.75,45,34,18.78,45.32,30.09ZM52.34,25.8h0a1,1,0,0,0-1.41,0l-1.41,1.41a1,1,0,0,0,0,1.41h0L48.1,30h0L34,15.9l1.41-1.41a1,1,0,0,0,1.41,0l1.41-1.41a1,1,0,0,0,0-1.41l1.41-1.41.71.71L53.05,23.68l.71.71ZM58,17.31l-4.24,4.24L42.44,10.24,46.69,6a2,2,0,0,1,2.83,0L58,14.49a2,2,0,0,1,0,2.83Z"
              ></path>
              <path
                fill="#8d6c9f"
                d="M40.32 15.19l-1.41 1.41A1 1 0 1 0 40.32 18l1.41-1.41a1 1 0 0 0-1.41-1.41zM43.86 18.73l-1.41 1.41a1 1 0 1 0 1.41 1.41l1.41-1.41a1 1 0 0 0-1.41-1.41zM47.39 22.26L46 23.68a1 1 0 1 0 1.41 1.41l1.41-1.41a1 1 0 0 0-1.41-1.41zM31.84 26.51L29 29.33a1 1 0 1 0 1.41 1.41l2.83-2.83a1 1 0 0 0-1.41-1.41z"
              ></path>
            </svg>
          </div>
        </div>
        <div className={styles.no_experience_text}>Add your social media accounts here</div>
        <div>
          <div class="flex mt-4">
            <div class="flex justify-center gap-2 align-end block mr-6 shadow w-36 p-3 ps-5 text-sm text-gray-900 border border-gray-100 rounded-lg bg-[#FFF] focus:ring-blue-500 focus:border-blue-500 dark:bg-[#F3F9FB] dark:border-gray-100 dark:placeholder-gray-400 dark:text-white dark:focus:gray-500 dark:focus:gray-500 ">
              <div class="mt-1">
                <FaFacebook />
              </div>
              <div>Facebook</div>
            </div>
            <input
              type="search"
              id="default-search"
              class="block shadow w-80 p-3 ps-5 text-sm text-gray-900 border border-gray-100 rounded-lg bg-[#FFF] focus:ring-blue-500 focus:border-blue-500 dark:bg-[#F3F9FB] dark:border-gray-100 dark:placeholder-gray-400 dark:text-white dark:focus:gray-500 dark:focus:gray-500 "
              placeholder="Enter your profile link"
              required
            />
          </div>
          <div class="flex mt-4">
            <div class="flex justify-center gap-2 block shadow w-36 mr-6 p-3 ps-3 text-sm text-gray-900 border border-gray-100 rounded-lg bg-[#FFF] focus:ring-blue-500 focus:border-blue-500 dark:bg-[#F3F9FB] dark:border-gray-100 dark:placeholder-gray-400 dark:text-white dark:focus:gray-500 dark:focus:gray-500 ">
              <FaTwitter class="mt-1" />
              <div>Twitter</div>
            </div>
            <input
              type="search"
              id="default-search"
              class="block shadow w-80 p-3 ps-5 text-sm text-gray-900 border border-gray-100 rounded-lg bg-[#FFF] focus:ring-blue-500 focus:border-blue-500 dark:bg-[#F3F9FB] dark:border-gray-100 dark:placeholder-gray-400 dark:text-white dark:focus:gray-500 dark:focus:gray-500 "
              placeholder="Enter your profile link"
              required
            />
          </div>
          <div class="flex mt-4">
            <div class="flex justify-center gap-2 block shadow mr-6 w-36 p-3 ps-5 text-sm text-gray-900 border border-gray-100 rounded-lg bg-[#FFF] focus:ring-blue-500 focus:border-blue-500 dark:bg-[#F3F9FB] dark:border-gray-100 dark:placeholder-gray-400 dark:text-white dark:focus:gray-500 dark:focus:gray-500 ">
              <FaInstagram class="mt-1" />
              <div>Instagram</div>
            </div>
            <input
              type="search"
              id="default-search"
              class="block shadow w-80 p-3 ps-5 text-sm text-gray-900 border border-gray-100 rounded-lg bg-[#FFF] focus:ring-blue-500 focus:border-blue-500 dark:bg-[#F3F9FB] dark:border-gray-100 dark:placeholder-gray-400 dark:text-white dark:focus:gray-500 dark:focus:gray-500 "
              placeholder="Enter your profile link"
              required
            />
          </div>
        </div>
      </div>
      <div className={styles.portfolio}>
        <div className={styles.work_experience_text}>
          <div>Products & Services</div>
          <div
            style={{ width: "14px", height: "14px", marginRight: "24px" }}
            onClick={() => {
              setOpenProductAndServices(!openProductAndServices);
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 64 64">
              <path
                fill="#ed7899"
                d="M46.2,7.92h9.63a4,4,0,0,1,4,4V17.1a0,0,0,0,1,0,0H42.2a0,0,0,0,1,0,0V11.92a4,4,0,0,1,4-4Z"
                transform="rotate(45 51.017 12.512)"
              ></path>
              <path
                fill="#c2cde7"
                d="M32.5 15.51H55.129999999999995V24.869999999999997H32.5z"
                transform="rotate(45 43.817 20.19)"
              ></path>
              <path
                fill="#f9e3ae"
                d="M17.12 17.45H35.5V57.92999999999999H17.12z"
                transform="rotate(45 26.318 37.691)"
              ></path>
              <path
                fill="#f6d397"
                d="M27.38 21.7H33.74V62.17999999999999H27.38z"
                transform="rotate(45 30.567 41.941)"
              ></path>
              <path fill="#faefde" d="M5 57L6 46 13 47 14 50 16.92 51.5 19 59 7 59 5 57z"></path>
              <path
                fill="#faefde"
                d="M18.88 13.2H25.24V53.67999999999999H18.88z"
                transform="rotate(45 22.068 33.441)"
              ></path>
              <path
                fill="#8d6c9f"
                d="M60.59,15.9a4,4,0,0,0-1.17-2.83L50.93,4.59a4.09,4.09,0,0,0-5.66,0L41,8.83a2,2,0,0,0-2.83,0l-5.66,5.66a2,2,0,0,0,0,2.83l.05.05L5.52,44.4a3,3,0,0,0-.87,1.88L4,54.68l-.7,4.92a1,1,0,0,0,1,1.14H4.4L9.32,60l8.45-.62a3,3,0,0,0,1.9-.87l27.08-27a2,2,0,0,0,2.77,0l5.66-5.66a2,2,0,0,0,0-2.83l4.24-4.24A4,4,0,0,0,60.59,15.9Zm-48.69,32,.58,2.88a1,1,0,0,0,.78.78l2.88.58,1.07,5.34L9.59,58,6,54.41l.61-7.6ZM19,56.35l-1-4.77L34.67,35a1,1,0,0,0-1.41-1.41L16.66,50.17,14.3,49.7l-.47-2.36L27.59,33.58a1,1,0,0,0-1.41-1.41L12.42,45.93,7.75,45,34,18.78,45.32,30.09ZM52.34,25.8h0a1,1,0,0,0-1.41,0l-1.41,1.41a1,1,0,0,0,0,1.41h0L48.1,30h0L34,15.9l1.41-1.41a1,1,0,0,0,1.41,0l1.41-1.41a1,1,0,0,0,0-1.41l1.41-1.41.71.71L53.05,23.68l.71.71ZM58,17.31l-4.24,4.24L42.44,10.24,46.69,6a2,2,0,0,1,2.83,0L58,14.49a2,2,0,0,1,0,2.83Z"
              ></path>
              <path
                fill="#8d6c9f"
                d="M40.32 15.19l-1.41 1.41A1 1 0 1 0 40.32 18l1.41-1.41a1 1 0 0 0-1.41-1.41zM43.86 18.73l-1.41 1.41a1 1 0 1 0 1.41 1.41l1.41-1.41a1 1 0 0 0-1.41-1.41zM47.39 22.26L46 23.68a1 1 0 1 0 1.41 1.41l1.41-1.41a1 1 0 0 0-1.41-1.41zM31.84 26.51L29 29.33a1 1 0 1 0 1.41 1.41l2.83-2.83a1 1 0 0 0-1.41-1.41z"
              ></path>
            </svg>
          </div>
        </div>
        <div className={styles.no_experience_text}>Add your Product and Services</div>
        <div className="flex mx-12 mt-4 gap-4 flex-wrap">
          <ContentVideos />
        </div>
      </div>
      <Modals openModal={openProductAndServices} setOpenModal={setOpenProductAndServices}>
        <ProductAndServicesLinks setOpenProductAndServices={setOpenProductAndServices} />
      </Modals>
    </div>
  );
}

export default ProfileDetails;
