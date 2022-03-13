import { Card, Group, Text } from "@mantine/core";
import React, { PropsWithChildren } from "react";

interface IItemCard {
  icon: any;
  description: any;
  title: string;
}

const ItemCard: React.FC<PropsWithChildren<IItemCard>> = ({
  icon,
  description,
  title,
}) => {
  return (
    <Card withBorder>
      <Group sx={{ marginTop: "20px" }} direction="column" position="left">
        <div>
          <div style={{ textAlign: "left" }}>{icon}</div>

          <Text align="left" size="sm" weight={600}>
            {description}
          </Text>

          <Text align="left" size="sm" weight={600}>
            {title}
          </Text>
        </div>
      </Group>
    </Card>
  );
};
export default ItemCard;
