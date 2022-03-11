import { Card, Col, Divider, Grid, Group, Text } from "@mantine/core";
import React, { PropsWithChildren } from "react";
import { timestampToDateTime } from "../utils/util";
import { AiOutlineCloud, AiOutlineEye } from "react-icons/ai";
import { RiCloudWindyLine, RiDropLine, RiSunLine } from "react-icons/ri";

interface IDailyCard {
  dt: number;
  sunrise: number;
  sunset: number;
  moonrise: number;
  moonset: number;
  moon_phase: number;
  tempDay: number;
  tempMin: number;
  tempMax: number;
  tempNight: number;
  tempEve: number;
  tempMorn: number;
  feels_like: any;
  pressure: number;
  humidity: number;
  dew_point: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: any;
  clouds: number;
  pop: number;
  uvi: number;
}

const DailyCard: React.FC<PropsWithChildren<IDailyCard>> = ({
  dt,
  sunrise,
  sunset,
  moonrise,
  moonset,
  moon_phase,
  tempDay,
  tempMin,
  tempMax,
  tempNight,
  tempEve,
  tempMorn,
  feels_like,
  pressure,
  humidity,
  dew_point,
  wind_speed,
  wind_deg,
  wind_gust,
  weather,
  clouds,
  pop,
  uvi,
}) => {
  const selectedUnit = localStorage.getItem("units");

  return (
    <Card withBorder>
      <Text align="left" size="sm" weight={500}>
        {timestampToDateTime(dt)}
      </Text>
      <Group sx={{ marginTop: "20px" }} direction="row" position="apart">
        <RiCloudWindyLine color="orange" size={30} />
        <Text size="lg" weight={700}>
          {tempMax} {selectedUnit === "metric" ? `°C` : `°F`}
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
      <div style={{ marginTop: "20px" }}>
        {console.log(tempDay)}
        <Divider variant="solid" label="Temperature"></Divider>
      </div>
      {/* <Group sx={{ marginTop: "20px" }} direction="row" position="apart">
        <Text size="sm" weight={600}>
          Feels Like
        </Text>
        <Text size="sm" weight={600}>
          {feels_like} {selectedUnit === "metric" ? `°C` : `°F`}
        </Text>
      </Group> */}
      <Grid>
        <Col span={2}>
          <Group sx={{ marginTop: "20px" }} direction="column" position="left">
            <div>
              {console.log(tempDay)}
              <AiOutlineCloud />
              <Text size="sm" weight={600}>
                {tempDay} {selectedUnit === "metric" ? `°C` : `°F`}
              </Text>
            </div>
          </Group>
        </Col>
      </Grid>
      <div style={{ marginTop: "20px" }}>
        <Divider variant="solid" label="Feels Like"></Divider>
      </div>
    </Card>
  );
};

export default DailyCard;
