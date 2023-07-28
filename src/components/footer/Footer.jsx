import React from 'react';

import './footer.scss';
import smplLogo from '../../../images/smplLogo.webp';
import logowhite from '../../../images/logowhite.webp';
import footerConfig from './footerConfig';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <section className="footer_links">
        {footerConfig.map((section, index) => (
          <nav key={index} className="footer_links__list">
            <p className="footer_links__title">{section.title}</p>
            {section.links.map((link, i) => (
              <a key={i} className="footer_links__link">
                {link}
              </a>
            ))}
          </nav>
        ))}
        <div className="footer_contact">
          <div className="footer_contact__main">
            <p className="footer_contact__text">Авіадовідка</p>
            <a className="footer_contact__number" href="tel:+38 (044) 500 49 73">
              +38 (044) 500 49 73
            </a>
          </div>
          <div className="footer_contact__main">
            <p className="footer_contact__text">Приєднуйтесь до нас</p>
            <div className="footer_contact__icons">
              <i className="fa-brands fa-facebook-f" />
              <i className="fa-brands fa-twitter" />
              <i className="fa-brands fa-instagram" />
              <i className="fa-brands fa-youtube" />
              <i className="fa-brands fa-linkedin-in" />
            </div>
          </div>
        </div>
      </section>
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
            <img src={smplLogo} alt="smpl/solution" className="footer_privacy__logo_smpl" />
          </a>
        </div>
      </section>
    </div>
  </footer>
);

export default Footer;
