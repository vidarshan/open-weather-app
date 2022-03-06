import { Col, Container, Grid, Group, Text, Title } from "@mantine/core";
import { AiOutlineCloud, AiOutlineFieldTime } from "react-icons/ai";
import React, { useEffect } from "react";

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
          <Group>
            <Title order={1}>28 °C</Title>
            <AiOutlineCloud size="30" />
          </Group>
          <Text size="xl" weight={700}>
            Colombo, Sri Lanka
          </Text>
        </Group>
      </Col>

      <Col span={12}>
        <Text size="sm">Feels like 28 °C</Text>
      </Col>
      <Col span={12}>
        <Text size="sm">Feels like 28 °C</Text>
      </Col>
    </Grid>
  );
};

export default Home;
