import { Card, Col, Grid, Group, Text, Title } from "@mantine/core";
import { AiOutlineCloud, AiOutlineEye } from "react-icons/ai";
import { RiCloudWindyLine, RiDropLine, RiSunLine } from "react-icons/ri";
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
        <Grid sx={{ marginBottom: "2rem" }}>
          <Col span={3}>
            <Card>
              <Title order={1}>28 °C</Title>
              <Text size="xl" weight={700}>
                Colombo, Sri Lanka
              </Text>
            </Card>
          </Col>
          <Col span={9}>
            <Card sx={{ height: "100%" }}>
              <Group>
                <AiOutlineCloud size="30" />
                <div>
                  <Title order={5}>Clear</Title>
                  <Text size="xl" weight={700}>
                    Clear Sky
                  </Text>
                </div>
              </Group>
            </Card>
          </Col>
        </Grid>
        {/* <Group direction="row" position="left">
          <Card>
            <RiMoonFill />
            <Text>Clear</Text>
            <Text>Clear Sky</Text>
          </Card>
        </Group> <Group direction="row" position="left">
          <Card>
            <RiMoonFill />
            <Text>Clear</Text>
            <Text>Clear Sky</Text>
          </Card>
        </Group> */}
      </Col>

      {/* <Col span={12}>
        <InfoCard title="Feels like 28 °C" icon={<RiSunLine />} />
      </Col> */}
      <Col span={4}>
        <InfoCard title="UV Index" icon={<RiSunLine />} />
      </Col>
      <Col span={4}>
        <InfoCard title="Humidity" icon={<RiDropLine />} />
      </Col>
      <Col span={4}>
        <InfoCard title="Clouds" icon={<AiOutlineCloud />} />
      </Col>
      <Col span={4}>
        <InfoCard title="Visibility" icon={<AiOutlineEye />} />
      </Col>
      <Col span={4}>
        <InfoCard title="Wind" icon={<RiCloudWindyLine />} />
      </Col>
      <Col span={4}>
        <InfoCard title="Pressure" icon={<AiOutlineCloud />} />
      </Col>
      <Col span={4}>
        <InfoCard title="Sunrise" icon={<AiOutlineCloud />} />
      </Col>
      <Col span={4}>
        <InfoCard title="Sunset" icon={<AiOutlineCloud />} />
      </Col>
      {/* <Col span={4}>
        <InfoCard />
      </Col>
      <Col span={4}>
        <InfoCard />
      </Col> */}
    </Grid>
  );
};

export default Home;
