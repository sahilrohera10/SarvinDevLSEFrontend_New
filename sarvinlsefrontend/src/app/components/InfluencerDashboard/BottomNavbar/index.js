import React from "react";
import {
  FaMoneyBillWave,
  FaGavel,
  FaSearchengin,
  FaMobile,
  FaThumbsUp,
  FaCommentDollar,
  FaChartLine,
  FaGlobe,
  FaCalendarDay,
} from "react-icons/fa";

const BottomNavbar = ({
  selectedContent = "",
  setSelectedContent = () => {},
  isTabletOrMobile = false,
  brandView = false,
}) => {
  console.log(brandView);
  return (
    <nav
      class={
        isTabletOrMobile
          ? "bg-white mt-2 z-40 border-2 rounded shadow-sm overflow-x-scroll"
          : "bg-white flex justify-center mx-10 mt-2 z-40 border-2 rounded shadow-sm "
      }
    >
      <div class="mx-0 w-full flex justify-center ">
        <div class="relative flex h-12 items-center justify-between">
          <div class="flex items-center justify-center">
            <div class="sm:ml-6 sm:block">
              {!isTabletOrMobile ? (
                <div class="flex space-x-4">
                  {!brandView && (
                    <div
                      class={
                        selectedContent == "Brand_Search"
                          ? "flex gap-1 bg-gray-400 text-gray-100 rounded-md px-1 py-1 text-sm font-medium"
                          : "flex gap-1 text-gray-900 hover:bg-gray-100 hover:text-[#E65C55] rounded-md px-1 py-1 text-sm font-medium cursor-pointer"
                      }
                      onClick={() => setSelectedContent("Brand_Search")}
                    >
                      <FaSearchengin style={{ marginTop: 2 }} />
                      Brand Search
                    </div>
                  )}
                  {!brandView && (
                    <div
                      class={
                        selectedContent == "Brand_Deals"
                          ? "flex gap-1 bg-gray-400 text-gray-100 rounded-md px-1 py-1 text-sm font-medium"
                          : "flex gap-1 text-gray-900 hover:bg-gray-100 hover:text-[#E65C55] rounded-md px-1 py-1 text-sm font-medium cursor-pointer"
                      }
                      onClick={() => setSelectedContent("Brand_Deals")}
                    >
                      <FaMoneyBillWave style={{ marginTop: 2 }} /> Brand Deals
                    </div>
                  )}
                  {!brandView && (
                    <div
                      class={
                        selectedContent == "Bid_Deals"
                          ? "flex gap-1 bg-gray-400 text-gray-100 rounded-md px-1 py-1 text-sm font-medium"
                          : "flex gap-1 text-gray-900 hover:bg-gray-100 hover:text-[#E65C55] rounded-md px-1 py-1 text-sm font-medium cursor-pointer"
                      }
                      onClick={() => setSelectedContent("Bid_Deals")}
                    >
                      <FaGavel style={{ marginTop: 2 }} />
                      Bid for Deals
                    </div>
                  )}
                  {!brandView && (
                    <div
                      class={
                        selectedContent == "Event_Deals"
                          ? "flex gap-1 bg-gray-400 text-gray-100 rounded-md px-1 py-1 text-sm font-medium"
                          : "flex gap-1 text-gray-900 hover:bg-gray-100 hover:text-[#E65C55] rounded-md px-1 py-1 text-sm font-medium cursor-pointer"
                      }
                      onClick={() => setSelectedContent("Event_Deals")}
                    >
                      <FaCalendarDay style={{ marginTop: 2 }} /> Events Deals
                    </div>
                  )}
                  {!brandView && (
                    <div
                      class={
                        selectedContent == "Deal_Match"
                          ? "flex gap-1 bg-gray-400 text-gray-100 rounded-md px-1 py-1 text-sm font-medium"
                          : "flex gap-1 text-gray-900 hover:bg-gray-100 hover:text-[#E65C55] rounded-md px-1 py-1 text-sm font-medium cursor-pointer"
                      }
                      onClick={() => setSelectedContent("Deal_Match")}
                    >
                      <FaMobile style={{ marginTop: 2 }} />
                      Deal Match
                    </div>
                  )}
                  <div
                    class={
                      selectedContent == "Your_Content"
                        ? "flex gap-1 bg-gray-400 text-gray-100 rounded-md px-1 py-1 text-sm font-medium"
                        : "flex gap-1 text-gray-900 hover:bg-gray-100 hover:text-[#E65C55] rounded-md px-1 py-1 text-sm font-medium cursor-pointer"
                    }
                    onClick={() => setSelectedContent("Your_Content")}
                  >
                    <FaThumbsUp style={{ marginTop: 2 }} />
                    My Content
                  </div>
                  {!brandView && (
                    <div
                      class={
                        selectedContent == "ReelsInspiration"
                          ? "flex gap-1 bg-gray-400 text-gray-100 rounded-md px-1 py-1 text-sm font-medium"
                          : "flex gap-1 text-gray-900 hover:bg-gray-100 hover:text-[#E65C55] rounded-md px-1 py-1 text-sm font-medium cursor-pointer"
                      }
                      onClick={() => setSelectedContent("ReelsInspiration")}
                    >
                      <FaCalendarDay style={{ marginTop: 2 }} />
                      Reels Inspiration
                    </div>
                  )}
                  {!brandView ? (
                    <div
                      class={
                        selectedContent == "Saved_Deals"
                          ? "flex gap-1 bg-gray-400 text-gray-100 rounded-md px-1 py-1 text-sm font-medium"
                          : "flex gap-1 text-gray-900 hover:bg-gray-100 hover:text-[#E65C55] rounded-md px-1 py-1 text-sm font-medium cursor-pointer"
                      }
                      onClick={() => setSelectedContent("Saved_Deals")}
                    >
                      <FaCommentDollar style={{ marginTop: 2 }} />
                      Saved Deals
                    </div>
                  ) : (
                    <div
                      class={
                        selectedContent == "Overview"
                          ? "flex gap-1 bg-gray-400 text-gray-100 rounded-md px-1 py-1 text-sm font-medium"
                          : "flex gap-1 text-gray-900 hover:bg-gray-100 hover:text-[#E65C55] rounded-md px-1 py-1 text-sm font-medium cursor-pointer"
                      }
                      onClick={() => setSelectedContent("Overview")}
                    >
                      <FaCommentDollar style={{ marginTop: 2 }} />
                      Overview
                    </div>
                  )}
                  <div
                    class={
                      selectedContent == "Analytics"
                        ? "flex gap-1 bg-gray-400 text-gray-100 rounded-md px-1 py-1 text-sm font-medium"
                        : "flex gap-1 text-gray-900 hover:bg-gray-100 hover:text-[#E65C55] rounded-md px-1 py-1 text-sm font-medium cursor-pointer"
                    }
                    onClick={() => setSelectedContent("Analytics")}
                  >
                    <FaChartLine style={{ marginTop: 2 }} />
                    Analytics
                  </div>
                  <div
                    class={
                      selectedContent == "Cracked_Deals"
                        ? "flex gap-1 bg-gray-400 text-gray-100 rounded-md px-1 py-1 text-sm font-medium"
                        : "flex gap-1 text-gray-900 hover:bg-gray-100 hover:text-[#E65C55] rounded-md px-1 py-1 text-sm font-medium cursor-pointer"
                    }
                    onClick={() => setSelectedContent("Cracked_Deals")}
                  >
                    <FaGlobe style={{ marginTop: 2 }} />
                    Cracked Deals
                  </div>
                </div>
              ) : (
                <div class="flex">
                  {!brandView && (
                    <div
                      class={
                        selectedContent == "Brand_Search"
                          ? "flex gap-1 bg-gray-400 text-gray-100 rounded-md px-1 py-1 text-xs font-medium w-32 justify-center"
                          : "flex gap-1 text-gray-900 hover:bg-gray-100 hover:text-[#E65C55] rounded-md px-1 py-1 text-xs font-medium cursor-pointer  w-32 justify-center"
                      }
                      onClick={() => setSelectedContent("Brand_Search")}
                    >
                      <FaSearchengin style={{ marginTop: 2 }} />
                      Brand Search
                    </div>
                  )}
                  <div
                    class={
                      selectedContent == "Brand_Deals"
                        ? "flex gap-1 bg-gray-400 text-gray-100 rounded-md px-1 py-1 text-xs font-medium w-32 justify-center"
                        : "flex gap-1 text-gray-900 hover:bg-gray-100 hover:text-[#E65C55] rounded-md px-1 py-1 text-xs font-medium cursor-pointer w-32 justify-center"
                    }
                    onClick={() => setSelectedContent("Brand_Deals")}
                  >
                    <FaMoneyBillWave style={{ marginTop: 2 }} /> Brand Deals
                  </div>
                  <div
                    class={
                      selectedContent == "Bid_Deals"
                        ? "flex gap-1 bg-gray-400 text-gray-100 rounded-md px-1 py-1 text-xs font-medium w-32 justify-center"
                        : "flex gap-1 text-gray-900 hover:bg-gray-100 hover:text-[#E65C55] rounded-md px-1 py-1 text-xs font-medium cursor-pointer w-32 justify-center"
                    }
                    onClick={() => setSelectedContent("Bid_Deals")}
                  >
                    <FaGavel style={{ marginTop: 2 }} />
                    Bid for Deals
                  </div>
                  <div
                    class={
                      selectedContent == "Event_Deals"
                        ? "flex gap-1 bg-gray-400 text-gray-100 rounded-md px-1 py-1 text-xs font-medium w-32 justify-center"
                        : "flex gap-1 text-gray-900 hover:bg-gray-100 hover:text-[#E65C55] rounded-md px-1 py-1 text-xs font-medium cursor-pointer w-32 justify-center"
                    }
                    onClick={() => setSelectedContent("Event_Deals")}
                  >
                    <FaCalendarDay style={{ marginTop: 2 }} /> Events Deals
                  </div>
                  <div
                    class={
                      selectedContent == "Deal_Match"
                        ? "flex gap-1 bg-gray-400 text-gray-100 rounded-md px-1 py-1 text-xs font-medium w-32 justify-center"
                        : "flex gap-1 text-gray-900 hover:bg-gray-100 hover:text-[#E65C55] rounded-md px-1 py-1 text-xs font-medium cursor-pointer w-32 justify-center"
                    }
                    onClick={() => setSelectedContent("Deal_Match")}
                  >
                    <FaMobile style={{ marginTop: 2 }} />
                    Deal Match
                  </div>
                  <div
                    class={
                      selectedContent == "Your_Content"
                        ? "flex gap-1 bg-gray-400 text-gray-100 rounded-md px-1 py-1 text-xs font-medium w-32 justify-center"
                        : "flex gap-1 text-gray-900 hover:bg-gray-100 hover:text-[#E65C55] rounded-md px-1 py-1 text-xs font-medium cursor-pointer w-32 justify-center"
                    }
                    onClick={() => setSelectedContent("Your_Content")}
                  >
                    <FaThumbsUp style={{ marginTop: 2 }} />
                    My Content
                  </div>
                  {!brandView ? (
                    <div
                      class={
                        selectedContent == "Saved_Deals"
                          ? "flex gap-1 bg-gray-400 text-gray-100 rounded-md px-1 py-1 text-xs font-medium w-32 justify-center"
                          : "flex gap-1 text-gray-900 hover:bg-gray-100 hover:text-[#E65C55] rounded-md px-1 py-1 text-xs font-medium cursor-pointer w-32 justify-center"
                      }
                      onClick={() => setSelectedContent("Saved_Deals")}
                    >
                      <FaCommentDollar style={{ marginTop: 2 }} />
                      Saved Deals
                    </div>
                  ) : (
                    <div
                      class={
                        selectedContent == "Overview"
                          ? "flex gap-1 bg-gray-400 text-gray-100 rounded-md px-1 py-1 text-xs font-medium w-32 justify-center"
                          : "flex gap-1 text-gray-900 hover:bg-gray-100 hover:text-[#E65C55] rounded-md px-1 py-1 text-xs font-medium cursor-pointer w-32 justify-center"
                      }
                      onClick={() => setSelectedContent("Overview")}
                    >
                      <FaCommentDollar style={{ marginTop: 2 }} />
                      Overview
                    </div>
                  )}
                  <div
                    class={
                      selectedContent == "Analytics"
                        ? "flex gap-1 bg-gray-400 text-gray-100 rounded-md px-1 py-1 text-xs font-medium w-32 justify-center"
                        : "flex gap-1 text-gray-900 hover:bg-gray-100 hover:text-[#E65C55] rounded-md px-1 py-1 text-xs font-medium cursor-pointer w-32 justify-center"
                    }
                    onClick={() => setSelectedContent("Analytics")}
                  >
                    <FaChartLine style={{ marginTop: 2 }} />
                    Analytics
                  </div>
                  <div
                    class={
                      selectedContent == "Cracked_Deals"
                        ? "flex gap-1 bg-gray-400 text-gray-100 rounded-md px-1 py-1 text-xs font-medium w-32 justify-center"
                        : "flex gap-1 text-gray-900 hover:bg-gray-100 hover:text-[#E65C55] rounded-md px-1 py-1 text-xs font-medium cursor-pointer w-32 justify-center"
                    }
                    onClick={() => setSelectedContent("Cracked_Deals")}
                  >
                    <FaGlobe style={{ marginTop: 2 }} />
                    Cracked Deals
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              class="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span class="absolute -inset-1.5"></span>
              <span class="sr-only">View notifications</span>
              <svg
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                />
              </svg>
            </button>

            <div class="relative ml-3">
              <div>
                <button
                  type="button"
                  class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span class="absolute -inset-1.5"></span>
                  <span class="sr-only">Open user menu</span>
                  <img
                    class="h-4 w-4 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </button>
              </div>

              <div
                class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
                tabindex="-1"
              >
                <a
                  href="#"
                  class="block px-4 py-1 text-sm text-gray-700"
                  role="menuitem"
                  tabindex="-1"
                  id="user-menu-item-0"
                >
                  Your Profile
                </a>
                <a
                  href="#"
                  class="block px-4 py-1 text-sm text-gray-700"
                  role="menuitem"
                  tabindex="-1"
                  id="user-menu-item-1"
                >
                  Settings
                </a>
                <a
                  href="#"
                  class="block px-4 py-1 text-sm text-gray-700"
                  role="menuitem"
                  tabindex="-1"
                  id="user-menu-item-2"
                >
                  Sign out
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </nav>
  );
};
export default BottomNavbar;
