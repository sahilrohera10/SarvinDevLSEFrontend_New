"use client";
import React from "react";
import Chips from "../../commons/Chips";
import GlobalSearch from "../../commons/GlobalSearch";
import LocationSearch from "../../commons/LocationSearch";
import Collapse from "../../commons/Collapse";
import Select from "react-select";
import Dropdown from "../../commons/Dropdown";
import BrandsSearchCards from "../commons/BrandSearchCards";
import BrandSearchFilters from "./BrandSearchFilters";
import Modal from "../../commons/modal";
import Filters from "../../commons/Filters";

const customStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: "aqua", // Set background color to aqua
  }),
};

const BrandSearch = ({ isTabletOrMobile = false }) => {
  const data = [
    {
      filterCategory: "Audience Age",
      filterOptions: [
        "18 Yrs.-24 Yrs.",
        "24 Yrs.-32 Yrs.",
        "33 Yrs.-40 Yrs.",
        "41 Yrs.-48 Yrs.",
      ],
    },
    {
      filterCategory: "Brand Category",
      filterOptions: [
        <Chips
          text={"Actors"}
          img="https://tecdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
        />,
        <Chips
          text={"Artist"}
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRQdb3b5E6XD4t2GeELeZgts9AvuTKtYK23g&usqp=CAU"
        />,
        <Chips
          text={"Musicians"}
          img="https://st4.depositphotos.com/1077687/29907/v/450/depositphotos_299073292-stock-illustration-men-with-musicals-instruments-on.jpg"
        />,
        <Chips
          text={"Singer"}
          img="https://w7.pngwing.com/pngs/305/570/png-transparent-singer-singing-free-singing-s-microphone-fictional-character-cartoon.png"
        />,
        <Chips
          text={"Designer"}
          img="https://img.freepik.com/premium-photo/creative-colorful-abstract-human-brain-dark-background-knowledge-concept-generative-ai_58409-32417.jpg"
        />,
        <Chips
          text={"Coders"}
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9iVHFERvJNWy35cSvxSyp79AIHYc08OaXrsaU2sfkE2THiuIKJOxEqxioeXtELpQqY-E&usqp=CAU"
        />,
      ],
    },
  ];

  return (
    <div class="mx-4">
      {" "}
      <div
        style={{
          display: !isTabletOrMobile && "flex",
          justifyContent: !isTabletOrMobile && "center",
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
      <BrandsSearchCards isTabletOrMobile={isTabletOrMobile} />
    </div>
  );
};
export default BrandSearch;
