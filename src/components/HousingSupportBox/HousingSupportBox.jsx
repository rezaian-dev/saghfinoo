import React from 'react'

export default function HousingSupportBox({img,alt,caption}) {
  return (
    <>
    {/* Image container for the housing support box */}
    <div className='housing-support-box hover:translate-y-[-8px] hover:shadow-2xl'>
        <div className='min-h-20'>
            <img className='w-full' src={img} loading='lazy' alt={alt} />
        </div>
        {/* Caption text under the image */}
        <p className='housing-support-box__caption'>{caption}</p>
    </div>
    </>
  )
}
