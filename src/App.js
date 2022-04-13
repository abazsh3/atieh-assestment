import { AppContainer, ForecastContainer } from "./AppStyles";
import LocationDetails from "./components/LocationDetails";

function App() {
  return (
    <AppContainer>
      <ForecastContainer>
        <LocationDetails />
      </ForecastContainer>
    </AppContainer>
  );
}

export default App;
