import React from "react";

function ProfilePhotoForm() {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          padding: 30,
        }}
      >
        <img
          class="w-36 h-36  rounded-full mb-30"
          src="https://play-lh.googleusercontent.com/DBlW7854rRNk-LPRu8jD25HRYaA0AFEvNLJvGtAUMSC-kJu1IfH7Wg4an_kMRA6VcPZ2=w526-h296-rw"
          alt="Rounded avatar"
        ></img>
        <button
          type="button"
          class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-xs px-3 py-1.5 mt-6 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
        >
          Edit Profile Photo
        </button>
        <div class="grid gap-6 mb-6 mt-10 md:grid-cols-2">
          <div>
            <label
              for="first_name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              First name
            </label>
            <input
              type="text"
              id="first_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Naman"
              required
            />
          </div>
          <div>
            <label
              for="last_name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Last name
            </label>
            <input
              type="text"
              id="last_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Agarwal"
              required
            />
          </div>
        </div>
        <div class="w-full">
          <label
            for="last_name"
            class="block mb-2 text-md font-semibold text-gray-900 dark:text-white"
          >
            Username
          </label>
          <input
            type="text"
            id="last_name"
            class="bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
            placeholder="@username"
            required
          />
        </div>
      </div>
      <div class="flex justify-end mr-6">
        <button
          type="submit"
          class="rounded-md bg-[#f27430] px-3 py-2 mb-4 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </>
  );
}
export default ProfilePhotoForm;
