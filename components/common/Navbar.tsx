import {
  Divider,
  Grid,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Box,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import NextImage from "next/image";
import { nav } from "utils";
console.log(nav.return());
export interface NavbarProps {}

export const Navbar = ({}: NavbarProps) => {
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
        alignItems="center"
        background="rgba(255, 255, 255, 0.04);"
        backdrop-filter="blur(81.5485px)"
        width="830px"
        height="96px"
        position="relative"
        color={useColorModeValue("white", "black")}
      >
        <Divider
          position="absolute"
          left="-35%"
          w="300px"
          mixBlendMode="normal"
          opacity="0.25"
        />
        <Menu>
          <MenuButton {...nav.return()}>00 Home</MenuButton>
          <MenuList>
            <MenuItem>Jeans</MenuItem>
            <MenuDivider />
            <MenuItem>Hoodie</MenuItem>
            <MenuDivider />
            <MenuItem>Short</MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton {...nav.return()}>01 Destination</MenuButton>
          <MenuList>
            <MenuItem>Trending</MenuItem>
            <MenuItem>People&apos;s choice</MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton {...nav.return()}>02 Crew</MenuButton>
          <MenuList>
            <MenuItem>2021 Christmas Collection</MenuItem>
            <MenuItem>November Collection</MenuItem>
            <MenuItem>New York Collection</MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton {...nav.return()}>03 Technology</MenuButton>
          <MenuList>
            <MenuItem>2021 Christmas Collection</MenuItem>
            <MenuItem>November Collection</MenuItem>
            <MenuItem>New York Collection</MenuItem>
          </MenuList>
        </Menu>
      </Grid>
    </Grid>
  );
};
