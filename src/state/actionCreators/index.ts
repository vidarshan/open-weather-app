import { Dispatch } from "redux";
import { ActionType } from "../actionTypes";
import { Action } from "../actions/index";
import axios from "axios";

export const changeWeatherType = (weatherType: string) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      dispatch({
        type: ActionType.WEATHER_TYPE_REQUEST,
      });
      dispatch({
        type: ActionType.WEATHER_TYPE_SUCCESS,
        payload: weatherType,
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.WEATHER_TYPE_FAIL,
        payload: error,
      });
    }
  };
};

export const getWeather = (latitude: number, longitude: number, units: any) => {
  const url = process.env.REACT_APP_OPEN_WEATHER_URL;
  const key = process.env.REACT_APP_OPEN_WEATHER_KEY;

  return async (dispatch: Dispatch<Action>) => {
    try {
      dispatch({
        type: ActionType.GET_WEATHER_REQUEST,
      });

      const { data } = await axios.get(
        `${url}?lat=${latitude}&lon=${longitude}&exclude=alerts&appid=${key}&units=${units}`
      );

      dispatch({
        type: ActionType.GET_WEATHER_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.GET_WEATHER_FAIL,
        payload: error,
      });
    }
  };
};

export const getGeolocation = (location: string) => {
  const key = process.env.REACT_APP_POSITION_STACK_GEOLOCATION_KEY;

  return async (dispatch: Dispatch<Action>) => {
    try {
      dispatch({
        type: ActionType.GEOLOCATION_REQUEST,
      });

      const { data } = await axios.get(
        `http://api.positionstack.com/v1/forward?access_key=${key}&query=${location}`
      );

      dispatch({
        type: ActionType.GEOLOCATION_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.GEOLOCATION_FAIL,
        payload: error,
      });
    }
  };
};
