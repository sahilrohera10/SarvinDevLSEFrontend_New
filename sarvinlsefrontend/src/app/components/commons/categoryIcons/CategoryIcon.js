import React from "react";
import { FaHotel } from "react-icons/fa6";

export default function CategoryIcon() {
  return (
    <div>
      <div className="w-16 h-16 border-slate-300 border-2 rounded-xl hover:shadow-lg transition duration-300 ease-in-out cursor-pointer">
        <FaHotel size={30} className="m-auto mt-4" />
      </div>
      <p className="text-center mt-2">Hotels</p>
    </div>
  );
}
