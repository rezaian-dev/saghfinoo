import React from "react";
import HousingScoutBox from "../HousingScoutBox/HousingScoutBox";

export default function HousingScout() {
 const dataCart=[
  {id:1, img:"images/landing/homenewuser/residential-house.webp",alt:"ResidentialHouse",price:28.900, caption:"خانه مسکونی"},
  {id:2, img:"images/landing/homenewuser/apartment-tower.webp",alt:"ApartmentTower",price:309.798, caption:"آپارتمان و برج"},
  {id:3, img:"images/landing/homenewuser/luxury-villa.webp",alt:"LuxuryVilla",price:946, caption:"ویلا"},
  {id:4, img:"images/landing/homenewuser/commercial-office.webp",alt:"CommercialOffice",price:27.339, caption:"تجاری و اداری"},
]
  return (
    <>
    {/* Main title for property search */}
    <h3 className="housing-scout__title">
    در سقفینو دنبال چه نوع ملکی هستید
    </h3>
  
    {/* Grid layout to display property boxes */}
    <div className="housing-scout__grid">
      {/* Iterating through dataCart array to render each HousingScoutBox component */}
      {dataCart.map(item => <HousingScoutBox key={item.id} {...item} />)}
    </div>
  </>
  );
}
