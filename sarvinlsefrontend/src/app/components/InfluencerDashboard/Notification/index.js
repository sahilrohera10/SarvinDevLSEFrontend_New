"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Notification = ({ isTabletOrMobile = false }) => {
  const [allNotification, setAllNotification] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/notification`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setAllNotification(response?.data?.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
        // Set loading to false in case of error
      });
  }, []);
  const onDeleteNotification = (id) => {
    const token = localStorage.getItem("token");

    // Use DELETE method and send notification_id in the request body
    axios
      .delete(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/notification/delete_notification`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json", // Make sure content type is set
          },
          data: {
            notification_id: id, // Send notification_id in the request body
          },
        }
      )
      .then((response) => {
        const updatedNotifications = allNotification.filter(
          (notification) => notification.notification_id !== id
        );
        setAllNotification(updatedNotifications);
        // Update the state with new data
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error deleting notification:", error);
        setLoading(false);
      });
  };

  const onDeleteAllNotification = () => {
    const token = localStorage.getItem("token");

    // Use DELETE method and send notification_id in the request body
    axios
      .delete(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/notification/delete_all_notifications`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json", // Make sure content type is set
          },
        }
      )
      .then((response) => {
        setAllNotification([]);
        // Update the state with new data
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error deleting notification:", error);
        setLoading(false);
      });
  };

  // Render a loading state while fetching
  if (loading) {
    return (
      <div className="absolute top-8 right-0 w-96 bg-[#f8f9fe] opacity-100 border border-gray-300 rounded-md shadow-lg p-4 z-10">
        <h3 className="font-bold text-lg">Notifications</h3>
        <div class="px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-red-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200">
          loading...
        </div>
      </div>
    );
  }

  return (
    <div className="absolute top-8 right-0  w-96 bg-[#f8f9fe] opacity-100 border border-gray-300 rounded-md shadow-lg p-4 z-10">
      <div className="flex justify-between ">
        <div class="font-bold text-lg">Notifications</div>
        <div>
          <button
            class="border font-medium text-xs rounded p-1 hover:bg-slate-400 hover:text-white"
            onClick={() => onDeleteAllNotification()}
          >
            Delete All
          </button>
        </div>
      </div>
      <ul class="h-64 overflow-auto">
        {allNotification.length === 0 ? (
          <li className="p-2">No notifications available</li>
        ) : (
          allNotification.map((notification) => (
            <li key={notification._id} className="p-2 border-b ">
              {notification?.subject == "Deal Accepted" ||
              notification?.subject == "Saved Deal" ? (
                <div
                  id="toast-success"
                  class="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
                  role="alert"
                >
                  <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
                    <svg
                      class="w-5 h-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span class="sr-only">Check icon</span>
                  </div>
                  <div className="ms-3 text-sm font-normal">
                    {/* You can customize the content and subject here */}
                    <strong>{notification.subject}</strong>:{" "}
                    {notification.content}
                  </div>
                  <button
                    type="button"
                    class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                    data-dismiss-target="#toast-success"
                    aria-label="Close"
                    onClick={() =>
                      onDeleteNotification(notification.notification_id)
                    }
                  >
                    <span class="sr-only">Close</span>
                    <svg
                      class="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                  </button>
                </div>
              ) : (
                <div
                  id="toast-warning"
                  class="flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
                  role="alert"
                >
                  <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200">
                    <svg
                      class="w-5 h-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z" />
                    </svg>
                    <span class="sr-only">Warning icon</span>
                  </div>
                  <div className="ms-3 text-sm font-normal">
                    {/* You can customize the content and subject here */}
                    <strong>{notification.subject}</strong>:{" "}
                    {notification.content}
                  </div>
                  <button
                    type="button"
                    class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                    data-dismiss-target="#toast-warning"
                    aria-label="Close"
                    onClick={() =>
                      onDeleteNotification(notification.notification_id)
                    }
                  >
                    <span class="sr-only">Close</span>
                    <svg
                      class="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                  </button>
                </div>
              )}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Notification;
