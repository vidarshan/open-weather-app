import {
  Card,
  Col,
  Divider,
  Grid,
  Group,
  Image,
  Text,
  Title,
} from "@mantine/core";
import React, { PropsWithChildren } from "react";
import { AiOutlineCloud, AiOutlineEye } from "react-icons/ai";
import { RiCloudWindyLine, RiDropLine, RiSunLine } from "react-icons/ri";
import {
  WiAlien,
  WiCloud,
  WiCloudy,
  WiCloudyWindy,
  WiHumidity,
  WiSunrise,
  WiSunset,
} from "react-icons/wi";
import { timestampToDateTime, uvIndexToDescription } from "../utils/util";
import ItemCard from "./ItemCard";
interface IWeatherCard {
  items: any;
  timezone: string;
}

const WeatherCard: React.FC<PropsWithChildren<IWeatherCard>> = ({
  items,
  timezone,
}) => {
  const selectedUnit = localStorage.getItem("units");

  return (
    <Grid sx={{ marginBottom: "1rem" }}>
      <Col xs={12} sm={12} md={5} lg={5} xl={5} span={12}>
        <Card
          sx={{
            height: "100%",
          }}
          withBorder
        >
          <Image
            width={100}
            alt="weather-icon"
            src={`http://openweathermap.org/img/wn/${items.weather[0].icon}@2x.png`}
          />
          <Title order={1}>
            {items.temp} {selectedUnit === "metric" ? `°C` : `°F`}
          </Title>
          <Text size="lg" weight={700}>
            {items.weather[0].description}
          </Text>
          <Text size="md" weight={600}>
            {timezone.replace("/", " - ")}
          </Text>
        </Card>
      </Col>
      <Col xs={12} sm={12} md={7} lg={7} xl={7} span={12}>
        <Card
          sx={{
            height: "100%",
          }}
          withBorder
        >
          <Grid>
            <Col xs={6} sm={4} md={4} lg={3} xl={3} span={3}>
              <ItemCard
                title="UV Index"
                description={uvIndexToDescription(items.uvi)}
                icon={<RiSunLine size={30} color="#C5D807" />}
              />
            </Col>
            <Col xs={6} sm={4} md={4} lg={3} xl={3} span={3}>
              <ItemCard
                title="Humidity"
                description={items.humidity}
                icon={<WiHumidity size={30} color="#07B8D8" />}
              />
            </Col>
            <Col xs={6} sm={4} md={4} lg={3} xl={3} span={3}>
              <ItemCard
                title="Clouds"
                description={items.clouds}
                icon={<WiCloudy size={30} color="#07B8D8" />}
              />
            </Col>
            <Col xs={6} sm={4} md={4} lg={3} xl={3} span={3}>
              <ItemCard
                title="Visibility"
                description={items.visibility}
                icon={<AiOutlineEye size={30} color="#9FA3A2" />}
              />
            </Col>
            <Col xs={6} sm={4} md={4} lg={3} xl={3} span={3}>
              <ItemCard
                title="Wind"
                description={
                  selectedUnit === "metric"
                    ? `${items.wind_speed} meters/s`
                    : `${items.wind_speed} miles/s`
                }
                icon={<WiCloudyWindy color="#07B8D8" size={30} />}
              />
            </Col>
            <Col xs={6} sm={4} md={4} lg={3} xl={3} span={3}>
              <ItemCard
                title="Sunrise"
                description={timestampToDateTime(items.sunrise)}
                icon={<WiSunset color="#D88C07" size={30} />}
              />
            </Col>
            <Col xs={6} sm={4} md={4} lg={3} xl={3} span={3}>
              <ItemCard
                title="Sunset"
                description={timestampToDateTime(items.sunset)}
                icon={<WiSunrise color="#D88C07" size={30} />}
              />
            </Col>
            <Col xs={6} sm={4} md={4} lg={3} xl={3} span={3}>
              <ItemCard
                title="Feels Like"
                description={items.feels_like}
                icon={<WiAlien color="#9FA3A2" size={30} />}
              />
            </Col>
          </Grid>
        </Card>
      </Col>
    </Grid>
  );
};

export default WeatherCard;
