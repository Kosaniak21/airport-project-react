import React, { useState } from "react";

import plane from "./../../../../images/plane.jpg";
import "./header.scss";

const Header = () => {
  const [activeCheckbox, setActiveCheckbox] = useState(null);
  const handleCheckboxChange = (id) => {
    setActiveCheckbox(id === activeCheckbox ? null : id);
  };

  return (
    <header className="header">
      <div className="header-logo">
        <img src="./../../../images/logo.png" alt="header-logo" />
      </div>
      <nav className="header-links">
        <div className="header-links--element">
          <input
            type="checkbox"
            id="link-element-1"
            checked={activeCheckbox === "link-element-1"}
            onChange={() => handleCheckboxChange("link-element-1")}
          />
          <label htmlFor="link-element-1">Пасажирам</label>
          <div className="header-links--modal">
            <div className="header-links--modal-block">
              <nav>
                <img src={plane} alt="plane" />
                <h4>Авіаквитки</h4>
                <p>Ви маєте можливість купити квитки онлайн</p>
                <a>КУПИТИ КВИТОК</a>
              </nav>
            </div>
            <div className="header-links--modal-links">
              <ul>
                <p>Інформація</p>
                <a>COVID-19</a>
                <a>Напередодні вильоту</a>
                <a>Авіабезпека</a>
                <a>Митний контроль</a>
                <a>Прикорднонний контроль</a>
                <a>Людям з інвалідністю</a>
                <a>Подорож із тваринами</a>
                <a>Схема Аеропорту</a>
                <a>Контакти</a>
              </ul>
              <ul>
                <p>Загальне</p>
                <a>Онлайн-розклад</a>
                <a>Як дістатися</a>
                <a>Парковка</a>
                <a>Усе про багаж</a>
                <a>Кімнати матері та дитини</a>
                <a>Авіакомпанії</a>
                <a>Ресторани та магазини</a>
                <a>Mastercard Fast Line</a>
                <a>Форма відгуків та пропозицій</a>
              </ul>
            </div>
          </div>
        </div>
        <div className="header-links--element">
          <input
            type="checkbox"
            id="link-element-2"
            checked={activeCheckbox === "link-element-2"}
            onChange={() => handleCheckboxChange("link-element-2")}
          />
          <label htmlFor="link-element-2">Послуги IEV</label>
          <div className="header-links--modal">
            <div className="header-links--modal-block">
              <nav>
                {/* <img
                  src={require("./../../../../../images/Hotels.jpg")}
                  alt="plane"
                /> */}
                <h4>Готелі світу</h4>
                <p>Бронюйте готелі по всьому світу за найкращими цінами</p>
                <a>ЗНАЙТИ</a>
              </nav>
            </div>
            <div className="header-links--modal-links">
              <ul>
                <p>Усі послуги</p>
                <a>Тестування на COVID-19</a>
                <a>Priority line</a>
                <a>Express Line</a>
                <a>Бізнес-зала</a>
                <a>VIP-обслуговування</a>
                <a>Готель IEV</a>
              </ul>
              <ul>
                <a>Трансфер</a>
                <a>Пакування багажу</a>
                <a>Довгострокове паркування</a>
                <a>Придбати авіаквитки</a>
                <a>Готелі світу</a>
                <a>Парковка</a>
              </ul>
            </div>
          </div>
        </div>
        <div className="header-links--element">
          <input
            type="checkbox"
            id="link-element-3"
            checked={activeCheckbox === "link-element-3"}
            onChange={() => handleCheckboxChange("link-element-3")}
          />
          <label htmlFor="link-element-3">VIP</label>
          <div className="header-links--modal">
            <div className="header-links--modal-block">
              <nav>
                {/* <img
                  src={require("./../../../../../images/vip.jpg")}
                  alt="plane"
                /> */}
                <h4>Термінал B</h4>
                <p>Швидкість, комфорт, конфіденційність.</p>
                <a>ЗАМОВИТИ</a>
              </nav>
            </div>
            <div className="header-links--modal-links">
              <ul>
                <a>Термінал B</a>
                <a>VIP-обслуговування</a>
                <a>Трансфер</a>
                <a>Готель IEV</a>
                <a>Приватний рейс</a>
              </ul>
              <ul>
                <a>Тарифи та правила</a>
                <a>Артгалерея</a>
                <a>Віртуальний тур</a>
                <a>Контактна інформація</a>
              </ul>
            </div>
          </div>
        </div>
        <div className="header-links--element">
          <input
            type="checkbox"
            id="link-element-4"
            checked={activeCheckbox === "link-element-4"}
            onChange={() => handleCheckboxChange("link-element-4")}
          />
          <label htmlFor="link-element-4">Партнерам</label>
          <div className="header-links--modal">
            <div className="header-links--modal-block">
              <nav>
                {/* <img
                  src={require("./../../../../../images/plane.jpg")}
                  alt="plane"
                /> */}
                <h4>Авіаквитки</h4>
                <p>Ви маєте можливість купити квитки онлайн</p>
                <a>Купити квиток</a>
              </nav>
            </div>
            <div className="header-links--modal-links">
              <ul>
                <p>Партнерам</p>
                <a>Головна "Партнерам"</a>
                <a>Наші можливості</a>
                <a>Характеристики аеропорту</a>
                <a>Учбовий центр</a>
                <a>Заявка на навчання в УЦ</a>
                <a>Вантажний Термінал</a>
                <a>Вакансії</a>
                <a>Контакти</a>
              </ul>
            </div>
          </div>
        </div>
        <div className="header-links--element">
          <input
            type="checkbox"
            id="link-element-5"
            checked={activeCheckbox === "link-element-5"}
            onChange={() => handleCheckboxChange("link-element-5")}
          />
          <label htmlFor="link-element-5">Пресцентр</label>
          <div className="header-links--modal">
            <div className="header-links--modal-block">
              <nav>
                {/* <img src="./../../../../../images/plane.jpg" alt="plane" /> */}
                <h4>Авіаквитки</h4>
                <p>Ви маєте можливість купити квитки онлайн</p>
                <a>Купити квиток</a>
              </nav>
            </div>
            <div className="header-links--modal-links">
              <ul>
                <p>Пресцентр</p>
                <a>Головна пресцентру</a>
                <a>Новини</a>
                <a>Соц. і артпроекти</a>
                <a>Статистика</a>
                <a>Фінансова звітність</a>
              </ul>
            </div>
          </div>
        </div>
        <div className="header-links--toggle">
          <input type="checkbox" id="toggle-language" />
          <label htmlFor="toggle-language">UA</label>
          <button className="header-language__btn">EN</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
