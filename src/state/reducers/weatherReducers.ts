import { ActionType } from "../actionTypes";
import { Action } from "../actions/index";

const getWeatherReducer = (
    state = {
      weather: {},
      error: null,
      loading: false,
    },
    action: Action
  ) => {
    switch (action.type) {
      case ActionType.GET_WEATHER_REQUEST:
        return { ...state, loading: true, error: null };
      case ActionType.GET_WEATHER_SUCCESS:
        return {
          ...state,
          weather: action.payload,
          loading: false,
          error: null,
        };
      case ActionType.GET_WEATHER_FAIL:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  }

export {getWeatherReducer}