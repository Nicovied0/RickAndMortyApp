import React from "react";
import style from "./Styles/Card.module.css";

const Card = ({ name, image, origin, species }) => {
  return (
    <div className={style.main_card}>
      <h2 className={style.text_card}>{name}</h2>
      <img src={image} alt={name} />
      <h3>{species}</h3>
      <h3>{origin}</h3>
    </div>
  );
};

export default Card;
