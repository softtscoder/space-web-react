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
} from "@chakra-ui/react";
import type { NextPage } from "next";
import { h1, h2, h4, h5, nav, listSubH1, listSubH2 } from "utils";
import {
  BoxMotion,
  CenterMotion,
  CustomVariants,
  TabMotion,
} from "@/components/helper";

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
];

const boxVariants: CustomVariants = {
  hidden: { transform: "translateY(25%)", opacity: 0 },
  visible: {
    transform: "translateY(0%)",
    opacity: 1,
    transition: { duration: 1.5, ease: "linear" },
  },
};

const Destination: NextPage = () => {
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
        alignItems={{ mobile: "unset", desktop: "end" }}
        justifyItems={{ mobile: "center", desktop: "unset" }}
        gap={{ mobile: "20", desktop: "0" }}
        py="32"
      >
        <Center
          {...h4.return()}
          fontSize={{ mobile: "14px", tablet: h4.fontSize }}
          __css={{
            aspectRatio: "1",
          }}
          position="relative"
          borderRadius="50%"
          p={{ mobile: "4", tablet: "10" }}
          bgColor="white"
          color="custom.1"
          letterSpacing="2px"
        >
          Explore
          <CenterMotion
            __css={{
              aspectRatio: "1",
            }}
            width="100%"
            height="100%"
            borderRadius="50%"
            position="absolute"
            bgColor="rgba(255,255,255,0.1)"
            mixBlendMode="normal"
            initial={{
              scale: 1,
              opacity: 0,
            }}
            whileHover={{
              scale: 1.5,
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
            }}
          />
        </Center>

        <Tabs variant="unstyled" isLazy maxW="600" color="white">
          <TabList>
            {content.map((tab, index) => (
              <Tab
                key={`tab-${tab.name}`}
                {...nav.return()}
                _selected={{
                  borderBottom: `2px solid ${nav._bordorColor?.active}`,
                }}
                _hover={{
                  borderBottom: `2px solid ${nav._bordorColor?.active}`,
                }}
                // initial={{
                //   scaleX: 0,
                // }}
                // whileHover={{
                //   scaleX: 1,
                // }}
                // transition={{
                //   duration: 0.5,
                //   ease: "easeOut",
                // }}
              >
                {tab.name}
              </Tab>
            ))}
          </TabList>
          <TabPanels>
            {content.map((tab, index) => (
              <TabPanel p={4} key={`tab-${tab.name}`}>
                <Text {...h2.return()}>{tab.name}</Text>
                <Text>{tab.content}</Text>
                <Divider my="10" borderColor="#383B4B" />
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

        {/* <BoxMotion
          textAlign={{ mobile: "center", desktop: "start" }}
          variants={boxVariants}
          initial="hidden"
          animate="visible"
        >
          <Box>
            <Text
              {...h5.return()}
              fontSize={{
                mobile: "16px",
                tablet: "20px",
                desktop: h5.fontSize,
              }}
            >
              So, you want to travel to
            </Text>
            <Text
              {...h1.return()}
              fontSize={{ mobile: h2.fontSize, tablet: h1.fontSize }}
            >
              Space
            </Text>
          </Box>
          <Text
            maxW={{ mobile: "600", desktop: "450" }}
            px={{ mobile: "4", tablet: "0" }}
            fontSize={{
              mobile: "15px",
              tablet: "16px",
              desktop: "18px",
            }}
            // fontSize=""
          >
            Let&#39;s face it. If you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we&#39;ll give you a truly out of
            this world experience!
          </Text>
        </BoxMotion> */}
      </Grid>
    </Box>
  );
};

export default Destination;
