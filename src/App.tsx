import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { AiOutlineCalendar, AiOutlineCloud, AiOutlineFieldTime } from "react-icons/ai";
import { RiSunLine, RiMoonLine } from "react-icons/ri";
import {
  AppShell,
  Burger,
  Col,
  Container,
  Grid,
  Group,
  Header,
  MediaQuery,
  Navbar,
  Switch,
  Text,
  useMantineTheme,
} from "@mantine/core";
import Home from "./components/Home";
function App() {
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();

  return (
    <AppShell
      navbarOffsetBreakpoint="sm"
      fixed
      navbar={
        <Navbar
          padding="md"
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 100, lg: 100 }}
        >
          <Group direction="column" position="center">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center", 
                marginBottom:'1rem'
              }}
            >
              <AiOutlineCloud size="30" />
              <Text weight={600} size="xs">
                Now
              </Text>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginBottom:'1rem'
              }}
            >
              <AiOutlineFieldTime size="30" />
              <Text weight={600} size="xs">
                Hourly
              </Text>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginBottom:'1rem'
              }}
            >
              <AiOutlineCalendar size="30" />
              <Text weight={600} size="xs">
                Daily
              </Text>
            </div>
          </Group>
        </Navbar>
      }
      header={
        <Header height={70} padding="md">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              height: "100%",
              justifyContent: "space-between",
            }}
          >
            <MediaQuery largerThan="xs" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>
            <MediaQuery smallerThan="xs" styles={{ display: "none" }}>
              <Text weight={600}>Open Weather</Text>
            </MediaQuery>
            <Group>
              <RiSunLine />
              <Switch color="yellow" />
              <RiMoonLine />
            </Group>
          </div>
        </Header>
      }
    >
       <Container fluid>
      <Home />
       </Container>
    </AppShell>
  );
}

export default App;
