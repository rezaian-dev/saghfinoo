import { Call, Instagram, Whatsapp } from "iconsax-react";
import React from "react";

export default function ContactInfo() {
  return (
    <div className="contact-info">
      <h4 className="contact-info__title">تماس با ما</h4>
      <div className="text-center">
        <h2 className="contact-info__header-title">
          تا پیدا کردن بهترین سقف در کنار شماییم
        </h2>
        <h5 className="contact-info__header-subtitle">با ما در تماس باشید</h5>
      </div>
      <div className="contact-info__content">
        {/* 🔗 Social Media Links */}
        <div className="contact-info__social">
          <a
            href="https://web.whatsapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Whatsapp className="icon-size" color="#CB1B1B" variant="Bold" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="icon-size" color="#CB1B1B" variant="Bold" />
          </a>
        </div>
        <span className="contact-info__support">پشتیبانی ۲۴ ساعته</span>
        {/* 📞 Call Button */}
        <a className="contact-info__call-button" href="tel:02141067000">
          <span className="contact-info__phone">۰۲۱-۴۱۰۶۷۰۰۰</span>
          <Call
            className="contact-info__call-icon"
            color="#FFFFFF"
            variant="Outline"
          />
        </a>
      </div>
    </div>
  );
}
