import React from "react";
import classes from "./Card.module.css";
/**
 * Presentational component that will be reused and unified when a card is needed.
 * @param {*} props with the information that the card may contain.
 * @returns {JSX.Element} in charge of rendering a presentational Card component.
 */
const Card = (props) => {
  return (
    <div className={classes.card}>
      <img src={props.picture} alt="character" />
      <div className={classes.details}>
        <h3>{props.name}</h3>
        <button onClick={props.handleOpenModal}>See more...</button>
      </div>
    </div>
  );
};

export default Card;
