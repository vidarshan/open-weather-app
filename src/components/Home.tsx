import { Alert, Col, Divider, Grid, Title } from "@mantine/core";
import { AiOutlineCloud, AiOutlineEye } from "react-icons/ai";
import { RiCloudWindyLine, RiDropLine, RiSunLine } from "react-icons/ri";
import { BiCurrentLocation } from "react-icons/bi";
import { useEffect } from "react";
import HourlyCard from "./HourlyCard";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../state";
import WeatherCard from "./WeatherCard";
import Spinner from "./Spinner";

const Home = () => {
  const dispatch = useDispatch();

  const { weather, loading, error } = useSelector(
    (state: State) => state.weather
  );

  const { weatherType } = useSelector((state: State) => state.weatherType);

  const { geolocation } = useSelector((state: State) => state.geolocation);

  const { getWeather, changeWeatherType } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const weatherItems = [
    { id: 1, title: "UV Index", icon: <RiSunLine /> },
    { id: 2, title: "Humidity", icon: <RiDropLine /> },
    { id: 3, title: "Clouds", icon: <AiOutlineCloud /> },
    { id: 4, title: "Visibility", icon: <AiOutlineEye /> },
    { id: 5, title: "Wind", icon: <RiCloudWindyLine /> },
    { id: 6, title: "Pressure", icon: <AiOutlineCloud /> },
    { id: 7, title: "Sunrise", icon: <AiOutlineCloud /> },
    { id: 8, title: "Sunset", icon: <AiOutlineCloud /> },
  ];

  // useEffect(() => {
  //   if ("geolocation" in navigator) {
  //     navigator.geolocation.getCurrentPosition(function (position) {
  //       getWeather(position.coords.latitude, position.coords.longitude);
  //     });
  //   } else {
  //     console.log("Not Available");
  //   }
  // }, []);

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
  }, [geolocation, weatherType]);

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
                <Title order={5}>Forecast for the next hour</Title>
              </Col>
              <Col span={12}>
                <Grid>
                  {weatherType === "now" ? (
                    Object.keys(weather).includes("minutely") &&
                    weather.minutely.map((item: any, key: number) => {
                      if (key % 15 === 0) {
                        return (
                          <Col span={3}>
                            <HourlyCard
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
                    <>hourly</>
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
