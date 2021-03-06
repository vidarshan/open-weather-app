import { Card, Divider, Group, Text } from "@mantine/core";
import moment from "moment";
import React, { PropsWithChildren } from "react";

interface IInfoCard {
  items: Array<any>;
}

const InfoCard: React.FC<PropsWithChildren<IInfoCard>> = ({ items }) => {
  return (
    <Card withBorder>
      <Group position="apart">
        {items.map((item: any) => {
          return (
            <div>
              {item.icon}
              <Text size="xs" weight={600}>
                {item.title}
              </Text>
            </div>
          );
        })}
      </Group>
    </Card>
  );
};

export default InfoCard;
