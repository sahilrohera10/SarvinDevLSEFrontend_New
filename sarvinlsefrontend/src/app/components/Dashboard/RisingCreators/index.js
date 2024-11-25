"use client";

import React, { useState, useEffect } from "react";
// import axios from "axios";
import Image from "next/image";
import Podium from "../../commons/icons/podium.png";
import CreaterCard from "../CreaterCard";
const RisingCreators = ({ isTabletOrMobile }) => {
  // const [stats, setStats] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   axios
  //     .get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/stats/1`)
  //     .then((response) => {
  //       setStats(response?.data || []); // Update if API response structure differs
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //       setLoading(false);
  //     });
  // }, []);
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
        <div>
          <div
            style={{
              display: "flex",
              marginTop: 20,
              justifyContent: "space-around",
              animation: "scroll 20s linear infinite",
              overflow: "auto",
            }}
          >
            <CreaterCard
              name="Sunny Singh"
              profession="Model and Influencer"
              img="https://www.influglue.com/files/medialibrary/7c0b1940a26348eaf948bf2162314580.jpg"
              tags={1}
              deal_cracked={10}
            />
            <CreaterCard
              name="Eisha Singh"
              profession="Financial Advisor"
              img="https://indianinfluencers.in/wp-content/uploads/2023/01/Esha-IF.png"
              tags={2}
              deal_cracked={19}
            />
            <CreaterCard
              name="Shefali Sharma"
              profession="Nutritionist"
              img="https://storage.googleapis.com/ares-profile-pictures/hd/asheemavardaan-1b528fc75ca8e85d0746bc5eb05b8ba3_hd.jpg"
              tags={3}
              deal_cracked={43}
            />
            <CreaterCard
              name="Sandeep Sharma"
              profession="Charted Accountant"
              img="https://blog.chtrbox.com/wp-content/uploads/2022/01/Harshs-profile-pic.jpg"
              deal_cracked={11}
            />
            <CreaterCard
              name="Sunny Singh"
              profession="Model and Influencer"
              img="https://www.influglue.com/files/medialibrary/7c0b1940a26348eaf948bf2162314580.jpg"
              tags={1}
              deal_cracked={10}
            />
            <CreaterCard
              name="Eisha Singh"
              profession="Financial Advisor"
              img="https://indianinfluencers.in/wp-content/uploads/2023/01/Esha-IF.png"
              tags={2}
              deal_cracked={19}
            />
            <CreaterCard
              name="Shefali Sharma"
              profession="Nutritionist"
              img="https://storage.googleapis.com/ares-profile-pictures/hd/asheemavardaan-1b528fc75ca8e85d0746bc5eb05b8ba3_hd.jpg"
              tags={3}
              deal_cracked={43}
            />
            <CreaterCard
              name="Sandeep Sharma"
              profession="Charted Accountant"
              img="https://blog.chtrbox.com/wp-content/uploads/2022/01/Harshs-profile-pic.jpg"
              deal_cracked={11}
            />

            <style jsx>{`
              @keyframes scroll {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-100%);
                }
              }
            `}</style>
          </div>
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
