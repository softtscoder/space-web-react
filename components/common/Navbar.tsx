import {
  Divider,
  Grid,
  Box,
  Text,
  useColorModeValue,
  Center,
} from "@chakra-ui/react";
import NextImage from "next/image";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { nav } from "utils";

// console.log(nav._bordorColor);
export interface NavbarProps {}

export const Navbar = ({}: NavbarProps) => {
  const router = useRouter();

  return (
    <Grid
      autoFlow="column"
      alignItems="center"
      justifyContent="space-between"
      px="22.5px"
      py="20px"
    >
      <NextImage
        src="/assets/shared/logo.svg"
        alt="logo"
        width="48"
        height="48"
        layout="fixed"
      />

      <Grid
        autoFlow="column"
        justifyContent="space-evenly"
        background="rgba(255, 255, 255, 0.04);"
        backdropFilter="blur(81.5485px)"
        width="830px"
        height="96px"
        position="relative"
        color={useColorModeValue("white", "black")}
      >
        <Divider
          position="absolute"
          left="-35%"
          top="50%"
          w="300px"
          mixBlendMode="normal"
          opacity="0.25"
        />
        {["home", "destination", "crew", "technology"].map((name, idx) => (
          <Center
            key={`nav-${name}`}
            position="relative"
            // Please note that we are passing the styles to the prop __css.
            // It has the same API as the sx prop, but has a lower style priority.
            // Ex: Overrride __css with style props (my, mx, __hover,... - not `style`)
            sx={{
              "&:hover hr": {
                borderBottom: `2px solid ${nav._bordorColor?.hover}`,
                transform: "scaleX(1) !important",
                mixBlendMode: "normal",
                opacity: "0.5",
              },
            }}
          >
            <NextLink href={`/${name}`} as={name === "home" ? "/" : undefined}>
              <a>
                <Text
                  {...nav.return()}
                  sx={{
                    "& > span:first-child": {
                      fontWeight: "bold",
                    },
                  }}
                >
                  <span>0{idx}&nbsp;</span>
                  <span>{name}</span>
                </Text>
              </a>
            </NextLink>
            <Divider
              borderBottom={
                router.pathname === name || name === "home"
                  ? `2px solid ${nav._bordorColor?.active}`
                  : `2px solid ${nav._bordorColor?.hover}`
              }
              position="absolute"
              bottom="0"
              overflow="hidden"
              transform={
                router.pathname === name || name === "home"
                  ? "scaleX(1)"
                  : "scaleX(0)"
              }
              transition="transform 275ms ease"
              aria-hidden="true"
            />
          </Center>
        ))}
      </Grid>
    </Grid>
  );
};
