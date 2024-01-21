"use client";

import React from "react";
import LocationSearch from "../commons/locationSearch";
import SearchBar from "../commons/SearchBar";

const GlobalSearch = () => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 3, marginRight: 20 }}>
        {" "}
        <SearchBar />
      </div>
      <div style={{ flex: 1 }}>
        <LocationSearch />
      </div>
    </div>
  );
};

export default GlobalSearch;
