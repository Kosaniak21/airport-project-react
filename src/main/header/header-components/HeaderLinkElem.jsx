import React from "react";

const HeaderLinkElem = React.memo(
  ({ labelText, activeCheckbox, handleCheckboxChange, idNum }) => {
    let id = `link-element${idNum}`;
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
  }
);

export default HeaderLinkElem;
