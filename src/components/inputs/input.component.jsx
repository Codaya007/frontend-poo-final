import React from "react";

const FormInput = ({ name, title, type, placeholder, value, handleChange }) => {
  return (
    <>
      <label className="label-form" htmlFor={`form-${title}`}>
        {title}
      </label>
      <input
        className="input-form"
        onChange={handleChange}
        placeholder={placeholder}
        type={type}
        value={value}
        name={name}
        required
      />
    </>
  );
};

export default FormInput;
