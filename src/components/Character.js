import React from "react";
import CharacterInfo from "./CharacterInfo";

export default function Character(props) {
  const { apiData } = props;
  return (
    <div>
      <h2>{apiData.name}</h2>
      <hr />
      <img alt={apiData.name} src={apiData.image}></img>
      <hr />
      <CharacterInfo apiData={apiData} />
    </div>
  );
}
