import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../redux/actions/actions";
import { useParams } from "react-router";

function Details() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const character = useSelector((state) => state.details);


  useEffect(() => {
    dispatch(getDetails(id));
  }, [dispatch, id]);

  console.log(id);
  return (
    <div className="detail">
      {character ? (
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
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default Details;
