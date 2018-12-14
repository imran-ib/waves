import React from "react";

const TextInputField = ({
  input,
  width,
  type,
  placeholder,
  meta: { touched, error }
}) => {
  return (
    <div width={width}>
      <input {...input} placeholder={placeholder} type={type} />
      {touched && error && <label style={{ color: "red" }}>{error}</label>}
    </div>
  );
};

export default TextInputField;
