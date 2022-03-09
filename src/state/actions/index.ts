import { ActionType } from "../actionTypes";

interface WeatherGetRequest {
  type: ActionType.GET_WEATHER_REQUEST;
  payload?: any;
}

interface WeatherGetSuccess {
  type: ActionType.GET_WEATHER_SUCCESS;
  payload: any;
}

interface WeatherGetFail {
  type: ActionType.GET_WEATHER_FAIL;
  payload: any;
}

interface GeolocationGetRequest {
  type: ActionType.GEOLOCATION_REQUEST;
  payload?: any;
}

interface GeolocationGetSuccess {
  type: ActionType.GEOLOCATION_SUCCESS;
  payload: any;
}

interface GeolocationGetFail {
  type: ActionType.GEOLOCATION_FAIL;
  payload: any;
}

interface WeatherTypeRequest {
  type: ActionType.WEATHER_TYPE_REQUEST;
  payload?: any;
}

interface WeatherTypeSuccess {
  type: ActionType.WEATHER_TYPE_SUCCESS;
  payload: any;
}

interface WeatherTypeFail {
  type: ActionType.WEATHER_TYPE_FAIL;
  payload: any;
}

export type Action =
  | WeatherGetRequest
  | WeatherGetSuccess
  | WeatherGetFail
  | GeolocationGetRequest
  | GeolocationGetSuccess
  | GeolocationGetFail
  | WeatherTypeRequest
  | WeatherTypeSuccess
  | WeatherTypeFail;
