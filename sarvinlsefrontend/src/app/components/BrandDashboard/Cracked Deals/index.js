"use client";
import React from "react";

import GlobalSearch from "../../commons/GlobalSearch";
import LocationSearch from "../../commons/LocationSearch";

import Dropdown from "../../commons/Dropdown";
import BrandDealsFilters from "../SearchInfluencers/SearchInfluencerFilters";
import CrackedCards from "./CrackedCards";

const CrackedDeals = () => {
  return (
    <div class="mx-4">
      {" "}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div class="flex justify-between gap-2 m-5 ">
          {/* <Dropdown text="Audience Size" />
          <Dropdown text="Audience Gender" />
          <Dropdown text="Audience Age" /> */}
        </div>

        {/* <div class="flex gap-2 align-center">
          {" "}
          <Select
            styles={customStyles}
            className="multi"
            classNamePrefix="Audience Gender"
            isClearable
            isMulti
            isSearchable
            name="color"
            options={[
              {
                value: "ocean",
                label: "Ocean",
                color: "#00B8D9",
              },
              {
                value: "blue",
                label: "Blue",
                color: "#0052CC",
              },
              { value: "purple", label: "Purple", color: "#5243AA" },
              { value: "red", label: "Red", color: "#FF5630" },
              { value: "orange", label: "Orange", color: "#FF8B00" },
              { value: "yellow", label: "Yellow", color: "#FFC400" },
              { value: "green", label: "Green", color: "#36B37E" },
            ]}
          />
        </div> */}
        <div>
          <div class="flex justify-center">
            <div style={{ width: "35vw", margin: 30 }}>
              <GlobalSearch placeholder="Search for Brands,Business and Services for Marketing" />
            </div>

            <div style={{ width: "10vw", margin: 30 }}>
              <LocationSearch />
            </div>
          </div>{" "}
        </div>

        <div class="flex justify-between m-11 gap-2">
          <Dropdown text="All Filters" modalView>
            <BrandDealsFilters />
          </Dropdown>
        </div>
      </div>
      <CrackedCards />
    </div>
  );
};
export default CrackedDeals;
