import { Card, Divider, Group, Text } from "@mantine/core";
import React, { PropsWithChildren } from "react";
import { timestampToDateTime } from "../utils/util";
import { RiCloudWindyLine, RiDropLine, RiSunLine } from "react-icons/ri";
interface IHourlyCard {
  dt: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: any;
}

const HourlyCard: React.FC<PropsWithChildren<IHourlyCard>> = ({
  dt,
  temp,
  feels_like,
  pressure,
  humidity,
  dew_point,
  uvi,
  clouds,
  visibility,
  wind_speed,
  wind_deg,
  wind_gust,
  weather,
}) => {
  const selectedUnit = localStorage.getItem("units");

  return (
    <Card sx={{ marginTop: "1rem" }} withBorder>
      <Text align="left" size="sm" weight={600}>
        {timestampToDateTime(dt, "dt")}
      </Text>
      <Group sx={{ marginTop: "40px" }} direction="row" position="apart">
        <RiCloudWindyLine color="orange" size={30} />
        <Text size="lg" weight={700}>
          {temp} {selectedUnit === "metric" ? `°C` : `°F`}
        </Text>
      </Group>
      <div style={{ marginTop: "20px" }}>
        <Text size="lg" weight={700}>
          {weather[0].main}
        </Text>
        <Text size="sm" weight={500}>
          {weather[0].description}
        </Text>
      </div>
      {/* <RiCloudWindyLine /> {weather[0].main} */}
      <Divider />
      <Group sx={{ marginTop: "20px" }} direction="row" position="apart">
        <Text size="sm" weight={600}>
          Feels Like
        </Text>
        <Text size="sm" weight={600}>
          {feels_like} {selectedUnit === "metric" ? `°C` : `°F`}
        </Text>
      </Group>
      <Group sx={{ marginTop: "10px" }} direction="row" position="apart">
        <Text size="sm" weight={600}>
          Humidity
        </Text>
        <Text size="sm" weight={600}>
          {humidity}
        </Text>
      </Group>
      <Group sx={{ marginTop: "10px" }} direction="row" position="apart">
        <Text size="sm" weight={600}>
          UV Index
        </Text>
        <Text size="sm" weight={600}>
          {uvi}
        </Text>
      </Group>
      <Group sx={{ marginTop: "10px" }} direction="row" position="apart">
        <Text size="sm" weight={600}>
          Visibility
        </Text>
        <Text size="sm" weight={600}>
          {visibility}
        </Text>
      </Group>
    </Card>
  );
};

export default HourlyCard;
