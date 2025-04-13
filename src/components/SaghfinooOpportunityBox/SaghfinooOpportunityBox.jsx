import React, { memo } from 'react';

const SaghfinooOpportunityBox = memo(({ image, caption, alt }) => {
  return (
    <div className="saghfinoo-opportunity-box">
      {/* 🖼️ Image Wrapper */}
      <div className="min-h-[90px]">
        <img className="saghfinoo-opportunity-box__image" src={image} loading="lazy" alt={alt} />
      </div>

      {/* 📝 Caption */}
      <p className="saghfinoo-opportunity-box__caption">
        {caption}
      </p>
    </div>
  );
});

export default SaghfinooOpportunityBox;
