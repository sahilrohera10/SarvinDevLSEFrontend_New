import React from "react";
import Lottie from "react-lottie-player";
import ProfilePic from "../../commons/icons/profilepic.json";

function ProfilePhotoForm() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Lottie
        loop
        animationData={ProfilePic}
        play
        style={{ width: "30%", height: "30%" }}
      />
    </div>
  );
}
export default ProfilePhotoForm;
