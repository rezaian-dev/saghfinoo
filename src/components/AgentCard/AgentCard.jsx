import React , {memo} from "react";

const AgentCard = memo(() => {
  return (
    <>
      {/* 🏆 Main container for the agent card */}
      <div className="agent-card">
        <div className="agent-card__container">
          {/* 👤 Agent profile image */}
          <div className="agent-card__image">
            <img src="images/landing/home-prouser/ali-parto.png" width={88} height={88} alt="profileAliParto" />
          </div>

          {/* 📋 Agent information section */}
          <div className="agent-card__info">
            <div className="w-full">
              {/* 🏢 Header section with agency logo and name */}
              <div className="agent-card__header">
                <img src="images/landing/home-prouser/logo-valiasr.png" width={36} height={25} alt="logoValiasr" />
                <span>املاک ولیعصر</span>
              </div>

              {/* ⭐ Agent details including name, rating, and active listings */}
              <div className="agent-card__details">
                <h4 className="agent-card__name">علی پرتو</h4>
                <span className="agent-card__rating">امتیاز ۴ از ۵</span>
                <span className="agent-card__ads">۵۰۰ آگهی فعال</span>
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
