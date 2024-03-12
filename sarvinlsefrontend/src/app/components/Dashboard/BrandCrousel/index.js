import React from "react";

import AliceCarousel from "react-alice-carousel";
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
        src="https://ww1.logoeps.net/wp-content/uploads/2016/12/airbnb-logo.png?strip=all&lossy=1&ssl=1"
        onDragStart={handleDragStart}
        role="presentation"
        alt="fvf"
        height={200}
        width={200}
      />
      <img
        src="https://ww1.logoeps.net/wp-content/uploads/2016/12/google-logo.png?strip=all&lossy=1&w=1280&ssl=1"
        onDragStart={handleDragStart}
        role="presentation"
        alt="tret"
        height={200}
        width={200}
      />
      <img
        src="https://ww1.logoeps.net/wp-content/uploads/2017/01/active-logo.png?strip=all&lossy=1&w=1280&ssl=1"
        onDragStart={handleDragStart}
        role="presentation"
        alt="dvd"
        height={200}
        width={200}
      />{" "}
      <img
        src="https://ww1.logoeps.net/wp-content/uploads/2016/12/spotifiy-logo.png?strip=all&lossy=1&w=1280&ssl=1"
        onDragStart={handleDragStart}
        role="presentation"
        alt="dvd"
        height={200}
        width={200}
      />
      <img
        src="https://ww1.logoeps.net/wp-content/uploads/2016/12/qatar_airways_logo.png?strip=all&lossy=1&w=1280&ssl=1"
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
        src="https://ww1.logoeps.net/wp-content/uploads/2017/01/angry-birds-logo.png?strip=all&lossy=1&w=1280&ssl=1"
        onDragStart={handleDragStart}
        role="presentation"
        alt="tret"
        height={200}
        width={200}
      />
      <img
        src="https://ww1.logoeps.net/wp-content/uploads/2016/03/roblox-logo.png?strip=all&lossy=1&w=1280&ssl=1"
        onDragStart={handleDragStart}
        role="presentation"
        alt="dvd"
        height={200}
        width={200}
      />{" "}
      <img
        src="https://ww1.logoeps.net/wp-content/uploads/2016/12/microsoft-logo.png?strip=all&lossy=1&w=1280&ssl=1"
        onDragStart={handleDragStart}
        role="presentation"
        alt="dvd"
        height={200}
        width={200}
      />
      <img
        src="https://ww1.logoeps.net/wp-content/uploads/2016/12/twitch-logo.png?strip=all&lossy=1&w=1280&ssl=1"
        onDragStart={handleDragStart}
        role="presentation"
        alt="dvd"
        height={200}
        width={200}
      />
      <img
        src="https://ww1.logoeps.net/wp-content/uploads/2016/12/jetblue_logo.png?strip=all&lossy=1&w=1280&ssl=1"
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
        src="https://ww1.logoeps.net/wp-content/uploads/2016/12/altex-logo.png?strip=all&lossy=1&w=1280&ssl=1"
        onDragStart={handleDragStart}
        role="presentation"
        alt="tret"
        height={200}
        width={200}
      />
      <img
        src="https://ww1.logoeps.net/wp-content/uploads/2017/04/bezmialem-vakif-university-logo.png?strip=all&lossy=1&ssl=1"
        onDragStart={handleDragStart}
        role="presentation"
        alt="dvd"
        height={200}
        width={200}
      />{" "}
      <img
        src="https://ww1.logoeps.net/wp-content/uploads/2016/12/samsung-logo.png?strip=all&lossy=1&w=1280&ssl=1"
        onDragStart={handleDragStart}
        role="presentation"
        alt="dvd"
        height={200}
        width={200}
      />
      <img
        src="https://ww1.logoeps.net/wp-content/uploads/2016/12/amazon-logo.png?strip=all&lossy=1&w=1280&ssl=1"
        onDragStart={handleDragStart}
        role="presentation"
        alt="dvd"
        height={200}
        width={200}
      />
      <img
        src="https://ww1.logoeps.net/wp-content/uploads/2016/12/audi-logo.png?strip=all&lossy=1&resize=400%2C160"
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
          color: "#2D2D2D",
          fontSize: 20,
          fontWeight: 600,
        }}
      >
        Supported By Global Brands
      </div>
      <div>
        <AliceCarousel
          mouseTracking
          items={items}
          disableButtonsControls
          infinite
          disableDotsControls
          autoPlayInterval={5000}
          autoPlay
        />
      </div>
    </div>
  );
}

export default BrandCrousel;
