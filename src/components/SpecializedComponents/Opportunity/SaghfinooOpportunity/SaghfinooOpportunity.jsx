import React, { memo } from "react";
import SaghfinooOpportunityBox from "../../../LayoutComponents/Boxes/SaghfinooOpportunityBox/SaghfinooOpportunityBox";
import { opportunityCardsData } from "../../../../data/realEstateData";

const SaghfinooOpportunity = memo(() => {
  
  return (
      <>
          {/* 🏠 Header Section */}
          <div className="saghfinoo-opportunity__header">
              <h3 className="saghfinoo-opportunity__title">
                  سقفینو فرصتی برای همه
              </h3>
              <span className="saghfinoo-opportunity__description">
                  اگر مالک یا در جست‌‌وجوی سقفی نو هستید، کلیک کنید
              </span>
          </div>

          {/* 🔳 Opportunity Cards Grid */}
          <div className="saghfinoo-opportunity__cards-grid">
              {/* 🃏 Map through the data and display opportunity cards */}
              {opportunityCardsData.map(item => (
                  <SaghfinooOpportunityBox key={item.id} {...item} />
              ))}
          </div>
      </>
  );
});

export default SaghfinooOpportunity;
