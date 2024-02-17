"use client";
import React from "react";
import styles from "./styles.module.css";
import avatar from "../../../../../public/Images/man1.jpg";

function User() {
  return (
    <div style={{ margin: "0px 20px" }}>
      <div className={styles.profile_pic} style={{ backgroundColor: "#fff" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "20px 20px 10px 20px",
          }}
        >
          <div></div>
          <div
            style={{
              height: "14px",
              width: "14px",
            }}
          >
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPjBXKS4GpFLR-Xr105WY3um0ASsCdVf0XSA&usqp=CAU" />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div className={styles.image}>
            <img
              class="w-36 h-36  rounded-full"
              src="https://play-lh.googleusercontent.com/DBlW7854rRNk-LPRu8jD25HRYaA0AFEvNLJvGtAUMSC-kJu1IfH7Wg4an_kMRA6VcPZ2=w526-h296-rw"
              alt="Rounded avatar"
            ></img>
          </div>
          <div className={styles.user_name}>Your Name</div>
          <div className={styles.university_name}>@Username</div>
        </div>
      </div>
      <div className={styles.contact}>
        <div className={styles.contact_text}>
          <div style={{ fontSize: "18px" }}>Contact</div>

          <div style={{ height: "14px", width: "14px", marginRight: "26px" }}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPjBXKS4GpFLR-Xr105WY3um0ASsCdVf0XSA&usqp=CAU" />
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
      {/* <div className={styles.employment_container}>
        <div>Equal Employment</div>
        <div style={{ height: "14px", width: "14px", marginRight: "26px" }}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPjBXKS4GpFLR-Xr105WY3um0ASsCdVf0XSA&usqp=CAU" />
        </div>
      </div>
      <div className={styles.employment_container}>
        <div>Job Preferences</div>
        <div style={{ height: "14px", width: "14px", marginRight: "26px" }}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPjBXKS4GpFLR-Xr105WY3um0ASsCdVf0XSA&usqp=CAU" />
        </div>
      </div> */}
    </div>
  );
}

export default User;
