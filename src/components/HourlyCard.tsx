import { Card, Group, Text } from "@mantine/core";
import React, { PropsWithChildren } from "react";
import { timestampToDateTime } from "../utils/util";

interface IHourlyCard {
  dt: number;
  temp: number;
}

const HourlyCard: React.FC<PropsWithChildren<IHourlyCard>> = ({ dt, temp }) => {
  return (
    <Card withBorder>
      <Text align="left" size="sm" weight={500}>
        {timestampToDateTime(dt)}
      </Text>

      <Group sx={{ marginTop: "20px" }} direction="row" position="apart">
        <Text weight={700}>Temperature</Text>
        <Text weight={700}>{temp}</Text>
      </Group>
    </Card>
  );
};

export default HourlyCard;
