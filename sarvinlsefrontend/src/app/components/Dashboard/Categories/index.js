"use client";

import React, { useState } from "react";
import CategoryIcon from "../../commons/categoryIcons/CategoryIcon";

const Categories = ({ text = null, children }) => {
  return (
    <div
      style={{
        display: "flex",
        gap: 50,
        flexWrap: "wrap",
        margin: "30px 50px 10px 70px",
        justifyContent: "center",
      }}
    >
      <CategoryIcon name="Home Appliances" />
      <CategoryIcon name="Designers" />
      <CategoryIcon name="Real Estate" />
      <CategoryIcon name="Wooden Contractors" />
      <CategoryIcon name="Interior Designers" />
      <CategoryIcon name="Home Security" />
      <CategoryIcon name="Makeovers" />
      <CategoryIcon name="Wedding Planners" />
      <CategoryIcon name="Hotels/Spa" />
      <CategoryIcon name="Food Chains" />
      <CategoryIcon name="Plumbers" />
      <CategoryIcon name="Coaching Institutes" />
      <CategoryIcon name="Travel/Transports" />
      <CategoryIcon name="Health Wellness" />
      <CategoryIcon name="Events" />
      <CategoryIcon name="Lawyers" />
      <CategoryIcon name="Consultants" />
      <CategoryIcon name="Insurance" />
      <CategoryIcon name="Loans" />
      <CategoryIcon name="Charted Accountants" />
      <CategoryIcon name="Kitchen Appliances" />
      <CategoryIcon name="Mehndi Designers" />
      <CategoryIcon name="Actors" />
      <CategoryIcon name="Musicians" />
      <CategoryIcon name="Schools" />
      <CategoryIcon name="Jewels" />
      <CategoryIcon name="Sweets and Snacks" />
    </div>
  );
};

export default Categories;
