import React, { useEffect, useState } from "react";
import Mealltem from "./Mealltem";
import RecipeIndex from "./ReacipeIndex";
import "./Style.css";

const Meal = () => {
  const [url, setUrl] = useState(
    "https:/www.themealdb.com/api/json/v1/1/search.php?f=a"
  );
  const [item, setItem] = useState();
  const [show, setShow] = useState(false);
  const [search,setSearch]=useState("")
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        //console.log(data)
        setItem(data.meals);
        setShow(true);
      });
  }, [url]);



  
  const searchRecipe=(evt)=>{
    setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
}

  const setIndex = (alpha) => {
    setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`);
  };

  return (
    <>
      <div className="main">
        <div className="heading">
          <h1> Search Your Food Recipe </h1>
          <h4> FOOD!!!</h4>
        </div>

        <div className="search-box">
          <input type="search" className="search-bar"
          onChange={e=> setSearch(e.target.value)}
          onKeyPress={searchRecipe}
          
          />
        </div>
        <div className="container">
          {show ? <Mealltem data={item} /> : "Not here"}
        </div>
        <div className="indexContainer">
          <RecipeIndex alphaIndex={(alpha) => setIndex(alpha)} />
        </div>
      </div>
    </>
  );
};

export default Meal;
