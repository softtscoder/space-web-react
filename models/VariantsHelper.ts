import { Variant } from "framer-motion";

type CustomVariant = Variant | object;

/**
 * @description Strengthen _framer-motion_ `Variants, Variant` type
 *
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
 *
 * @deprecated
 * CustomVariant --- Beside _framer-motion_ `Variant`, it accepts string for `chakra-ui` style
 * @example
 * ```jsx
 * const boxVariants: CustomVariantsProps = {
 *    hidden: { transform: "translateY(25%)", opacity: 0 },
 *    visible: {
 *      transform: "translateY(0%)",
 *      opacity: 1,
 *      transition: { duration: 1.5, ease: "linear" },
 *    },
 *    hoverTransition: "all 0.5s ease-in-out",
 * };
 * ```
 */
export interface CustomVariantsProps {
  [key: string]: CustomVariant;
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
  hoverTransition: CustomVariant;
}
