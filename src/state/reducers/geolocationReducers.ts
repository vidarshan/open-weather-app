import { ActionType } from "../actionTypes";
import { Action } from "../actions/index";

const getGeolocationReducer = (
    state = {
      geolocation: {},
      error: null,
      loading: false,
    },
    action: Action
  ) => {
    switch (action.type) {
      case ActionType.GEOLOCATION_REQUEST:
        return { ...state, loading: true, error: null };
      case ActionType.GEOLOCATION_SUCCESS:
        return {
          ...state,
          geolocation: action.payload,
          loading: false,
          error: null,
        };
      case ActionType.GEOLOCATION_FAIL:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  }

export {getGeolocationReducer}