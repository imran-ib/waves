import React from "react";
import { Link } from "react-router-dom";

function MyButton(props) {
  const Button = () => {
    let template = "";

    switch (props.type) {
      case "default":
        return (template = (
          <Link className="link_default" to={props.linkTo} {...props.addStyles}>
            {props.title}
          </Link>
        ));

      default:
        template = "";
    }
    return template;
  };

  return <div className="my_link">{Button()}</div>;
}

export default MyButton;
