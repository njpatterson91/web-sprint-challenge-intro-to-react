import React from "react";
import styled from "styled-components";
import CharacterInfo from "./CharacterInfo";

export default function Character(props) {
  const { apiData } = props;
  return (
    <div>
      <h2>{apiData.name}</h2>
      <img alt={apiData.name} src={apiData.image}></img>
      <CharacterInfo apiData={apiData} />
    </div>
  );
}
