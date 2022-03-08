import "./App.css";
import { useState } from "react";
import {
  AiOutlineCalendar,
  AiOutlineCloud,
  AiOutlineEllipsis,
  AiOutlineFieldTime,
  AiOutlineSearch,
} from "react-icons/ai";
import { RiSunLine, RiMoonLine } from "react-icons/ri";
import {
  ActionIcon,
  AppShell,
  Burger,
  Button,
  Container,
  Group,
  Header,
  MediaQuery,
  Navbar,
  Switch,
  Text,
  TextInput,
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
                marginBottom: "1rem",
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
                marginBottom: "1rem",
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
                marginBottom: "1rem",
              }}
            >
              <AiOutlineCalendar size="30" />
              <Text weight={600} size="xs">
                Daily
              </Text>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "1rem",
              }}
            >
              <MediaQuery largerThan="xs" styles={{ display: "none" }}>
                <TextInput placeholder="Search for a location" />
              </MediaQuery>
              <AiOutlineEllipsis size="30" />
              <Text weight={600} size="xs">
                Settings
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
            <MediaQuery smallerThan="xs" styles={{ display: "none" }}>
              <Group>
                <TextInput placeholder="Search for a location" />
                <ActionIcon variant="filled" size="lg">
                  <AiOutlineSearch />
                </ActionIcon>
              </Group>
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
