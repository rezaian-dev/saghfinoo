import React from "react";

export default function ServicesSectionItems({ title, items, mobile }) {
  return (
    <div>
      {/* Title of the service section */}
      <span className="services-section__title">
        {title}
      </span>
      
      {/* List of items in the service section */}
      <ul
        className={`services-section__list ${mobile ? " services-section__list--mobile" : " services-section__list--desktop"}${items.some((item) => item.icon) ? " services-section__list--with-icons" : " services-section__list--no-icons"}`}>
        {/* Render each item in the list */}
        {items.map((item) => (
          <li key={item.id} className="services-section__list-item">
            {item.icon && item.icon}
            <a href="#">{item.content}</a>
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

