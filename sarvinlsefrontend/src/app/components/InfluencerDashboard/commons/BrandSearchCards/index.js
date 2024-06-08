"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import BrandCard from "../BrandCards";
import Podium from "../../../commons/icons/Business.png";
import ViewSwitcher from "../../../commons/GridListToggle";
import BrandListCard from "../BrandListCards";
import axios from "axios";

const BrandsDealCards = ({ text = null, children }) => {
  const [isListView, setIsListView] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        "https://sarvindevbackend.onrender.com/api/brand?lat=28.744612404406674&lon=77.19278941328129&radius=5"
      )
      .then((response) => {
        console.log(response);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
        // Set loading to false in case of error
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
          <div>Brand Search </div>
          <Image src={Podium} alt="podium" width={34} height={34} />
        </div>
        <div>
          <ViewSwitcher isListView={isListView} setIsListView={setIsListView} />
        </div>
      </div>

      <div style={{ fontSize: 14, fontWeight: 200, margin: "0px 20px" }}>
        Lets Start Earning By Cracking The Best Suitable Deals For You{" "}
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
          <BrandListCard
            heading="Instagram"
            subheading="Social Media Platform"
            img="https://img.freepik.com/free-vector/instagram-icon_1057-2227.jpg?size=338&ext=jpg&ga=GA1.1.735520172.1710979200&semt=ais"
            cardType="Brands"
          />
          <BrandListCard
            heading="National Geographic"
            subheading="Wildlife and Infotainment"
            img="https://thumbs.dreamstime.com/z/national-geographic-logo-editorial-illustrative-white-background-logo-icon-vector-logos-icons-set-social-media-flat-banner-210443297.jpg"
            cardType="Brands"
          />
          <BrandListCard
            heading="Nike"
            subheading="Sports Wear and Accessories"
            img="https://i.pinimg.com/736x/9c/d1/bf/9cd1bf6c2d1a88e8ac473f62a2898c62.jpg"
            cardType="Brands"
          />
          <BrandListCard
            heading="Delhi Capitals"
            subheading="Cricket Franchise of India"
            img="https://prod-assets-s3.faze.app/assets2/partners/DC.png"
            cardType="Brands"
          />
          <BrandListCard
            heading="Webneel.com"
            subheading="Food Court and Cuisines"
            img="https://webneel.com/daily/sites/default/files/images/daily/07-2014/5-best-ads-agasalho-hamburguer.jpg"
            cardType="Brands"
          />
          <BrandListCard
            heading="Juicy Juice"
            subheading="Herbal Juice with ayurveda"
            img="https://i.pinimg.com/736x/82/e6/0d/82e60d46a8bfb3917b32ab7caa8cab4d.jpg"
            cardType="Brands"
          />
          <BrandListCard
            heading="Fortis Hospital"
            subheading="WHO Drive in clinic"
            img="https://image.adsoftheworld.com/qbb857lhl8438y7np5x4ws4nos3e"
            cardType="Brands"
          />
          <BrandListCard
            heading="Pepsico Pvt.Ltd"
            subheading="ColdDrink and Beverages"
            img="https://assets-global.website-files.com/63a9fb94e473f36dbe99c1b1/651bcacd14d630b76b96cc73_8ucqCdESTiu3lL3oK2V5.jpeg"
            cardType="Brands"
          />
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
          <BrandCard
            heading="Instagram"
            subheading="Social Media Platform"
            img="https://img.freepik.com/free-vector/instagram-icon_1057-2227.jpg?size=338&ext=jpg&ga=GA1.1.735520172.1710979200&semt=ais"
            cardType="Brands"
          />
          <BrandCard
            heading="National Geographic"
            subheading="Wildlife and Infotainment"
            img="https://thumbs.dreamstime.com/z/national-geographic-logo-editorial-illustrative-white-background-logo-icon-vector-logos-icons-set-social-media-flat-banner-210443297.jpg"
            cardType="Brands"
          />
          <BrandCard
            heading="Nike"
            subheading="Sports Wear and Accessories"
            img="https://i.pinimg.com/736x/9c/d1/bf/9cd1bf6c2d1a88e8ac473f62a2898c62.jpg"
            cardType="Brands"
          />
          <BrandCard
            heading="Delhi Capitals"
            subheading="Cricket Franchise of India"
            img="https://prod-assets-s3.faze.app/assets2/partners/DC.png"
            cardType="Brands"
          />
          <BrandCard
            heading="Webneel.com"
            subheading="Food Court and Cuisines"
            img="https://webneel.com/daily/sites/default/files/images/daily/07-2014/5-best-ads-agasalho-hamburguer.jpg"
            cardType="Brands"
          />
          <BrandCard
            heading="Juicy Juice"
            subheading="Herbal Juice with ayurveda"
            img="https://i.pinimg.com/736x/82/e6/0d/82e60d46a8bfb3917b32ab7caa8cab4d.jpg"
            cardType="Brands"
          />
          <BrandCard
            heading="Fortis Hospital"
            subheading="WHO Drive in clinic"
            img="https://image.adsoftheworld.com/qbb857lhl8438y7np5x4ws4nos3e"
            cardType="Brands"
          />
          <BrandCard
            heading="Pepsico Pvt.Ltd"
            subheading="ColdDrink and Beverages"
            img="https://assets-global.website-files.com/63a9fb94e473f36dbe99c1b1/651bcacd14d630b76b96cc73_8ucqCdESTiu3lL3oK2V5.jpeg"
            cardType="Brands"
          />
        </div>
      )}
    </div>
  );
};

export default BrandsDealCards;
