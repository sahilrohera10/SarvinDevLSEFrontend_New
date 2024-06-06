import React from "react";

import AliceCarousel from "react-alice-carousel";
import Airbnb from "../../../components/commons/assets/airbnb.png";
import Google from "../../../components/commons/assets/Google.webp";
import Youtube from "../../../components/commons/assets/Youtube.png";
import Nike from "../../../components/commons/assets/Nike.png";
import Lamborghini from "../../../components/commons/assets/Lamborghini.png";
import Hm from "../../../components/commons/assets/hm-.png";
import Globe from "../../../components/commons/assets/globe.png";
import Tibco from "../../../components/commons/assets/Tibco.png";
import BigYellow from "../../../components/commons/assets/BigYellow.png";
import WaltDisney from "../../../components/commons/assets/waltdisney.png";
import BigBazaar from "../../../components/commons/assets/BigBazaar.png";
import Cococola from "../../../components/commons/assets/Cococola.png";
import FedEx from "../../../components/commons/assets/FedEx.webp";
import Vale from "../../../components/commons/assets/Vale.png";
import Macy from "../../../components/commons/assets/Macy.png";

import "react-alice-carousel/lib/alice-carousel.css";

function BrandCrousel() {
  const handleDragStart = (e) => e.preventDefault();

  const items = [
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        paddingTop: 80,
        paddingBottom: 80,
        paddingRight: 20,
        paddingLeft: 20,
      }}
    >
      <img
        src={Airbnb}
        onDragStart={handleDragStart}
        role="presentation"
        alt="fvf"
        height={200}
        width={200}
      />
      <img
        src={Google}
        onDragStart={handleDragStart}
        role="presentation"
        alt="tret"
        height={200}
        width={200}
      />
      <img
        src={Youtube}
        onDragStart={handleDragStart}
        role="presentation"
        alt="dvd"
        height={200}
        width={200}
      />{" "}
      <img
        src={Nike}
        onDragStart={handleDragStart}
        role="presentation"
        alt="dvd"
        height={200}
        width={200}
      />
      <img
        src={Lamborghini}
        onDragStart={handleDragStart}
        role="presentation"
        alt="dvd"
        height={200}
        width={200}
      />
    </div>,
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        paddingTop: 80,
        paddingBottom: 80,
        paddingRight: 20,
        paddingLeft: 20,
      }}
    >
      <img
        src={Hm}
        onDragStart={handleDragStart}
        role="presentation"
        alt="tret"
        height={200}
        width={200}
      />
      <img
        src={Globe}
        onDragStart={handleDragStart}
        role="presentation"
        alt="dvd"
        height={200}
        width={200}
      />{" "}
      <img
        src={Tibco}
        onDragStart={handleDragStart}
        role="presentation"
        alt="dvd"
        height={200}
        width={200}
      />
      <img
        src={BigBazaar}
        onDragStart={handleDragStart}
        role="presentation"
        alt="dvd"
        height={200}
        width={200}
      />
      <img
        src={BigYellow}
        onDragStart={handleDragStart}
        role="presentation"
        alt="dvd"
        height={200}
        width={200}
      />
    </div>,
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        paddingTop: 80,
        paddingBottom: 80,
        paddingRight: 20,
        paddingLeft: 20,
      }}
    >
      <img
        src={WaltDisney}
        onDragStart={handleDragStart}
        role="presentation"
        alt="tret"
        height={200}
        width={200}
      />
      <img
        src={FedEx}
        onDragStart={handleDragStart}
        role="presentation"
        alt="dvd"
        height={200}
        width={200}
      />{" "}
      <img
        src={Cococola}
        onDragStart={handleDragStart}
        role="presentation"
        alt="dvd"
        height={200}
        width={200}
      />
      <img
        src={Vale}
        onDragStart={handleDragStart}
        role="presentation"
        alt="dvd"
        height={200}
        width={200}
      />
      <img
        src={Macy}
        onDragStart={handleDragStart}
        role="presentation"
        alt="dvd"
        height={200}
        width={200}
      />
    </div>,
  ];
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          color: "#be4b47",
          fontSize: "38px",
          fontWeight: 400,
          marginTop: "120px",
        }}
      >
        Our Favourite Brands
      </div>
      <div>
        <AliceCarousel
          mouseTracking={false}
          items={items}
          disableButtonsControls
          infinite
          disableDotsControls
          autoPlayInterval={800}
          autoPlay
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          color: "#be4b47",
          fontSize: "38px",
          fontWeight: 400,
          marginTop: "80px",
        }}
      >
        Trusted By Some Top Notch Stars
      </div>
      <AliceCarousel
        mouseTracking
        items={items}
        autoPlay
        infinite
        disableButtonsControls
        disableDotsControls
        autoPlayInterval={1200}
      />
    </div>
  );
}

export default BrandCrousel;
