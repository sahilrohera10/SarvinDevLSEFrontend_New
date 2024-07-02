"use client";

import React, { useState } from "react";
import Image from "next/image";
import Podium from "../../../commons/icons/podium.png";
import BrandListCard from "../../commons/BrandListCards";

const CrackedCards = ({ text = null, children, isTabletOrMobile = false }) => {
  return (
    <div style={{ margin: "0px 20px" }}>
      <div
        style={{
          fontSize: isTabletOrMobile ? 20 : 30,
          fontWeight: 400,
          margin: "0px 20px",
          display: "flex",
          gap: 10,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 10,
            width: "100vw",
            alignItems: "center",
            gap: isTabletOrMobile ? 2 : 10,
            justifyContent: isTabletOrMobile && "center",
          }}
        >
          <div>Cracked Deals </div>
          <Image src={Podium} alt="podium" width={34} height={34} />
        </div>
      </div>

      <div style={{ fontSize: 14, fontWeight: 200, margin: "0px 20px" }}>
        Lets Start Earning By Cracking The Best Suitable Deals For You{" "}
      </div>

      <div
        style={{
          display: "flex",
          marginTop: 20,
          paddingRight: 14,
          paddingLeft: 14,
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <BrandListCard
          heading="Comedy Night"
          subheading="Creme's Castle"
          img="https://cdn3.vectorstock.com/i/1000x1000/02/47/stand-up-comedy-open-mic-vector-20050247.jpg"
          cardType="Cracked"
          isTabletOrMobile={isTabletOrMobile}
        />
        <BrandListCard
          heading="Open Mic in Bareilly"
          subheading="Cafe Coffee Day"
          img="https://www.aacpl.net/sites/default/files/2023-11/180119-052021_open-mic.jpg"
          cardType="Cracked"
          isTabletOrMobile={isTabletOrMobile}
        />
      </div>
    </div>
  );
};

export default CrackedCards;
