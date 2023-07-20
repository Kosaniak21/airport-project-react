import React from 'react';
import footerConfig from './footerConfig';
const FooterLinks = () => (
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
);

export default FooterLinks;
