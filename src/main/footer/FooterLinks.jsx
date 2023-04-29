import React from "react";

const FooterLinks = () => (
  <section className="footer_links">
    <nav className=" footer_links__list">
      <p className="footer_links__title">Пасажирам</p>
      <a className="footer_links__link">Розклад рейсів</a>
      <a className="footer_links__link">Замовлення послуг</a>
      <a className="footer_links__link">Контактна інформація</a>
      <a className="footer_links__link">Політика конфіденційності</a>
      <a className="footer_links__link">Форма відгуків та пропозицій</a>
    </nav>
    <nav className=" footer_links__list">
      <p className="footer_links__title">Партнерам</p>
      <a className="footer_links__link">Головна</a>
      <a className="footer_links__link">Наземне обслуговування</a>
      <a className="footer_links__link">Характеристики аеродрому</a>
      <a className="footer_links__link">Учбовий центр</a>
      <a className="footer_links__link">Ваканciї</a>
    </nav>
    <nav className=" footer_links__list">
      <p className="footer_links__title">Пресцентр</p>
      <a className="footer_links__link">Головна пресцентру</a>
      <a className="footer_links__link">Останні новини</a>
      <a className="footer_links__link">Соціальні та артпроекти</a>
      <a className="footer_links__link">Фінансова звітність</a>
      <a className="footer_links__link">Статистика пасажиропотоку</a>
    </nav>
    <div className=" footer_links__list-accordion">
      <input type="checkbox" id="acordion-checkbox" />
      <label htmlFor="acordion-checkbox">Пасажирам</label>
      <nav className="footer_links__acord-cont">
        <a className="footer_links__link">Розклад рейсів</a>
        <a className="footer_links__link">Замовлення послуг</a>
        <a className="footer_links__link">Контактна інформація</a>
        <a className="footer_links__link">Політика конфіденційності</a>
        <a className="footer_links__link">Форма відгуків та пропозицій</a>
      </nav>
    </div>
    <div className="footer_links__list-accordion">
      <input type="checkbox" id="acordion-checkbox-2" />
      <label htmlFor="acordion-checkbox-2">Партнерам</label>
      <nav className="footer_links__acord-cont">
        <a className="footer_links__link">Головна</a>
        <a className="footer_links__link">Наземне обслуговування</a>
        <a className="footer_links__link">Характеристики аеродрому</a>
        <a className="footer_links__link">Учбовий центр</a>
        <a className="footer_links__link">Ваканciї</a>
      </nav>
    </div>
    <div className=" footer_links__list-accordion">
      <input type="checkbox" id="acordion-checkbox-3" />
      <label htmlFor="acordion-checkbox-3">Пресцентр</label>
      <nav className="footer_links__acord-cont">
        <a className="footer_links__link">Головна пресцентру</a>
        <a className="footer_links__link">Останні новини</a>
        <a className="footer_links__link">Соціальні та артпроекти</a>
        <a className="footer_links__link">Фінансова звітність</a>
        <a className="footer_links__link">Статистика пасажиропотоку</a>
      </nav>
    </div>
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
