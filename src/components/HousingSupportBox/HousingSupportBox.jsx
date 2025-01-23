import React from 'react'

export default function HousingSupportBox({img,alt,caption}) {
  return (
    <>
    {/* Image container for the housing support box */}
    <div className='housing-support-box'>
        <div className='housing-support-box__image-container'>
            <img className='housing-support-box__image' src={img} loading='lazy' alt={alt} />
        </div>
        {/* Caption text under the image */}
        <p className='housing-support-box__caption'>{caption}</p>
    </div>
    </>
  )
}
