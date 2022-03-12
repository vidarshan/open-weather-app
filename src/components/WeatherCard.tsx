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
import { timestampToDateTime, uvIndexToDescription } from "../utils/util";
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
    <Grid sx={{ margin: "1rem 0" }}>
      <Col xs={12} sm={12} md={3} span={5}>
        <Card
          sx={{
            height: "100%",
          }}
          withBorder
        >
          <AiOutlineCloud size="30" />
          <Title order={1}>
            {items.temp} {selectedUnit === "metric" ? `°C` : `°F`}
          </Title>
          <Text size="md" weight={700}>
            {items.weather[0].description}
          </Text>
          <Text size="xl" weight={700}>
            {timezone}
          </Text>
        </Card>
      </Col>
      <Col xs={12} sm={12} md={9} span={7}>
        <Card
          sx={{
            height: "100%",
          }}
          withBorder
        >
          <Grid
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Col span={2}>
              <Group>
                <RiSunLine />
                <Text size="sm" weight={600}>
                  UV Index
                </Text>
              </Group>
            </Col>
            <Col span={9}>
              <Divider variant="dashed" />
            </Col>
            <Col span={1}>
              <Text align="left" size="sm" weight={600}>
                {uvIndexToDescription(items.uvi)}
              </Text>
            </Col>
            <Col span={2}>
              <Group>
                <RiDropLine />
                <Text size="sm" weight={600}>
                  Humidity
                </Text>
              </Group>
            </Col>
            <Col span={9}>
              <Divider variant="dashed" />
            </Col>
            <Col span={1}>
              <Text align="left" size="sm" weight={600}>
                {items.humidity}
              </Text>
            </Col>
            <Col span={2}>
              <Group>
                <AiOutlineCloud />
                <Text size="sm" weight={600}>
                  Clouds
                </Text>
              </Group>
            </Col>
            <Col span={9}>
              <Divider variant="dashed" />
            </Col>
            <Col span={1}>
              <Text align="left" size="sm" weight={600}>
                {items.clouds}
              </Text>
            </Col>
            <Col span={2}>
              <Group>
                <AiOutlineEye />
                <Text size="sm" weight={600}>
                  Visibility
                </Text>
              </Group>
            </Col>
            <Col span={9}>
              <Divider variant="dashed" />
            </Col>
            <Col span={1}>
              <Text align="left" size="sm" weight={600}>
                {items.visibility}
              </Text>
            </Col>
            <Col span={2}>
              <Group>
                <RiCloudWindyLine />
                <Text size="sm" weight={600}>
                  Wind
                </Text>
              </Group>
            </Col>
            <Col span={9}>
              <Divider variant="dashed" />
            </Col>
            <Col span={1}>
              <Text align="left" size="sm" weight={600}>
                {items.wind_speed}
              </Text>
            </Col>

            <Col span={2}>
              <Group>
                <AiOutlineCloud />
                <Text size="sm" weight={600}>
                  Sunrise
                </Text>
              </Group>
            </Col>
            <Col span={9}>
              <Divider variant="dashed" />
            </Col>
            <Col span={1}>
              <Text align="left" size="sm" weight={600}>
                {timestampToDateTime(items.sunrise)}
              </Text>
            </Col>
            <Col span={2}>
              <Group>
                <AiOutlineCloud />
                <Text size="sm" weight={600}>
                  Sunset
                </Text>
              </Group>
            </Col>
            <Col span={9}>
              <Divider variant="dashed" />
            </Col>
            <Col span={1}>
              <Text align="left" size="sm" weight={600}>
                {timestampToDateTime(items.sunset)}
              </Text>
            </Col>
          </Grid>
          {/* {items.map((item: any) => {
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
          })} */}
        </Card>
      </Col>
    </Grid>
  );
};

export default WeatherCard;
