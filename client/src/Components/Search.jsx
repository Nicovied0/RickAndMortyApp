import React from "react"
import style from "./Styles/Search.module.css"


const Search = () => {
  return (

    <div className={style.searchbar_container}>
      <input
        className={`${style.searchbar}`}
        type="text"
        // onChange={handleInput}
        placeholder="Buscar..."
      />
      <button
        className={`${style.searchbar_button}`}
        type="submit"
        // onClick={handleSubmit}
      >
        buscar
      </button>
    </div>
  )
}

export default Search