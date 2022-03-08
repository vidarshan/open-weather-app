import { combineReducers } from "redux";
import { getGeolocationReducer } from "./geolocationReducers";
import { getWeatherReducer } from "./weatherReducers";

const reducers = combineReducers({
   weather: getWeatherReducer,
   geolocation: getGeolocationReducer
  });
  
  export default reducers;
  
  export type State = ReturnType<typeof reducers>;