import { Card, Group, Text } from "@mantine/core";
import moment from "moment";
import React, { PropsWithChildren } from "react";

interface IProjectCard {
  title: string;
  icon: any;
}

const InfoCard: React.FC<PropsWithChildren<IProjectCard>> = ({
  title,
  icon,
}) => {
  return (
    <Card withBorder>
      <Group position="apart">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {icon}
          <Text weight={600} sx={{ marginLeft: "10px" }}>
            {title}
          </Text>
        </div>
        <Text weight={600} sx={{ marginLeft: "10px" }}>
          {moment.unix(1646571158).format("hh:mm A")}
        </Text>
      </Group>
    </Card>
  );
};

export default InfoCard;
