import React from "react";
import { useMediaQuery } from "react-responsive";

const Navbar = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <>
      {!isTabletOrMobile && (
        <a href="/">
          <span
            style={{
              boxSizing: "border-box",
              display: "inline-block",
              overflow: "hidden",
              width: "initial",
              height: "initial",
              background: "none",
              opacity: 1,
              border: 0,
              margin: 0,
              padding: 0,
              position: "relative",
              maxWidth: "100%",
            }}
          >
            <span
              style={{
                boxSizing: "border-box",
                display: "block",
                overflow: "hidden",
                width: "initial",
                height: "initial",
                background: "transparent",
                opacity: 1,
                border: 0,
                margin: "34px 34px 2px 34px",
                padding: 0,
                position: "relative",
                maxWidth: "100%",
              }}
            >
              <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
                <div
                  style={{
                    color: "#E65C55",

                    fontSize: 30,
                  }}
                >
                  SARVIN
                </div>
                <i style={{ fontSize: 14 }}>For Businesses/Brands</i>
              </div>
            </span>
          </span>
          {/* Your logo */}
        </a>
      )}
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        {isTabletOrMobile && (
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "center",
              gap: 4,
            }}
          >
            <div
              style={{
                color: "#E65C55",

                fontSize: 30,
              }}
            >
              SARVIN
            </div>
            <i style={{ fontSize: 14 }}>For Businesses/Brands</i>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
