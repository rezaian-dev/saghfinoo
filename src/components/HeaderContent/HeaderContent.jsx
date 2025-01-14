import React from "react";
import { SearchNormal } from "iconsax-react";

export default function HeaderContent() {
  return (
    <>
      {/* Main header section */}
      <div className="flex flex-col items-center font-bold text-gray-3 gap-y-3 mt-[124px]">
        <h1 className="text-[54px]">سقفینو؛ سقفی برای همه</h1>{" "}
        {/* Branding text */}
        <h3 className="text-2xl">
          آسانی و سرعت در پیدا کردن یک سقف تازه را در سقفینو تجربه کنید{" "}
          {/* Tagline */}
        </h3>
      </div>

      {/* Search box container */}
      <div className="flex flex-col bg-white gap-y-2.5 w-[816px] pb-3 pt-3.5 px-7 rounded-xl mx-auto mt-[72px] border focus-within:shadow-custom focus-within:border-info">
        {/* Toggle buttons */}
        <div className="flex gap-x-0.5 justify-center text-gray-11 font-medium text-2xl child:max-w-[379px] child:w-full child:h-10">
          <button className="border-b-2 border-primary">اجاره</button>{" "}
          {/* Rent option */}
          <button className="border-b border-gray-5">خرید</button>{" "}
          {/* Buy option */}
        </div>

        {/* Search input section */}
        <div className="flex flex-col item gap-y-3">
          <div className="flex items-center gap-x-2">
            <SearchNormal size="24" color="#353535" variant="Outline" />{" "}
            {/* Search icon */}
            <input
              className="text-gray-11 w-full h-8 outline-none placeholder:text-gray-11"
              type="text"
              placeholder="شهر مورد نظر را جست‌وجو کنید"
              aria-label="City search"
            />{" "}
            {/* Search input field */}
          </div>

          {/* Suggested city list */}
          {/* <ul className="space-y-3 mr-8">
            <li>تهران</li> Suggested city: Tehran
            <li>تبریز</li> Suggested city: Tabriz
            <li>تالش</li> Suggested city: Talesh
            <li>تایباد</li> Suggested city: Taybad
          </ul> */}
        </div>
      </div>
    </>
  );
}
