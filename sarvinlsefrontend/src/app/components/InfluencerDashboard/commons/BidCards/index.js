"use client";

import React, { useState } from "react";
import Image from "next/image";
import BrandCard from "../BrandCards";
import Podium from "../../../commons/icons/podium.png";
import ViewSwitcher from "../../../commons/GridListToggle";
import BrandListCard from "../BrandListCards";

const BrandsDealCards = ({
  text = null,
  children,
  isTabletOrMobile = false,
}) => {
  const [isListView, setIsListView] = useState(false);

  return (
    <div style={{ margin: "0px 20px" }}>
      <div
        style={{
          fontSize: isTabletOrMobile ? 20 : 30,
          fontWeight: 400,
          margin: "0px 20px",
          display: "flex",
          gap: 10,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 10,
            width: "100vw",
            alignItems: "center",
            gap: isTabletOrMobile ? 2 : 10,
            justifyContent: isTabletOrMobile && "center",
          }}
        >
          <div>Bid for Deals </div>
          <Image src={Podium} alt="podium" width={34} height={34} />
        </div>
        <div>
          {!isTabletOrMobile && (
            <div>
              <ViewSwitcher
                isListView={isListView}
                setIsListView={setIsListView}
              />
            </div>
          )}
        </div>
      </div>

      <div
        style={{
          fontSize: isTabletOrMobile ? 12 : 14,
          fontWeight: 200,
          margin: "0px 20px",
          display: "flex",
          gap: isTabletOrMobile ? 2 : 10,
          justifyContent: isTabletOrMobile && "center",
          flexWrap: "wrap",
        }}
      >
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
            img="https://i.pinimg.com/474x/39/88/85/398885df3f6e523828d80cf867a77039.jpg"
            cardType="Bid"
          />
          <BrandCard
            heading="Juicy Juice"
            subheading="Herbal Juice with ayurveda"
            img="https://image.adsoftheworld.com/03qu7s1cl1ie8d2t4uqxmtrlocld"
            cardType="Bid"
          />
          <BrandCard
            heading="Fortis Hospital"
            subheading="WHO Drive in clinic"
            img="https://image.adsoftheworld.com/65bfpiteroq1oo5ueeg9h3o1bw5y"
            cardType="Bid"
          />
          <BrandCard
            heading="Pepsico Pvt.Ltd"
            subheading="ColdDrink and Beverages"
            img="https://image.adsoftheworld.com/klaa04bpgu4h2sjj6mxy95uzbw9b"
            cardType="Bid"
          />
          <BrandCard
            heading="Webneel.com"
            subheading="Food Court and Cuisines"
            img="https://webneel.com/daily/sites/default/files/images/daily/07-2014/5-best-ads-agasalho-hamburguer.jpg"
            cardType="Bid"
          />
          <BrandCard
            heading="Juicy Juice"
            subheading="Herbal Juice with ayurveda"
            img="https://i.pinimg.com/736x/82/e6/0d/82e60d46a8bfb3917b32ab7caa8cab4d.jpg"
            cardType="Bid"
            tags={2}
          />
          <BrandCard
            heading="Fortis Hospital"
            subheading="WHO Drive in clinic"
            img="https://image.adsoftheworld.com/qbb857lhl8438y7np5x4ws4nos3e"
            cardType="Bid"
          />
          <BrandCard
            heading="Pepsico Pvt.Ltd"
            subheading="ColdDrink and Beverages"
            img="https://assets-global.website-files.com/63a9fb94e473f36dbe99c1b1/651bcacd14d630b76b96cc73_8ucqCdESTiu3lL3oK2V5.jpeg"
            cardType="Bid"
          />
        </div>
      )}
    </div>
  );
};

export default BrandsDealCards;
