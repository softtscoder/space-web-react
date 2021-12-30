// import styles from '../styles/Home.module.css'
import { Navbar } from "@/components/common";
import { Box, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import { nav } from "utils";

const Home: NextPage = () => {
  return (
    <Box
      backgroundImage="/assets/home/background-home-desktop.jpg"
      backgroundRepeat="no-repeat"
      backgroundSize="cover" // for big screen
    >
      <Navbar />
    </Box>
  );
};

export default Home;
