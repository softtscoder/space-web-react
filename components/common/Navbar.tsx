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
      p={{
        mobile: "24px 0 0 24px",
        tablet: "0 0 0 24px",
        desktop: "20px 22.5px", // py px
      }}
    >
      <NextImage
        src="/assets/shared/logo.svg"
        alt="logo"
        width="48"
        height="48"
        layout="fixed"
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
            <Divider
              {...(router.pathname === name || name === "home"
                ? {
                    opacity: "1",
                    borderBottom: `2px solid ${nav._bordorColor?.active}`,
                    transform: "scaleX(1)",
                  }
                : {
                    opacity: "0.5",
                    borderBottom: `2px solid ${nav._bordorColor?.hover}`,
                    transform: "scaleX(0)",
                  })}
              position="absolute"
              bottom="0"
              overflow="hidden"
              transition="transform 275ms ease"
              aria-hidden="true"
            />
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
