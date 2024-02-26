"use client";
import React from "react";
import Lottie from "react-lottie-player";
import NotFound from "../../commons/icons/NotFound.json";

function NotFounds({ width, height, text = "404 Not Found" }) {
  return (
    <div class="flex flex-col justify-center font-semibold text-lg text-center">
      {" "}
      <Lottie
        loop
        animationData={NotFound}
        play
        style={{ width: { width }, height: { height }, marginRight: 20 }}
      />
      <div>{text}</div>
    </div>
  );
}
export default NotFounds;
