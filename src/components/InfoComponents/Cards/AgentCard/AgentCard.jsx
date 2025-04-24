import React , {memo} from "react";

const AgentCard = memo(({advisor}) => {
  
  return (
    <>
      {/* 🏆 Main container for the agent card */}
      <div className="agent-card">
        <div className="agent-card__container">
          {/* 👤 Agent profile image */}
          <div className="agent-card__image">
            <img src={advisor.profileImage} width={88} height={88} alt={advisor.name} />
          </div>

          {/* 📋 Agent information section */}
          <div className="agent-card__info">
            <div className="w-full">
              {/* 🏢 Header section with agency logo and name */}
              <div className="agent-card__header">
                <img src={advisor.logo} width={36} height={25} alt="logoValiasr" />
                <span>{advisor.office.slice(6)}</span>
              </div>

              {/* ⭐ Agent details including name, rating, and active listings */}
              <div className="agent-card__details">
                <h4 className="agent-card__name">{advisor.name}</h4>
                <span className="agent-card__rating">امتیاز {advisor.rating.toLocaleString("fa-IR")} از ۵</span>
                <span className="agent-card__ads">{advisor.activeListings.toLocaleString("fa-IR")} آگهی فعال</span>
              </div>

              {/* 📞 Contact information button */}
              <button className="agent-card__contact">
                اطلاعات تماس
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default AgentCard;
