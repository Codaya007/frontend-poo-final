import React from "react";
import { Link } from "react-router-dom";

/**
 * props
 * isButton default true => define if is normal
 * title
 * action => onClick
 * href => destination for Link
 * moreStyle for add more style beside a default
 */
const Button = ({
  isButton = true,
  title = "",
  action,
  href,
  moreStyle,
  type = "button",
}) => {
  return (
    <>
      {isButton ? (
        <div className={"d-grid " + moreStyle}>
          <button className="btn btn-primary" type={type} onClick={action}>
            {title}
          </button>
        </div>
      ) : (
        <Link to={href}>{title}</Link>
      )}
    </>
  );
};

export default Button;
