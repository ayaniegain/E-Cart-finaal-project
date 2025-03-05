import React from "react";
import phoneLogo from "../../../src/assets/img/phone_icon.svg";
import downArrowLogo from "../../../src/assets/img/down_arrow_icon.svg";

function Promotion() {
  return (
    <section className="bg-teal-900 text-white text-md flex flex-wrap justify-between items-center h-10 w-full px-6 sm:px-10">
      {/* Phone Section */}
      <div className="flex items-center gap-2">
        <img src={phoneLogo} alt="phone-logo" className="h-5 w-5" />
        <span>+9066783678</span>
      </div>

      {/* Promotion Section */}
      <div className="flex items-center gap-3 text-sm sm:text-md">
        <h4 className="cursor-pointer hover:underline">Get 50% off on Selected Items</h4>
        <span>|</span>
        <h4 className="cursor-pointer text-yellow-300 hover:underline">Shop Now</h4>
      </div>

      {/* Language & Location */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1 cursor-pointer hover:opacity-80">
          <h4>Eng</h4>
          <img src={downArrowLogo} alt="dropdown" className="h-5 w-5" />
        </div>
        <div className="flex items-center gap-1 cursor-pointer hover:opacity-80">
          <h4>Location</h4>
          <img src={downArrowLogo} alt="dropdown" className="h-5 w-5" />
        </div>
      </div>
    </section>
  );
}

export default Promotion;
