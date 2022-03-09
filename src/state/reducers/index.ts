import { combineReducers } from "redux";
import { getGeolocationReducer } from "./geolocationReducers";
import { getWeatherReducer, weatherTypeReducer } from "./weatherReducers";

const reducers = combineReducers({
  weather: getWeatherReducer,
  geolocation: getGeolocationReducer,
  weatherType: weatherTypeReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
