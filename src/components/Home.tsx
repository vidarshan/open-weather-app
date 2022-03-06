import { Col, Grid, Group, Text, Title } from "@mantine/core";
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
    <Grid sx={{backgroundColor:'red'}}>
   
     
      <Group direction="column">
      <Title order={1}>28 °C</Title>
     
        <Text size="xl" weight={700}>Colombo, Sri Lanka</Text>
      </Group>
      
    </Grid>
  );
};

export default Home;
