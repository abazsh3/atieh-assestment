import React from "react";
import styled from "styled-components";
import { METAWEATHER_URL, WOEID } from "../constants";
import { formattedTime } from "../utils/helper";

const Container = styled.div`
  display: grid;
  grid-template-rows: repeat(2, minmax(min-content, max-content));
  grid-gap: 10px;
  justify-content: flex-start;
`;

export default function LocationDetails() {
  return (
    <Container>
      <h2>
        <a href={METAWEATHER_URL + WOEID}>Tehran</a>
      </h2>
      <p>
        {formattedTime(new Date())}
        <br />
        Updated 2 hours, 57 minutes ago
      </p>
    </Container>
  );
}
