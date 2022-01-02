import {
  nav,
  _afterUnderlineStyle,
  _sxHoverAfterUnderlineStyle,
  tabTransitionVariants,
  h2,
  listSubH2,
  listSubH1,
} from "utils";
import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Divider,
  Grid,
  Box,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";
import useSWR from "swr";
import { Planet } from "models";

const PlanetDefault = [
  {
    name: "moon",
    content:
      "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384.400 km",
    travel_time: "3 days",
  },
  {
    name: "mars",
    content:
      "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!",
    distance: "255 mil. km",
    travel_time: "9 months",
  },
  {
    name: "europa",
    content:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin",
    distance: "628 mil. km",
    travel_time: "3 years",
  },
  {
    name: "titan",
    content:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn",
    distance: "1.6 bil. km",
    travel_time: "7 years",
  },
];

export interface PlanetInfoProps {
  TabIndex: number;
  setTabIndex: Dispatch<React.SetStateAction<number>>;
}

export const PlanetInfo = ({ TabIndex, setTabIndex }: PlanetInfoProps) => {
  const { data: planet } = useSWR<Planet[]>("/destination");
  console.log(planet);

  return (
    planet.length > 0 && (
      <Tabs
        variant="unstyled"
        isLazy
        w={{ mobile: "360px", tablet: "600px", desktop: "500px" }}
        color="white"
        onChange={(index) => setTabIndex(index)}
      >
        <TabList
          justifyContent={{ mobile: "center", desktop: "start" }}
          gap="4"
        >
          {planet.map((tab, index) => (
            <Tab
              key={`tab-${tab.name}`}
              {...nav.return()}
              color={index === TabIndex ? nav.color : "custom.2"}
              position="relative"
              _after={_afterUnderlineStyle(index === TabIndex)}
              sx={{
                "&:hover:after": _sxHoverAfterUnderlineStyle(),
              }}
            >
              {tab.name}
            </Tab>
          ))}
        </TabList>
        {/* Tab transition:
     https://github.com/chakra-ui/chakra-ui/discussions/5085
     https://github.com/chakra-ui/chakra-ui/discussions/3400
     */}
        <TabPanels>
          {planet.map((tab, index) => (
            <TabPanel
              p={4}
              key={`tab-${tab.name}`}
              textAlign={{ mobile: "center", desktop: "unset" }}
            >
              <motion.div
                variants={tabTransitionVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <Text
                  {...h2.return()}
                  fontSize={{
                    mobile: "80px",
                    desktop: h2.fontSize,
                  }}
                >
                  {tab.name}
                </Text>
                <Text
                  fontSize={{
                    mobile: "15px",
                    tablet: "16px",
                    desktop: "18px",
                  }}
                >
                  {tab.content}
                </Text>
                <Divider
                  mt={{ mobile: "10", tablet: "20" }}
                  mb="10"
                  borderColor="#383B4B"
                />
                <Grid
                  autoFlow={{ mobile: "row", tablet: "column" }}
                  gap={{ mobile: "10", tablet: "unset" }}
                >
                  <Box>
                    <Text {...listSubH2.return()} color="custom.2">
                      avg.&nbsp;distance
                    </Text>
                    <Text {...listSubH1.return()}>{tab.distance}</Text>
                  </Box>
                  <Box>
                    <Text {...listSubH2.return()} color="custom.2">
                      est.&nbsp;travel time
                    </Text>
                    <Text {...listSubH1.return()}>{tab.travel_time}</Text>
                  </Box>
                </Grid>
              </motion.div>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    )
  );
};
