"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import Modals from "../../../commons/modal";
import ProfilePhotoForm from "../ProfilePhotoForm";
import ContactDetailForm from "../ContactDetailForm";
import Coins from "../../../commons/icons/coin.png";
import Image from "next/image";

function User() {
  const [openProfileModal, setOpenProfileModal] = useState(false);
  const [openContactModal, setOpenContactModal] = useState(false);

  console.log(openProfileModal);
  return (
    <div style={{ margin: "0px 20px" }}>
      <div className={styles.contact}>
        <div className={styles.contact_text}>
          <div style={{ fontSize: "18px" }}>Contact</div>

          <div
            style={{ height: "14px", width: "14px", marginRight: "26px" }}
            onClick={() => {
              setOpenContactModal(!openContactModal);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="24"
              height="24"
              viewBox="0 0 64 64"
            >
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
              <path
                fill="#faefde"
                d="M5 57L6 46 13 47 14 50 16.92 51.5 19 59 7 59 5 57z"
              ></path>
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
        <div
          style={{
            fontSize: "13px",
            marginTop: "6px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div style={{ height: "14px", width: "14px" }}>
            <img src="https://cdn-icons-png.flaticon.com/512/561/561127.png" />
          </div>
          <div style={{ marginLeft: "6px" }}>agarwalnaman35@gmai....</div>
        </div>
        <div
          style={{
            fontSize: "13px",
            marginTop: "6px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div style={{ height: "12px", width: "12px" }}>
            <img src="https://static-00.iconduck.com/assets.00/phone-icon-2048x2048-04xa1owp.png" />
          </div>
          <div style={{ marginLeft: "6px" }}>9084494999</div>
        </div>
        <div
          style={{
            fontSize: "13px",
            marginTop: "6px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div style={{ height: "12px", width: "12px" }}>
            <img src="https://cdn-icons-png.flaticon.com/512/2838/2838912.png" />
          </div>
          <div style={{ marginLeft: "6px" }}>Pithoragarh</div>
        </div>
      </div>

      <div className={styles.contact}>
        <div className={styles.contact_text}>
          <div style={{ fontSize: "18px" }}>Sarvin Quality Score</div>
          <div
            style={{ height: "14px", width: "14px", marginRight: "26px" }}
            onClick={() => {
              setOpenContactModal(!openContactModal);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="24"
              height="24"
              viewBox="0 0 64 64"
            >
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
              <path
                fill="#faefde"
                d="M5 57L6 46 13 47 14 50 16.92 51.5 19 59 7 59 5 57z"
              ></path>
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

        <div
          style={{
            fontSize: "42px",
            fontWeight: 600,
            margin: "6px 0 2px 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ margin: "0 6px" }}>23</div>
          <div style={{ height: "32px", width: "32px" }}>
            <Image src={Coins} alt="coins" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
