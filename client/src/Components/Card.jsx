import React from "react";

const Card = ({ name, image, origin, species,id }) => {
  return (
    <div>
      
        <h2>Name: {name}</h2>
        <img src={image} alt={name} />
        <h3>{species}</h3>
        <h3>{origin}</h3>
    </div>
  );  
};

export default Card;
