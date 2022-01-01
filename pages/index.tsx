// import styles from '../styles/Home.module.css'
import { Navbar } from "@/components/common";
import { Box, Center, Grid, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import { h1, h2, h4, h5 } from "utils";
import { BoxMotion, CenterMotion, CustomVariants } from "@/components/helper";

// console.log(h5);

const boxVariants: CustomVariants = {
  hidden: { transform: "translateY(25%)", opacity: 0 },
  visible: {
    transform: "translateY(0%)",
    opacity: 1,
    transition: { duration: 1.5, ease: "linear" },
  },
};

const Home: NextPage = () => {
  return (
    <Box
      backgroundImage={{
        mobile: "/assets/home/background-home-mobile.jpg",
        tablet: "/assets/home/background-home-tablet.jpg",
        desktop: "/assets/home/background-home-desktop.jpg",
      }}
      backgroundRepeat="no-repeat"
      backgroundSize="cover" // desktop: for big screen, khi debug nho chon responsive de xem cho dung
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
        <BoxMotion
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
        </BoxMotion>

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
      </Grid>
    </Box>
  );
};

export default Home;
