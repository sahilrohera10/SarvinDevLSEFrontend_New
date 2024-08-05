"use client";

import React, { useState } from "react";
import Image from "next/image";
import BrandCard from "../BrandCards";
import Podium from "../../../commons/icons/podium.png";
import ViewSwitcher from "../../../commons/GridListToggle";
import BrandListCard from "../BrandListCards";

const BrandsDealCards = ({ text = null, children, influencerView = true }) => {
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
          <div>Brand Deals </div>
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
          <BrandCard
            heading="Webneel.com"
            subheading="Food Court and Cuisines"
            img="https://webneel.com/daily/sites/default/files/images/daily/07-2014/5-best-ads-agasalho-hamburguer.jpg"
            influencerView={influencerView}
          />
          <BrandCard
            heading="Juicy Juice"
            subheading="Herbal Juice with ayurveda"
            img="https://i.pinimg.com/736x/82/e6/0d/82e60d46a8bfb3917b32ab7caa8cab4d.jpg"
            tags={2}
            influencerView={influencerView}
          />
          <BrandCard
            heading="Fortis Hospital"
            subheading="WHO Drive in clinic"
            img="https://image.adsoftheworld.com/qbb857lhl8438y7np5x4ws4nos3e"
            influencerView={influencerView}
          />
          <BrandCard
            heading="Pepsico Pvt.Ltd"
            subheading="ColdDrink and Beverages"
            img="https://assets-global.website-files.com/63a9fb94e473f36dbe99c1b1/651bcacd14d630b76b96cc73_8ucqCdESTiu3lL3oK2V5.jpeg"
            influencerView={influencerView}
          />
          <BrandCard
            heading="Webneel.com"
            subheading="Food Court and Cuisines"
            img="https://webneel.com/daily/sites/default/files/images/daily/07-2014/5-best-ads-agasalho-hamburguer.jpg"
            influencerView={influencerView}
          />
          <BrandCard
            heading="Juicy Juice"
            subheading="Herbal Juice with ayurveda"
            img="https://i.pinimg.com/736x/82/e6/0d/82e60d46a8bfb3917b32ab7caa8cab4d.jpg"
            influencerView={influencerView}
            tags={2}
          />
          <BrandCard
            heading="Fortis Hospital"
            subheading="WHO Drive in clinic"
            img="https://image.adsoftheworld.com/qbb857lhl8438y7np5x4ws4nos3e"
            influencerView={influencerView}
          />
          <BrandCard
            heading="Pepsico Pvt.Ltd"
            subheading="ColdDrink and Beverages"
            img="https://assets-global.website-files.com/63a9fb94e473f36dbe99c1b1/651bcacd14d630b76b96cc73_8ucqCdESTiu3lL3oK2V5.jpeg"
            influencerView={influencerView}
          />
        </div>
      )}
    </div>
  );
};

export default BrandsDealCards;
