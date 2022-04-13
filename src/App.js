import { useEffect, useState } from "react";
import apiService from "./apiInstance";
import { AppContainer, ForecastContainer } from "./AppStyles";
import ForecastDetails from "./components/ForecastDetails/ForecastDetails";
import LocationDetails from "./components/LocationDetails";
import { WOEID } from "./constants";

function App() {
  const [weatherState, setWeatherState] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    apiService
      .get(`location/${WOEID}/`)
      .then((res) => {
        setWeatherState(res.data.consolidated_weather);
        setIsLoading(false);
      })
      .catch((e) => {
        setError(true);
        setIsLoading(false);
      });
  }, []);
  if (isLoading) {
    return null;
  }
  if (error) {
    return <div dir="rtl">مشکلی در اتصال به api پیش امده است</div>;
  }

  return (
    <AppContainer>
      <ForecastContainer>
        <LocationDetails />
        {weatherState.map((weather, index) => {
          //we show 4 columns but api give us 5
          if (index > 4) {
            return null;
          }
          return <ForecastDetails weather={weather} index={index} />;
        })}
      </ForecastContainer>
    </AppContainer>
  );
}

export default App;
