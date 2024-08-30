import Image from "next/image";
import { FaTwitter, FaInstagram, FaPinterestP } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import Modal from "../../../commons/modal";
import { useState } from "react";
import BrandDetail from "../../commons/BrandDetail";

export default function ClosedCard({
  brandId = 0,
  dealId = 0,
  heading = "Naman Agarwal",
  subheading = "McDonalds",
  img = "https://t4.ftcdn.net/jpg/02/61/52/95/360_F_261529596_YZWJaMnYFSCM0FSCrxs71o6RrZ9MpP4D.jpg",
  tags = 0,
  cardType = "Deals",
  deal_count = 0,
  fixed_price = 0,
  influencerView = true,
  props = {},
}) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <div
        style={{
          display: "flex",
          marginTop: 20,
          paddingRight: 14,
          paddingLeft: 14,
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <div className="max-w-xs bg-white relative group border shadow-lg rounded-lg mb-10">
          <a
            href="#"
            className="relative block rounded-md group-hover:opacity-70 transition-opacity duration-300"
          >
            <div className="relative overflow-hidden">
              <div
                style={{
                  width: 300,
                  height: 200,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Image
                  alt="alt text."
                  src={props.product_photo}
                  width={300}
                  height={200}
                />
              </div>

              <div
                className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                onClick={() => setOpenModal(!openModal)}
              ></div>
            </div>

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-90 transition-opacity duration-300">
              <div className="flex items-center space-x-3">
                <div className="text-white text-xl text-semibold opacity-100 group-hover:opacity-100">
                  View Deal
                </div>
              </div>
            </div>
          </a>

          <div className="p-3.5 bg-white">
            <div className="flex justify-between">
              <div className="text-black text-xl font-medium">
                {props.product_name}
              </div>
              <span className="bg-blue-100 text-blue-800 text-xs pt-1.5 font-medium px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
                {props.category}
              </span>
            </div>
            <div className="text-gray-400 text-sm">{subheading}</div>
            <div className="flex mt-1">
              <span className="bg-[#ccdfff] text-[#3858f9] text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                Fixed Cost- {props.fixed_price}
              </span>
              <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">
                Sales Commission - {props.sales_compensation}%
              </span>
            </div>
            <div className="text-gray-400 text-md mt-2 mr-2">
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#F27430] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={() => setOpenModal(!openModal)}
              >
                View Deal
              </button>
            </div>
          </div>

          {/* Blur Effect and "Closed" Text */}
          <div className="absolute inset-0 bg-white bg-opacity-50 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-0 opacity-100 flex items-center justify-center">
            <span className="text-red-500 text-3xl font-bold transform rotate-[-30deg]">
              Closed
            </span>
          </div>
        </div>
      </div>
      <Modal
        openModal={openModal}
        setOpenModal={setOpenModal}
        closeOutside={false}
      >
        <BrandDetail
          id={dealId}
          heading={heading}
          subheading={subheading}
          img={img}
          cardType="Deals"
          openModal={openModal}
          setOpenModal={setOpenModal}
          influencerView={influencerView}
        />
      </Modal>
    </div>
  );
}
