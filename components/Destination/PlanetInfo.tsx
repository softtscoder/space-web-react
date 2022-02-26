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
  Text,
  List,
  ListItem,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { Dispatch, SetStateAction } from "react";
import { usePlanet } from "pages/destination";

export interface PlanetInfoProps {
  TabIndex: number;
  setTabIndex: Dispatch<SetStateAction<number>>;
}

export const PlanetInfo = ({ TabIndex, setTabIndex }: PlanetInfoProps) => {
  const planet = usePlanet();

  return planet && planet.length > 0 ? (
    <Tabs
      variant="unstyled"
      isLazy
      w={{ mobile: "360px", tablet: "600px", desktop: "500px" }}
      onChange={(index) => setTabIndex(index)}
    >
      <TabList justifyContent={{ mobile: "center", desktop: "start" }} gap="4">
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
                as="h2"
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
                m={{mobile: "0 auto", desktop: "unset"}} // textAlign helper
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
                <List>
                  <ListItem {...listSubH2.return()} color="custom.2">
                    avg.&nbsp;distance
                  </ListItem>
                  <ListItem {...listSubH1.return()}>{tab.distance}</ListItem>
                </List>
                <List>
                  <ListItem {...listSubH2.return()} color="custom.2">
                    est.&nbsp;travel time
                  </ListItem>
                  <ListItem {...listSubH1.return()}>{tab.travel}</ListItem>
                </List>
              </Grid>
            </motion.div>
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  ) : (
    <h1>PlanetInfo</h1>
  );
};
