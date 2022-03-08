import { Card, Col, Divider, Grid, Group, Text, Title } from "@mantine/core";
import React, { PropsWithChildren } from "react";
import { AiOutlineCloud, AiOutlineEye } from "react-icons/ai";

interface IWeatherCard {
  items: any;
}

const WeatherCard: React.FC<PropsWithChildren<IWeatherCard>> = ({ items }) => {
  return (
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
          {items.map((item: any) => {
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
  );
};

export default WeatherCard;
