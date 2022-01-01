import {
  Box,
  BoxProps,
  Center,
  CenterProps,
  Tab,
  TabProps,
} from "@chakra-ui/react";
import { motion, HTMLMotionProps, Variants, Variant } from "framer-motion";
import NextImage, { ImageProps as NextImageProps } from "next/image";

type Merge<P, T> = Omit<P, keyof T> & T;

type BoxMotionProps = Merge<BoxProps, HTMLMotionProps<"div">>;
export const BoxMotion: React.FC<BoxMotionProps> = motion(Box);

type CenterMotionProps = Merge<CenterProps, HTMLMotionProps<"div">>;
export const CenterMotion: React.FC<CenterMotionProps> = motion(Center);
// export const CenterMotion = motion<CenterProps>(Center);

type TabMotionProps = Merge<TabProps, HTMLMotionProps<"button">>;
export const TabMotion: React.FC<TabMotionProps> = motion(Tab);

// type NextImageMotionProps = Merge<NextImageProps, HTMLMotionProps<"img">>;
// export const NextImageMotion: React.FC<NextImageMotionProps> = motion(NextImage);
export const NextImageMotion = motion<NextImageProps>(NextImage);

/**
 * @description Strengthen _framer-motion_ `Variants, Variant` type
 * @example
 * ```jsx
 * const boxVariants: CustomVariantsProps = {
 *    // syntax --> key_name: { properties }
 *    hidden: { transform: "translateY(25%)", opacity: 0 },
 *    visible: {
 *      transform: "translateY(0%)",
 *      opacity: 1,
 *      transition: { duration: 1.5, ease: "linear" },
 *    },
 * };
 * ```
 */
export interface CustomVariantsProps {
  [key: string]: Variant | any;
}

/**
 * @description Use to create Rotate with Zoom animation
 *
 * * Defining
 * @example
 * ```jsx
 * const planetVariant: RotateWithZoomVariantProps = {
 *   visible: {
 *     rotate: [0, 360],
 *     transition: { duration: 60, ease: "linear", repeat: Infinity }, // for rotate
 *   },
 *   hover: {
 *     scale: 1.1,
 *   },
 *   // for hover
 *   hoverTransition: {
 *     duration: 0.6,
 *     ease: "easeOut",
 *   },
 * };
 * ```
 *
 * * Usage
 * @example
 * ```jsx
 * <motion.div
 *   variants={planetVariant}
 *   animate="visible"
 *   whileHover="hover"
 *   transition={planetVariant.hoverTransition}
 * >
 * ```
 */
export interface RotateWithZoomVariantProps extends CustomVariantsProps {
  visible: Variant;
  hover: Variant;
  hoverTransition: Variant | any;
}
