"use client";
import React from "react";
import NotFound from "../../commons/icons/NotFound.json";

function NotFounds({ width, height, text = "404 Not Found" }) {
  return (
    <div class="flex flex-col justify-center font-semibold text-lg text-center">
      {" "}
      Not Found
      <div>{text}</div>
    </div>
  );
}
export default NotFounds;
