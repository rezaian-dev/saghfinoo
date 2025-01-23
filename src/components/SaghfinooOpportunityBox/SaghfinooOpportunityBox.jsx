import React from 'react'

export default function SaghfinooOpportunityBox({ image, caption,alt }) {
  return (
    <>
      <div className="saghfinoo-opportunity-box">
        {/* Image Wrapper */}
        <div className="saghfinoo-opportunity-box__image-wrapper">
          <img className="saghfinoo-opportunity-box__image" src={image} loading="lazy" alt={alt}/>
        </div>

        {/* Caption */}
        <p className="saghfinoo-opportunity-box__caption">
          {caption}
        </p>
      </div>
    </>
  );
}

