"use client";

import React from "react";
import MapIntegration from "../commons/MapIntegration";
import NavBar from "../commons/Navbar";
import LocationSearch from "../commons/LocationSearch";
import GlobalSearch from "../commons/GlobalSearch";
import Chips from "../commons/Chips";

const Dashboard = () => {
  return (
    <div style={{ width: "100vw" }}>
      <NavBar />
      <MapIntegration />
      <div
        style={{
          display: "flex",
          justifyContent: "center",

          marginTop: "-5vh",
        }}
      >
        <div style={{ width: "35vw", justifyContent: "center", margin: 10 }}>
          <GlobalSearch />
        </div>

        <div style={{ width: "10vw", margin: 10 }}>
          <LocationSearch />
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {" "}
        <Chips text={"Actors"} />
        <Chips text={"Artist"} />
        <Chips text={"Musicians"} />
        <Chips text={"Singer"} />
        <Chips text={"Designer"} />
        <Chips text={"Coders"} />
      </div>
    </div>
  );
};

export default Dashboard;
