import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../redux/actions/actions";
import { useParams } from 'react-router';

function Details() {
  const character = useSelector((i) => i.details);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDetails(id));
  }, [id, dispatch]);

  return (
    <div className="detail">
      {character ? (
        <div>
          <h2 className="nameC">{character.name}</h2>
          <div className="allDetails">
            <img
              className="imgDetails"
              src={character.image}
              alt="Not found"
            ></img>
            <h3>status</h3>
          </div>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
}

export default Details;
