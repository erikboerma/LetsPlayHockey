import React, { useState, PropTypes } from "react";
import "./checkbox.css";

const Checkbox = ({
  type = "checkbox",
  name,
  label,
  checked = false,
  onChange
}) => (
  <div className="checkbox">
    <label>
      <input
        className="checkbox"
        type={type}
        name={name}
        checked={checked}
        onChange={onChange}
      />
      {label}
    </label>
  </div>
);

// Checkbox.propTypes = {
// type: PropTypes.string,
// name: PropTypes.string.isRequired,
// checked: PropTypes.bool,
// onChange: PropTypes.func.isRequired
// };

export default Checkbox;
