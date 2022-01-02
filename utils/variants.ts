import { CustomVariantsProps, RotateWithZoomVariantProps } from "models";

export const boxVariants: CustomVariantsProps = {
  hidden: { transform: "translateY(25%)", opacity: 0 },
  visible: {
    transform: "translateY(0%)",
    opacity: 1,
    transition: { duration: 1.5, ease: "linear" },
  },
};

export const planetVariants: RotateWithZoomVariantProps = {
  visible: {
    rotate: [0, 360],
    transition: { duration: 60, ease: "linear", repeat: Infinity }, // for rotate
  },
  hover: {
    scale: 1.1,
  },
  // for hover
  hoverTransition: {
    duration: 0.6,
    ease: "easeOut",
  },
};

export const firstRenderVariants: CustomVariantsProps = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 1.5, ease: "linear" },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

export const contentVariants: CustomVariantsProps = {
  hidden: { y: "200px", opacity: 0 }, // y = translateY
  visible: {
    y: "0px",
    opacity: 1,
    transition: { duration: 1.5, ease: "linear" },
  },
};

export const exploreAuraVariants: CustomVariantsProps = {
  visible: {
    opacity: 0,
  },
  auraHover: {
    scale: 1.8,
    opacity: 1,
  },
  exploreHover: {
    scale: 0.8,
  },
  // chakra transition
  hoverTransition: "all 0.4s ease-out",
};

export const firstLoadVariants = {
  // hidden: { opacity: 0, x: -200, y: 0 },
  // enter: { opacity: 1, x: 0, y: 0 },
  // exit: { opacity: 0, x: 0, y: -100 },
  hidden: { background: "blue" },
  enter: { background: "pink", transition: { duration: 10 } },
  exit: { background: "black" },
};