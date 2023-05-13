import React from "react";

import "./footer.scss";
import FooterLinks from "./FooterLinks";
import FooterPrivacy from "./FooterPrivacy";

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <FooterLinks />
      <FooterPrivacy />
    </div>
  </footer>
);

export default Footer;
