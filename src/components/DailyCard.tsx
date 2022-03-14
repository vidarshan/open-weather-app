import {
  Card,
  Col,
  Container,
  Divider,
  Grid,
  Group,
  Image,
  Text,
} from "@mantine/core";
import React, { PropsWithChildren } from "react";
import { timestampToDateTime, uvIndexToDescription } from "../utils/util";
import { AiOutlineCloud, AiOutlineEye } from "react-icons/ai";
import { RiCloudWindyLine, RiDropLine, RiSunLine } from "react-icons/ri";
import {
  WiDayCloudy,
  WiDaySunny,
  WiDaySunnyOvercast,
  WiDirectionDown,
  WiDirectionUp,
  WiDust,
  WiFlood,
  WiHorizon,
  WiHorizonAlt,
  WiMoonrise,
  WiMoonset,
  WiNightAltCloudy,
  WiSunrise,
  WiSunset,
  WiThermometer,
  WiThermometerExterior,
} from "react-icons/wi";
import ItemCard from "./ItemCard";

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
      <Text align="left" size="sm" weight={600}>
        {timestampToDateTime(dt, "dt")}
      </Text>
      <Group sx={{ marginTop: "20px" }} direction="row" position="apart">
        <Text size="xl" weight={700}>
          {weather[0].main}
          {/* {tempMax} {selectedUnit === "metric" ? `°C` : `°F`} */}
        </Text>
        <Image
          alt="weather-icon"
          src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
        />
      </Group>
      <div style={{ marginTop: "20px" }}>
        <Text size="lg" weight={700}>
          {tempMax} {selectedUnit === "metric" ? `°C` : `°F`}
        </Text>
        <Text size="sm" weight={600}>
          {weather[0].description}
        </Text>
      </div>
      <div style={{ marginTop: "20px" }}>
        <Divider variant="solid"></Divider>
      </div>
      <Grid>
        <Col xs={6} sm={4} md={3} lg={2} xl={2} span={2}>
          <ItemCard
            description={timestampToDateTime(sunrise, "t")}
            title="Sunrise"
            icon={<WiSunrise size={30} />}
          />
        </Col>
        <Col xs={6} sm={4} md={3} lg={2} xl={2} span={2}>
          <ItemCard
            description={timestampToDateTime(sunset, "t")}
            title="Sunset"
            icon={<WiSunset size={30} />}
          />
        </Col>

        <Col xs={6} sm={4} md={3} lg={2} xl={2} span={2}>
          <ItemCard
            description={timestampToDateTime(moonset, "t")}
            title="Moonset"
            icon={<WiMoonset size={30} />}
          />
        </Col>
        <Col xs={6} sm={4} md={3} lg={2} xl={2} span={2}>
          <ItemCard
            description={timestampToDateTime(moonrise, "t")}
            title="Moonrise"
            icon={<WiMoonrise size={30} />}
          />
        </Col>

        <Col xs={6} sm={4} md={3} lg={2} xl={2} span={2}>
          <ItemCard
            description={uvi}
            title="UV Index"
            icon={<WiDust size={30} />}
          />
        </Col>

        <Col xs={6} sm={4} md={3} lg={2} xl={2} span={2}>
          <ItemCard
            description={`${pressure} hg`}
            title="Pressure"
            icon={<WiFlood size={30} />}
          />
        </Col>
      </Grid>
      <div style={{ marginTop: "20px" }}>
        <Divider variant="solid" label="Temperature"></Divider>
      </div>
      <Grid>
        <Col xs={6} sm={4} md={3} lg={2} xl={2} span={2}>
          <ItemCard
            description={
              selectedUnit === "metric" ? `${tempMax} °C` : `${tempMax} °F`
            }
            title="Max Temp"
            icon={<WiThermometer size={30} />}
          />
        </Col>
        <Col xs={6} sm={4} md={3} lg={2} xl={2} span={2}>
          <ItemCard
            description={
              selectedUnit === "metric" ? `${tempMin} °C` : `${tempMin} °F`
            }
            title="Min Temp"
            icon={<WiThermometerExterior size={30} />}
          />
        </Col>
        <Col xs={6} sm={4} md={3} lg={2} xl={2} span={2}>
          <ItemCard
            description={
              selectedUnit === "metric" ? `${tempMorn} °C` : `${tempMorn} °F`
            }
            title="Morning"
            icon={<WiHorizonAlt size={30} />}
          />
        </Col>
        <Col xs={6} sm={4} md={3} lg={2} xl={2} span={2}>
          <ItemCard
            description={
              selectedUnit === "metric" ? `${tempDay} °C` : `${tempDay} °F`
            }
            title="Day"
            icon={<WiDaySunny size={30} />}
          />
        </Col>
        <Col xs={6} sm={4} md={3} lg={2} xl={2} span={2}>
          <ItemCard
            description={
              selectedUnit === "metric" ? `${tempEve} °C` : `${tempEve} °F`
            }
            title="Evening"
            icon={<WiHorizon size={30} />}
          />
        </Col>
        <Col xs={6} sm={4} md={3} lg={2} xl={2} span={2}>
          <ItemCard
            description={
              selectedUnit === "metric" ? `${tempNight} °C` : `${tempNight} °F`
            }
            title="Night"
            icon={<WiNightAltCloudy size={30} />}
          />
        </Col>
      </Grid>

      <div style={{ marginTop: "20px" }}>
        <Divider variant="solid" label="Feels Like"></Divider>
      </div>
      <Grid>
        <Col xs={6} sm={4} md={3} lg={2} xl={2} span={2}>
          <ItemCard
            description={
              selectedUnit === "metric"
                ? `${feelsLikeMorn} °C`
                : `${feelsLikeMorn} °F`
            }
            title="Morning"
            icon={<WiHorizonAlt size={30} />}
          />
        </Col>
        <Col xs={6} sm={4} md={3} lg={2} xl={2} span={2}>
          <ItemCard
            description={
              selectedUnit === "metric"
                ? `${feelsLikeDay} °C`
                : `${feelsLikeDay} °F`
            }
            title="Day"
            icon={<WiDaySunny size={30} />}
          />
        </Col>
        <Col xs={6} sm={4} md={3} lg={2} xl={2} span={2}>
          <ItemCard
            description={
              selectedUnit === "metric"
                ? `${feelsLikeEve} °C`
                : `${feelsLikeEve} °F`
            }
            title="Evening"
            icon={<WiHorizon size={30} />}
          />
        </Col>
        <Col xs={6} sm={4} md={3} lg={2} xl={2} span={2}>
          <ItemCard
            description={
              selectedUnit === "metric"
                ? `${feelsLikeNight} °C`
                : `${feelsLikeNight} °F`
            }
            title="Night"
            icon={<WiNightAltCloudy size={30} />}
          />
        </Col>
      </Grid>
    </Card>
  );
};

export default DailyCard;
