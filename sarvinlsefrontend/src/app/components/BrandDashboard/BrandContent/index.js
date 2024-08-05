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

const BrandContent = ({ isTabletOrMobile = false }) => {
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
          <div>Brand's Content</div>
          <Image src={Podium} alt="podium" width={34} height={34} />
        </div>
      </div>
      <div style={{ fontSize: 14, fontWeight: 200, marginLeft: "54px" }}>
        Show Your Product Which Make Brands Attract Toward You
      </div>
      <div
        class={
          isTabletOrMobile
            ? "flex flex-col justify-center align-middle mx-8 mt-4 gap-4 w-full "
            : "flex mx-12 mt-4 gap-4 w-full flex-wrap"
        }
      >
        <InstagramEmbed
          url="https://www.instagram.com/p/CUbHfhpswxt/"
          width={328}
          height={500}
        />
        <YouTubeEmbed
          url="https://www.youtube.com/watch?v=HpVOs5imUN0"
          width={328}
          height={500}
        />

        <LinkedInEmbed
          url="https://www.linkedin.com/embed/feed/update/urn:li:share:6898694772484112384"
          postUrl="https://www.linkedin.com/posts/peterdiamandis_5-discoveries-the-james-webb-telescope-will-activity-6898694773406875648-z-D7"
          width={328}
          height={500}
        />
        <XEmbed
          url="https://twitter.com/PixelAndBracket/status/1356633038717923333"
          width={328}
          height={500}
        />
        <YouTubeEmbed
          url="https://youtu.be/zCsR-mlRR8M?si=DRHILYQQ4-yyU4Ms"
          width={328}
          height={500}
        />
        <FacebookEmbed
          url="https://www.facebook.com/andrewismusic/posts/451971596293956"
          width={328}
          height={500}
        />
        <InstagramEmbed
          url="https://www.instagram.com/p/CUbHfhpswxt/"
          width={328}
          height={500}
        />
        <YouTubeEmbed
          url="https://www.youtube.com/watch?v=HpVOs5imUN0"
          width={328}
          height={500}
        />
      </div>
    </div>
  );
};
export default BrandContent;
