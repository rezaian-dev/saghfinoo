import React from "react";
import clsx from "classnames";

export default function ServicesSectionItems({ title, items, mobile }) {
  return (
    <div>
      {/* Title of the service section */}
      <span className="services-section__title">
        {title}
      </span>
      
      {/* List of items in the service section */}
      <ul
        className={clsx(
          "services-section__list", 
          {
            "services-section__list--mobile": mobile,
            "services-section__list--desktop": !mobile,
            "services-section__list--with-icons": items.some(({icon}) => icon),
            "services-section__list--no-icons": !items.some(({icon}) => icon)
          }
        )}
      >
        {/* Render each item in the list */}
        {items.map(({ id, icon, content }) => (
          <li key={id} className="services-section__list-item">
            {icon && icon}
            <a href="#">{content}</a>
          </li>
        ))}

        {/* Special item for user account section */}
        {title === "حساب کاربری" && (
          <li className="services-section__trust-logo">
            <img src="images/logos/Logo-trust.webp" loading="lazy" alt="logo" />
          </li>
        )}
      </ul>
    </div>
  );
}
