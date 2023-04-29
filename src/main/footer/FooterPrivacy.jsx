import React from "react";

import smplLogo from "./../../images/smplLogo.webp";
import logowhite from "./../../images/logowhite.webp";

const FooterPrivacy = () => (
  <section className="footer_privacy">
    <div className="footer_privacy__first">
      <div className="footer_privacy__block margin__block">
        <p>© 2011-2021</p>
        <p>Міжнародний аеропорт «Київ»</p>
      </div>
      <div className="footer_privacy__block">
        <a src="https://ufuture.com/uk/" className="footer_privacy__link_img">
          <div className="link_flex">
            <div>
              <p>
                Part of <b>Ufuture</b>
              </p>
              <b>Investment Group</b>
            </div>

            <img
              src={logowhite}
              alt="icon_link_privacy"
              className="footer_privacy__logo_white"
            />
          </div>
        </a>
      </div>
    </div>

    <div className="footer_privacy__block">
      <a className="footer_privacy__smpl_link" src="https://smpl.solutions/">
        <p>Розробка сайту</p>
        <img
          src={smplLogo}
          alt="smpl/solution"
          className="footer_privacy__logo_smpl"
        />
      </a>
    </div>
  </section>
);

export default FooterPrivacy;
