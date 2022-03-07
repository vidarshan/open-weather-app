import { combineReducers } from "redux";
import { getWeatherReducer } from "./weatherReducers";

const reducers = combineReducers({
   weather: getWeatherReducer
  });
  
  export default reducers;
  
  export type State = ReturnType<typeof reducers>;