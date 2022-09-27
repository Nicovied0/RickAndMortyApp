import React from 'react'
import style from "./Styles/Nav.module.css";

const Filter = () => {
  return (
    <div className={style.filter_container}>
        <select className={style.filter_selec}>
          <option value="a-z">A-Z</option>
          <option value="z-a">Z-A</option>
        </select>
        <select className={style.filter_selec}>
          <option value="all">All</option>
          <option value="api">Api</option>
          <option value="db">Db</option>
        </select>
      </div>
  )
}

export default Filter