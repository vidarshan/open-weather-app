import { Card, Col, Container, Grid, Group, Text, Title } from "@mantine/core";
import { AiOutlineCloud, AiOutlineFieldTime } from "react-icons/ai";
import React, { useEffect } from "react";
import InfoCard from "./InfoCard";

const Home = () => {
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
      });
    } else {
      console.log("Not Available");
    }
  }, []);

  return (
    <Grid>
      <Col span={12}>
        <Group direction="column">
          <Card>
            <Group>
              <Title order={1}>28 °C</Title>
              <AiOutlineCloud size="30" />
            </Group>
            <Text size="xl" weight={700}>
              Colombo, Sri Lanka
            </Text>
          </Card>
        </Group>
      </Col>

      <Col span={12}>
        <Text size="sm">Feels like 28 °C</Text>
      </Col>
      <Col span={12}>
        <InfoCard />
      </Col>
    </Grid>
  );
};

export default Home;
