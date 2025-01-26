import React from "react";
import NewRentalListingsBox from "../NewRentalListingsBox/NewRentalListingsBox";

export default function NewRentalListings() {
  const dataCard = [
    {id: 1,size_location: "۹۰ متر ، تهران کشی باوار نصر",rent: "۵۰۰ میلیون تومان اجاره",deposit: "۱۵ میلیون تومان رهن",posted_at: "۳ ساعت پیش",image: "images/landing/home-prouser/modern-living-room.webp",alt: "modernLiving"},
    {id: 2,size_location: "۹۵ متر ، تهران خیابان آزادی",rent: "۴۰۰ میلیون تومان اجاره",deposit: "۲۰ میلیون تومان رهن",posted_at: "۲ ساعت پیش",image: "images/landing/home-prouser/cozy-bedroom.webp",alt: "cozyBedroom"},
    {id: 3,size_location: "۸۵ متر ، تهران پاسداران، مکان جنوبی",rent: "۴۰۰ میلیون تومان اجاره",deposit: "۱۵ میلیون تومان رهن",posted_at: "۳ ساعت پیش",image: "images/landing/home-prouser/spacious-living-room.webp",alt: "spaciousLiving"},
    {id: 4,size_location: "۱۲۵ متر ، تهران ولنجک، دیباجی",rent: "۶۰۰ میلیون تومان اجاره",deposit: "۲۱ میلیون تومان رهن",posted_at: "۲ ساعت پیش",image: "images/landing/home-prouser/bright-living-room.webp",alt: "brightLiving"},
    {id: 5,size_location: "۱۱۰ متر ، تهران کولید، کنارخواده",rent: "۵۰۰ میلیون تومان اجاره",deposit: "۲۵ میلیون تومان رهن",posted_at: "۲ ساعت پیش",image: "images/landing/home-prouser/minimalist-bedroom.webp",alt: "minimalistBedroom"},
    {id: 6,size_location: "۱۰۵ متر ، تهران ، پیاده رو، منطقه کاملا جنوبی",rent: "۵۵۰ میلیون تومان اجاره",deposit: "۲۰ میلیون تومان رهن",posted_at: "۲ ساعت پیش",image: "images/landing/home-prouser/chic-bedroom.webp",alt: "chicBedroom"},
    {id: 7,size_location: "۱۱۵ متر ، تهران ، ولیعصر، گلزار",rent: "۵۵۰ میلیون تومان اجاره",deposit: "۲۵ میلیون تومان رهن",posted_at: "۲ ساعت پیش",image: "images/landing/home-prouser/stylish-living-room.webp",alt: "stylishLiving"},
    {id: 8,size_location: "۱۳۸ متر ، تهران ، میرداماد، نیکو",rent: "۸۰۰ میلیون تومان اجاره",deposit: "۴۰ میلیون تومان رهن",posted_at: "۲ ساعت پیش",image: "images/landing/home-prouser/contemporary-bedroom.webp",alt: "contemporaryBedroom"},
  ];
   
  return (
    <>
      {/* Header section for the new rental listings */}
      <div className="new-rental__header">
        {/* Title for the new rental listings */}
        <h3 className="new-rental__title">
          جدیدترین خانه‌های اجاره‌ای تهران
        </h3>
        {/* Link to view all listings */}
        <a className="new-rental__link" href="#">
          مشاهده همه
        </a>
      </div>
  
      {/* Grid layout to display rental listings */}
      <div className="new-rental__grid">
        {/* Loop through each item in dataCard and display the NewRentalListingsBox component */}
        {dataCard.map((item) => (
          <NewRentalListingsBox key={item.id} {...item} />
        ))}
      </div>
    </>
  );
  
}
