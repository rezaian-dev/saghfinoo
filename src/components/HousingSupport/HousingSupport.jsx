import React, { memo } from "react";
import HousingSupportBox from "../HousingSupportBox/HousingSupportBox";

const HousingSupport = memo(() => {

    const dataCard = [
        {id:1, img:"images/landing/home-newuser/kharid_ejare_melk.webp", alt:"kharidEjareMelk", caption:"امکان خرید و اجاره ملک در اکثر نقاط کشور"},
        {id:2, img:"images/landing/home-newuser/moghayese_baresi_melk.webp", alt:"moghayeseBaresiMelk", caption:"مقایسه و بررسی صدها ملک براحتی و در کمترین زمان"},
        {id:3, img:"images/landing/home-newuser/ertebat_asan_moshaverin.webp", alt:"ertebatAsanMoshaverin", caption:"ارتباط آسان با برترین املاک و مشاورین کشور"},
    ];

    return (
        <>
            {/* 📜✨ Main text section with alignment modifiers ✨📜 */}
            <div className="housing-support__text">
                {/* 🏆 Title of the section 🏆 */}
                <h3 className="housing-support__title">همه به شما مشاوره می‌دهند!</h3>
                
                {/* 🗣️ Description text 🗣️ */}
                <p className="housing-support__description">
                    اما در سقفینو مشاوران املاک کِنار شما می‌مانند
                </p>
            </div>
            
            {/* 🏘️📋 Grid for housing support cards 📋🏘️ */}
            <div className="housing-support__grid">
                {/* 🎴🔄 Rendering cards dynamically 🔄🎴 */}
                {dataCard.map(item => <HousingSupportBox key={item.id} {...item} />)}
            </div>
        </>
    );
});

export default HousingSupport;
