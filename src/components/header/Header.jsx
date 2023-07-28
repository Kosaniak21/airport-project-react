import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import headerConfig from './headerConfig';
import logo from '../../../images/logo.png';
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
            <>
              <input
                type="checkbox"
                id={`link-element${config.idNum}`}
                checked={activeCheckbox === `link-element${config.idNum}`}
                onChange={() => handleCheckboxChange(`link-element${config.idNum}`)}
              />
              <label htmlFor={`link-element${config.idNum}`}>{config.labelText}</label>
            </>
            <div className="header-links--modal">
              <div className="header-links--modal-container">
                <div className="header-links--modal-block">
                  <nav>
                    <img src={config.modalData.headerNav.img} alt="plane" />
                    <h4>{config.modalData.headerNav.title}</h4>
                    <p>{config.modalData.headerNav.subtitle}</p>
                    <a>{config.modalData.headerNav.btnText}</a>
                  </nav>
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
