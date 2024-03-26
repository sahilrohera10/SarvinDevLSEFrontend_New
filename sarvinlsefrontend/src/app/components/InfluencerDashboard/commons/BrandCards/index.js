import Image from "next/image";
import { FaTwitter, FaInstagram, FaPinterestP } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import FirstPlace from "../../../commons/icons/FirstPlace.png";
import SecondPlace from "../../../commons/icons/SecondPlace.png";
import ThirdPlace from "../../../commons/icons/ThirdPlace.png";
import { FaGift } from "react-icons/fa";
import Chips from "../../../commons/Chips";

const Tags = {
  1: FirstPlace,
  2: SecondPlace,
  3: ThirdPlace,
};
export default function BrandCard({
  heading = "Naman Agarwal",
  subheading = "CEO and Founder",
  img = "https://tse1.mm.bing.net/th?id=OIP.K7lG3005eY-tEHwlxf61qgHaFx&pid=Api&P=0&w=300&h=300",
  tags = 0,
  cardType = "Deals",
}) {
  return (
    <>
      {" "}
      {cardType == "Deals" ? (
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

              <div className="absolute inset-0 bg-black opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
            </div>

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-90 transition-opacity duration-300">
              <div className="flex items-center space-x-3">
                {/* <div className="rounded-full p-3 hover:bg-green-600 transition-all duration-300">
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
            </div> */}
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
                Fixed Cost- TBD
              </span>
              <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">
                Sales Commission - 3%
              </span>
            </div>
            <div className="text-gray-400 text-md mt-2 mr-2">
              <button
                type="submit"
                class="flex w-full justify-center rounded-md bg-[#F27430] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                View Deal
              </button>
            </div>
          </div>
        </div>
      ) : (
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
                No.Of Deals = 1432
              </span>
            </div>
            <div className="text-gray-400 text-md mt-2 mr-2">
              <button
                type="submit"
                class="flex w-full justify-center rounded-md bg-[#F27430] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
