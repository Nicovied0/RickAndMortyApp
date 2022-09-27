import React from "react";
import style from "./Styles/Nav.module.css";
import Search from "./Search";
import Filter from "./Filter";
import AddPj from "./AddPj";
import icon from "../assets/log.jpg"

const Nav = () => {
  return (
    <div className={style.nav_container}>
      <img src={icon} alt="logo" className={style.nav_img}/>
      <Search />
      <div className={style.nav_div}>
        <Filter />
        <AddPj />
      </div>
    </div>
  );
};

export default Nav;
