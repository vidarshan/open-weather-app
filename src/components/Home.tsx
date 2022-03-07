import {
  Card,
  Col,
  Container,
  Divider,
  Grid,
  Group,
  Text,
  Title,
} from "@mantine/core";
import { AiOutlineCloud, AiOutlineEye } from "react-icons/ai";
import { RiCloudWindyLine, RiDropLine, RiSunLine } from "react-icons/ri";
import React, { useEffect } from "react";
import InfoCard from "./InfoCard";
import HourlyCard from "./HourlyCard";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../state";

const Home = () => {
  const dispatch = useDispatch();

  const { weather, loading, error } = useSelector(
    (state: State) => state.weather
  );

  const { getWeather } = bindActionCreators(actionCreators, dispatch);

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

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        getWeather(position.coords.latitude, position.coords.longitude);
      });
    } else {
      console.log("Not Available");
    }
  }, []);

  return (
    <Grid>
      <Col span={12}>
        <Grid sx={{ margin: "1rem 0" }}>
          <Col span={5}>
            <Card
              sx={{
                height: "100%",
              }}
            >
              <AiOutlineCloud size="30" />
              <Title order={1}>28 °C</Title>
              <Text size="md" weight={700}>
                Scattered Clouds
              </Text>
              <Text size="xl" weight={700}>
                Colombo, Sri Lanka
              </Text>
            </Card>
          </Col>
          <Col span={7}>
            <Card
              sx={{
                height: "100%",
              }}
            >
              {weatherItems.map((item: any) => {
                return (
                  <Grid
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Col span={2}>
                      <Group>
                        {item.icon}
                        <Text size="sm" weight={600}>
                          {item.title}
                        </Text>
                      </Group>
                    </Col>
                    <Col span={9}>
                      <Divider variant="dashed" />
                    </Col>
                    <Col span={1}>
                      <Text align="right" size="sm" weight={600}>
                        36.0
                      </Text>
                    </Col>
                  </Grid>
                );
              })}
            </Card>
          </Col>
        </Grid>
        <Divider />
      </Col>

      <Col span={12}>
        <Grid>
          {weather.minutely.map((item: any) => {
            return (
              <Col span={3}>
                <HourlyCard dt={item.dt} precipitation={item.precipitation} />
              </Col>
            );
          })}
        </Grid>
      </Col>
    </Grid>
  );
};

export default Home;
