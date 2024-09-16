import "./styles.css";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Details() {
  const location = useLocation();
  const { data } = location.state || {};
  console.log(data);

  return (
    <div className="m-4">
      <Link to="/"> Back</Link>
      <div className="mt-3">
        <h3>{data.strMeal}</h3>
        <img
          src={data.strMealThumb}
          alt="thumbnail"
          style={{ height: "500px", width: "100%" }}
        />
        <h4>Ingredients: </h4>
        <ul>
          <li>{data.strIngredient1}</li>
          <li>{data.strIngredient2}</li>
          <li>{data.strIngredient3}</li>
          <li>{data.strIngredient4}</li>
          <li>{data.strIngredient5}</li>
        </ul>

        <h6>
          Youtube Link:{" "}
          <a href={data.strYoutube} target="_blank">
            Click Here{" "}
          </a>
        </h6>
      </div>
    </div>
  );
}
