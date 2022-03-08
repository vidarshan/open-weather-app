import React from "react";
import { Card, Group, Loader } from "@mantine/core";

const Spinner = () => {
  return (
    <Card>
      <Group position="center" direction="row">
        <Loader variant="bars" />
      </Group>
    </Card>
  );
};

export default Spinner;
