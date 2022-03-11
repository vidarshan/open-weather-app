import {
  Card,
  Col,
  Container,
  Divider,
  Grid,
  Group,
  Text,
} from "@mantine/core";
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
  feelsLikeDay: number;
  feelsLikeMorn: number;
  feelsLikeNight: number;
  feelsLikeEve: number;
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
  feelsLikeDay,
  feelsLikeMorn,
  feelsLikeNight,
  feelsLikeEve,
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
        <Divider variant="solid"></Divider>
      </div>
      <Grid>
        <Col span={2}>
          <Card withBorder>
            <Group
              sx={{ marginTop: "20px" }}
              direction="column"
              position="left"
            >
              <div>
                <div style={{ textAlign: "left" }}>
                  <AiOutlineCloud />
                </div>

                <Text align="left" size="sm" weight={600}>
                  10:30 PM
                </Text>

                <Text align="left" size="sm" weight={600}>
                  Sunrise
                </Text>
              </div>
            </Group>
          </Card>
        </Col>
        <Col span={2}>
          <Card withBorder>
            <Group
              sx={{ marginTop: "20px" }}
              direction="column"
              position="left"
            >
              <div>
                <div style={{ textAlign: "left" }}>
                  <AiOutlineCloud />
                </div>

                <Text align="left" size="sm" weight={600}>
                  10:30 PM
                </Text>

                <Text align="left" size="sm" weight={600}>
                  Sunrise
                </Text>
              </div>
            </Group>
          </Card>
        </Col>
        <Col span={2}>
          <Card withBorder>
            <Group
              sx={{ marginTop: "20px" }}
              direction="column"
              position="left"
            >
              <div>
                <div style={{ textAlign: "left" }}>
                  <AiOutlineCloud />
                </div>

                <Text align="left" size="sm" weight={600}>
                  10:30 PM
                </Text>

                <Text align="left" size="sm" weight={600}>
                  Sunrise
                </Text>
              </div>
            </Group>
          </Card>
        </Col>

        <Col span={2}>
          <Card withBorder>
            <Group
              sx={{ marginTop: "20px" }}
              direction="column"
              position="left"
            >
              <div>
                <div style={{ textAlign: "left" }}>
                  <AiOutlineCloud />
                </div>

                <Text align="left" size="sm" weight={600}>
                  10:30 PM
                </Text>

                <Text align="left" size="sm" weight={600}>
                  Sunrise
                </Text>
              </div>
            </Group>
          </Card>
        </Col>
        <Col span={2}>
          <Card withBorder>
            <Group
              sx={{ marginTop: "20px" }}
              direction="column"
              position="left"
            >
              <div>
                <div style={{ textAlign: "left" }}>
                  <AiOutlineCloud />
                </div>

                <Text align="left" size="sm" weight={600}>
                  10:30 PM
                </Text>

                <Text align="left" size="sm" weight={600}>
                  UV Index
                </Text>
              </div>
            </Group>
          </Card>
        </Col>

        <Col span={2}>
          <Card withBorder>
            <Group
              sx={{ marginTop: "20px" }}
              direction="column"
              position="left"
            >
              <div>
                <div style={{ textAlign: "left" }}>
                  <AiOutlineCloud />
                </div>

                <Text align="left" size="sm" weight={600}>
                  10:30 PM
                </Text>

                <Text align="left" size="sm" weight={600}>
                  Pressure
                </Text>
              </div>
            </Group>
          </Card>
        </Col>
      </Grid>
      <div style={{ marginTop: "20px" }}>
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
          <Card withBorder>
            <Group
              sx={{ marginTop: "20px" }}
              direction="column"
              position="left"
            >
              <div>
                <div style={{ textAlign: "left" }}>
                  <AiOutlineCloud />
                </div>

                <Text align="left" size="sm" weight={600}>
                  {tempMax} {selectedUnit === "metric" ? `°C` : `°F`}
                </Text>

                <Text align="left" size="sm" weight={600}>
                  Max Temp
                </Text>
              </div>
            </Group>
          </Card>
        </Col>
        <Col span={2}>
          <Card withBorder>
            <Group
              sx={{ marginTop: "20px" }}
              direction="column"
              position="left"
            >
              <div>
                <div style={{ textAlign: "left" }}>
                  <AiOutlineCloud />
                </div>

                <Text align="left" size="sm" weight={600}>
                  {tempMax} {selectedUnit === "metric" ? `°C` : `°F`}
                </Text>

                <Text align="left" size="sm" weight={600}>
                  Max Temp
                </Text>
              </div>
            </Group>
          </Card>
        </Col>
        <Col span={2}>
          <Card withBorder>
            <Group
              sx={{ marginTop: "20px" }}
              direction="column"
              position="left"
            >
              <div>
                <div style={{ textAlign: "left" }}>
                  <AiOutlineCloud />
                </div>

                <Text align="left" size="sm" weight={600}>
                  {tempMax} {selectedUnit === "metric" ? `°C` : `°F`}
                </Text>

                <Text align="left" size="sm" weight={600}>
                  Max Temp
                </Text>
              </div>
            </Group>
          </Card>
        </Col>
        <Col span={2}>
          <Card withBorder>
            <Group
              sx={{ marginTop: "20px" }}
              direction="column"
              position="left"
            >
              <div>
                <div style={{ textAlign: "left" }}>
                  <AiOutlineCloud />
                </div>

                <Text align="left" size="sm" weight={600}>
                  {tempMax} {selectedUnit === "metric" ? `°C` : `°F`}
                </Text>

                <Text align="left" size="sm" weight={600}>
                  Max Temp
                </Text>
              </div>
            </Group>
          </Card>
        </Col>
        <Col span={2}>
          <Card withBorder>
            <Group
              sx={{ marginTop: "20px" }}
              direction="column"
              position="left"
            >
              <div>
                <div style={{ textAlign: "left" }}>
                  <AiOutlineCloud />
                </div>

                <Text align="left" size="sm" weight={600}>
                  {tempMax} {selectedUnit === "metric" ? `°C` : `°F`}
                </Text>

                <Text align="left" size="sm" weight={600}>
                  Max Temp
                </Text>
              </div>
            </Group>
          </Card>
        </Col>
        <Col span={2}>
          <Card withBorder>
            <Group
              sx={{ marginTop: "20px" }}
              direction="column"
              position="left"
            >
              <div>
                <div style={{ textAlign: "left" }}>
                  <AiOutlineCloud />
                </div>

                <Text align="left" size="sm" weight={600}>
                  {tempMax} {selectedUnit === "metric" ? `°C` : `°F`}
                </Text>

                <Text align="left" size="sm" weight={600}>
                  Max Temp
                </Text>
              </div>
            </Group>
          </Card>
        </Col>
      </Grid>

      <div style={{ marginTop: "20px" }}>
        <Divider variant="solid" label="Feels Like"></Divider>
      </div>
      <Grid>
        <Col span={2}>
          <Card withBorder>
            <Group
              sx={{ marginTop: "20px" }}
              direction="column"
              position="left"
            >
              <div>
                <div style={{ textAlign: "left" }}>
                  <AiOutlineCloud />
                </div>

                <Text align="left" size="sm" weight={600}>
                  {tempMax} {selectedUnit === "metric" ? `°C` : `°F`}
                </Text>

                <Text align="left" size="sm" weight={600}>
                  Max Temp
                </Text>
              </div>
            </Group>
          </Card>
        </Col>
        <Col span={2}>
          <Card withBorder>
            <Group
              sx={{ marginTop: "20px" }}
              direction="column"
              position="left"
            >
              <div>
                <div style={{ textAlign: "left" }}>
                  <AiOutlineCloud />
                </div>

                <Text align="left" size="sm" weight={600}>
                  {tempMax} {selectedUnit === "metric" ? `°C` : `°F`}
                </Text>

                <Text align="left" size="sm" weight={600}>
                  Max Temp
                </Text>
              </div>
            </Group>
          </Card>
        </Col>
        <Col span={2}>
          <Card withBorder>
            <Group
              sx={{ marginTop: "20px" }}
              direction="column"
              position="left"
            >
              <div>
                <div style={{ textAlign: "left" }}>
                  <AiOutlineCloud />
                </div>

                <Text align="left" size="sm" weight={600}>
                  {tempMax} {selectedUnit === "metric" ? `°C` : `°F`}
                </Text>

                <Text align="left" size="sm" weight={600}>
                  Max Temp
                </Text>
              </div>
            </Group>
          </Card>
        </Col>
        <Col span={2}>
          <Card withBorder>
            <Group
              sx={{ marginTop: "20px" }}
              direction="column"
              position="left"
            >
              <div>
                <div style={{ textAlign: "left" }}>
                  <AiOutlineCloud />
                </div>

                <Text align="left" size="sm" weight={600}>
                  {tempMax} {selectedUnit === "metric" ? `°C` : `°F`}
                </Text>

                <Text align="left" size="sm" weight={600}>
                  Max Temp
                </Text>
              </div>
            </Group>
          </Card>
        </Col>
      </Grid>
    </Card>
  );
};

export default DailyCard;
