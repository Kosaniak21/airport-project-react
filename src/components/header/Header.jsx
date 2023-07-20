import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import headerConfig from './headerConfig';
import logo from '../../../images/logo.png';
import HeaderLinkElem from './header-components/HeaderLinkElem';
import HeaderNav from './header-components/HeaderNav';
import './header.scss';

const Header = () => {
  const [activeCheckbox, setActiveCheckbox] = useState(null);
  const handleCheckboxChange = id => {
    setActiveCheckbox(prevId => (id === prevId ? null : id));
  };

  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/">
          <img src={logo} alt="header-logo" />
        </Link>
      </div>
      <nav className="header-links">
        {headerConfig.map(config => (
          <div key={config.idNum} className="header-links--element">
            <HeaderLinkElem
              labelText={config.labelText}
              activeCheckbox={activeCheckbox}
              handleCheckboxChange={handleCheckboxChange}
              idNum={config.idNum}
            />
            <div className="header-links--modal">
              <div className="header-links--modal-container">
                <div className="header-links--modal-block">
                  <HeaderNav
                    img={config.modalData.headerNav.img}
                    title={config.modalData.headerNav.title}
                    subtitle={config.modalData.headerNav.subtitle}
                    btnText={config.modalData.headerNav.btnText}
                  />
                </div>
                <div className="header-links--modal-links">
                  {config.modalData.links.map((section, index) => (
                    <div key={index}>
                      <p>{section.title}</p>
                      {section.links.map((link, i) => (
                        <a key={i}>{link}</a>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </nav>
    </header>
  );
};

export default Header;
