import { Alert, Col, Divider, Grid, Title } from "@mantine/core";
import { BiCurrentLocation } from "react-icons/bi";
import { useEffect } from "react";
import HourlyCard from "./HourlyCard";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../state";
import WeatherCard from "./WeatherCard";

import Spinner from "./Spinner";
import DailyCard from "./DailyCard";
import MinutelyCard from "./MinutelyCard";

const Home = () => {
  const dispatch = useDispatch();

  const { weather, loading } = useSelector((state: State) => state.weather);

  const { weatherType } = useSelector((state: State) => state.weatherType);

  const { geolocation } = useSelector((state: State) => state.geolocation);

  const { getWeather } = bindActionCreators(actionCreators, dispatch);
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        // getWeather(position.coords.latitude, position.coords.longitude);
      });
    } else {
      console.log("Not Available");
    }
  }, []);

  let d = {
    dt: 1646913600,
    sunrise: 1646893577,
    sunset: 1646934923,
    moonrise: 1646905080,
    moonset: 1646877840,
    moon_phase: 0.25,
    temp: {
      day: 12.35,
      min: 8.05,
      max: 14.39,
      night: 10.37,
      eve: 13.86,
      morn: 8.05,
    },
    feels_like: { day: 11.52, night: 9.42, eve: 13, morn: 5.82 },
    pressure: 1017,
    humidity: 72,
    dew_point: 7.34,
    wind_speed: 5.44,
    wind_deg: 175,
    wind_gust: 13.67,
    weather: [
      { id: 804, main: "Clouds", description: "overcast clouds", icon: "04d" },
    ],
    clouds: 100,
    pop: 0,
    uvi: 1.14,
  };

  useEffect(() => {
    if (Object.keys(geolocation)) {
      if (
        Object.keys(geolocation).includes("data") &&
        geolocation.data.length
      ) {
        getWeather(
          geolocation.data[0].latitude,
          geolocation.data[0].longitude,
          localStorage.getItem("units")
            ? localStorage.getItem("units")
            : "standard"
        );
      }
    }
  }, [geolocation]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          {Object.keys(weather).includes("current") ? (
            <Grid>
              <Col span={12}>
                <WeatherCard
                  timezone={weather.timezone}
                  items={weather.current}
                />

                <Divider />
              </Col>
              <Col span={12}>
                <Title order={5}>
                  Forecast for the{" "}
                  {weatherType === "now"
                    ? "next hour"
                    : weatherType === "hourly"
                    ? "next 48 hours"
                    : "next 7 days"}{" "}
                </Title>
              </Col>
              <Col span={12}>
                <Grid>
                  {weatherType === "now"
                    ? Object.keys(weather).includes("minutely") &&
                      weather.minutely.map((item: any, key: number) => {
                        if (key % 15 === 0) {
                          return (
                            <Col span={3}>
                              <MinutelyCard
                                dt={item.dt}
                                precipitation={item.precipitation}
                              />
                            </Col>
                          );
                        }
                      })
                    : weatherType === "daily"
                    ? Object.keys(weather).includes("daily") &&
                      weather.hourly.map((item: any, key: number) => {
                        if (key % 12 === 0) {
                          return (
                            <Col span={12}>
                              <DailyCard
                                dt={1646913600}
                                sunrise={1646893577}
                                sunset={1646934923}
                                moonrise={1646905080}
                                moonset={1646877840}
                                moon_phase={0.25}
                                temp={3}
                                feels_like={22.22}
                                pressure={1017}
                                humidity={72}
                                dew_point={7.34}
                                wind_speed={5.44}
                                wind_deg={175}
                                wind_gust={13.67}
                                weather={[
                                  {
                                    id: 804,
                                    main: "Clouds",
                                    description: "overcast clouds",
                                    icon: "04d",
                                  },
                                ]}
                                clouds={100}
                                pop={0}
                                uvi={1.14}
                              />
                            </Col>
                          );
                        }
                      })
                    : Object.keys(weather).includes("hourly") &&
                      weather.hourly.map((item: any, key: number) => {
                        if (key % 12 === 0) {
                          return (
                            <Col span={3}>
                              <HourlyCard
                                dt={item.dt}
                                temp={item.temp}
                                feels_like={item.feels_like}
                                pressure={item.pressure}
                                humidity={item.humidity}
                                dew_point={item.dew_point}
                                uvi={item.uvi}
                                clouds={item.clouds}
                                visibility={item.visibility}
                                wind_speed={item.wind_speed}
                                wind_deg={item.wind_deg}
                                wind_gust={item.wind_gust}
                                weather={item.weather}
                              />
                            </Col>
                          );
                        }
                      })}
                </Grid>
              </Col>
            </Grid>
          ) : (
            <Alert
              icon={<BiCurrentLocation size={16} />}
              title="Location"
              color="indigo"
            >
              Search for a location or select your current location
            </Alert>
          )}
        </>
      )}
    </>
  );
};

export default Home;
