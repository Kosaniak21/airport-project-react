import React from 'react';
import PropTypes from 'prop-types';

const HeaderLinkElem = React.memo(({ labelText, activeCheckbox, handleCheckboxChange, idNum }) => {
  const id = `link-element${idNum}`;
  return (
    <>
      <input
        type="checkbox"
        id={id}
        checked={activeCheckbox === id}
        onChange={() => handleCheckboxChange(id)}
      />
      <label htmlFor={id}>{labelText}</label>
    </>
  );
});

HeaderLinkElem.propTypes = {
  labelText: PropTypes.string.isRequired,
  activeCheckbox: PropTypes.string,
  handleCheckboxChange: PropTypes.func.isRequired,
  idNum: PropTypes.string.isRequired,
};

export default HeaderLinkElem;
