import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../redux/actions/actions";

function Details(props) {
    const [loading, setLoading] = useState(false)
    const details = useSelector(i => i.details);
    const dispatch = useDispatch();
    const {id} = props.match.params;

    useEffect(() => {
        dispatch(getDetails(id))
            setLoading(true)
    }, [id, dispatch]);
    
    return (
        <div className="detail">
            {loading? 
            <div >
            <h2 className="nameC">{details.name}</h2>
            <div className="allDetails">
                <img className="imgDetails" src={details.image} alt="Not found"></img>
                <h3>status</h3>
                <h4>{details.species}</h4>
                <h4>{details.origin}</h4>
                <h3>sasas</h3>
            </div>
        </div> : 
        <div>Loading</div>
        } 
        </div>
    )
};

export default Details;