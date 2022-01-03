import { Box, Image, Text } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { h5, planetTransitionVariants, planetVariants } from "utils";
import useSWR from "swr";
import { Planet } from "models";

const PlanetDefault = [
  {
    name: "moon",
  },
  {
    name: "mars",
  },
  {
    name: "europa",
  },
  {
    name: "titan",
  },
];

export interface PlanetImageProps {
  tabIndex: number;
}

export const PlanetImage = ({ tabIndex }: PlanetImageProps) => {
  const { data: planet } = useSWR<Planet[]>("/destination");

  return planet && planet.length > 0 ? (
    <Box w="100%" position="relative">
      <Text
        {...h5.return()}
        fontSize={{ mobile: "16px", tablet: "20px", desktop: h5.fontSize }}
        textAlign={{ mobile: "center", tablet: "unset" }}
        mb={{ mobile: "80", tablet: "96", desktop: "16" }} // for Image
        ml={{ tablet: "10", desktop: "unset" }}
      >
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
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={`planet-${planet[tabIndex].name}`}
          variants={planetTransitionVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <Image
            src={`/assets/destination/image-${planet[tabIndex].name}.webp`}
            alt="planet-img"
            w={{ mobile: "200px", tablet: "300px", desktop: "auto" }}
            // center image: https://stackoverflow.com/a/18869078/12897204
            position={{ mobile: "absolute", desktop: "unset" }}
            top="0"
            bottom="0"
            left="0"
            right="0"
            margin="auto"
            as={motion.img}
            variants={planetVariants}
            animate="visible"
            whileHover="hover"
            drag
            transition={planetVariants.hoverTransition} // chakra style, not framer motion
          >
            {/* <NextImage
              src={`/assets/destination/image-${planet[tabIndex].name}.webp`}
              width="200"
              height="200"
              layout="responsive"
            /> */}
          </Image>
        </motion.div>
      </AnimatePresence>
    </Box>
  ) : (
    <h1>PlanetImage</h1>
  );
};
