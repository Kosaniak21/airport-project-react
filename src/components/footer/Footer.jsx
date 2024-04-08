import React from 'react';

import './footer.scss';

import logowhite from '@images/logowhite.webp';
import smplLogo from '@images/smplLogo.webp';

import footerConfig from './footerConfig';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <section className="footer-links">
        {footerConfig.map((section, index) => (
          <nav key={index} className="footer-links__list">
            <p className="footer-links__title">{section.title}</p>
            {section.links.map((link, i) => (
              <a href="/" key={i} className="footer-links__link">
                {link}
              </a>
            ))}
          </nav>
        ))}
        <div className="footer-contact">
          <div className="footer-contact__main">
            <p className="footer-contact__text">Авіадовідка</p>
            <a className="footer-contact__number" href="tel:+38 (044) 500 49 73">
              +38 (044) 500 49 73
            </a>
          </div>
          <div className="footer-contact__main">
            <p className="footer-contact__text">Приєднуйтесь до нас</p>
            <div className="footer-contact__icons">
              <i className="fa-brands fa-facebook-f" />
              <i className="fa-brands fa-twitter" />
              <i className="fa-brands fa-instagram" />
              <i className="fa-brands fa-youtube" />
              <i className="fa-brands fa-linkedin-in" />
            </div>
          </div>
        </div>
      </section>
      <section className="footer-privacy">
        <div className="footer-privacy__first">
          <div className="footer-privacy__wrapper footer-wrapper-margin">
            <p>© 2011-2021</p>
            <p>Міжнародний аеропорт «Київ»</p>
          </div>
          <div className="footer-privacy__wrapper">
            <a href="https://ufuture.com/uk/" className="footer-privacy__link-img">
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
                  className="footer-privacy__logo_white"
                />
              </div>
            </a>
          </div>
        </div>

        <div className="footer-privacy__wrapper">
          <a className="footer-privacy__smpl-link" href="https://smpl.solutions/">
            <p>Розробка сайту</p>
            <img src={smplLogo} alt="smpl/solution" className="footer-privacy__logo_smpl" />
          </a>
        </div>
      </section>
    </div>
  </footer>
);

export default Footer;
