import {
  nav,
  _afterUnderlineStyle,
  _sxHoverAfterUnderlineStyle,
  tabTransitionVariants,
  h4,
  h5,
  h3,
} from "utils";
import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Grid,
  Box,
  Text,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Dispatch } from "react";
import { useTech } from "pages/technology";

export interface TechInfoProps {
  TabIndex: number;
  setTabIndex: Dispatch<React.SetStateAction<number>>;
}

export const TechInfo = ({ TabIndex, setTabIndex }: TechInfoProps) => {
  const tech = useTech();
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return tech && tech.length > 0 ? (
    <Grid
      // gap={{ mobile: "unset", desktop: "24" }}
      py="200px"
    >
      {/* {!isMobile && ( */}
      <Text
        as="h5"
        {...h5.return()}
        fontSize={{ mobile: "16px", tablet: "20px", desktop: h5.fontSize }}
        textAlign={{ mobile: "center", tablet: "unset" }}
        mb={{ mobile: "6", tablet: "16", desktop: "16" }} // for TechImage
      >
        <Box
          as="span"
          mr="28px"
          color="white"
          mixBlendMode="normal"
          opacity="0.25"
        >
          03
        </Box>
        Space launch 101
      </Text>
      {/* )} */}

      <Tabs
        variant="soft-rounded"
        isLazy
        w={{ mobile: "392px", tablet: "600px", desktop: "700px" }}
        onChange={(index) => setTabIndex(index)}
        display={{ mobile: "block", desktop: "grid" }}
        gridAutoFlow={{ mobile: "row", desktop: "column" }}
      >
        {!isMobile && (
          <TabList>
            <VStack gap="32px">
              {tech.map((tab, index) => (
                <Tab
                  key={`tab-${tab.name}`}
                  // override chakra default style
                  border="1px solid rgba(255,255,255,0.25)"
                  alignItems="unset"
                  justifyContent="unset"
                  _selected={{ bgColor: "white" }}
                  _hover={{ bgColor: "rgba(255,255,255,0.5)" }}
                >
                  <Text
                    {...h4.return()}
                    color={index === TabIndex ? "black" : "custom.3"}
                  >
                    {Number(index + 1)}
                  </Text>
                </Tab>
              ))}
            </VStack>
          </TabList>
        )}
        {/* Tab transition:
          https://github.com/chakra-ui/chakra-ui/discussions/5085
          https://github.com/chakra-ui/chakra-ui/discussions/3400
        */}
        <TabPanels>
          {tech.map((tab, index) => (
            <TabPanel
              p="0"
              key={`tab-${tab.name}`}
              textAlign={{ mobile: "center", desktop: "unset" }}
            >
              <motion.div
                variants={tabTransitionVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <Text {...nav.return()} color="custom.2">
                  The Terminology...
                </Text>
                <Text
                  as="h3"
                  {...h3.return()}
                  fontSize={{
                    mobile: "24px",
                    tablet: "40px",
                    desktop: h3.fontSize,
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
                  color="custom.2"
                  w={{ mobile: "360px", tablet: "430px" }}
                  m={{ mobile: "0 auto", desktop: "unset" }} // textAlign helper
                >
                  {tab.description}
                </Text>
              </motion.div>
            </TabPanel>
          ))}
        </TabPanels>

        {isMobile && (
          <TabList
            justifyContent={{ mobile: "center", desktop: "start" }}
            gap="4"
            mt={{ mobile: "12", tablet: "28" }} // for <TabPanels />
          >
            {tech.map((tab, index) => (
              <Tab
                key={`tab-${tab.name}`}
                {...nav.return()}
                color={index === TabIndex ? nav.color : "custom.2"}
                bgColor="rgba(255,255,255,0.17)" // = opacity: 0.17
                mixBlendMode="normal"
                // override chakra default style
                borderRadius="full"
                p="40px"
                alignItems="unset"
                justifyContent="unset"
                _selected={{ bgColor: "white" }}
                _hover={{ bgColor: "rgba(255,255,255,0.5)" }}
              />
            ))}
          </TabList>
        )}
      </Tabs>
    </Grid>
  ) : (
    <h1>TechInfo</h1>
  );
};
