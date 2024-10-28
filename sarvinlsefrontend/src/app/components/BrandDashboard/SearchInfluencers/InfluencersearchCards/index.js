"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import CreaterCard from "../CreaterCard";
import Podium from "../../../commons/icons/actor.png";
import ViewSwitcher from "../../../commons/GridListToggle";
import BrandListCard from "../BrandListCards";

const BrandsDealCards = ({ text = null, children }) => {
  const [isListView, setIsListView] = useState(false);
  const [influencers, setInfluencers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/admin/get_all_influencers_list`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        setInfluencers(response?.data || []); // Update if API response structure differs
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ margin: "0px 20px" }}>
      <div
        style={{
          fontSize: 30,
          fontWeight: 400,
          margin: "0px 20px",
          display: "flex",
          gap: 10,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <div>Influencers Search </div>
          <Image src={Podium} alt="podium" width={34} height={34} />
        </div>
        <div>
          <ViewSwitcher isListView={isListView} setIsListView={setIsListView} />
        </div>
      </div>

      <div style={{ fontSize: 14, fontWeight: 200, margin: "0px 20px" }}>
        Let's Start Earning By Cracking The Best Suitable Deals For You
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : influencers.length == 0 ? (
        <p>No influencers found.</p>
      ) : (
        <div
          style={{
            display: "flex",
            marginTop: 20,
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          {influencers.map((influencer) =>
            isListView ? (
              <BrandListCard
                key={influencer.user_id}
                name={influencer.full_name || influencer.user_name}
                img={influencer.profile_photo}
                description={influencer.bio_description}
                content={influencer.content_links}
                dob={influencer.date_of_birth}
                engagement={influencer.engagement_matric}
                gender={influencer.gender}
                location={influencer.location}
                phone={influencer.phone}
                category={influencer.preferred_category}
                qualityScore={influencer.quality_score}
                socialmedia={influencer.social_media_handles}
                email={influencer.user_email}
              />
            ) : (
              <CreaterCard
                key={influencer.user_id}
                name={influencer.full_name || influencer.user_name}
                img={influencer.profile_photo}
                description={influencer.bio_description}
                content={influencer.content_links}
                dob={influencer.date_of_birth}
                engagement={influencer.engagement_matric}
                gender={influencer.gender}
                location={influencer.location}
                phone={influencer.phone}
                category={influencer.preferred_category}
                qualityScore={influencer.quality_score}
                socialmedia={influencer.social_media_handles}
                email={influencer.user_email}
              />
            )
          )}
        </div>
      )}
    </div>
  );
};

export default BrandsDealCards;
