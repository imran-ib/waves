import React from "react";
import { Card } from "./Card";

function CardBlock(props) {
  const rednderCards = () =>
    props.list &&
    props.list.map((card, i) => (
      <div>
        <Card />
      </div>
    ));
  return (
    <div className="card_block">
      <div className="container">
        {props.title && <div className="title">{props.title}</div>}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap"
          }}
        >
          {props.list && rednderCards(props.list)}
        </div>
      </div>
    </div>
  );
}

export default CardBlock;
