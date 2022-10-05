import React from "react";
import style from "./Styles/Nav.module.css";
import Search from "./Search";
import AddPj from "./AddPj";
import icon from "../assets/log.jpg";

const Nav = () => {
  return (
    <div className={style.nav_container}>
      <img src={icon} alt="logo" className={style.nav_img} />
      <Search />
      <AddPj />
    </div>
  );
};

export default Nav;
