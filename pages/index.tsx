// import styles from '../styles/Home.module.css'
import { Box, Center, Grid, Text } from "@chakra-ui/react";
import {
  h1,
  h2,
  h4,
  h5,
  firstRenderVariants,
  contentVariants,
  exploreAuraVariants,
} from "utils";
import { routerShallowPush } from "components/helper";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { NextPageWithLayout } from "models";
import { MainLayout } from "components/layout";

// console.log(h5);

interface HomeProps {}

const Home: NextPageWithLayout = ({}: HomeProps) => {
  const router = useRouter();

  return (
    <Box
      as={motion.div}
      className="wrapper"
      backgroundImage={{
        mobile: "/assets/home/background-home-mobile.jpg",
        tablet: "/assets/home/background-home-tablet.jpg",
        desktop: "/assets/home/background-home-desktop.jpg",
      }}
      backgroundRepeat="no-repeat"
      backgroundSize="cover" // desktop: for big screen, khi debug nho chon responsive de xem cho dung
      variants={firstRenderVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* <Navbar /> */}
      <Grid
        autoFlow={{ mobile: "row", desktop: "column" }}
        justifyContent={{ mobile: "unset", desktop: "space-around" }}
        alignItems={{ mobile: "unset", desktop: "end" }}
        justifyItems={{ mobile: "center", desktop: "unset" }}
        gap={{ mobile: "20", desktop: "0" }}
        as={motion.div}
        variants={contentVariants}
        layout="size"
        initial="hidden"
        animate="visible"
      >
        <Box textAlign={{ mobile: "center", desktop: "start" }}>
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
        </Box>

        <Center
          as={motion.div}
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
          onClick={() => routerShallowPush(router, "/destination")}
          cursor="pointer"
          variants={exploreAuraVariants}
          whileHover="exploreHover"
          transition={exploreAuraVariants.hoverTransition} // chakra syntax
        >
          Explore
          <Center
            as={motion.div}
            __css={{
              aspectRatio: "1",
            }}
            width="100%"
            height="100%"
            borderRadius="50%"
            position="absolute"
            bgColor="rgba(255,255,255,0.2)"
            mixBlendMode="normal"
            variants={exploreAuraVariants}
            animate="visible"
            whileHover="auraHover"
            transition={exploreAuraVariants.hoverTransition} // chakra syntax
          />
        </Center>
      </Grid>
    </Box>
  );
};

Home.Layout = MainLayout;
export default Home;
