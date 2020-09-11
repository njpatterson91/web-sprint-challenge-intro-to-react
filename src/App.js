import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import styled from "styled-components";
import Characters from "./components/Characters";
import Header from "./components/Header";

const FlexBox = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin: 2%;
`;

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
      <Header />
      <FlexBox>
        <Characters apiData={rickAndMortyApi} />
      </FlexBox>
    </div>
  );
};

export default App;
