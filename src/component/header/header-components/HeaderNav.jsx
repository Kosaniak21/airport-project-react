import React from 'react';
import PropTypes from 'prop-types';

const HeaderNav = ({ img, title, subtitle, btnText }) => (
  <nav>
    <img src={img} alt="plane" />
    <h4>{title}</h4>
    <p>{subtitle}</p>
    <a>{btnText}</a>
  </nav>
);

HeaderNav.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default HeaderNav;
