"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import BrandCard from "../BrandCards";
import Podium from "../../../commons/icons/podium.png";
import ViewSwitcher from "../../../commons/GridListToggle";
import BrandListCard from "../BrandListCards";
const BrandsDealCards = ({ text = null, children }) => {
  const [isListView, setIsListView] = useState(false);
  const [brandDeals, setBrandDeals] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/brand/deal`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const filteredDeals = response.data?.data.filter(deal => deal.isBidAvailable === true);
        setBrandDeals(filteredDeals);
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
          <div>Bid for Deals </div>
          <Image src={Podium} alt="podium" width={34} height={34} />
        </div>
        <div>
          <ViewSwitcher isListView={isListView} setIsListView={setIsListView} />
        </div>
      </div>
      <div style={{ fontSize: 14, fontWeight: 200, margin: "0px 20px" }}>
        Let's Start Earning By Cracking The Best Suitable Deals For You
      </div>
      {isListView ? (
        <div
          style={{
            display: "flex",
            marginTop: 20,
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          {brandDeals.map((deal) => (
            <BrandListCard
              key={deal.deal_id}
              heading={deal.brand_name}
              subheading={deal.product_description}
              img={deal.product_photo}
              cardType="Bid"
            />
          ))}
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            marginTop: 20,
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          {brandDeals.map((deal) => (
            <BrandCard
              key={deal.deal_id}
              heading={deal.brand_name}
              subheading={deal.product_description}
              img={deal.product_photo}
              cardType="Bid"
              fixed_price={deal.fixed_price}
            />
          ))}
        </div>
      )}
    </div>
  );
};
export default BrandsDealCards;