// import styles from '../styles/Home.module.css'
import { Navbar } from "@/components/common";
import { Box, Center, Grid, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import { h1, h4, h5 } from "utils";
console.log(h5);
const Home: NextPage = () => {
  return (
    <Box
      backgroundImage="/assets/home/background-home-desktop.jpg"
      backgroundRepeat="no-repeat"
      backgroundSize="cover" // for big screen
    >
      <Navbar />
      <Grid
        autoFlow="column"
        justifyContent="space-around"
        alignItems="end"
        py="32"
      >
        <Box maxW="450">
          <Text {...h5.return()}>So, you want to travel to</Text>
          <Text {...h1.return()}>Space</Text>
          <Text>
            Let&#39;s face it. If you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we&#39;ll give you a truly out of
            this world experience!
          </Text>
        </Box>

        <Center
          {...h4.return()}
          style={{
            aspectRatio: "1",
          }}
          borderRadius="50%"
          bg="white"
          color="custom.1"
          letterSpacing="2px"
          p="10"
        >
          Explore
        </Center>
      </Grid>
    </Box>
  );
};

export default Home;
