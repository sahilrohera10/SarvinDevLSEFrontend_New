"use client";
import React from "react";
import styles from "./styles.module.css";
import User from "./User";
import ProfileDetails from "./ProfileDetails";

import "react-circular-progressbar/dist/styles.css";

function Profile() {
  return (
    <div style={{ backgroundColor: "#eff2f6" }}>
      <div className={styles.user_details_container}>
        <div className={styles.user_container}>
          <User />
        </div>
        <div className={styles.profile_details_container}>
          <ProfileDetails />
        </div>
      </div>
    </div>
  );
}
export default Profile;
