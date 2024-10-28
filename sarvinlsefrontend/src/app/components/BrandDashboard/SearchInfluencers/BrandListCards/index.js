import Image from "next/image";
import { FaTwitter, FaInstagram, FaPinterestP, FaSave } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import FirstPlace from "../../../commons/icons/FirstPlace.png";
import SecondPlace from "../../../commons/icons/SecondPlace.png";
import ThirdPlace from "../../../commons/icons/ThirdPlace.png";
import Modal from "../../../commons/modal";
import DealDetailModal from "../DealDetailModal";
import { useState } from "react";

import Link from "next/link";

const Tags = {
  1: FirstPlace,
  2: SecondPlace,
  3: ThirdPlace,
};

export default function BrandListCard({
  name = "Naman Agarwal",
  img = "https://t4.ftcdn.net/jpg/02/61/52/95/360_F_261529596_YZWJaMnYFSCM0FSCrxs71o6RrZ9MpP4D.jpg",
  tags = 0,
  description = "",
  content = [],
  dob = "1-1-1990",
  engagement = 0,
  gender = "",
  location = "",
  phone = "",
  category = ["Any"],
  qualityScore = 0,
  socialmedia = [],
  email = "",
}) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      {" "}
      <div className="w-full flex bg-white relative group border shadow-lg rounded-lg mb-10 align-middle">
        <div className="pb-3 px-3 bg-white w-full">
          <div class="flex justify-between align-middle">
            <div class=" flex text-black text-xl font-medium align-middle my-4">
              {" "}
              <div class="flex flex-col justify-center mt-2 mx-2">
                <Image alt="alt text." src={img} width={50} height={42} />
              </div>
              <div class="flex flex-col justify-center">
                <div class="mt-2">{name}</div>
                <div className="text-gray-400 text-sm">
                  {description || "No Description Available"}
                </div>
              </div>
            </div>
          </div>

          <div class="flex mx-4 my-2">
            <span class=" bg-[#ccdfff] text-[#3858f9] text-xs mx-1 font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
              Quality Score - {qualityScore}
            </span>
            <span class="bg-green-100 text-green-800 text-xs mx-1 font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">
              Cracked Deals = 10
            </span>
            <span class="bg-red-100 text-red-800 text-xs mx-1 font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">
              Gender = {gender || "Not Defined"}
            </span>
          </div>
          <div class="flex gap-4">
            <div>
              <div class="mx-4 mt-4 font-600">Location</div>
              <div className="text-gray-400 text-sm mx-4">
                {location || "India"}
              </div>
            </div>
            <div>
              <div class="mx-4 mt-4 font-600">Followers</div>
              <div className="text-gray-400 text-sm mx-4">10</div>
            </div>
            <div>
              <div class="mx-4 mt-4 font-600">Engagement Rate</div>
              <div className="text-gray-400 text-sm mx-4">{engagement}</div>
            </div>
          </div>
        </div>
        <div class="m-4 flex flex-col justify-between">
          <div class="flex justify-end">
            {category.length > 0 ? (
              category.map((categories) => (
                <div class="flex justify-center items-center font-medium my-1 py-1 px-2  rounded-full text-blue-700 bg-blue-100 border border-blue-300 ">
                  <div class="text-xs font-normal leading-none max-w-full flex-initial">
                    {categories}
                  </div>
                </div>
              ))
            ) : (
              <div>
                {" "}
                <div class="flex justify-center items-center font-medium my-1 py-1 px-2  rounded-full text-blue-700 bg-blue-100 border border-blue-300 ">
                  <div class="text-xs font-normal leading-none max-w-full flex-initial">
                    Any Category
                  </div>
                </div>
              </div>
            )}
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
          <DealDetailModal
            openModal={openModal}
            setOpenModal={setOpenModal}
            name={name}
            img={img}
            description={description}
            content={content}
            dob={dob}
            engagement={engagement}
            gender={gender}
            location={location}
            phone={phone}
            category={category}
            qualityScore={qualityScore}
            socialmedia={socialmedia}
            email={email}
          />
        </Modal>
      </div>
    </>
  );
}
