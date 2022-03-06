import { Col, Grid, Text } from "@mantine/core";
import { AiOutlineCloud } from "react-icons/ai";
import React, { useEffect } from "react";

const Home = () => {

    useEffect(()=>{
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function(position) {
                console.log("Latitude is :", position.coords.latitude);
                console.log("Longitude is :", position.coords.longitude);
              });
          } else {
            console.log("Not Available");
          }
    },[])

  return (
    <Grid>
      <Col>
        <AiOutlineCloud />
      </Col>
      <Col>
        <Text>28 °C</Text>
      </Col>
    </Grid>
  );
};

export default Home;
