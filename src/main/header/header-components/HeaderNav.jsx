import React from "react";

const HeaderNav = ({ img, title, subtitle, btnText }) => {
  return (
    <nav>
      <img src={img} alt="plane" />
      <h4>{title}</h4>
      <p>{subtitle}</p>
      <a>{btnText}</a>
    </nav>
  );
};

export default HeaderNav;
