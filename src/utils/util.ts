import moment from "moment";
import {
  WiMoonAltFull,
  WiDayCloudy,
  WiCloudy,
  WiSleet,
  WiNightShowers,
  WiNightLightning,
  WiSnowflakeCold,
  WiFog,
} from "react-icons/wi";

export function timestampToDateTime(timestamp: number, type?: string) {
  return moment
    .unix(timestamp)
    .format(`${type === "dt" ? "LLLL" : "t" ? "hh:mm A" : "dddd, ll"}`);
}

export function uvIndexToDescription(uvi: number) {
  console.log(uvi);
  if (uvi === 0 && uvi <= 2) {
    return "Low";
  } else if (uvi <= 3 && uvi <= 5) {
    return "Moderate";
  } else if (uvi <= 6 && uvi <= 7) {
    return "High";
  } else if (uvi <= 8 && uvi <= 10) {
    return "Very high";
  } else if (uvi >= 11) {
    return "Extreme";
  }
}

// export function getWeatherIcon(iconCode:string){
//   switch(iconCode){
//     case ''
//   }
// }
