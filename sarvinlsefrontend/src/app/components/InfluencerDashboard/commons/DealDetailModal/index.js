"use client";
import React from "react";
import Image from "next/image";
import { FaTwitter, FaInstagram, FaPinterestP, FaSave } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";

const BrandDetail = ({
  heading = "Naman Agarwal",
  subheading = "CEO and Founder",
  img = "https://tse1.mm.bing.net/th?id=OIP.K7lG3005eY-tEHwlxf61qgHaFx&pid=Api&P=0&w=300&h=300",
  last_update = "21st March 2024",
  tags = 0,
  cardType = "Deals",
  setOpenModal = () => {},
}) => {
  if (cardType == "Deals") {
    return (
      <>
        {" "}
        <div className="relative rounded-lg mb-10" style={{ display: "flex" }}>
          <div className="pb-3 px-3 mx-3" style={{ flex: 2 }}>
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
                <div className="font-600 text-left">Food</div>
              </div>
              <div>
                <div class="mt-4 text-gray-400 text-left">Platforms</div>
                <div className="font-600 text-left">Instagram,Youtube</div>
              </div>
            </div>
            <div>
              <div class="text-left mt-4 text-gray-400">Overview</div>
              <div class="text-left">
                <div>
                  <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                    Campaign Type - Shoutout
                  </span>
                </div>
                <div class="mt-4 w-70">
                  <div class=" text-xs font-sm me-2  px-2 py-0.5 rounded dark:bg-gray-700 dark:text-gray-100 border border-gray-400">
                    <div class="font-medium">Campaign Description</div>
                    <div>
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.
                      Richard McClintock, a Latin professor at Hampden-Sydney
                      College in Virginia, looked up one of the more obscure
                      Latin words. The task description will have the target
                      audience and influencer requirement.
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
                    Audience Location - Civil Lines,Bareilly
                  </span>
                  <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                    Audience Age - 24-50
                  </span>
                  <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                    Audience Gender - Any
                  </span>
                  <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                    Target Audience - 10k
                  </span>
                </div>
              </div>
              <div class="text-left mt-4 text-gray-400">
                Delivery Information
              </div>
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
                    Influencer Size-10k
                  </span>
                  <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                    Categories-Food,Health
                  </span>
                  <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                    Influencer Age - 25
                  </span>
                  <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                    Influencer Gender - Female
                  </span>
                </div>
              </div>
            </div>
            <div class="mt-4">
              <div class=" text-xs font-sm me-2 px-2 w-70 py-0.5 rounded dark:bg-gray-700 dark:text-gray-100 border border-gray-400">
                <div class="font-medium text-left">Task Description</div>
                <div class="text-left">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words. The task
                  description will have the target audience and influencer
                  requirement.
                </div>
              </div>
            </div>
          </div>

          <div class="m-4 flex flex-col" style={{ flex: 1 }}>
            <div class="flex justify-end">
              <span class="bg-blue-100  text-blue-800 text-xs pt-1.5 font-medium px-2.5 h-7 rounded-full dark:bg-blue-900 dark:text-blue-300">
                Last Updated:<b>{last_update}</b>
              </span>
            </div>
            <div className="space-x-3 mt-2">
              <div class="text-right font-medium mt-4 mx-2">You'll receive</div>
              <div class="flex mx-2 my-2 justify-end">
                <span class=" bg-[#ccdfff] text-[#3858f9] text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                  Fixed Cost- TBD
                </span>
                <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">
                  Sales Commission - 3%
                </span>
              </div>
            </div>
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
          </div>
        </div>
        <div className="flex gap-2 text-gray-400 text-md mt-2 mr-2">
          <button
            type="submit"
            class="flex w-full justify-center border-2 border-gray-200 b rounded-md bg-gray-0  py-1.5 text-sm font-medium leading-6 text-gray-200 bg-[#F27430] shadow border-1 hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Respond to Deal
          </button>
          <button
            type="submit"
            class="flex w-full justify-center border-2 border-gray-200 b rounded-md bg-gray-0 px-3 py-1.5 text-sm font-medium leading-6 text-gray-900 shadow border-1 hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={setOpenModal(false)}
          >
            Not Interested
          </button>
        </div>
      </>
    );
  } else if (cardType == "Bid") {
    return (
      <>
        {" "}
        <div className="relative rounded-lg mb-10" style={{ display: "flex" }}>
          <div className="pb-3 px-3 mx-3" style={{ flex: 2 }}>
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
                <div className="font-600 text-left">Food</div>
              </div>
              <div>
                <div class="mt-4 text-gray-400 text-left">Platforms</div>
                <div className="font-600 text-left">Instagram,Youtube</div>
              </div>
            </div>
            <div>
              <div class="text-left mt-4 text-gray-400">Overview</div>
              <div class="text-left">
                <div>
                  <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                    Campaign Type - Shoutout
                  </span>
                </div>
                <div class="mt-4 w-70">
                  <div class=" text-xs font-sm me-2  px-2 py-0.5 rounded dark:bg-gray-700 dark:text-gray-100 border border-gray-400">
                    <div class="font-medium">Campaign Description</div>
                    <div>
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.
                      Richard McClintock, a Latin professor at Hampden-Sydney
                      College in Virginia, looked up one of the more obscure
                      Latin words. The task description will have the target
                      audience and influencer requirement.
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
                    Audience Location - Civil Lines,Bareilly
                  </span>
                  <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                    Audience Age - 24-50
                  </span>
                  <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                    Audience Gender - Any
                  </span>
                  <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                    Target Audience - 10k
                  </span>
                </div>
              </div>
              <div class="text-left mt-4 text-gray-400">
                Delivery Information
              </div>
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
                    Influencer Size-10k
                  </span>
                  <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                    Categories-Food,Health
                  </span>
                  <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                    Influencer Age - 25
                  </span>
                  <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                    Influencer Gender - Female
                  </span>
                </div>
              </div>
            </div>
            <div class="mt-4">
              <div class=" text-xs font-sm me-2 px-2 w-70 py-0.5 rounded dark:bg-gray-700 dark:text-gray-100 border border-gray-400">
                <div class="font-medium text-left">Task Description</div>
                <div class="text-left">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words. The task
                  description will have the target audience and influencer
                  requirement.
                </div>
              </div>
            </div>
          </div>

          <div class="m-4 flex flex-col" style={{ flex: 1 }}>
            <div class="flex justify-end">
              <span class="bg-blue-100  text-blue-800 text-xs pt-1.5 font-medium px-2.5 h-7 rounded-full dark:bg-blue-900 dark:text-blue-300">
                Last Updated:<b>{last_update}</b>
              </span>
            </div>
            <div className="space-x-3 mt-2">
              <div class="text-right font-medium mt-4 mx-2">You'll receive</div>
              <div class="flex mx-2 my-2 justify-end">
                <span class=" bg-[#ccdfff] text-[#3858f9] text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                  Fixed Cost- TBD
                </span>
                <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">
                  Sales Commission - 3%
                </span>
              </div>
            </div>
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
          </div>
        </div>
        <div className="flex gap-2 text-gray-400 text-md mt-2 mr-2">
          <button
            type="submit"
            class="flex w-full justify-center border-2 border-gray-200 b rounded-md bg-gray-0  py-1.5 text-sm font-medium leading-6 text-gray-200 bg-[#F27430] shadow border-1 hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Bid to Deal
          </button>
          <button
            type="submit"
            class="flex w-full justify-center border-2 border-gray-200 b rounded-md bg-gray-0 px-3 py-1.5 text-sm font-medium leading-6 text-gray-900 shadow border-1 hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={setOpenModal(false)}
          >
            Not Interested
          </button>
        </div>
      </>
    );
  } else {
    <>
      {" "}
      <div className="relative rounded-lg mb-10" style={{ display: "flex" }}>
        <div className="pb-3 px-3 mx-3" style={{ flex: 2 }}>
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
              <div className="font-600 text-left">Food</div>
            </div>
            <div>
              <div class="mt-4 text-gray-400 text-left">Platforms</div>
              <div className="font-600 text-left">Instagram,Youtube</div>
            </div>
          </div>
          <div>
            <div class="text-left mt-4 text-gray-400">Overview</div>
            <div class="text-left">
              <div>
                <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                  Campaign Type - Shoutout
                </span>
              </div>
              <div class="mt-4 w-70">
                <div class=" text-xs font-sm me-2  px-2 py-0.5 rounded dark:bg-gray-700 dark:text-gray-100 border border-gray-400">
                  <div class="font-medium">Campaign Description</div>
                  <div>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney College in
                    Virginia, looked up one of the more obscure Latin words. The
                    task description will have the target audience and
                    influencer requirement.
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
                  Audience Location - Civil Lines,Bareilly
                </span>
                <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                  Audience Age - 24-50
                </span>
                <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                  Audience Gender - Any
                </span>
                <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                  Target Audience - 10k
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
                  Influencer Size-10k
                </span>
                <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                  Categories-Food,Health
                </span>
                <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                  Influencer Age - 25
                </span>
                <span class=" text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                  Influencer Gender - Female
                </span>
              </div>
            </div>
          </div>
          <div class="mt-4">
            <div class=" text-xs font-sm me-2 px-2 w-70 py-0.5 rounded dark:bg-gray-700 dark:text-gray-100 border border-gray-400">
              <div class="font-medium text-left">Task Description</div>
              <div class="text-left">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words. The task description will
                have the target audience and influencer requirement.
              </div>
            </div>
          </div>
        </div>

        <div class="m-4 flex flex-col" style={{ flex: 1 }}>
          <div class="flex justify-end">
            <span class="bg-blue-100  text-blue-800 text-xs pt-1.5 font-medium px-2.5 h-7 rounded-full dark:bg-blue-900 dark:text-blue-300">
              Last Updated:<b>{last_update}</b>
            </span>
          </div>
          <div className="space-x-3 mt-2">
            <div class="text-right font-medium mt-4 mx-2">You'll receive</div>
            <div class="flex mx-2 my-2 justify-end">
              <span class=" bg-[#ccdfff] text-[#3858f9] text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                Fixed Cost- TBD
              </span>
              <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">
                Sales Commission - 3%
              </span>
            </div>
          </div>
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
        </div>
      </div>
      <div className="flex gap-2 text-gray-400 text-md mt-2 mr-2">
        <button
          type="submit"
          class="flex w-full justify-center border-2 border-gray-200 b rounded-md bg-gray-0  py-1.5 text-sm font-medium leading-6 text-gray-200 bg-[#F27430] shadow border-1 hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Respond to Deal
        </button>
        <button
          type="submit"
          class="flex w-full justify-center border-2 border-gray-200 b rounded-md bg-gray-0 px-3 py-1.5 text-sm font-medium leading-6 text-gray-900 shadow border-1 hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={setOpenModal(false)}
        >
          Not Interested
        </button>
      </div>
    </>;
  }
};
export default BrandDetail;
