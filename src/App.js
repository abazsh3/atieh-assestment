import { AppContainer, ForecastContainer } from "./AppStyles";
import ForecastDetails from "./components/ForecastDetails/ForecastDetails";
import LocationDetails from "./components/LocationDetails";

function App() {
  return (
    <AppContainer>
      <ForecastContainer>
        <LocationDetails />
        <ForecastDetails />
      </ForecastContainer>
    </AppContainer>
  );
}

export default App;
