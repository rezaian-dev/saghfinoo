import React, { memo } from "react";
import clsx from "classnames";
import { Link } from "react-router-dom";

const ServicesSectionItems = memo(({ title, items, mobile}) => {
 
  return (
    <div>
      {/* 🎯 Title of the service section */}
      <span className="services-section__title">{title}</span>

      {/* 📋 List of items in the service section */}
      <ul
        className={clsx("services-section__list", {
          "text-[10px]": mobile, // 📱 For mobile view
          "text-xs": !mobile,
          "space-y-1": items.some(({ icon }) => icon),
          "space-y-[2px]": !items.some(({ icon }) => icon),
        })}
      >
        {/* 🔢 Render each item in the list */}
        {items.map(({ id, icon, content,link }) => (
          <li key={id} className="services-section__list-item">
            {/* 💡 Display icon if available */}
            {icon && icon}
            <Link to={link} aria-label={content}>
              {content}
            </Link>{" "}
            {/* Add aria-label for accessibility */}
          </li>
        ))}

        {/* ⭐ Special item for user account section */}
        {title === "حساب کاربری" && (
          <li className="!mt-[93px]">
            <img
              src="../../images/logos/Logo-trust.webp"
              loading="lazy"
              alt="trust-logo"
            />
          </li>
        )}
      </ul>
    </div>
  );
});

export default ServicesSectionItems;
