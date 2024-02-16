"use Client";
import React from "react";
import styles from "./styles.module.css";
import User from "../Profile/User";
import ProfileDetails from "./ProfileDetails";
import NavBar from "../commons/Navbar";
function Profile() {
  return (
    <div style={{ backgroundColor: "#eff2f6" }}>
      <NavBar />
      <div className={styles.profile_container}>
        <div className={styles.complete_your_profile_container}>
          <div style={{ marginLeft: "14px" }}>
            <div className={styles.complete_your_profile_text}>
              Complete your profile
            </div>
            <div className={styles.contact_info}>
              Please complete your contact info, education, work experience,
              resume, links, and equal employment info to finish your profile.
            </div>
          </div>
        </div>

        <div className={styles.status}>
          <div className={styles.status_text}>25% Complete</div>
        </div>
      </div>
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
