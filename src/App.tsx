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
  Modal,
  Navbar,
  Select,
  Switch,
  Text,
  TextInput,
  ColorSchemeProvider,
  ColorScheme,
  useMantineTheme,
  MantineProvider,
} from "@mantine/core";
import Home from "./components/Home";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators, State } from "./state";
import { bindActionCreators } from "redux";
import { useLocalStorageValue } from "@mantine/hooks";

function App() {
  const dispatch = useDispatch();

  const { loading } = useSelector((state: State) => state.geolocation);

  const [colorScheme, setColorScheme] = useLocalStorageValue<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
  });

  const { getGeolocation, changeWeatherType } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const [opened, setOpened] = useState(false);
  const [openSettings, setOpenSettings] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState("standard");
  const [selectedNavigation, setSelectedNavigation] = useState(1);
  const [geolocation, setGeolocation] = useState("");
  const theme = useMantineTheme();

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  const handlerSearchGeolocation = () => {
    getGeolocation(geolocation);
  };

  const handlerWeatherTypeChange = (navigationKey: number, wType: string) => {
    setSelectedNavigation(navigationKey);
    changeWeatherType(wType);
  };

  const handlerChangeSettings = () => {
    localStorage.setItem("units", selectedUnit);
    setOpenSettings(false);
  };

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{
          colorScheme,
          breakpoints: {
            xs: 280,
            sm: 800,
            md: 1000,
            lg: 1200,
            xl: 1400,
          },
        }}
        withGlobalStyles
      >
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
                  onClick={() => handlerWeatherTypeChange(1, "now")}
                >
                  <AiOutlineCloud
                    color={
                      selectedNavigation === 1
                        ? "#008ACF"
                        : colorScheme === "dark"
                        ? "#ffffff"
                        : "#000000"
                    }
                    size="30"
                  />
                  <Text
                    color={
                      selectedNavigation === 1
                        ? "#008ACF"
                        : colorScheme === "dark"
                        ? "#ffffff"
                        : "#000000"
                    }
                    weight={600}
                    size="xs"
                  >
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
                  onClick={() => handlerWeatherTypeChange(2, "hourly")}
                >
                  <AiOutlineFieldTime
                    color={
                      selectedNavigation === 2
                        ? "#008ACF"
                        : colorScheme === "dark"
                        ? "#ffffff"
                        : "#000000"
                    }
                    size="30"
                  />
                  <Text
                    color={
                      selectedNavigation === 2
                        ? "#008ACF"
                        : colorScheme === "dark"
                        ? "#ffffff"
                        : "#000000"
                    }
                    weight={600}
                    size="xs"
                  >
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
                  onClick={() => handlerWeatherTypeChange(3, "daily")}
                >
                  <AiOutlineCalendar
                    color={
                      selectedNavigation === 3
                        ? "#008ACF"
                        : colorScheme === "dark"
                        ? "#ffffff"
                        : "#000000"
                    }
                    size="30"
                  />
                  <Text
                    color={
                      selectedNavigation === 3
                        ? "#008ACF"
                        : colorScheme === "dark"
                        ? "#ffffff"
                        : "#000000"
                    }
                    weight={600}
                    size="xs"
                  >
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
                  onClick={() => setOpenSettings(true)}
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
                <MediaQuery largerThan="lg" styles={{ display: "none" }}>
                  <Burger
                    opened={opened}
                    onClick={() => setOpened((o) => !o)}
                    size="sm"
                    color={theme.colors.gray[6]}
                    mr="xl"
                  />
                </MediaQuery>
                <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
                  <Text weight={600}>Open Weather</Text>
                </MediaQuery>
                <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
                  <Group>
                    <TextInput
                      placeholder="Search for a location"
                      onChange={(e) => setGeolocation(e.target.value)}
                    />
                    <ActionIcon
                      loading={loading}
                      disabled={loading}
                      variant="filled"
                      size="lg"
                      onClick={() => handlerSearchGeolocation()}
                    >
                      <AiOutlineSearch />
                    </ActionIcon>
                  </Group>
                </MediaQuery>
                <Group>
                  <RiSunLine />
                  <Switch
                    checked={colorScheme === "light" ? false : true}
                    color="blue"
                    size="xs"
                    onClick={() => toggleColorScheme()}
                    readOnly
                  />
                  <RiMoonLine />
                </Group>
              </div>
            </Header>
          }
        >
          <Modal
            centered
            closeOnClickOutside={false}
            opened={openSettings}
            onClose={() => setOpenSettings(false)}
            title="Settings"
          >
            <Select
              label="Select units"
              onChange={(e) => setSelectedUnit(e ? e : "standard")}
              placeholder="Select One"
              value={selectedUnit}
              data={[
                { value: "standard", label: "Standard" },
                { value: "metric", label: "Metric" },
                { value: "imperial", label: "Imperial" },
              ]}
            />
            <Button
              sx={{ marginTop: "1rem" }}
              onClick={() => handlerChangeSettings()}
              fullWidth
            >
              Save Settings
            </Button>
          </Modal>
          <Container fluid>
            <Home />
          </Container>
        </AppShell>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
