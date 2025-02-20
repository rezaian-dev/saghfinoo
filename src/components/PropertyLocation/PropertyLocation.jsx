import React from "react";
import LeafletMap from "../LeafletMap/LeafletMap";
import { Dislike, Like1 } from "iconsax-react";

export default function PropertyLocation() {
  return (
    <div>
      {/* Section title */}
      <h4 className="property-location__title">
        موقعیت
      </h4>

      {/* Map container */}
      <div className="property-location__map-container">
        <LeafletMap width={"w-full"} height={"h-60 md:h-[353px]"} />
      </div>

      {/* Information section */}
      <div className="property-location__info">
        <span className="property-location__info-item">
          زمان ثبت آگهی: <strong>ساعاتی پیش</strong>
        </span>
        <span className="property-location__info-item property-location__info-item--view">
          تعداد مشاهده این آگهی: <strong>۲۲</strong>
        </span>
        <span className="property-location__info-item property-location__info-item--save">
          تعداد ذخیره این آگهی: <strong>۶</strong>
        </span>
      </div>

      {/* Feedback section */}
      <div className="property-location__feedback">
        <span className="property-location__feedback-text">
          بازخورد شما درباره این آگهی چیست؟
        </span>
        <div className="property-location__feedback-icons">
          <Dislike className="property-location__feedback-icon" color="#353535" variant="Outline"/>
          <Like1 className="property-location__feedback-icon" color="#353535" variant="Outline"/>
        </div>
      </div>

      {/* Contact information button (mobile only) */}
      <a className="property-location__contact-button" href="#">
        اطلاعات تماس
      </a>
    </div>
  );
}
