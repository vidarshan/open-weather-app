import { Card, Col, Divider, Grid, Group, Text, Title } from "@mantine/core";
import { AiOutlineCloud, AiOutlineEye } from "react-icons/ai";
import { RiCloudWindyLine, RiDropLine, RiSunLine } from "react-icons/ri";
import React, { useEffect } from "react";
import InfoCard from "./InfoCard";

const Home = () => {
  const weatherItems = [
    { id: 1, title: "UV Index", icon: <RiSunLine /> },
    { id: 2, title: "Humidity", icon: <RiDropLine /> },
    { id: 3, title: "Clouds", icon: <AiOutlineCloud /> },
    { id: 4, title: "Visibility", icon: <AiOutlineEye /> },
    { id: 5, title: "Wind", icon: <RiCloudWindyLine /> },
    { id: 6, title: "Pressure", icon: <AiOutlineCloud /> },
    { id: 7, title: "Sunrise", icon: <AiOutlineCloud /> },
    { id: 8, title: "Sunset", icon: <AiOutlineCloud /> },
  ];

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
        <Grid sx={{ marginBottom: "1rem" }}>
          <Col span={3}>
            <Card>
              <Title order={1}>28 °C</Title>
              <Text size="xl" weight={700}>
                Colombo, Sri Lanka
              </Text>
            </Card>
          </Col>
          <Col span={9}>
            <Card
              sx={{
                height: "100%",
              }}
            >
              <Group direction="row" position="left">
                <AiOutlineCloud size="30" />
                <div>
                  <Title order={1}>Clear</Title>
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
        <Divider />
      </Col>
      {/* <Col span={12}>
        <InfoCard title="Feels like 28 °C" icon={<RiSunLine />} />
      </Col> */}
      <Col span={12}>
        <InfoCard items={weatherItems} />
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
