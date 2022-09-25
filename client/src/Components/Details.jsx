import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../redux/actions/actions";
// import { useParams } from "react-router-dom";

function Details(props) {
  const [loading, setLoading] = useState(false);
  const details = useSelector((i) => i.details);
  const dispatch = useDispatch();
  const { id } = props.match.params;
  

  useEffect(() => {
    dispatch(getDetails(id));
    setLoading(true);
  }, [dispatch, id]);

  // console.log(details,'detalles')
  // console.log(loading,'cargando')
  // 
  return (
    <div className="detail">
      {loading ? (
        <div>
          <h1>{details?.name}</h1>
          <img src={details?.image} alt={details?.name} />
          <h2>{details?.name}</h2>
          <h2>Origin: {details?.origin}</h2>
          <h2>species: {details?.species}</h2>  
        </div>
      ) : (
        <img src={details?.image} alt={details?.name} />
      )}
    </div>
  );
}

export default Details;
