"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import { FaTwitter, FaInstagram, FaPinterestP, FaSave } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import ListCard from "./Profilecard/ListCard";
import Link from "next/link";

const BrandDetail = ({
  id = "0",
  heading = "Naman Agarwal",
  subheading = "CEO and Founder",
  img = "https://tse1.mm.bing.net/th?id=OIP.K7lG3005eY-tEHwlxf61qgHaFx&pid=Api&P=0&w=300&h=300",
  last_update = "21st March 2024",
  tags = 0,
  cardType = "Deals",
  openModal,
  influencerView = true,
  setOpenModal = () => {},
}) => {
  const [branddealsdetails, setBranddealsdetails] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/brand/single_deal/${id}`)
      .then((response) => {
        setBranddealsdetails(response.data?.data);

        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
        // Set loading to false in case of error
      });
  }, [id]);

  const deleteDeal = () => {
    setLoading(true);
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("No token found in local storage");
      return;
    }
    console.log(id);
    axios
      .delete(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/brand/delete/deal/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        alert("Deal deleted successfully");
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error deleting deal:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      {" "}
      <div className="relative rounded-lg mb-10" style={{ display: "flex" }}>
        <div className="pb-3 px-3 mx-3" style={{ flex: 1.75 }}>
          <div class="flex justify-between align-middle">
            <div class=" flex text-black text-xl font-medium">
              {" "}
              <div class="mt-2 mr-2 rounded">
                <Image alt="alt text." src={img} width={40} height={42} />
              </div>
              <div>
                <div class="mt-4 mx-2 text-left">{heading}</div>
                <div class="text-gray-400 text-sm mx-2">{subheading}</div>
              </div>
            </div>
          </div>
          <div class="flex gap-4">
            <div>
              <div class="mt-4 text-gray-400 text-left">Category</div>
              <div className="font-600 text-left">
                {branddealsdetails.category || "Food"}
              </div>
            </div>
            <div>
              <div class="mt-4 text-gray-400 text-left">Platforms</div>
              <div className="font-600 text-left">
                {branddealsdetails.instagram_show && "Instagram"},
                {branddealsdetails.youtube_show && "Youtube"},
                {branddealsdetails.facebook_show && "Facebook"}
                {branddealsdetails.twitter_show && "Twitter/X"}
                {branddealsdetails.twitch_show && "Twitch"}
                {branddealsdetails.reddit_show && "Reddit"}
              </div>
            </div>
          </div>
          <div>
            <div class="text-left mt-4 text-gray-400">Overview</div>
            <div class="text-left">
              <div>
                <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                  Campaign Type -{" "}
                  {branddealsdetails.promotion_type || "ShoutOut"}
                </span>
              </div>
              <div class="mt-4 w-70">
                <div class=" text-xs font-sm me-2  px-2 py-0.5 rounded dark:bg-gray-700 dark:text-gray-100 border border-gray-400">
                  <div class="font-medium">Campaign Description</div>
                  <div>
                    {branddealsdetails.campaign_description ||
                      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words. The task description will have the target audience and influencer requirement."}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="text-left mt-4 text-gray-400">Target Audience</div>
            <div class="text-left">
              <div CLASS="FLEX GAP-4">
                <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                  Audience Location -{" "}
                  {branddealsdetails.audience_location || "India"}
                </span>
                <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                  Audience Age -{" "}
                  {branddealsdetails.audience_target_age || "10-50"}
                </span>
                <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                  Audience Language -{" "}
                  {branddealsdetails.audience_target_language || "Hindi"}
                </span>
                <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                  Target Audience -{" "}
                  {branddealsdetails.audience_target_number || "10k"}
                </span>
              </div>
            </div>
            <div class="text-left mt-4 text-gray-400">Delivery Information</div>
            <div class="text-left">
              <div CLASS="FLEX GAP-4">
                <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                  Delivery Type - Shipped By Brand
                </span>
                <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                  Shipping Zone - Bareilly
                </span>
              </div>
            </div>
          </div>
          <div>
            <div class="text-left mt-4 text-gray-400">
              Influencer Requirement
            </div>
            <div class="text-left">
              <div CLASS="FLEX GAP-4">
                <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                  Influencer Size-{branddealsdetails.influencer_size || "10k"}
                </span>
                <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                  Categories-{branddealsdetails.category || "Any"}
                </span>
                <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                  Influencer Age - {branddealsdetails.influencer_age || "10-50"}
                </span>
                <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                  Influencer Gender -{" "}
                  {branddealsdetails.influencer_gender || "Any"}
                </span>
              </div>
            </div>
          </div>
          <div class="mt-4">
            <div class=" text-xs font-sm me-2 px-2 w-70 py-0.5 rounded dark:bg-gray-700 dark:text-gray-100 border border-gray-400">
              <div class="font-medium text-left">Task Description</div>
              <div class="text-left">
                {branddealsdetails.task_description ||
                  "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature  from 45 BC, making it over 2000 years old. Richard McClintock,  a Latin professor at Hampden-Sydney College in Virginia,  looked up one of the more obscure Latin words. The task  description will have the target audience and influencer  requirement."}
              </div>
            </div>
          </div>
        </div>

        <div class="m-4 flex flex-col" style={{ flex: 1 }}>
          <div class="flex justify-end">
            <span class="bg-blue-100  text-blue-800 text-xs pt-1.5 font-medium px-2.5 h-7 rounded-full dark:bg-blue-900 dark:text-blue-300">
              Last Updated:<b>{branddealsdetails.last_updated || "NA"}</b>
            </span>
          </div>
          <div className="space-x-3 mt-2">
            <div class="text-right font-medium mt-4 mx-2">You'll receive</div>
            <div class="flex mx-2 my-2 justify-end">
              <span class=" bg-[#ccdfff] text-[#3858f9] text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                Fixed Cost Reward- {branddealsdetails.fixed_price || "TBD"}
              </span>
              <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">
                Sales Commission - {branddealsdetails.sales_compensation || "0"}
                %
              </span>
              <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">
                Gift Product - {String(branddealsdetails.gift_product)}
              </span>
            </div>
          </div>
          {influencerView == "true" ? (
            <div className="flex items-center space-x-3 mt-4 align-middle justify-end">
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
          ) : (
            <div>
              <div class="font-semibold">Applied Influencers</div>
              <div className="  w-full h-[4vh] px-[10px] py-[6px] mx-2  rounded-md flex border-[1px] border-[#E7E7E7] bg-white ">
                <div className="w-full flex items-center justify-between">
                  <div className="text-sm w-1/4 text-[#2D4050] font-semibold dark:text-white ">
                    Profile Pic
                  </div>
                  <div className="text-sm w-1/4 font-semibold text-gray-800  dark:text-gray-800">
                    Username
                  </div>
                  <div className="text-sm w-1/4 font-semibold text-gray-800  dark:text-gray-800">
                    Followers
                  </div>
                  <div className="text-sm w-1/4 font-semibold text-gray-800  dark:text-gray-800">
                    Sarvin Score
                  </div>
                </div>
              </div>
              <div class=" w-full h-96 mx-2 overflow-auto">
                {/* <Link href="/influencer-dashboard?brandView=True&id=cjndcdjcndjcndc"> */}
                <ListCard
                  img="https://cdn.icon-icons.com/icons2/3951/PNG/512/profile_female_icon_251070.png"
                  username="@its_Sanphire"
                  followers={342}
                  sarvinscore={432}
                />
                {/* </Link> */}
                <ListCard
                  img="https://img.freepik.com/free-photo/abstract-glowing-flame-drops-electric-illumination-generative-ai_188544-8092.jpg"
                  username="@namanaga"
                  followers={3462}
                  sarvinscore={492}
                />
                <ListCard
                  img="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg"
                  username="@dcdcfefce"
                  followers={7463}
                  sarvinscore={353}
                />
                <ListCard
                  img="https://img.freepik.com/premium-photo/design-word-cloud-innovation-idea-creativity-design-concept_505353-280.jpg"
                  username="@its_huilikhe"
                  followers={39353}
                  sarvinscore={433}
                />
                <ListCard
                  img="https://img.freepik.com/free-photo/cute-little-girl-autumn-park_1157-22376.jpg"
                  username="@kitskoml"
                  followers={34422}
                  sarvinscore={32}
                />
                <ListCard
                  img="https://img.freepik.com/free-photo/cherful-positive-young-colleagues-using-laptop-computer_171337-753.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1722988800&semt=sph"
                  username="@mynk1907"
                  followers={34002}
                  sarvinscore={272}
                />
                <ListCard
                  img="https://cdn.icon-icons.com/icons2/3951/PNG/512/profile_female_icon_251070.png"
                  username="@hasranga"
                  followers={342}
                  sarvinscore={432}
                />
                <ListCard
                  img="https://cdn.icon-icons.com/icons2/3951/PNG/512/profile_female_icon_251070.png"
                  username="@shivamdube"
                  followers={342}
                  sarvinscore={432}
                />
              </div>
              <div class="text-black">
                Total Influencers Applied For This Deal: <b>10</b>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex gap-2 text-gray-400 text-md mt-2 mr-2">
        {influencerView ? (
          <button
            type="submit"
            class="flex w-full justify-center border-2 border-gray-200 b rounded-md bg-gray-0  py-1.5 text-sm font-medium leading-6 text-gray-200 bg-[#F27430] shadow border-1 hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Respond to Deal
          </button>
        ) : (
          <button
            type="submit"
            class="flex w-full justify-center border-2 border-gray-200 b rounded-md bg-gray-0  py-1.5 text-sm font-medium leading-6 text-gray-200 bg-red-500 shadow border-1 hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={deleteDeal}
          >
            {loading ? (
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
              "Delete This Deal"
            )}
          </button>
        )}
        <button
          type="submit"
          class="flex w-full justify-center border-2 border-gray-200 b rounded-md bg-gray-0 px-3 py-1.5 text-sm font-medium leading-6 text-gray-900 shadow border-1 hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={() => setOpenModal(false)}
        >
          Not Interested
        </button>
      </div>
    </>
  );
};
export default BrandDetail;
