import React, { memo } from 'react'

const SuggestedSearchesItem = memo(({title}) => {
  return (
    <>
    {/* Suggestion item link */}
    <a href='#' className='suggested-searches__item suggested-searches__item--link'>{title}</a>
    </>
  )
});

export default SuggestedSearchesItem;
