import "./styles.css";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function App() {
  const [search, setSearch] = useState();
  const [meals, setMeal] = useState();

  console.log(meals, search);

  useEffect(() => {
    const fetchMeal = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setMeal(data.meals);
      } catch (error) {
        console.log("errror", error);
      }
    };

    fetchMeal();
  }, [search]);

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="App" style={styles.dividion}>
      <input
        type="search"
        className="mb-3"
        style={styles.search}
        onChange={(e) => onChangeSearch(e)}
        placeHolder="Search here to get Data"
      />
      <div className="d-flex flex-row justify-content-start flex-wrap">
        {meals &&
          meals.length > 0 &&
          meals.map((data) => (
            <Link
              to="/details"
              state={{ data }}
              className="card text-start col-5 me-4 mb-4 p-2"
              style={styles.link}
            >
              <div>
                <img
                  src={data.strMealThumb}
                  alt="thumb"
                  style={{ height: "220px", width: "100%" }}
                />
                <h4>{data.strMeal}</h4>
                <h6>Ingrediants: </h6>
                <ul>
                  <li>{data.strIngredient1}</li>
                  <li>{data.strIngredient2}</li>
                  <li>{data.strIngredient3}</li>
                  <li>{data.strIngredient4}</li>
                </ul>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}

const styles = {
  search: {
    height: "30px",
    width: "300px",
  },
  dividion: {
    margin: "20px",
  },
  link: {
    textDecoration: "none",
  },
};
