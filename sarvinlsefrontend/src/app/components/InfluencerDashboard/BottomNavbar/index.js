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
                          : "flex gap-1 text-gray-900 hover:bg-gray-100 hover:text-[#E65C55] rounded-md px-1 py-1 text-xs font-medium cursor-pointer"
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
                          : "flex gap-1 text-gray-900 hover:bg-gray-100 hover:text-[#E65C55] rounded-md px-1 py-1 text-xs font-medium cursor-pointer"
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
                          : "flex gap-1 text-gray-900 hover:bg-gray-100 hover:text-[#E65C55] rounded-md px-1 py-1 text-xs font-medium cursor-pointer"
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
                          : "flex gap-1 text-gray-900 hover:bg-gray-100 hover:text-[#E65C55] rounded-md px-1 py-1 text-xs font-medium cursor-pointer"
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
                          : "flex gap-1 text-gray-900 hover:bg-gray-100 hover:text-[#E65C55] rounded-md px-1 py-1 text-xs font-medium cursor-pointer"
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
                        : "flex gap-1 text-gray-900 hover:bg-gray-100 hover:text-[#E65C55] rounded-md px-1 py-1 text-xs font-medium cursor-pointer"
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
                          : "flex gap-1 text-gray-900 hover:bg-gray-100 hover:text-[#E65C55] rounded-md px-1 py-1 text-xs font-medium cursor-pointer"
                      }
                      onClick={() => setSelectedContent("ReelsInspiration")}
                    >
                      <FaCalendarDay style={{ marginTop: 2 }} />
                      Reels Inspiration
                    </div>
                  )}
                  {!brandView ? (
                    <>
                      <div
                        class={
                          selectedContent == "Saved_Deals"
                            ? "flex gap-1 bg-gray-400 text-gray-100 rounded-md px-1 py-1 text-sm font-medium"
                            : "flex gap-1 text-gray-900 hover:bg-gray-100 hover:text-[#E65C55] rounded-md px-1 py-1 text-xs font-medium cursor-pointer"
                        }
                        onClick={() => setSelectedContent("Saved_Deals")}
                      >
                        <FaCommentDollar style={{ marginTop: 2 }} />
                        Saved Deals
                      </div>
                      <div
                        class={
                          selectedContent == "Following_Brands"
                            ? "flex gap-1 bg-gray-400 text-gray-100 rounded-md px-1 py-1 text-sm font-medium"
                            : "flex gap-1 text-gray-900 hover:bg-gray-100 hover:text-[#E65C55] rounded-md px-1 py-1 text-xs font-medium cursor-pointer"
                        }
                        onClick={() => setSelectedContent("Following_Brands")}
                      >
                        <FaGlobe style={{ marginTop: 2 }} />
                        Following Brands
                      </div>
                    </>
                  ) : (
                    <div
                      class={
                        selectedContent == "Overview"
                          ? "flex gap-1 bg-gray-400 text-gray-100 rounded-md px-1 py-1 text-sm font-medium"
                          : "flex gap-1 text-gray-900 hover:bg-gray-100 hover:text-[#E65C55] rounded-md px-1 py-1 text-xs font-medium cursor-pointer"
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
                        : "flex gap-1 text-gray-900 hover:bg-gray-100 hover:text-[#E65C55] rounded-md px-1 py-1 text-xs font-medium cursor-pointer"
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
                        : "flex gap-1 text-gray-900 hover:bg-gray-100 hover:text-[#E65C55] rounded-md px-1 py-1 text-xs font-medium cursor-pointer"
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
        </div>
      </div>
    </nav>
  );
};
export default BottomNavbar;
