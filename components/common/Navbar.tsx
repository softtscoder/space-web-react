import {
  Divider,
  Grid,
  Box,
  Text,
  useColorModeValue,
  Center,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import NextImage from "next/image";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { nav } from "utils";
import {
  CustomVariants,
  _afterUnderlineStyle,
  _sxHoverAfterUnderlineStyle,
} from "@/components/helper";

const svgVariants: CustomVariants = {
  hidden: {
    // scale: 0,
  },
  visible: {
    // scale: 1,
    rotate: [0, 360],
    transition: { repeat: "Infinity", duration: 2, ease: "linear" },
  },
  whileHover: {
    scale: 1.5,
    transition: { duration: 0.5, ease: "linear" },
  },
};

// console.log(nav._bordorColor);
export interface NavbarProps {}

export const Navbar = ({}: NavbarProps) => {
  const router = useRouter();

  return (
    <Grid
      autoFlow="column"
      alignItems="center"
      justifyContent="space-between"
      p={{
        mobile: "24px 0 0 24px",
        tablet: "0 0 0 24px",
        desktop: "20px 22.5px", // py px
      }}
    >
      {/* <NextImage
        src="/assets/shared/logo.svg"
        alt="logo"
        width="48"
        height="48"
        layout="fixed"
      /> */}
      <motion.img
        src="/assets/shared/logo.svg"
        alt="logo"
        variants={svgVariants}
        initial="hidden"
        animate="visible"
        whileHover="whileHover"
      />

      <Grid
        display={{ mobile: "none", tablet: "grid" }}
        width={{ tablet: "450px", desktop: "830px" }}
        height="96px"
        autoFlow="column"
        justifyContent="space-evenly"
        background="rgba(255, 255, 255, 0.04);"
        backdropFilter="blur(81.5485px)"
        position="relative"
        color={useColorModeValue("white", "black")}
      >
        {["home", "destination", "crew", "technology"].map((name, idx) => (
          <Center
            key={`nav-${name}`}
            position="relative"
            _after={_afterUnderlineStyle(
              router.pathname === `/${name}` ||
                (router.pathname === `/` && name === "home")
            )}
            // https://github.com/chakra-ui/chakra-ui/discussions/5306
            sx={{
              "&:hover:after": _sxHoverAfterUnderlineStyle(),
            }}
          >
            <NextLink href={name === "home" ? "/" : `/${name}`}>
              <a>
                <Text
                  {...nav.return()}
                  display={{ mobile: "none", desktop: "inline-block" }}
                  fontWeight="bold"
                >
                  0{idx}&nbsp;
                </Text>
                <Text as="span" {...nav.return()}>
                  {name}
                </Text>
              </a>
            </NextLink>
          </Center>
        ))}
        <Divider
          position="absolute"
          left={{ mobile: "0", desktop: "-25%" }}
          top="50%"
          w={{ mobile: "0", desktop: "30%" }}
          mixBlendMode="normal"
          opacity="0.25"
        />
      </Grid>
    </Grid>
  );
};
