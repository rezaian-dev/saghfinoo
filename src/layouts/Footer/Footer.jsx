import React, { memo } from "react";
import FooterDesktop from "../../components/LayoutComponents/Footer/FooterDesktop/FooterDesktop";
import FooterMobile from "../../components/LayoutComponents/Footer/FooterMobile/FooterMobile";

 const Footer = memo((() => {
  return (
    <>
      {/* Render the desktop version of the footer */}
      <FooterDesktop />
      
      {/* Render the mobile version of the footer */}
      <FooterMobile />
    </>
  );
}));
export default Footer
