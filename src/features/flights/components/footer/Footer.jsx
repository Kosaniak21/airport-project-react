import React from "react";

import "./footer.scss";

const Footer = () => (
  <footer className="footer">
    <div className="container">
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
            <a
              className="footer_contact__number"
              href="tel:+38 (044) 500 49 73"
            >
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
            <a
              src="https://ufuture.com/uk/"
              className="footer_privacy__link_img"
            >
              <div className="link_flex">
                <div>
                  <p>
                    Part of <b>Ufuture</b>
                  </p>
                  <b>Investment Group</b>
                </div>

                <img
                  src="/images/logo_white.webp"
                  alt="icon_link_privacy"
                  className="footer_privacy__logo_white"
                />
              </div>
            </a>
          </div>
        </div>

        <div className="footer_privacy__block">
          <a
            className="footer_privacy__smpl_link"
            src="https://smpl.solutions/"
          >
            <p>Розробка сайту</p>
            <img
              src="/images/smplLogo.webp"
              alt="smpl/solution"
              className="footer_privacy__logo_smpl"
            />
          </a>
        </div>
      </section>
    </div>
  </footer>
);

export default Footer;
