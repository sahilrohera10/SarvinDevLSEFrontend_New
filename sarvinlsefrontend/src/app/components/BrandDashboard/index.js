"use client";

import React, { useState, useEffect } from "react";
import NavBar from "./Navbar";
import axios from "axios";
import Footer from "../commons/Footer";

import styles from "./styles.module.css";
import Lottie from "react-lottie-player";
import Handwave from "../commons/icons/handwave.json";

import MetricCards from "../commons/MetricCard";
import Follower from "../commons/icons/follower.png";
import Engagement from "../commons/icons/engagmentrate.png";
import Score from "../commons/icons/score.png";
import Image from "next/image";
import BottomNavbar from "./BottomNavbar";
// import Analytics from "./Analytics";
import BidDeals from "./BidDeals";
import BrandDeals from "./BrandDeals";
import EventDeals from "./EventDeals";
import Overview from "./Overview";
import { useRouter } from "next/router";
import SearchInfluencers from "./SearchInfluencers";
import Analytics from "./Analytics";
import Cracked_Deals from "./Cracked Deals";
import BrandContent from "./BrandContent";
import ClosedDeals from "./Closed Deals";

const BrandDashboard = () => {
  const router = useRouter();
  const { influencerView: isinfluencerView, id = "" } = router.query;
  const influencerView = isinfluencerView === "True";

  const [selectedContent, setSelectedContent] = useState(
    !influencerView ? "Search_Influencers" : "Overview"
  );
  const DASHBOARD_CONTENT = {
    // Analytics: <Analytics />,
    Overview: <Overview />,
    Bid_Deals: <BidDeals />,
    Brand_Deals: <BrandDeals influencerView={influencerView} id={id} />,
    Event_Deals: <EventDeals />,
    Search_Influencers: <SearchInfluencers />,
    Analytics: <Analytics />,
    Cracked_Deals: <Cracked_Deals />,
    Brand_Content: <BrandContent />,
    Closed_Deals: <ClosedDeals id={id} />,
  };

  return (
    <div>
      <NavBar id={id} />
      <div className={styles.profile_container}>
        <div style={{ flex: 0.5, marginLeft: 10 }}>
          <img
            class="w-20 h-20  rounded-full"
            src="https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2023/07/cover-10.jpg?ssl=1&quality=80&w=f"
            alt="Rounded avatar"
          ></img>
        </div>
        <div style={{ flex: 2 }}>
          <div
            className={styles.complete_your_profile_text}
            style={{ display: "flex" }}
          >
            Instagram{" "}
            <Lottie
              loop
              animationData={Handwave}
              play
              style={{
                width: "7%",
                height: "7%",
                marginLeft: 4,
                marginTop: 4,
                transform: "rotate(30deg)",
              }}
            />
          </div>
          <div className={styles.contact_info}>
            Software Engineer,Akamai Technologies
          </div>
        </div>
        <div style={{ flex: 5 }}>
          <div class="flex gap-3">
            <div style={{ flex: 2 }}>
              <MetricCards
                value={216}
                valueStyle="font-light mb-2 font-sans text-xl text-gray-700 dark:text-gray-400"
                title="Followers"
                icon={<Image src={Follower} width={48} height={0} alt="Icon" />}
                trend={{
                  slope: -1,
                  description: "Compared to last week",
                  value: "0.5%",
                }}
              />
            </div>
            <div style={{ flex: 2 }}>
              <MetricCards
                value={"27.5"}
                valueStyle="font-light mb-2 font-sans text-xl text-gray-700 dark:text-gray-400"
                title="Quality Score"
                icon={
                  <Image src={Engagement} width={48} height={0} alt="Icon" />
                }
                trend={{
                  slope: 1,
                  description: "Compared to last week",
                  value: "5%",
                }}
              />
            </div>
            <div style={{ flex: 2 }}>
              <MetricCards
                value={"87"}
                valueStyle="font-light mb-2 font-sans text-xl text-gray-700 dark:text-gray-400"
                title="Location Rank"
                icon={<Image src={Score} width={48} height={0} alt="Icon" />}
                trend={{
                  slope: -1,
                  description: "Compared to last week",
                  value: "1.5%",
                }}
              />
            </div>
          </div>
        </div>
        {/* <div className={styles.status}>
          <div style={{ width: "40%" }}>
            <div style={{ padding: "0px 28px" }}>
              {" "}
              <CircularProgressbar value={66} text="66%" />
            </div>
            <div style={{ fontSize: 12, fontWeight: 700 }}>
              Profile Complete
            </div>
          </div>
        </div> */}
      </div>
      <BottomNavbar
        selectedContent={selectedContent}
        setSelectedContent={setSelectedContent}
        influencerView={influencerView}
      />

      {DASHBOARD_CONTENT[selectedContent]}

      <Footer />
    </div>
  );
};

export default BrandDashboard;
