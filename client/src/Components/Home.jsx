import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCharacters } from "../redux/actions/actions";
import { Link } from "react-router-dom";
import Card from "./Card";
import Nav from "./Nav";
// import Loader from "../assets/Loading.gif"
import style from "./Styles/Home.module.css"

const Home = () => {
  const dispatch = useDispatch();
  const allCharacters = useSelector((state) => state.characters);

  useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch]);

  // function handleClick(e){
  //   e.preventDefault();
  //   dispatch(getCharacters())
  // }

  console.log(allCharacters.length);
  if (!allCharacters) {
    return <div className={style.container}>Error</div>;
  } else if (allCharacters.length) {
    return (
      <div >
        <Nav />
        <div className={style.container}>
        {allCharacters?.map((e) => {
          return (
            <div >
              <Link to={"/character/" + e.id} className={style.text_container}>
                <Card name={e.name} image={e.image} key={e.id} />
              </Link>
            </div>
          );
        })}
        </div>
      </div>
    );
  } else {
    return (
      <div className={style.container}>
        <span className={style.loader}></span>
      </div>
    );
  }
};

export default Home;
