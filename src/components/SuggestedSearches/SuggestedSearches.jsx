import React from 'react'
import SuggestedSearchesItem from '../SuggestedSearchesItem/SuggestedSearchesItem';

export default function SuggestedSearches() {
    const searchSuggestions = [
        { id: 1, title: "املاک در نارمک" },
        { id: 2, title: "املاک در پونک" },
        { id: 3, title: "املاک در ولنجک" },
        { id: 4, title: "املاک در فرمانیه" },
        { id: 5, title: "املاک در نیاوران" },
        { id: 6, title: "املاک در امانیه" },
        { id: 7, title: "املاک در دروس" },
        { id: 8, title: "املاک در الهیه" },
        { id: 9, title: "املاک در قیطریه" },
        { id: 10, title: "املاک در دولت" },
        { id: 11, title: "املاک در قلهک" },
        { id: 12, title: "املاک در ظفر" },
      ];
      
      return (
        <>
            {/* Title for the suggested searches section */}
            <h3 className='suggested-searches__title'>جستجوهای پیشنهادی</h3>
            
            {/* Grid displaying each search suggestion */}
            <div className='suggested-searches__grid'>
                {searchSuggestions.map(item => <SuggestedSearchesItem key={item.id} {...item}/>)}
            </div>
        </>
    );
}
