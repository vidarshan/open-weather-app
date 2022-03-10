import { Card, Group, Text } from "@mantine/core";
import React, { PropsWithChildren } from "react";
import { timestampToDateTime } from "../utils/util";

interface IMinutelyCard {
  dt: number;
  precipitation: number;
}

const MinutelyCard: React.FC<PropsWithChildren<IMinutelyCard>> = ({
  dt,
  precipitation,
}) => {
  return (
    <Card withBorder>
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

export default MinutelyCard;
