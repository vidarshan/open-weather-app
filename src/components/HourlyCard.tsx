import { Card, Col, Text } from "@mantine/core";
import React, { PropsWithChildren } from "react";

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
      <Text>{dt}</Text> <Text>{precipitation}</Text>
    </Card>
  );
};

export default HourlyCard;
