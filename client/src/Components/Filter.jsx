import React from "react";
import style from "./Styles/Nav.module.css";
import { filterOrigin } from "../redux/actions/actions";
import { useDispatch } from "react-redux";

const Filter = () => {
  // const characters = useSelector((state) => state.filteredCharacters);
  const dispatch = useDispatch();

  const handleFilterOrigin = (e) => {
    dispatch(filterOrigin(e.target.value));
    console.log(e.target.value);
  };

  return (
    <div className={style.filter_container}>
      <select className={style.filter_selec}>
        <option value="a-z">A-Z</option>
        <option value="z-a">Z-A</option>
      </select>
      <select
        className={style.filter_selec}
        onChange={(e) => handleFilterOrigin(e)}
      >
        <option value="all">All</option>
        <option value="created">Created </option>
        <option value="api">Api</option>
      </select>
    </div>
  );
};

export default Filter;
