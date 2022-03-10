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
                  {weatherType === "now" ? (
                    Object.keys(weather).includes("minutely") &&
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
                  ) : weatherType === "daily" ? (
                    <>daily</>
                  ) : (
                    Object.keys(weather).includes("hourly") &&
                    weather.minutely.map((item: any, key: number) => {
                      if (key % 15 === 0) {
                        return (
                          <Col span={3}>
                            <HourlyCard dt={item.dt} temp={item.temp} />
                          </Col>
                        );
                      }
                    })
                  )}
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
