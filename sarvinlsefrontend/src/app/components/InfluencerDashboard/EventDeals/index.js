"use client";
import React from "react";

import GlobalSearch from "../../commons/GlobalSearch";
import LocationSearch from "../../commons/LocationSearch";

import Dropdown from "../../commons/Dropdown";
import BrandDealsFilters from "../BrandSearch/BrandSearchFilters";
import EventCards from "./EventCards";
import Filters from "../../commons/Filters";

const EventDeals = ({ isTabletOrMobile }) => {
  const data = [
    {
      filterCategory: "Social Platforms",
      filterOptions: ["Instagram", "Youtube", "Facebook", "Twitter"],
    },
    {
      filterCategory: "Brand Category",
      filterOptions: [
        "Clothing",
        "Luxary",
        "Electronics",
        "Lifestyle",
        "Jwellery",
        "Education",
      ],
    },
    {
      filterCategory: "Promotion Type",
      filterOptions: ["Shout Out", "User Generated Content", "Product Gifting"],
    },
    {
      filterCategory: "Compensation",
      filterOptions: [
        "Fee- Fixed per Content",
        "Product Gifting",
        "Sales Commission",
      ],
    },
  ];

  return (
    <div class="mx-4">
      {" "}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {/* <div class="flex justify-between gap-2 m-5 ">
          <Dropdown text="Audience Size" />
          <Dropdown text="Audience Gender" />
          <Dropdown text="Audience Age" />
        </div> */}

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
            <div
              style={{
                width: isTabletOrMobile ? "60vw" : "35vw",
                marginRight: isTabletOrMobile ? 5 : 30,
                marginLeft: isTabletOrMobile ? -40 : 30,
                marginTop: isTabletOrMobile ? 10 : 30,
                marginBottom: isTabletOrMobile ? 10 : 30,
              }}
            >
              <GlobalSearch placeholder="Search for Brands,Business and Services for Marketing" />
            </div>

            <div
              style={{
                width: isTabletOrMobile ? "30vw" : "10vw",
                marginRight: isTabletOrMobile ? -30 : 30,
                marginLeft: isTabletOrMobile ? 5 : 30,
                marginTop: isTabletOrMobile ? 10 : 30,
                marginBottom: isTabletOrMobile ? 10 : 30,
              }}
            >
              <LocationSearch />
            </div>
          </div>{" "}
        </div>

        {!isTabletOrMobile && (
          <div
            class={
              isTabletOrMobile
                ? "flex justify-center w-full gap-2"
                : "flex justify-between m-11 gap-2"
            }
          >
            <Dropdown text="All Filters" modalView>
              <Filters filters={data} />
            </Dropdown>
          </div>
        )}
      </div>
      <EventCards isTabletOrMobile={isTabletOrMobile} />
    </div>
  );
};
export default EventDeals;
