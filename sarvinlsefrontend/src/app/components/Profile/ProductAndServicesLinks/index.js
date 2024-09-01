import React, { useState } from "react";
import Lottie from "react-lottie-player";
import ProfilePic from "../../commons/icons/profilepic.json";
import Toast from "../../commons/toast";
import jwt from "jsonwebtoken";
import axios from "axios";

function ProductAndServicesLinks({ setOpenProductAndServices }) {
  const [links, setLinks] = useState([""]);
  const [disableAdd, setDisableAdd] = useState(true);
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e, index) => {
    const newLinks = [...links];
    newLinks[index] = e.target.value;
    setLinks(newLinks);
    setDisableAdd(newLinks[index].trim() === "");
  };

  const handleAddInput = () => {
    if (disableAdd) {
      setShowToast(true);
      return;
    }
    if (!disableAdd) {
      setLinks([...links, ""]);
      setDisableAdd(true);
      return;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleAddInput();
    if (disableAdd) {
      return;
    }
    const token = localStorage.getItem("token");
    const decodedToken = jwt.decode(token);
    const creator_id = decodedToken?.userId;
    if (!creator_id) {
      console.error("Failed to retrieve creator_id from token.");
      return;
    }
    if (!Array.isArray(links) || links.length === 0) {
      console.error("Links array is empty.");
      return;
    }
    console.log(creator_id);
    console.log(links);

    const url = "https://sarvindevbackend.onrender.com/api/user/add_reel";
    const payload = {
      creator_id,
      links,
    };

    axios
      .post(url, payload)
      .then((response) => {
        console.log("Reel links added successfully:", response.data);
        setOpenProductAndServices(false);
      })
      .catch((error) => {
        console.error("An error occurred while adding reel links:", error);
      });
      console.log("ended")
  };

  const handleCancel = () => {
    setLinks([""]);
    setOpenProductAndServices(false);
  };

  return (
    <>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Lottie loop animationData={ProfilePic} play style={{ width: "40%", height: "40%", marginRight: 20 }} />

        <form style={{ maxHeight: "400px", overflowY: "auto" }} onSubmit={handleSubmit}>
          <div className="space-y-2">
            <div className="border-b border-gray-900/10 pb-2 mt-8">
              <div style={{ display: "flex" }}>
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                  <path d="M14.851 11.923c-.179-.641-.521-1.246-1.025-1.749-1.562-1.562-4.095-1.563-5.657 0l-4.998 4.998c-1.562 1.563-1.563 4.095 0 5.657 1.562 1.563 4.096 1.561 5.656 0l3.842-3.841.333.009c.404 0 .802-.04 1.189-.117l-4.657 4.656c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-1.952-1.951-1.952-5.12 0-7.071l4.998-4.998c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464.493.493.861 1.063 1.105 1.672l-.787.784zm-5.703.147c.178.643.521 1.25 1.026 1.756 1.562 1.563 4.096 1.561 5.656 0l4.999-4.998c1.563-1.562 1.563-4.095 0-5.657-1.562-1.562-4.095-1.563-5.657 0l-3.841 3.841-.333-.009c-.404 0-.802.04-1.189.117l4.656-4.656c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464 1.951 1.951 1.951 5.119 0 7.071l-4.999 4.998c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-.494-.495-.863-1.067-1.107-1.678l.788-.785z" />
                </svg>
                <h2 className="text-base font-semibold leading-7 text-gray-900 ml-4">Add your content links</h2>
              </div>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                This content will be displayed publicly, so be careful what you share.
              </p>
            </div>

            <div className="border-b border-gray-900/10 pb-12">
              <div className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6">
                <div className="sm:col-span-12">
                  <label htmlFor="links" className="block text-md font-semibold leading-6 text-gray-900 text-start">
                    Add Links:
                  </label>
                  {links.map((link, index) => (
                    <div key={index} className="mt-2 relative px-1">
                      <input
                        type="text"
                        className="bg-gray-50 border shadow-md border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5"
                        placeholder="Your reel/shorts links"
                        value={link}
                        onChange={(e) => handleChange(e, index)}
                      />
                    </div>
                  ))}
                  <button
                    type="button"
                    className="mt-2 rounded-md bg-[#f27430] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500"
                    onClick={handleAddInput}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button type="button" className="text-sm font-semibold leading-6 text-gray-900" onClick={handleCancel}>
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-[#f27430] px-3 py-2 mb-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
      {showToast && <Toast showToast={showToast} setShowToast={setShowToast} type={2} text={"First enter your link"} />}
    </>
  );
}

export default ProductAndServicesLinks;
