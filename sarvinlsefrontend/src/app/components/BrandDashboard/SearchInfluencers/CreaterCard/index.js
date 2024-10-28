import Image from "next/image";
import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import FirstPlace from "../../../commons/icons/FirstPlace.png";
import SecondPlace from "../../../commons/icons/SecondPlace.png";
import ThirdPlace from "../../../commons/icons/ThirdPlace.png";
import Modal from "../../../commons/modal";
import DealDetailModal from "../DealDetailModal";

const Tags = {
  1: FirstPlace,
  2: SecondPlace,
  3: ThirdPlace,
};
function truncate(input, limit = 4) {
  if (typeof input === "string") {
    // Truncate string and add ellipsis if longer than limit
    return input.length > limit ? input.substring(0, limit) + "..." : input;
  }

  if (Array.isArray(input)) {
    // Truncate array and add ellipsis to signify truncation
    return input.length > limit ? [...input.slice(0, limit), "..."] : input;
  }
  if (typeof input === "number") {
    // Convert number to string, truncate if it exceeds the digit limit
    const decimalPlaces = Math.min(limit, 15); // Limit precision to 15 decimal places for safety
    return parseFloat(input.toFixed(decimalPlaces));
  }

  if (typeof input === "object" && input !== null) {
    // For objects, keep the first 'limit' entries as [key, value] pairs
    const entries = Object.entries(input);
    if (entries.length > limit) {
      const truncatedEntries = entries
        .slice(0, limit)
        .map(([key, value]) => [key, value]);
      return Object.fromEntries([...truncatedEntries, ["...", "..."]]);
    }
    return input;
  }

  // If input type is unsupported (e.g., number, boolean), return it as-is
  return input;
}

export default function CreaterCard({
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
    <div className="max-w-sm bg-black relative group border shadow-lg rounded-lg mb-10">
      <a
        href="#"
        className="relative block  group-hover:opacity-70 transition-opacity duration-300"
      >
        <div className="relative overflow-hidden w-72 h-48">
          {" "}
          {/* Fixed width and height */}
          {tags > 0 && tags < 4 && (
            <div className="absolute flex flex-row-reverse w-full">
              {" "}
              {/* Position the badge */}
              <Image alt="Badge" src={Tags[tags]} width={36} height={36} />
            </div>
          )}
          <div className="w-full h-full">
            <Image
              alt="alt text."
              src={img}
              layout="fill" // Makes the image cover the container
              objectFit="cover" // Ensures the image fills the container without distortion
              className="rounded-md" // Optional: adds rounded corners
            />
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
      <div className="p-5 bg-white">
        <div className="flex justify-between text-black text-xl font-semibold">
          <div>{name} </div>
          {category.length > 0 ? (
            <div class="flex justify-center items-center font-medium my-1 py-1 px-2  rounded-full text-blue-700 bg-blue-100 border border-blue-300 ">
              <div class="text-xs font-normal leading-none max-w-full flex-initial">
                {category[0]}
              </div>
            </div>
          ) : (
            <div class="flex justify-center items-center font-medium my-1 py-1 px-2  rounded-full text-blue-700 bg-blue-100 border border-blue-300 ">
              <div class="text-xs font-normal leading-none max-w-full flex-initial">
                {"Any Category"}
              </div>
            </div>
          )}
        </div>
        <div className="flex mb-1 gap-1 align-middle text-gray-700 text-sm">
          <FaMapMarkerAlt class="pt-1" />
          {location},India
        </div>
        <div class="flex gap-2">
          <div class="flex justify-center items-center font-medium my-1 py-1 px-2 bg-white rounded-full text-pink-700 bg-pink-100 border border-pink-300 ">
            <div class="text-xs font-normal leading-none max-w-full flex-initial">
              Followers : 0
            </div>
          </div>

          <div class="flex justify-center items-center font-medium my-1 py-1 px-2  rounded-full text-purple-700 bg-purple-100 border border-purple-300 ">
            <div class="text-xs font-normal leading-none max-w-full flex-initial">
              Deal Cracked : 0
            </div>
          </div>
        </div>
        <div class="flex gap-2">
          <div class="flex justify-center items-center font-medium my-1 py-1 px-2  rounded-full text-orange-700 bg-orange-100 border border-orange-300 ">
            <div class="text-xs font-normal leading-none max-w-full flex-initial">
              EM : {engagement}
            </div>
          </div>
          <div class="flex justify-center items-center font-medium my-1 py-1 px-2  rounded-full text-green-700 bg-green-100 border border-green-300 ">
            <div class="text-xs font-normal leading-none max-w-full flex-initial">
              Quality Score : {truncate(qualityScore)}
            </div>
          </div>
        </div>
        <button
          type="submit"
          class="flex w-full mt-4 justify-center rounded-md bg-[#F27430] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={() => setOpenModal(!openModal)}
        >
          View Details
        </button>
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
    </div>
  );
}
