import React from "react";
import FooterDesktop from "../../components/FooterDesktop/FooterDesktop";
import FooterMobile from "../../components/FooterMobile/FooterMobile";

export default function Footer() {
  return (
    <>
      {/* Render the desktop version of the footer */}
      <FooterDesktop />
      
      {/* Render the mobile version of the footer */}
      <FooterMobile />
    </>
  );
}
