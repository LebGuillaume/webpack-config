import "../style/index.scss";
import React from "react";
import Recipes from "./Recipes";
import sword from "../images/57297.jpg";
import img from "../images/007_DKM_01.jpg";
const App = () => {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h1>yo lallalal</h1>
        </section>
        <img src={sword} alt="sword" width="250" />
        <img src={img} alt="img" width="300" />
        <Recipes></Recipes>
      </main>
    </>
  );
};

export default App;
