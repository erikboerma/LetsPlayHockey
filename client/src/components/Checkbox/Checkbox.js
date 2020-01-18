import React from "react";
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

export default Checkbox;
