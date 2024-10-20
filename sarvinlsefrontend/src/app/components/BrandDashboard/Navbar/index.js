"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import { Button } from "../../commons/button.tsx";
import Modal from "../../commons/modal/index.js";
import Pricing from "../../Pricing/index.js";
import AddDeals from "../AddDeals/index.js";
import { useRouter } from "next/router";
import { FaPlus } from "react-icons/fa";
import Image from "next/image";
import Coins from "../../commons/icons/coin.png";
import AddCoins from "../../AddCoins";

function NavBar({ currentColor, id = "" }) {
  const router = useRouter();
  const [openPricingModal, setOpenPricingModal] = useState(false);
  const [openAddDealsModal, setOpenAddDealsModal] = useState(false);
  return (
    <div className={styles.html}>
      <div className={styles.Layout_app__Yxg9h}>
        <header className={styles.Header_headerContainer__Ss95e}>
          <div className={styles.Header_header__Ncy19}>
            <div className={styles.Header_container__3Xo0L}>
              <a className={styles.Header_logo__cFwus} href="/">
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
              </a>
              <ul className={styles.Header_menu__GM_tZ}>
                <li className={styles.Level1Link_li__fXfs3}>
                  <div className={styles.LinkItem_link__MszSS}>
                    <div className={styles.LinkItem_cursor__pE4De}>
                      <div className={styles.LinkItem_hoverContainer__wX9bI}>
                        <span className={styles.LinkItem_text__v5efp}>
                          Products
                        </span>
                      </div>
                    </div>
                  </div>

                  <span>
                    <span>
                      <ul
                        className={styles.ProductSubMenu_productSubMenu__8kJXj}
                      >
                        <li>
                          <a className={styles.LinkItem_link__MszSS}>
                            <div className={styles.LinkItem_hasNavImage__fxeae}>
                              <div className={styles.LinkItem_topImg__Jn7FY}>
                                <span
                                  style={{
                                    boxSizing: "border-box",
                                    display: "block",
                                    overflow: "hidden",
                                    width: 172,
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
                                    src="https://images-platform.99static.com//ZM2mGMLeyu4D7uyuTAweSj-ykqw=/0x0:1360x1360/fit-in/500x500/99designs-contests-attachments/43/43393/attachment_43393137"
                                    alt="Find Influencers"
                                    className="w-full h-full transition duration-300 ease-in-out transform hover:blur-md"
                                  />
                                  <span className="absolute inset-0 flex items-center justify-center text-white text-md font-bold opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
                                    You are here
                                  </span>
                                </span>
                              </div>
                              <div
                                className={
                                  styles.LinkItem_hoverContainer__wX9bI
                                }
                              >
                                <div
                                  className={styles.LinkItem_btmInfo__WKcpe}
                                  style={{ fontSize: 12 }}
                                >
                                  <img
                                    src="https://media.graphassets.com/fOJkAw8AQXGeAmKphQYH"
                                    alt="Find Influencers"
                                  />
                                  <b>Collabz</b>- Brand Aggreagator
                                </div>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a className={styles.LinkItem_link__MszSS}>
                            <div className={styles.LinkItem_hasNavImage__fxeae}>
                              <div className={styles.LinkItem_topImg__Jn7FY}>
                                <span
                                  style={{
                                    boxSizing: "border-box",
                                    display: "block",
                                    overflow: "hidden",
                                    width: 172,
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
                                    src="https://i.pinimg.com/originals/9a/42/e1/9a42e1c6d8c95e00df8ae9400e0c713d.png"
                                    alt="Find Influencers"
                                    className="w-full h-full transition duration-300 ease-in-out transform hover:blur-md"
                                  />
                                  <span className="absolute inset-0 flex items-center justify-center text-white text-md font-bold opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
                                    Click To Go There
                                  </span>
                                </span>
                              </div>
                              <div
                                className={
                                  styles.LinkItem_hoverContainer__wX9bI
                                }
                              >
                                <div
                                  className={styles.LinkItem_btmInfo__WKcpe}
                                  style={{ fontSize: 12 }}
                                >
                                  <img
                                    src="https://media.graphassets.com/fOJkAw8AQXGeAmKphQYH"
                                    alt="Find Influencers"
                                  />
                                  <b>Flanzo</b>- Local Search Engine
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
                            <div className={styles.LinkItem_hasNavImage__fxeae}>
                              <div className={styles.LinkItem_topImg__Jn7FY}>
                                <span
                                  style={{
                                    boxSizing: "border-box",
                                    display: "block",
                                    overflow: "hidden",
                                    width: 172,
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
                                    className="w-full h-full transition duration-300 ease-in-out transform hover:blur-md"
                                  />
                                </span>
                                <span className="absolute w-full h-full inset-0 flex items-center justify-center text-white text-md font-bold opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
                                  Coming Soon
                                </span>
                              </div>
                              <div
                                className={
                                  styles.LinkItem_hoverContainer__wX9bI
                                }
                              >
                                <div
                                  className={styles.LinkItem_btmInfo__WKcpe}
                                  style={{ fontSize: 12 }}
                                >
                                  <img
                                    src="https://i.pinimg.com/originals/9a/42/e1/9a42e1c6d8c95e00df8ae9400e0c713d.png"
                                    alt="Find Influencers"
                                  />
                                  <b>InfluenZmart</b>-Business Platform
                                </div>
                              </div>
                            </div>
                          </a>
                        </li>

                        {/* <li>
                          <a
                            className={styles.LinkItem_link__MszSS}
                            href="/features/find-influencers"
                          >
                            <div className={styles.LinkItem_hasNavImage__fxeae}>
                              <div className={styles.LinkItem_topImg__Jn7FY}>
                                <span
                                  style={{
                                    boxSizing: 'border-box',
                                    display: 'block',
                                    overflow: 'hidden',
                                    width: 'initial',
                                    height: 'initial',
                                    background: 'none',
                                    opacity: 1,
                                    border: 0,
                                    margin: 0,
                                    padding: 0,
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    bottom: 0,
                                    right: 0,
                                  }}
                                ></span>
                              </div>
                              <div
                                className={
                                  styles.LinkItem_hoverContainer__wX9bI
                                }
                              >
                                <div className={styles.LinkItem_btmInfo__WKcpe}>
                                  <img
                                    src="https://media.graphassets.com/fOJkAw8AQXGeAmKphQYH"
                                    alt="Find Influencers"
                                  />
                                  Find Influencers
                                </div>
                              </div>
                            </div>
                          </a>
                        </li> */}
                        {/* <li>
                          <a
                            className={styles.LinkItem_link__MszSS}
                            href="/features/find-influencers"
                          >
                            <div className={styles.LinkItem_hasNavImage__fxeae}>
                              <div className={styles.LinkItem_topImg__Jn7FY}>
                                <span
                                  style={{
                                    boxSizing: 'border-box',
                                    display: 'block',
                                    overflow: 'hidden',
                                    width: 'initial',
                                    height: 'initial',
                                    background: 'none',
                                    opacity: 1,
                                    border: 0,
                                    margin: 0,
                                    padding: 0,
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    bottom: 0,
                                    right: 0,
                                  }}
                                ></span>
                              </div>
                              <div
                                className={
                                  styles.LinkItem_hoverContainer__wX9bI
                                }
                              >
                                <div className={styles.LinkItem_btmInfo__WKcpe}>
                                  <img
                                    src="https://media.graphassets.com/fOJkAw8AQXGeAmKphQYH"
                                    alt="Find Influencers"
                                  />
                                  Find Influencers
                                </div>
                              </div>
                            </div>
                          </a>
                        </li> */}
                        {/* Other list items and anchor tags go here */}
                      </ul>
                    </span>
                  </span>
                </li>
                <li className={styles.Level1Link_li__fXfs3}>
                  <div className={styles.LinkItem_link__MszSS}>
                    <div className={styles.LinkItem_cursor__pE4De}>
                      <div className={styles.LinkItem_hoverContainer__wX9bI}>
                        <span className={styles.LinkItem_text__v5efp}>
                          Network
                        </span>
                      </div>
                    </div>
                  </div>

                  <span>
                    <span>
                      <ul
                        className={styles.SolutionSubMenu_productSubMenu__3KMh1}
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
                          <span>
                            <h3>Business Type</h3>
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
                                  eCommerce
                                </span>
                              </div>
                            </a>
                          </span>
                        </li>
                      </ul>
                    </span>
                  </span>
                </li>
                <li className={styles.Level1Link_li__fXfs3}>
                  <div className={styles.LinkItem_link__MszSS}>
                    <div className={styles.LinkItem_cursor__pE4De}>
                      <div className={styles.LinkItem_hoverContainer__wX9bI}>
                        <span className={styles.LinkItem_text__v5efp}>
                          Resources
                        </span>
                      </div>
                    </div>
                  </div>

                  <span>
                    <span>
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
                          <a className={styles.LinkItem_link__MszSS}>
                            <div
                              className={styles.LinkItem_hoverContainer__wX9bI}
                              onClick={() => {
                                setOpenPricingModal(!openPricingModal);
                              }}
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
                  </span>
                </li>
                <li className={styles.Level1Link_li__fXfs3}>
                  <div className={styles.LinkItem_link__MszSS}>
                    <div className={styles.LinkItem_cursor__pE4De}>
                      <div className={styles.LinkItem_hoverContainer__wX9bI}>
                        <span className={styles.LinkItem_text__v5efp}>
                          About Us
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="flex w-52">
                    <div class="hover:bg-red-200 rounded-md animate-bounce">
                      <Button
                        style={{
                          background: "transparent",
                          fontWeight: 600,
                          display: "flex",
                          justifyContent: "flex-start",
                          fontSize: "12px",
                          color: "red",
                          minWidth: "45%",

                          cursor: "pointer",
                        }}
                        onClick={() => setOpenPricingModal(!openPricingModal)}
                      >
                        Add Coins
                      </Button>
                    </div>
                    <div class="[word-wrap: break-word] px-4 flex cursor-pointer items-center justify-center rounded-[21px] bg-[transparent] py-0 font-semibold normal-case leading-loose border border-[#3b71ca] py-0  transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#4185f4] dark:bg-[transparent] dark:text-[#4185f4]">
                      <Image
                        class="my-0 h-6 w-6 mr-[4px] font-semibold rounded-[100%]"
                        src={Coins}
                        alt="Contact Person"
                      />
                      87
                    </div>

                    {/* <div class="flex">
                      <Button
                        style={{
                          backgroundColor: "#e65c55",
                          fontWeight: 600,
                          textAlign: "center",
                          fontSize: "12px",
                          width: "20%",
                          gap: "8px",
                          lineHeight: "24px",
                        }}
                      >
                        Coin Topup
                      </Button>
                    </div> */}
                  </div>
                </li>
                {/* Other Feature Links... */}
              </ul>
              <div className={styles.Header_loginWrapper__9_1kE}>
                <a
                  className={styles.Header_client__RyL2j}
                  class="ml-12"
                  href="/sign-in"
                  target=""
                  rel="noreferrer"
                  onClick={(e) => {
                    e.preventDefault();
                    localStorage.removeItem("token");
                    router.push("/sign-in");
                  }}
                >
                  <svg
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_920_14251)">
                      <path
                        d="M2.66602 15.1667C2.66602 13.7522 3.22792 12.3956 4.22811 11.3954C5.22831 10.3952 6.58486 9.83332 7.99935 9.83332C9.41384 9.83332 10.7704 10.3952 11.7706 11.3954C12.7708 12.3956 13.3327 13.7522 13.3327 15.1667H11.9993C11.9993 14.1058 11.5779 13.0884 10.8278 12.3382C10.0776 11.5881 9.06021 11.1667 7.99935 11.1667C6.93848 11.1667 5.92107 11.5881 5.17092 12.3382C4.42078 13.0884 3.99935 14.1058 3.99935 15.1667H2.66602ZM7.99935 9.16666C5.78935 9.16666 3.99935 7.37666 3.99935 5.16666C3.99935 2.95666 5.78935 1.16666 7.99935 1.16666C10.2093 1.16666 11.9993 2.95666 11.9993 5.16666C11.9993 7.37666 10.2093 9.16666 7.99935 9.16666ZM7.99935 7.83332C9.47268 7.83332 10.666 6.63999 10.666 5.16666C10.666 3.69332 9.47268 2.49999 7.99935 2.49999C6.52602 2.49999 5.33268 3.69332 5.33268 5.16666C5.33268 6.63999 6.52602 7.83332 7.99935 7.83332Z"
                        fill="#4C4D4F"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_920_14251">
                        <rect
                          width="16"
                          height="16"
                          fill="white"
                          transform="translate(0 0.5)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  Logout
                </a>
              </div>
              <div
                className={styles.Header_loginWrapper__9_1kE}
                class="flex gap-2"
              >
                <button
                  onClick={() => setOpenAddDealsModal(!openAddDealsModal)}
                  type="button"
                  class="text-white flex align-middle gap-2 bg-red-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-1.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none"
                >
                  <FaPlus />
                  Add Deals
                </button>
              </div>
            </div>
          </div>
        </header>
      </div>
      <Modal openModal={openPricingModal} setOpenModal={setOpenPricingModal}>
        <AddCoins
          setOpenModal={setOpenPricingModal}
          openModal={openPricingModal}
        />
      </Modal>
      <Modal
        animation="one"
        openModal={openAddDealsModal}
        setOpenModal={setOpenAddDealsModal}
      >
        <AddDeals
          openAddDealsModal={openAddDealsModal}
          setOpenAddDealsModal={setOpenAddDealsModal}
          id={id}
        />
      </Modal>
    </div>
  );
}

export default NavBar;
