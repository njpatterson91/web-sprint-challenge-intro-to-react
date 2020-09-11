// Write your Character component here
import React from "react";
import styled from "styled-components";
import Character from "./Character";

const CardDiv = styled.div`
  background-color: white;
  margin: 3%;
  border-radius: 10px;
  padding: 1%;
`;

export default function Characters(props) {
  const { apiData } = props;
  return apiData.map((res) => {
    return (
      <CardDiv>
        <Character key={res.id} apiData={res} />
      </CardDiv>
    );
  });
}
