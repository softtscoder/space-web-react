import { Navbar } from "@/components/common";
import {
  Box,
  Center,
  Grid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Divider,
  useTab,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import { h1, h2, h4, h5, nav, listSubH1, listSubH2 } from "utils";
import {
  CustomVariantsProps,
  RotateWithZoomVariantProps,
  _afterUnderlineStyle,
  _sxHoverAfterUnderlineStyle,
} from "@/components/helper";
import NextImage from "next/image";
import { motion } from "framer-motion";
import React from "react";

// console.log(h5);

const content = [
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

const boxVariants: CustomVariantsProps = {
  hidden: { transform: "translateY(25%)", opacity: 0 },
  visible: {
    transform: "translateY(0%)",
    opacity: 1,
    transition: { duration: 1.5, ease: "linear" },
  },
};

const planetVariants: RotateWithZoomVariantProps = {
  visible: {
    rotate: [0, 360],
    transition: { duration: 60, ease: "linear", repeat: Infinity }, // for rotate
  },
  hover: {
    scale: 1.1,
  },
  // for hover
  hoverTransition: {
    duration: 0.6,
    ease: "easeOut",
  },
};

const Destination: NextPage = () => {
  const [tabIndex, setTabIndex] = React.useState(0);

  return (
    <Box
      backgroundImage={{
        mobile: "/assets/destination/background-destination-mobile.jpg",
        tablet: "/assets/destination/background-destination-tablet.jpg",
        desktop: "/assets/destination/background-destination-desktop.jpg",
      }}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Navbar />
      <Grid
        autoFlow={{ mobile: "row", desktop: "column" }}
        justifyContent={{ mobile: "unset", desktop: "space-around" }}
        alignItems={{ mobile: "unset", desktop: "center" }}
        justifyItems={{ mobile: "center", desktop: "unset" }}
        gap={{ mobile: "20", desktop: "0" }}
        py="32"
      >
        <Box>
          <Text {...h5.return()} mb="20">
            <Box
              as="span"
              mr="28px"
              color="white"
              mixBlendMode="normal"
              opacity="0.25"
            >
              01
            </Box>
            Pick your destination
          </Text>
          <motion.div
            variants={planetVariants}
            animate="visible"
            whileHover="hover"
            transition={planetVariants.hoverTransition}
          >
            <NextImage
              src={`/assets/destination/image-${content[tabIndex].name}.webp`}
              width="400"
              height="400"
            />
          </motion.div>
        </Box>

        <Tabs
          variant="unstyled"
          isLazy
          maxW="600"
          color="white"
          onChange={(index) => setTabIndex(index)}
        >
          <TabList gap="4">
            {content.map((tab, index) => (
              <Tab
                key={`tab-${tab.name}`}
                {...nav.return()}
                color={index === tabIndex ? nav.color : "custom.2"}
                position="relative"
                _after={_afterUnderlineStyle(index === tabIndex)}
                sx={{
                  "&:hover:after": _sxHoverAfterUnderlineStyle(),
                }}
              >
                {tab.name}
              </Tab>
            ))}
          </TabList>
          <TabPanels>
            {content.map((tab, index) => (
              <TabPanel p={4} key={`tab-${tab.name}`}>
                <Text {...h2.return()}>{tab.name}</Text>
                <Text maxW="440px">{tab.content}</Text>
                <Divider mt="20" mb="10" borderColor="#383B4B" />
                <Grid autoFlow="column">
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
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </Grid>
    </Box>
  );
};

export default Destination;