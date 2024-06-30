"use client";

import React, { useState } from "react";
import Image from "next/image";
import Podium from "../../commons/icons/podium.png";
import CreaterCard from "../CreaterCard";
const RisingCreators = ({ isTabletOrMobile }) => {
  return (
    <div style={{ margin: "0px 20px" }}>
      <div
        style={{
          fontSize: isTabletOrMobile ? 24 : 30,
          fontWeight: 400,
          margin: "0px 20px",
          display: "flex",
          justifyContent: isTabletOrMobile && "center",
          gap: 10,
          alignItems: "center",
          marginTop: isTabletOrMobile && 20,
        }}
      >
        Rising Creators{" "}
        <Image src={Podium} alt="podium" width={34} height={34} />
      </div>
      <div
        style={{
          fontSize: isTabletOrMobile ? 12 : 14,
          fontWeight: 200,
          margin: "0px 20px",
          justifyContent: isTabletOrMobile && "center",
        }}
      >
        Influencers Cracked Most Brand Deals in Last 30 Days{" "}
      </div>
      {!isTabletOrMobile ? (
        <div
          style={{
            display: "flex",
            marginTop: 20,
            justifyContent: "space-around",
          }}
        >
          <CreaterCard
            name="Naman Agarwal"
            img="https://t4.ftcdn.net/jpg/02/61/52/95/360_F_261529596_YZWJaMnYFSCM0FSCrxs71o6RrZ9MpP4D.jpg"
            tags={1}
          />
          <CreaterCard
            name="Mayank Gupta"
            img="https://media.istockphoto.com/id/1296158947/photo/portrait-of-creative-trendy-black-african-male-designer-laughing.jpg?s=612x612&w=0&k=20&c=1Ws_LSzWjYvegGxHYQkkgVytdpDcnmK0upJyGOzEPcg="
            tags={2}
          />
          <CreaterCard
            name="Sahil Rohera"
            img="https://img.freepik.com/free-photo/close-up-portrait-curly-haired-young-woman-isolated_273609-48309.jpg"
            tags={3}
          />
          <CreaterCard
            name="Sahil Arora"
            img="https://media.istockphoto.com/id/1126844596/photo/young-male-with-a-smartphone.jpg?s=612x612&w=is&k=20&c=WlOq3mLDXOl_C3SJcnUKBy-VMmFvLfR2VK0OZZWFJyo="
          />
        </div>
      ) : (
        <div>
          <div
            style={{
              display: "flex",
              marginTop: 10,
              gap: 2,
              justifyContent: "space-between",
            }}
          >
            <CreaterCard
              name="Naman Agarwal"
              img="https://t4.ftcdn.net/jpg/02/61/52/95/360_F_261529596_YZWJaMnYFSCM0FSCrxs71o6RrZ9MpP4D.jpg"
              tags={1}
            />
            <CreaterCard
              name="Mayank Gupta"
              img="https://media.istockphoto.com/id/1296158947/photo/portrait-of-creative-trendy-black-african-male-designer-laughing.jpg?s=612x612&w=0&k=20&c=1Ws_LSzWjYvegGxHYQkkgVytdpDcnmK0upJyGOzEPcg="
              tags={2}
            />
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 4,
              gap: 2,
              justifyContent: "space-between",
            }}
          >
            <CreaterCard
              name="Sahil Rohera"
              img="https://img.freepik.com/free-photo/close-up-portrait-curly-haired-young-woman-isolated_273609-48309.jpg"
              tags={3}
            />
            <CreaterCard
              name="Sahil Arora"
              img="https://media.istockphoto.com/id/1126844596/photo/young-male-with-a-smartphone.jpg?s=612x612&w=is&k=20&c=WlOq3mLDXOl_C3SJcnUKBy-VMmFvLfR2VK0OZZWFJyo="
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default RisingCreators;
