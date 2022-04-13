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
  margin-top: 12px;

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
  margin-right: 5px;
  margin-top: 3px;
`;

export default function ForecastDetails({ weather, index }) {
  const date = new Date(weather.applicable_date);
  const weekDay = date.toLocaleDateString("en-Us", { weekday: "short" });
  const monthName = date.toLocaleDateString("en-Us", { month: "short" });
  let dayName = `${weekDay} ${date.getDate()} ${monthName}`;
  if (index === 0) {
    dayName = "Today";
  } else if (index === 1) {
    dayName = "Tomorrow";
  }
  return (
    <Container>
      <h3>
        <a
          href={`${METAWEATHER_URL}${WOEID}/${date.getFullYear()}/${
            date.getUTCMonth() + 1
          }/${date.getDate()}`}
        >
          {dayName}
        </a>
      </h3>
      <AbbrContainer>
        <AbbrIcon primary abbr={weather.weather_state_abbr} />
        <span>{weather.weather_state_name}</span>
      </AbbrContainer>
      <span>Max: {weather.max_temp}°C</span>
      <span>Min: {weather.min_temp}°C</span>
      <WindContainer>
        <WindIcon />
        <span>{parseInt(weather.wind_speed)} mph</span>
      </WindContainer>
    </Container>
  );
}
