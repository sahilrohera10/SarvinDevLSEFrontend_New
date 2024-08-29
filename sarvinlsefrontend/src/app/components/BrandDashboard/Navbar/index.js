"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import { Button } from "../../commons/button.tsx";
import Modal from "../../commons/modal/index.js";
import Pricing from "../../Pricing/index.js";
import AddDeals from "../AddDeals/index.js";
import { useRouter } from "next/router";
import { FaPlus } from "react-icons/fa";

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
                                <div className={styles.LinkItem_btmInfo__WKcpe}>
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
                            <div className={styles.LinkItem_hasNavImage__fxeae}>
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
                                <div className={styles.LinkItem_btmInfo__WKcpe}>
                                  <img
                                    src="https://media.graphassets.com/fOJkAw8AQXGeAmKphQYH"
                                    alt="Find Influencers"
                                  />
                                  E-Commerce Platform
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
                                    src="https://i.pinimg.com/originals/9a/42/e1/9a42e1c6d8c95e00df8ae9400e0c713d.png"
                                    alt="Find Influencers"
                                  />
                                </span>
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
                                  Influencers Analytics
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
                          Features
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
                          Our Team
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
                          <a
                            className={styles.LinkItem_link__MszSS}
                            href="/resources"
                          >
                            <div
                              className={styles.LinkItem_hoverContainer__wX9bI}
                            >
                              <span className={styles.LinkItem_text__v5efp}>
                                <img
                                  src="https://media.graphassets.com/i5ByYWdgR1CujiyMSaxK"
                                  alt="Reports &amp; Guides"
                                />
                                Reports &amp; Guides
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
                          Company
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
                      </ul>
                    </span>
                  </span>
                </li>
                {/* Other Feature Links... */}
              </ul>
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
        <Pricing />
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
