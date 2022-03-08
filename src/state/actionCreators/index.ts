import { Dispatch } from "redux";
import { ActionType } from "../actionTypes";
import { Action } from "../actions/index";
import { store } from "../store";
import axios from "axios";

export const getWeather = (latitude: number, longitude:number) => {

    const url = process.env.REACT_APP_OPEN_WEATHER_URL;
    const key = process.env.REACT_APP_OPEN_WEATHER_KEY;

    return async (dispatch: Dispatch<Action>) => {
      try {
        dispatch({
          type: ActionType.GET_WEATHER_REQUEST,
        });
  
        const { data } = await axios.get(`${url}?lat=${latitude}&lon=${longitude}&exclude=alerts&appid=${key}`);
  
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

  export const getGeolocation = (location:string) => {

    const key = process.env.REACT_APP_POSITION_STACK_GEOLOCATION_KEY;

    return async (dispatch: Dispatch<Action>) => {
      try {
        dispatch({
          type: ActionType.GEOLOCATION_REQUEST,
        });
  
        const { data } = await axios.get(`http://api.positionstack.com/v1/forward
        ? access_key = ${key}
        & query = ${location}`);
  
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