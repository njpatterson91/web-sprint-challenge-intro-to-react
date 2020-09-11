import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import styled from "styled-components";
import Characters from "./components/Characters";

const App = () => {
  const [rickAndMortyApi, setRickAndMortyApi] = useState([]);
  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character`)
      .then((res) => {
        setRickAndMortyApi(res.data.results);
      })
      .catch((err) => {
        console.log(`${err} this aint it`);
      });
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Characters apiData={rickAndMortyApi} />
    </div>
  );
};

export default App;
