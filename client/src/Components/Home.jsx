import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCharacters } from "../redux/actions/actions";
import { Link } from "react-router-dom";
import Card from "./Card";

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


  console.log(allCharacters)

  return (
    <div>
      <Link to="/character">
        <button>Crear Personaje</button>
      </Link>
      {/* <button onClick={e => handleClick(e)}>Recargar Home</button> */}

      <div>
        <select>
          <option value="a-z">A-Z</option>
          <option value="z-a">Z-A</option>
        </select>
        <select>
          <option value="all">All</option>
          <option value="api">Api</option>
          <option value="db">Db</option>
        </select>
      </div>
      <hi>Characters</hi>
      {
      allCharacters?.map((e) => {
        return (
          <div>
            <Link to={"/character/" + e.id}>
              <Card
                name={e.name}
                image={e.image}
                key={e.id}
              />
            </Link>
          </div>
        );
      })
      }
    </div>
  );
};

export default Home;
