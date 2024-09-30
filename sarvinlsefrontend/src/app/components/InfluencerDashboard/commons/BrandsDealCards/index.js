"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import BrandCard from "../BrandCards";
import Podium from "../../../commons/icons/podium.png";
import ViewSwitcher from "../../../commons/GridListToggle";
import BrandListCard from "../BrandListCards";
import axios from "axios";

const BrandsDealCards = ({
  branddeals = {},
  setBranddeals = () => {},
  loading = true,
  setLoading = () => {},
  type = 1,
}) => {
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
          <div>{type == 2 ? "Saved Deals" : "Brand Deals"} </div>
          <Image src={Podium} alt="podium" width={34} height={34} />
        </div>
        <div>
          <ViewSwitcher isListView={isListView} setIsListView={setIsListView} />
        </div>
      </div>

      <div style={{ fontSize: 14, fontWeight: 200, margin: "0px 20px" }}>
        Lets Start Earning By Cracking The Best Suitable Deals For You{" "}
      </div>
      {loading ? (
        <div class="mt-20 mb-20">
          <div role="status" class="flex justify-center mb-5">
            <svg
              aria-hidden="true"
              class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-red-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
          </div>
          <div class="flex justify-center font-semibold">
            Loading...Exciting Deals Are Ready to Come
          </div>
        </div>
      ) : (
        <>
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
              {branddeals.map((brand) => (
                <BrandCard
                  dealId={brand.deal_id} // Ensure the key is unique, adjust according to your data
                  heading={brand.brand_name}
                  subheading={brand.product_description}
                  img={brand.image_link} // Ensure this field matches your API response
                  cardType="Deals"
                  fixed_price={brand.fixed_price}
                  type={type}
                />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default BrandsDealCards;
