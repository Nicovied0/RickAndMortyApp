import React from "react";
import { Link } from "react-router-dom";
import style from "./Styles/Nav.module.css";

const AddPj = () => {
  return (
    <div className={style.addPj_container}>
      <Link to={"/characters"}  className={style.addPj_container}> 
        <button>crear characer</button>
      </Link>
    </div>
  );
};

export default AddPj;
