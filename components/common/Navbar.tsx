import {
  Divider,
  Grid,
  Text,
  useColorModeValue,
  Center,
  Portal,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { logoVariants, nav, _afterUnderlineStyle, _sxHoverAfterUnderlineStyle } from "utils";
import {
  routerShallowPush,
} from "components/helper";


// console.log(nav._bordorColor);
export interface NavbarProps {}

export const Navbar = ({}: NavbarProps) => {
  const router = useRouter();

  return (
    <Portal>
      <Grid
        autoFlow="column"
        alignItems="center"
        justifyContent="space-between"
        p={{
          mobile: "24px 0 0 24px",
          tablet: "0 0 0 24px",
          desktop: "20px 22.5px", // py px
        }}
        position="absolute"
        top="0"
        w="100%"
      >
        {/* Ko dung vi logo size nho
      <motion.div
        variants={logoVariants}
        animate="visible"
        whileHover="hover"
        transition={logoVariants.hoverTransition}
      >
        <NextImage
          src="/assets/shared/logo.svg"
          alt="logo"
          width="48"
          height="48"
        />
      </motion.div> */}
        <motion.img
          src="/assets/shared/logo.svg"
          alt="logo"
          variants={logoVariants}
          animate="visible"
          whileHover="hover"
          transition={logoVariants.hoverTransition}
          onClick={() => routerShallowPush(router, "/")}
          style={{
            cursor: "pointer",
          }}
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
    </Portal>
  );
};
