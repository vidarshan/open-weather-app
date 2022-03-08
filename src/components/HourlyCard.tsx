import { Card, Group, Text } from "@mantine/core";
import React, { PropsWithChildren } from "react";
import { timestampToDateTime } from "../utils/util";

interface IHourlyCard {
  dt: number;
  precipitation: number;
}

const HourlyCard: React.FC<PropsWithChildren<IHourlyCard>> = ({
  dt,
  precipitation,
}) => {
  return (
    <Card>
      <Text align="left" size="sm" weight={500}>
        {timestampToDateTime(dt)}
      </Text>

      <Group sx={{ marginTop: "20px" }} direction="row" position="apart">
        <Text weight={700}>Precipitation</Text>
        <Text weight={700}>{precipitation}</Text>
      </Group>
    </Card>
  );
};

export default HourlyCard;
