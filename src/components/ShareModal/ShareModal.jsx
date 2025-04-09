import { CloseCircle, Copy, TickCircle } from 'iconsax-react'
import React, { useState } from 'react'
import clsx from "classnames";

export default function ShareModal({ isOpenModal, url = window.location.href }) {
  const [copied, setCopied] = useState(false);
  
  // 📱 Social media share links
  const socialMedia = [
    { id: 1, name: 'تلگرام', icon: '../images/socialMedia/telegram.png', url: `https://t.me/share/url?url=${url}` },
    { id: 2, name: 'واتساپ', icon: '../images/socialMedia/whatsapp.png', url: `https://api.whatsapp.com/send?text=${url}` },
    { id: 3, name: 'توییتر', icon: '../images/socialMedia/x.png', url: `https://twitter.com/intent/tweet?text=${url}` },
    { id: 4, name: 'فیس بوک', icon: '../images/socialMedia/facebook.png', url: `https://www.facebook.com/sharer/sharer.php?u=${url}` },
    { id: 5, name: 'ایمیل', icon: '../images/socialMedia/formkit_email.png', url: `mailto:?subject=اشتراک‌گذاری&body=${url}` }
  ]

  // 📋 Copy link to clipboard
  const handleCopyLink = () => {
    navigator.clipboard.writeText(url)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // ⏳ Reset after 2s
      })
  }

  return (
    <div className={clsx('share-modal', isOpenModal ? "share-modal__open" : "share-modal__close")}>
      <div className='share-modal__content'>
        {/* ❌ Close button */}
        <button className='share-modal__close-btn'>
          <CloseCircle size="20" color="#212121"/>
        </button>

        {/* 📢 Title and description */}
        <h4 className='share-modal__title'>اشتراک‌گذاری</h4>
        <span className='share-modal__description'>این پروفایل را با دیگران به اشتراک بگذارید:</span>
        
        <ul className='share-modal__social-media-list'>
          {/* 🔗 Copy link option */}
          <li className='w-max'>
            <button 
              className='share-modal__social-media-link'
              onClick={handleCopyLink}
              aria-label="کپی لینک"
            >
              {copied ? (
                <TickCircle className="share-modal__social-media-icon" color="#10b981"/>
              ) : (
                <Copy  color="#212121" className="share-modal__social-media-icon" />
              )}
              <span className='share-modal__social-media-name'>
                {copied ? 'کپی شد!' : 'کپی لینک'}
              </span>
            </button>
          </li>
          
          {/* 🌐 Social media buttons */}
          {socialMedia.map(({id,name,icon,url}) => (
            <li key={id} className='w-max'>
              <a className='share-modal__social-media-link' href={url} target="blank">
                <img className={"share-modal__social-media-icon"} src={icon} loading='lazy' alt={name} />
                <span className='share-modal__social-media-name'>{name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
