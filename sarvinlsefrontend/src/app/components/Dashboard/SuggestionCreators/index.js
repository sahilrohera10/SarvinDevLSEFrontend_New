"use client";

import React, { useState } from "react";
import Image from "next/image";

import Podium from "../../commons/icons/podium.png";

import CreaterCard from "../../commons/CreaterCard/CreaterCard";
const SuggestionCreators = ({ isTabletOrMobile }) => {
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
        }}
      >
        Suggested Creators{" "}
        <Image src={Podium} alt="podium" width={34} height={34} />
      </div>
      <div
        style={{
          fontSize: isTabletOrMobile ? 12 : 14,
          fontWeight: 200,
          margin: "0px 20px",
          display: "flex",
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
            name="Rohit Sharma"
            img="https://media.istockphoto.com/id/529278045/photo/working-on-something-great.jpg?s=612x612&w=is&k=20&c=lfzJ5xpUSYkgNCsAK5UO6hcP0BDlAIJIXrDw-qlmktc="
          />
          <CreaterCard
            name="Prajakta Koli"
            img="https://t3.ftcdn.net/jpg/03/18/04/12/360_F_318041202_dSFWSp38bnmiNxhLQnJDgnszmCoW7W0a.jpg"
          />
          <CreaterCard
            name="Osama-Bin-Laden"
            img="https://media.istockphoto.com/id/1188563581/photo/head-shot-portrait-offended-upset-african-american-girl-feeling-bad.jpg?s=612x612&w=0&k=20&c=cY8vMx4MyrcaL0KfmFkHluHzx0ufQfh-XExtbMN1hm8="
          />
          <CreaterCard
            name="Lebron James"
            img="https://media.istockphoto.com/id/1213961316/photo/thoughtful-puzzled-african-american-man-looking-aside-at-copy-space.jpg?s=612x612&w=0&k=20&c=Kj347KnMRdm9MXO7wOFWpmcARkL7XkcVBkJJiEnSuug="
          />
        </div>
      ) : (
        <div>
          {" "}
          <div
            style={{
              display: "flex",
              marginTop: 10,
              gap: 2,
              justifyContent: "space-between",
            }}
          >
            <CreaterCard
              name="Rohit Sharma"
              img="https://media.istockphoto.com/id/529278045/photo/working-on-something-great.jpg?s=612x612&w=is&k=20&c=lfzJ5xpUSYkgNCsAK5UO6hcP0BDlAIJIXrDw-qlmktc="
            />
            <CreaterCard
              name="Prajakta Koli"
              img="https://t3.ftcdn.net/jpg/03/18/04/12/360_F_318041202_dSFWSp38bnmiNxhLQnJDgnszmCoW7W0a.jpg"
            />
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 10,
              gap: 2,
              justifyContent: "space-between",
            }}
          >
            <CreaterCard
              name="Steve Harvey"
              img="https://media.istockphoto.com/id/1188563581/photo/head-shot-portrait-offended-upset-african-american-girl-feeling-bad.jpg?s=612x612&w=0&k=20&c=cY8vMx4MyrcaL0KfmFkHluHzx0ufQfh-XExtbMN1hm8="
            />
            <CreaterCard
              name="Lebron James"
              img="https://media.istockphoto.com/id/1213961316/photo/thoughtful-puzzled-african-american-man-looking-aside-at-copy-space.jpg?s=612x612&w=0&k=20&c=Kj347KnMRdm9MXO7wOFWpmcARkL7XkcVBkJJiEnSuug="
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SuggestionCreators;
