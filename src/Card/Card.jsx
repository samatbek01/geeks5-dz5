import React, { useState } from "react";
import classes from "./card.module.css";

const Card = ({ cardInfo }) => {
  const [click, setClick] = useState(false);

  return (
    <div
      className={classes.card}
      onMouseEnter={() => setClick(true)}
      onMouseLeave={() => setClick(false)}
    >
      <h2>{cardInfo.title}</h2>
      {click && (
        <div>
          <p>{cardInfo.body}</p>
        </div>
      )}
    </div>
  );
};

export default Card;
