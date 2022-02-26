import { Box, Text, useMediaQuery, Image } from "@chakra-ui/react";
import NextImage from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { planetTransitionVariants } from "utils/variants";
import { h5 } from "utils/theme";
import { useTech } from "pages/technology";
import { Fragment } from "react";
export interface TechImageProps {
  tabIndex: number;
}

function localStringParser(str: string) {
  return str.toLowerCase().split(" ").join("-");
}

export const TechImage = ({ tabIndex }: TechImageProps) => {
  const tech = useTech();
  const [isMobileTablet] = useMediaQuery("(max-width: 1440px)");
  const imgUrlVariable =
    tech &&
    (isMobileTablet
      ? localStringParser(tech[tabIndex].name) + "-landscape"
      : localStringParser(tech[tabIndex].name) + "-portrait");
  // const [isMobile] = useMediaQuery("(max-width: 768px)");

  return tech && tech.length > 0 ? (
    <Fragment>
      {/* {isMobile && (
        <Text
          as="h5"
          {...h5.return()}
          fontSize={{ mobile: "16px", tablet: "20px", desktop: h5.fontSize }}
          textAlign={{ mobile: "center", tablet: "unset" }}
          mb={{ mobile: "80", tablet: "16", desktop: "16" }} // for Image
          ml={{ tablet: "unset", desktop: "unset" }}
        >
          <Box
            as="span"
            mr="28px"
            color="white"
            mixBlendMode="normal"
            opacity="0.25"
          >
            02
          </Box>
          Meet your tech
        </Text>
      )} */}

      <AnimatePresence exitBeforeEnter>
        <Box
          position="relative"
          width={{ mobile: "177px", tablet: "456px", desktop: "515px" }}
          height={{ mobile: "220px", tablet: "572px", desktop: "527px" }}
          // above is for NextImage
          as={motion.div}
          key={`tech-${tech[tabIndex].name}`}
          variants={planetTransitionVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <NextImage
            src={`/assets/technology/image-${imgUrlVariable}.jpg`}
            layout="fill"
            // neu khong xac dinh width height truoc cua container
            // thi dung scale-down de giu instrinsic value
            objectFit="contain"
            objectPosition="top"
          />
        </Box>
      </AnimatePresence>
    </Fragment>
  ) : (
    <h1>TechImage</h1>
  );
};
