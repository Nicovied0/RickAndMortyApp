import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../redux/actions/actions";
import { useParams } from "react-router-dom";

function Details() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetails(id));
  }, [dispatch, id]);

  const character = useSelector((state) => state.character);

  
  if (!character) {
   
    return <h2>cargando</h2>;
  } else {
    console.log(character,'SEGUNDO')
    return (
      <div className="detail">
        <div>
          <h1>{character?.name}</h1>
          <img src={character?.image} alt={character?.name} />

          <h2>Episodes:</h2>
          <ul>
            {character?.episodes.map((episode) => (
              <li>
                Episode {episode.id} : {episode.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
    
  }
}

export default Details;
