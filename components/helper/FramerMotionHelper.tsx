import { Box, BoxProps, Center, CenterProps } from "@chakra-ui/react";
import { motion, HTMLMotionProps } from "framer-motion";
import NextImage, { ImageProps as NextImageProps } from "next/image";

type Merge<P, T> = Omit<P, keyof T> & T;

type BoxMotionProps = Merge<BoxProps, HTMLMotionProps<"div">>;
export const BoxMotion: React.FC<BoxMotionProps> = motion(Box);

type CenterMotionProps = Merge<CenterProps, HTMLMotionProps<"div">>;
export const CenterMotion: React.FC<CenterMotionProps> = motion(Center);
// export const CenterMotion = motion<CenterProps>(Center);

// type NextImageMotionProps = Merge<NextImageProps, HTMLMotionProps<"img">>;
// export const NextImageMotion: React.FC<NextImageMotionProps> = motion(NextImage);
export const NextImageMotion = motion<NextImageProps>(NextImage);

export interface CustomVariants {
  hidden?: object;
  visible?: object;
  whileHover?: object;
}
