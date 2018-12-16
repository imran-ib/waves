import React from "react";

function TopHeading(props) {
  return (
    <div className="page_top">
      <div className="container">{props.title}</div>
    </div>
  );
}

export default TopHeading;
