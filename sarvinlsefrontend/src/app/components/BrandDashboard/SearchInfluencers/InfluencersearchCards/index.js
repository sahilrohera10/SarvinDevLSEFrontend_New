"use client";

import React, { useState } from "react";
import Image from "next/image";
import CreaterCard from "../CreaterCard";
import Podium from "../../../commons/icons/actor.png";
import ViewSwitcher from "../../../commons/GridListToggle";
import BrandListCard from "../../commons/BrandListCards";

const BrandsDealCards = ({ text = null, children }) => {
  const [isListView, setIsListView] = useState(false);

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
          <div>Influencers Search </div>
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
            heading="Webneel.com"
            subheading="Food Court and Cuisines"
            img="https://webneel.com/daily/sites/default/files/images/daily/07-2014/5-best-ads-agasalho-hamburguer.jpg"
            cardType="Deals"
          />
          <BrandListCard
            heading="Juicy Juice"
            subheading="Herbal Juice with ayurveda"
            img="https://i.pinimg.com/736x/82/e6/0d/82e60d46a8bfb3917b32ab7caa8cab4d.jpg"
            cardType="Deals"
          />
          <BrandListCard
            heading="Fortis Hospital"
            subheading="WHO Drive in clinic"
            img="https://image.adsoftheworld.com/qbb857lhl8438y7np5x4ws4nos3e"
            cardType="Deals"
          />
          <BrandListCard
            heading="Pepsico Pvt.Ltd"
            subheading="ColdDrink and Beverages"
            img="https://assets-global.website-files.com/63a9fb94e473f36dbe99c1b1/651bcacd14d630b76b96cc73_8ucqCdESTiu3lL3oK2V5.jpeg"
            cardType="Deals"
          />
          <BrandListCard
            heading="Webneel.com"
            subheading="Food Court and Cuisines"
            img="https://webneel.com/daily/sites/default/files/images/daily/07-2014/5-best-ads-agasalho-hamburguer.jpg"
            cardType="Deals"
          />
          <BrandListCard
            heading="Juicy Juice"
            subheading="Herbal Juice with ayurveda"
            img="https://i.pinimg.com/736x/82/e6/0d/82e60d46a8bfb3917b32ab7caa8cab4d.jpg"
            cardType="Deals"
          />
          <BrandListCard
            heading="Fortis Hospital"
            subheading="WHO Drive in clinic"
            img="https://image.adsoftheworld.com/qbb857lhl8438y7np5x4ws4nos3e"
            cardType="Deals"
          />
          <BrandListCard
            heading="Pepsico Pvt.Ltd"
            subheading="ColdDrink and Beverages"
            img="https://assets-global.website-files.com/63a9fb94e473f36dbe99c1b1/651bcacd14d630b76b96cc73_8ucqCdESTiu3lL3oK2V5.jpeg"
            cardType="Deals"
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
          <CreaterCard
            name="Naman Agarwal"
            img="https://t4.ftcdn.net/jpg/02/61/52/95/360_F_261529596_YZWJaMnYFSCM0FSCrxs71o6RrZ9MpP4D.jpg"
          />
          <CreaterCard
            name="Mayank Gupta"
            img="https://media.istockphoto.com/id/1296158947/photo/portrait-of-creative-trendy-black-african-male-designer-laughing.jpg?s=612x612&w=0&k=20&c=1Ws_LSzWjYvegGxHYQkkgVytdpDcnmK0upJyGOzEPcg="
          />
          <CreaterCard
            name="Sahil Rohera"
            img="https://img.freepik.com/free-photo/close-up-portrait-curly-haired-young-woman-isolated_273609-48309.jpg"
          />
          <CreaterCard
            name="Sahil Arora"
            img="https://media.istockphoto.com/id/1126844596/photo/young-male-with-a-smartphone.jpg?s=612x612&w=is&k=20&c=WlOq3mLDXOl_C3SJcnUKBy-VMmFvLfR2VK0OZZWFJyo="
          />
        </div>
      )}
    </div>
  );
};

export default BrandsDealCards;
