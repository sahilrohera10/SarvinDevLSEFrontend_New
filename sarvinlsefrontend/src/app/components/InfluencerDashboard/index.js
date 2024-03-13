"use client";

import React, { useState } from "react";
import NavBar from "./Navbar";
import LocationSearch from "../commons/LocationSearch";
import GlobalSearch from "../commons/GlobalSearch";

import Dropdown from "../commons/Dropdown";

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

const DASHBOARD_CONTENT = {
  Brand_Search: <BrandSearch />,
};

const InfluencerDashboard = () => {
  const [selectedContent, setSelectedContent] = useState("Brand_Search");
  return (
    <div>
      <NavBar />
      <div className={styles.profile_container}>
        <div style={{ flex: 0.5, marginLeft: 10 }}>
          <img
            class="w-20 h-20  rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Rounded avatar"
          ></img>
        </div>
        <div style={{ flex: 2 }}>
          <div
            className={styles.complete_your_profile_text}
            style={{ display: "flex" }}
          >
            Hi! Naman Agarwal{" "}
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
                value={"27.5%"}
                title="Engagement Rate"
                icon={
                  <Image src={Engagement} width={48} height={0} alt="Icon" />
                }
                trend={{
                  slope: -1,
                  description: "Compared to last week",
                  value: "0.5%",
                }}
              />
            </div>
            <div style={{ flex: 2 }}>
              <MetricCards
                value={"87"}
                title="Account Quality Score"
                icon={<Image src={Score} width={48} height={0} alt="Icon" />}
                trend={{
                  slope: 1,
                  description: "Compared to last week",
                  value: "0.5%",
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
      />
      {/* <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Dropdown />
        <div style={{ width: "35vw", justifyContent: "center", margin: 10 }}>
          <GlobalSearch placeholder="Search for Brands,Business and Services for Marketing" />
        </div>

        <div style={{ width: "10vw", margin: 10 }}>
          <LocationSearch />
        </div>
      </div> */}
      {/* <div style={{ display: "flex", justifyContent: "center" }}>
        {" "}
        <Chips
          text={"Actors"}
          img="https://tecdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
        />
        <Chips
          text={"Artist"}
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRQdb3b5E6XD4t2GeELeZgts9AvuTKtYK23g&usqp=CAU"
        />
        <Chips
          text={"Musicians"}
          img="https://st4.depositphotos.com/1077687/29907/v/450/depositphotos_299073292-stock-illustration-men-with-musicals-instruments-on.jpg"
        />
        <Chips
          text={"Singer"}
          img="https://w7.pngwing.com/pngs/305/570/png-transparent-singer-singing-free-singing-s-microphone-fictional-character-cartoon.png"
        />
        <Chips
          text={"Designer"}
          img="https://img.freepik.com/premium-photo/creative-colorful-abstract-human-brain-dark-background-knowledge-concept-generative-ai_58409-32417.jpg"
        />
        <Chips
          text={"Coders"}
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9iVHFERvJNWy35cSvxSyp79AIHYc08OaXrsaU2sfkE2THiuIKJOxEqxioeXtELpQqY-E&usqp=CAU"
        />
      </div>
      <div style={{ margin: 10, display: "flex", justifyContent: "flex-end" }}>
        <Collapse
          text={
            <div
              style={{
                color: "#008ecc",
                width: "100vw",
                boxShadow: "none",
              }}
            >
              Show More
            </div>
          }
        >
          <div>
            <Categories />
          </div>
        </Collapse>
      </div> */}

      <Footer />
    </div>
  );
};

export default InfluencerDashboard;
