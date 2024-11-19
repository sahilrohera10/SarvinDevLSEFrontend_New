"use client";
import React from "react";

import Dropdown from "../../commons/Dropdown";
import BrandsSearchCards from "../commons/FollowingBrandCards";

import Filters from "../../commons/Filters";

const customStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: "aqua", // Set background color to aqua
  }),
};

const FollowingBrands = ({ isTabletOrMobile = false }) => {
  return (
    <div class="mx-4">
      {" "}
      <div
        style={{
          display: !isTabletOrMobile && "flex",
          justifyContent: !isTabletOrMobile && "center",
        }}
      >
        {!isTabletOrMobile && (
          <div
            class={
              isTabletOrMobile
                ? "flex justify-center w-full gap-2"
                : "flex justify-between m-4 gap-2"
            }
          >
            {/* <Dropdown text="All Filters" modalView>
              <Filters filters={FILTERS} />
            </Dropdown> */}
          </div>
        )}
      </div>
      <BrandsSearchCards isTabletOrMobile={isTabletOrMobile} />
    </div>
  );
};
export default FollowingBrands;
