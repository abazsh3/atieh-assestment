import React from "react";
import styled from "styled-components";
import { METAWEATHER_URL, WOEID } from "../../constants";
const AbbrIcon = styled.div`
  width: 32px;
  height: 32px;
  background: ${(props) =>
    "url(" + METAWEATHER_URL + "/static/img/weather/" + props.abbr + ".svg)"};
  margin-right: 5px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 13px;
`;
const AbbrContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 5px;

  align-items: baseline;
  margin-bottom: 10px;
`;
const WindContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;
const WindIcon = styled.div`
  background: url(${METAWEATHER_URL}/static/img/windarrow.svg);
  width: 15px;
  height: 15px;
  background-size: 100%;
  transform: rotate(270deg);
`;

export default function ForecastDetails({}) {
  const date = new Date();
  return (
    <Container>
      <h3>
        <a
          href={`${METAWEATHER_URL}${WOEID}/${date.getFullYear()}/${
            date.getUTCMonth() + 1
          }/${date.getDate()}`}
        >
          Today
        </a>
      </h3>
      <AbbrContainer>
        <AbbrIcon primary abbr={"hc"} />
        <span>Heavy Cloud</span>
      </AbbrContainer>
      <span>Max: 29°C</span>
      <span>Min: 21°C</span>
      <WindContainer>
        <WindIcon />
        <span>6 mph</span>
      </WindContainer>
    </Container>
  );
}
