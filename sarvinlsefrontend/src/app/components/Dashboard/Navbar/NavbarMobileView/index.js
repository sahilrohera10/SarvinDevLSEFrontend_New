/* node module imports */
import React, { useState } from "react";
import styles from "./styles.module.css";

import { Button } from "../../../commons/button";

/* app imports */

const NavbarMobileView = () => {
  const [openNavbar, setOpenNavbar] = useState(false);
  const [openProduct, setOpenProduct] = useState(false);
  const [openFeatures, setOpenFeatures] = useState(false);
  const [openResources, setOpenResources] = useState(false);
  const [openTeam, setOpenTeam] = useState(false);

  return (
    <div>
      <nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div class="flex flex-wrap items-center justify-between w-full mx-auto p-1 px-3.5">
          <div>
            <a className={styles.Header_logo__cFwus} href="/dashboard">
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
                    margin: 0,
                    padding: 0,
                    position: "relative",
                    maxWidth: "100%",
                  }}
                >
                  <div
                    className={styles.Logo}
                    style={{
                      color: "#E65C55",
                      transition: "color 2s",
                    }}
                  >
                    SARVIN
                  </div>
                </span>
              </span>
              {/* Your logo */}
            </a>{" "}
          </div>
          <Button
            style={{
              backgroundColor: "#e65c55",
              fontWeight: 600,
              fontSize: "14px",
              gap: "8px",
              lineHeight: "18px",
              transition: "background-color 2s",
              color: "white",
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_134_3477)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.6247 12.759L13.2391 11.959L13.9799 8.2766L11.1607 10.759L9.7751 9.95899L15.6775 5.33661L14.6247 12.759ZM10.3999 12.3982C10.3999 11.7358 10.9375 11.1982 11.5999 11.1982C12.2623 11.1982 12.7999 11.7358 12.7999 12.3982C12.7999 13.0606 12.2623 13.5982 11.5999 13.5982C10.9375 13.5982 10.3999 13.0606 10.3999 12.3982ZM7.52311 19.4598L8.57511 12.0374L9.9607 12.8374L9.2199 16.5198L12.0391 14.0374L13.4247 14.8374L7.52311 19.4598ZM12.0047 0.0078125C5.37993 0.0078125 0.00952148 5.37902 0.00952148 12.003C0.00952148 18.6278 5.37993 23.9982 12.0047 23.9982C18.6295 23.9982 23.9999 18.6278 23.9999 12.003C23.9999 5.37902 18.6295 0.0078125 12.0047 0.0078125Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_134_3477">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Get Demo
          </Button>{" "}
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-50 focus:outline-none "
            aria-controls="navbar-sticky"
            aria-expanded="false"
            onClick={() => setOpenNavbar(!openNavbar)}
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          {openNavbar && (
            <div class="items-center justify-between w-full" id="navbar-sticky">
              <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
                <li>
                  <button
                    type="button"
                    class="flex items-center justify-between w-full block py-2 px-3 text-gray-500 rounded hover:bg-gray-200 hover:text-black"
                    data-accordion-target="#accordion-collapse-body-1"
                    aria-expanded="true"
                    aria-controls="accordion-collapse-body-1"
                    onClick={() => setOpenProduct(!openProduct)}
                  >
                    <span>Product</span>
                    <svg
                      data-accordion-icon
                      class="w-3 h-3 rotate-180 shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5 5 1 1 5"
                      />
                    </svg>
                  </button>
                  {openProduct && (
                    <span class="flex justify-start mr-8">
                      <span>
                        <ul
                          className={
                            styles.ProductSubMenu_productSubMenu__8kJXj
                          }
                        >
                          <li>
                            <a
                              className={styles.LinkItem_link__MszSS}
                              href="https://sarvin-dev-lse-frontend.vercel.app/dashboard"
                            >
                              <div
                                className={styles.LinkItem_hasNavImage__fxeae}
                              >
                                <div className={styles.LinkItem_topImg__Jn7FY}>
                                  <span
                                    style={{
                                      boxSizing: "border-box",
                                      display: "block",
                                      overflow: "hidden",
                                      width: 172,
                                      height: 120,
                                      background: "#fff",
                                      opacity: 1,
                                      border: 0,
                                      margin: 0,
                                      padding: 0,
                                      position: "absolute",
                                      top: 0,
                                      left: 0,
                                      bottom: 0,
                                      right: 0,
                                    }}
                                  >
                                    {" "}
                                    <img
                                      src="https://images-platform.99static.com//ZM2mGMLeyu4D7uyuTAweSj-ykqw=/0x0:1360x1360/fit-in/500x500/99designs-contests-attachments/43/43393/attachment_43393137"
                                      alt="Find Influencers"
                                    />
                                  </span>
                                </div>
                                <div
                                  className={
                                    styles.LinkItem_hoverContainer__wX9bI
                                  }
                                >
                                  <div
                                    className={styles.LinkItem_btmInfo__WKcpe}
                                  >
                                    <img
                                      src="https://media.graphassets.com/fOJkAw8AQXGeAmKphQYH"
                                      alt="Find Influencers"
                                    />
                                    Brand Aggreagator
                                  </div>
                                </div>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a
                              className={styles.LinkItem_link__MszSS}
                              href="/features/find-influencers"
                            >
                              <div
                                className={styles.LinkItem_hasNavImage__fxeae}
                              >
                                <div className={styles.LinkItem_topImg__Jn7FY}>
                                  <span
                                    style={{
                                      boxSizing: "border-box",
                                      display: "block",
                                      overflow: "hidden",
                                      width: 184,
                                      height: 120,
                                      background: "none",
                                      opacity: 1,
                                      border: 0,
                                      margin: 0,
                                      padding: 0,
                                      position: "absolute",
                                      top: 0,
                                      left: 0,
                                      bottom: 0,
                                      right: 0,
                                    }}
                                  >
                                    <img
                                      src="https://images-platform.99static.com//Pbim3yI0JmavXkPAFQa2ADpeSgg=/0x0:1690x1690/fit-in/500x500/99designs-contests-attachments/87/87215/attachment_87215454"
                                      alt="Find Influencers"
                                    />
                                  </span>
                                </div>
                                <div
                                  className={
                                    styles.LinkItem_hoverContainer__wX9bI
                                  }
                                >
                                  <div
                                    className={styles.LinkItem_btmInfo__WKcpe}
                                  >
                                    <img
                                      src="https://media.graphassets.com/fOJkAw8AQXGeAmKphQYH"
                                      alt="Find Influencers"
                                    />
                                    Local Search Engine
                                  </div>
                                </div>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </span>
                    </span>
                  )}
                </li>
                <li>
                  <button
                    type="button"
                    class="flex items-center justify-between w-full block py-2 px-3 text-gray-500 rounded hover:bg-gray-200 hover:text-black"
                    data-accordion-target="#accordion-collapse-body-1"
                    aria-expanded="true"
                    aria-controls="accordion-collapse-body-1"
                    onClick={() => setOpenFeatures(!openFeatures)}
                  >
                    <span>Features</span>
                    <svg
                      data-accordion-icon
                      class="w-3 h-3 rotate-180 shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5 5 1 1 5"
                      />
                    </svg>
                  </button>
                  {openFeatures && (
                    <span class="flex justify-start ml-4">
                      <span>
                        <ul
                          className={
                            styles.SolutionSubMenu_productSubMenu__3KMh1
                          }
                        >
                          <li>
                            <span>
                              <h3>Network</h3>
                              <a
                                className={styles.LinkItem_link__MszSS}
                                href="/solutions/instagram-influencers"
                              >
                                <div
                                  className={
                                    styles.LinkItem_hoverContainer__wX9bI
                                  }
                                >
                                  <span className={styles.LinkItem_text__v5efp}>
                                    <img
                                      src="https://media.graphassets.com/hUjF8HvFQyeQFR3B2Q6Q"
                                      alt="Instagram"
                                    />
                                    Instagram
                                  </span>
                                </div>
                              </a>
                              <a
                                className={styles.LinkItem_link__MszSS}
                                href="/solutions/youtube-influencers"
                              >
                                <div
                                  className={
                                    styles.LinkItem_hoverContainer__wX9bI
                                  }
                                >
                                  <span className={styles.LinkItem_text__v5efp}>
                                    <img
                                      src="https://media.graphassets.com/96nka6UNSNOyflKSIN4D"
                                      alt="YouTube"
                                    />
                                    YouTube
                                  </span>
                                </div>
                              </a>
                              <a
                                className={styles.LinkItem_link__MszSS}
                                href="/solutions/tiktok-influencers"
                              >
                                <div
                                  className={
                                    styles.LinkItem_hoverContainer__wX9bI
                                  }
                                >
                                  <span className={styles.LinkItem_text__v5efp}>
                                    <img
                                      src="https://media.graphassets.com/eQG9UJRuC7e4LbopRpgw"
                                      alt="TikTok"
                                    />
                                    TikTok
                                  </span>
                                </div>
                              </a>
                            </span>
                          </li>
                          <li>
                            <span class="p-8">
                              <h3>Business</h3>
                              <a
                                className={styles.LinkItem_link__MszSS}
                                href="/solutions/enterprise"
                              >
                                <div
                                  className={
                                    styles.LinkItem_hoverContainer__wX9bI
                                  }
                                >
                                  <span className={styles.LinkItem_text__v5efp}>
                                    <img
                                      src="https://media.graphassets.com/nl3YLdFMSqCDgb0gF5yu"
                                      alt="Enterprise"
                                    />
                                    Enterprise
                                  </span>
                                </div>
                              </a>
                              <a
                                className={styles.LinkItem_link__MszSS}
                                href="/solutions/agencies"
                              >
                                <div
                                  className={
                                    styles.LinkItem_hoverContainer__wX9bI
                                  }
                                >
                                  <span className={styles.LinkItem_text__v5efp}>
                                    <img
                                      src="https://media.graphassets.com/1dIbZDUtQoK0eYnrXfxc"
                                      alt="Agency"
                                    />
                                    Agency
                                  </span>
                                </div>
                              </a>
                              <a
                                className={styles.LinkItem_link__MszSS}
                                href="/solutions/e-commerce"
                              >
                                <div
                                  className={
                                    styles.LinkItem_hoverContainer__wX9bI
                                  }
                                >
                                  <span className={styles.LinkItem_text__v5efp}>
                                    <img
                                      src="https://media.graphassets.com/1dByalTaTqC2bVcuJuxd"
                                      alt="eCommerce"
                                    />
                                    Market
                                  </span>
                                </div>
                              </a>
                            </span>
                          </li>
                        </ul>
                      </span>
                    </span>
                  )}
                </li>
                <li>
                  <button
                    type="button"
                    class="flex items-center justify-between w-full block py-2 px-3 text-gray-500 rounded hover:bg-gray-200 hover:text-black"
                    data-accordion-target="#accordion-collapse-body-1"
                    aria-expanded="true"
                    aria-controls="accordion-collapse-body-1"
                    onClick={() => setOpenResources(!openResources)}
                  >
                    <span>Resources</span>
                    <svg
                      data-accordion-icon
                      class="w-3 h-3 rotate-180 shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5 5 1 1 5"
                      />
                    </svg>
                  </button>
                  {openResources && (
                    <span class="flex justify-start mr-8">
                      {/* SubNavItems_subNavItems__rYvPL */}
                      <ul className={styles.SubNavItems_subNavItems__rYvPL}>
                        <li>
                          <a
                            className={styles.LinkItem_link__MszSS}
                            href="/events"
                          >
                            <div
                              className={styles.LinkItem_hoverContainer__wX9bI}
                            >
                              <span className={styles.LinkItem_text__v5efp}>
                                <img
                                  src="https://media.graphassets.com/iZ4bXKu0SUC3Q6cjojJm"
                                  alt="Events"
                                />
                                Events
                              </span>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            className={styles.LinkItem_link__MszSS}
                            href="/case-studies"
                          >
                            <div
                              className={styles.LinkItem_hoverContainer__wX9bI}
                            >
                              <span className={styles.LinkItem_text__v5efp}>
                                <img
                                  src="https://media.graphassets.com/EEtyMpmTDqBQWILkY4MQ"
                                  alt="Case Studies"
                                />
                                Case Studies
                              </span>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="/" className={styles.LinkItem_link__MszSS}>
                            <div
                              className={styles.LinkItem_hoverContainer__wX9bI}
                            >
                              <span className={styles.LinkItem_text__v5efp}>
                                <img
                                  src="https://media.graphassets.com/i5ByYWdgR1CujiyMSaxK"
                                  alt="Reports &amp; Guides"
                                />
                                Pricing
                              </span>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            className={styles.LinkItem_link__MszSS}
                            href="/blog"
                          >
                            <div
                              className={styles.LinkItem_hoverContainer__wX9bI}
                            >
                              <span className={styles.LinkItem_text__v5efp}>
                                <img
                                  src="https://media.graphassets.com/MR91t4PQjiDwoHMh5tt4"
                                  alt="Blog"
                                />
                                Blog
                              </span>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </span>
                  )}
                </li>
                <li>
                  <button
                    type="button"
                    class="flex items-center justify-between w-full block py-2 px-3 text-gray-500 rounded hover:bg-gray-200 hover:text-black"
                    data-accordion-target="#accordion-collapse-body-1"
                    aria-expanded="true"
                    aria-controls="accordion-collapse-body-1"
                  >
                    <span>Our Team</span>
                    <svg
                      data-accordion-icon
                      class="w-3 h-3 rotate-180 shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5 5 1 1 5"
                      />
                    </svg>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    class="flex items-center justify-between w-full block py-2 px-3 text-gray-500 rounded hover:bg-gray-200 hover:text-black"
                    data-accordion-target="#accordion-collapse-body-1"
                    aria-expanded="true"
                    aria-controls="accordion-collapse-body-1"
                  >
                    <span>Join Now</span>
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};
export default NavbarMobileView;
