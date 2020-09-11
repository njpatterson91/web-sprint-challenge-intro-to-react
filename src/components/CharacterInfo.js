import React from "react";
import styled from "styled-components";

export default function CharacterInfo(props) {
  const { apiData } = props;
  return (
    <div>
      <p>Location:{apiData.location.name}</p>
      <p>
        Status: {apiData.status} :: Species: {apiData.species} :: Gender:
        {apiData.gender}
      </p>
      <p>Number of Episodes: {apiData.episode.length}</p>
    </div>
  );
}
