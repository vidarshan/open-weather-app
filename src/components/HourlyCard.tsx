import { Card, Col, Text } from "@mantine/core";
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
      <Text>{timestampToDateTime(dt)}</Text> <Text>{precipitation}</Text>
    </Card>
  );
};

export default HourlyCard;
