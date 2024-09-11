"use client";
import React from "react";
import {
  InstagramEmbed,
  FacebookEmbed,
  LinkedInEmbed,
  PinterestEmbed,
  YouTubeEmbed,
  XEmbed,
} from "react-social-media-embed";
import Podium from "../../commons/icons/Business.png";
import Image from "next/image";
import ContentVideos from "../ContentVideos/index"

const YourContent = ({ isTabletOrMobile = false }) => {
  return (
    <div>
      <div
        style={{
          fontSize: isTabletOrMobile ? 20 : 30,
          fontWeight: 400,
          margin: "20px 30px 0 ",
          display: "flex",
          gap: 10,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100vw",
            gap: 10,
            alignItems: "center",
            justifyContent: isTabletOrMobile && "center",
          }}
          class="mx-6"
        >
          <div>My Content</div>
          <Image src={Podium} alt="podium" width={34} height={34} />
        </div>
      </div>
      <div style={{ fontSize: 14, fontWeight: 200, marginLeft: "54px" }}>
        Show Your Product Which Make Brands Attract Toward You
      </div>
      <div
        class={
          isTabletOrMobile
            ? "flex flex-col justify-center align-middle mx-8 mt-4 gap-4 w-fit "
            : "flex px-12 mt-4 justify-around flex-wrap w-fit"
        }
      >

        <ContentVideos />
        
      </div>
    </div>
  );
};
export default YourContent;
