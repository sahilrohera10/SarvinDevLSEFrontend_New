"use client";
import React from "react";
// import { useSpring, animated } from '@react-spring/web';

function VerticalTimeline() {
  const HOMEIMAGE = [
    "https://www.mikzalliance.com/wp-content/uploads/2022/06/influencer-discovery@2x.webp",
    "https://a.storyblok.com/f/103674/1246x930/cc62ac2359/discovery-overview.png",
    "https://d317jr06u12xtj.cloudfront.net/2020/05/local-search-results-checker.png",
  ];
  return (
    <div class="flex">
      {" "}
      <div class="md:6/12 w-12/12 relative mx-auto py-20 md:w-7/12">
        <div class=" mt-10 border-l-2">
          <div class="  relative mb-10 ml-10 flex transform cursor-pointer flex-col items-center space-y-4 rounded bg-[#8e8ead]/30 p-4 text-white backdrop-blur-sm transition hover:-translate-y-2 hover:backdrop-blur-lg md:flex-row md:space-y-0">
            <div>
              <h1 style={{ fontWeight: 700, fontSize: 20, color: "#000" }}>
                Find the Creators which target perfect audience to grow your
                Business
              </h1>
              <div style={{ fontWeight: 400, fontSize: 14, color: "#000" }}>
                Unlock over 800 content creators, celebrities and NIL athletes
                across 35+ content verticals on all platforms having regional as
                well as worldwide reach.
              </div>
            </div>
            <div class="absolute -left-10 z-10 mt-2 h-5 w-5 -translate-x-2/4 transform rounded-full bg-[#8e8ead] md:mt-0"></div>
            <div class="absolute -left-10 z-0 h-1 w-10 bg-[#8e8ead]/80"></div>
            <img src={HOMEIMAGE[0]} width={250} />
          </div>
          <div class="relative mb-10 ml-10 flex transform cursor-pointer flex-col items-center space-y-4 rounded bg-[#b2ad88]/40 px-6 py-4 text-white backdrop-blur-sm transition hover:-translate-y-2 hover:backdrop-blur-lg md:flex-row md:space-y-0 ">
            <div class="absolute -left-10 z-10 mt-2 h-5 w-5 -translate-x-2/4 transform rounded-full bg-[#b2ad88] md:mt-0"></div>
            <div class="absolute -left-10 z-0 h-1 w-10 bg-[#B2AD88]/80"></div>
            <img src={HOMEIMAGE[1]} width={200} />
            <div>
              <h1 style={{ fontWeight: 700, fontSize: 20, color: "#000" }}>
                Direct Reach to Brands to Earn from your Content
              </h1>
              <div style={{ fontWeight: 400, fontSize: 14, color: "#000" }}>
                Connect over 200+ regional as well as worldwide brands to grow
                your reach and promote their product to grow and earn from your
                content.
              </div>
            </div>
          </div>
          <div class="relative mb-10 ml-10 flex transform cursor-pointer flex-col items-center space-y-4 rounded bg-[#434766]/30 px-6 py-4 text-white backdrop-blur-sm transition hover:-translate-y-2 hover:backdrop-blur-lg md:flex-row md:space-y-0">
            <div class="absolute -left-10 z-10 mt-2 h-5 w-5 -translate-x-2/4 transform rounded-full bg-[#434766] md:mt-0"></div>

            <div class="absolute -left-10 z-0 h-1 w-10 bg-[#434766]/80"></div>
            <div>
              <h1 style={{ fontWeight: 700, fontSize: 18, color: "#000" }}>
                Local/Worldwide Discovery tool for netizens to search nearby
                Services/Businesses.
              </h1>
              <div style={{ fontWeight: 400, fontSize: 14, color: "#000" }}>
                Local Search Engine for all type of business and services which
                is ever ready to serve you. Search neighbourhood services so you
                can rely on.
              </div>
            </div>
            <img src={HOMEIMAGE[2]} width={250} />
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            fontWeight: 900,
            fontSize: 12,
            color: "#000",
          }}
        >
          Click Anywhere to continue {"->"}
        </h1>
      </div>
    </div>
  );
}

export default VerticalTimeline;
