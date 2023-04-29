import React, { useState } from 'react';
import plane from './../../images/plane.jpg';
import logo from './../../images/logo.png';
import hotels from './../../images/Hotels.jpg';
import vip from './../../images/vip.jpg';
import './header.scss';
import HeaderLinkElem from './header-components/HeaderLinkElem';
import { Link } from 'react-router-dom';
import HeaderNav from './header-components/HeaderNav';

const Header = () => {
  const [activeCheckbox, setActiveCheckbox] = useState(null);
  const handleCheckboxChange = id => {
    setActiveCheckbox(id === activeCheckbox ? null : id);
  };

  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/">
          <img src={logo} alt="header-logo" />
        </Link>
      </div>
      <nav className="header-links">
        <div className="header-links--element">
          <HeaderLinkElem
            labelText="Пасажирам"
            activeCheckbox={activeCheckbox}
            handleCheckboxChange={handleCheckboxChange}
            idNum="-1"
          />
          <div className="header-links--modal">
            <div className="header-links--modal-container">
              <div className="header-links--modal-block">
                <HeaderNav
                  img={plane}
                  title="Авіаквитки"
                  subtitle="Ви маєте можливість купити квитки онлайн"
                  btnText="КУПИТИ КВИТОК"
                />
              </div>
              <div className="header-links--modal-links">
                <div>
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
                </div>
                <div>
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
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-links--element">
          <HeaderLinkElem
            labelText="Послуги IEV"
            activeCheckbox={activeCheckbox}
            handleCheckboxChange={handleCheckboxChange}
            idNum="-2"
          />
          <div className="header-links--modal">
            <div className="header-links--modal-container">
              <div className="header-links--modal-block">
                <HeaderNav
                  img={hotels}
                  title="Готелі світу"
                  subtitle="Бронюйте готелі по всьому світу за найкращими цінами"
                  btnText="ЗНАТИ"
                />
              </div>
              <div className="header-links--modal-links">
                <div>
                  <p>Усі послуги</p>
                  <a>Тестування на COVID-19</a>
                  <a>Priority line</a>
                  <a>Express Line</a>
                  <a>Бізнес-зала</a>
                  <a>VIP-обслуговування</a>
                  <a>Готель IEV</a>
                </div>
                <div>
                  <a>Трансфер</a>
                  <a>Пакування багажу</a>
                  <a>Довгострокове паркування</a>
                  <a>Придбати авіаквитки</a>
                  <a>Готелі світу</a>
                  <a>Парковка</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-links--element">
          <HeaderLinkElem
            labelText="VIP"
            activeCheckbox={activeCheckbox}
            handleCheckboxChange={handleCheckboxChange}
            idNum="-3"
          />
          <div className="header-links--modal">
            <div className="header-links--modal-container">
              <div className="header-links--modal-block">
                <HeaderNav
                  img={vip}
                  title="Термінал B"
                  subtitle="Швидкість, комфорт, конфіденційність."
                  btnText="ЗАМОВИТИ"
                />
              </div>
              <div className="header-links--modal-links">
                <div>
                  <a>Термінал B</a>
                  <a>VIP-обслуговування</a>
                  <a>Трансфер</a>
                  <a>Готель IEV</a>
                  <a>Приватний рейс</a>
                </div>
                <div>
                  <a>Тарифи та правила</a>
                  <a>Артгалерея</a>
                  <a>Віртуальний тур</a>
                  <a>Контактна інформація</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-links--element">
          <HeaderLinkElem
            labelText="Партнерам"
            activeCheckbox={activeCheckbox}
            handleCheckboxChange={handleCheckboxChange}
            idNum="-4"
          />
          <div className="header-links--modal">
            <div className="header-links--modal-container">
              <div className="header-links--modal-block">
                <HeaderNav
                  img={plane}
                  title="Авіаквитки"
                  subtitle="Ви маєте можливість купити квитки онлайн"
                  btnText="Купити квиток"
                />
              </div>
              <div className="header-links--modal-links">
                <div>
                  <p>Партнерам</p>
                  <a>Головна "Партнерам"</a>
                  <a>Наші можливості</a>
                  <a>Характеристики аеропорту</a>
                  <a>Учбовий центр</a>
                  <a>Заявка на навчання в УЦ</a>
                  <a>Вантажний Термінал</a>
                  <a>Вакансії</a>
                  <a>Контакти</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-links--element">
          <HeaderLinkElem
            labelText="Пресцентр"
            handleCheckboxChange={handleCheckboxChange}
            activeCheckbox={activeCheckbox}
            idNum="-5"
          />
          <div className="header-links--modal">
            <div className="header-links--modal-container">
              <div className="header-links--modal-block">
                <HeaderNav
                  img={plane}
                  title="Авіаквитки"
                  subtitle="Ви маєте можливість купити квитки онлайн"
                  btnText="Купити квиток"
                />
              </div>
              <div className="header-links--modal-links">
                <div>
                  <p>Пресцентр</p>
                  <a>Головна пресцентру</a>
                  <a>Новини</a>
                  <a>Соц. і артпроекти</a>
                  <a>Статистика</a>
                  <a>Фінансова звітність</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
