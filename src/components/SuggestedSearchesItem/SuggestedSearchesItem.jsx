import React from 'react'

export default function SuggestedSearchesItem({title}) {
  return (
    <>
    {/* Suggestion item link */}
    <a href='#' className='suggested-searches__item suggested-searches__item--link'>{title}</a>
    </>
  )
}
