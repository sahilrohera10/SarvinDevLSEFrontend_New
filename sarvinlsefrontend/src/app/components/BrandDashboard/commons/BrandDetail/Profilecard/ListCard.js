import React from "react";
import Image from "next/image";

export default function ListCard({
  img = "",
  username = "",
  followers = 0,
  sarvinscore = 0,
}) {
  return (
    <div className="  w-full h-[6vh] px-[10px] py-[36px]  rounded-md flex border-[1px] border-[#E7E7E7] bg-[#fbfbfd] shadow text-gray-700 hover:bg-slate-200 hover:text-[#F27430] ">
      <div className="w-full flex items-center justify-between">
        <div class="w-1/4 flex justify-center">
          <Image
            className="w-[50px] h-[50px] rounded-full"
            src={img}
            alt="logo"
            width={400}
            height={800}
          />
        </div>

        <div className="text-sm flex justify-center w-1/4 truncate  hover:text-[#F27430] ">
          {username}
        </div>
        <div className="text-sm flex justify-center font-semibold w-1/4  truncate  hover:text-[#F27430]">
          {followers}
        </div>
        <div className="text-sm flex justify-center font-semibold w-1/4  truncate  hover:text-[#F27430]">
          {sarvinscore}
        </div>
      </div>
    </div>
  );
}
