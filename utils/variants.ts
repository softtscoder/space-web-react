import { CustomVariantsProps, RotateWithZoomVariantProps } from "models";

export function pageTransitionVariants(
  mobileBreakpoint: boolean
): CustomVariantsProps {
  return {
    hidden: {
      // https://stackoverflow.com/questions/11704267/in-javascript-how-to-conditionally-add-a-member-to-an-object
      ...(mobileBreakpoint && { y: "-50px" }),
      ...(!mobileBreakpoint && { x: "-50px" }),
      opacity: 0,
    },
    visible: {
      ...(mobileBreakpoint && { y: "0" }),
      ...(!mobileBreakpoint && { x: "0" }),
      opacity: 1,
      transition: { duration: 0.8, ease: "linear" },
    },
    exit: {
      ...(mobileBreakpoint && { y: "-50px" }),
      ...(!mobileBreakpoint && { x: "-50px" }),
      opacity: 0,
      transition: { duration: 0.8, ease: "linear" },
    },
  };

  // Chi dung khi 2 mode khac nhau qua nhieu
  // return mobileBreakpoint ? {
  //   hidden: {
  //     y: "-50px",
  //     opacity: 0,
  //   },
  //   visible: {
  //     y: 0,
  //     opacity: 1,
  //     transition: { duration: 0.8, ease: "linear" },
  //   },
  //   exit: {
  //     y: "-50px",
  //     opacity: 0,
  //     transition: { duration: 0.8, ease: "linear" },
  //   },
  // } : {
  //   hidden: {
  //     x: "-50px",
  //     opacity: 0,
  //   },
  //   visible: {
  //     x: 0,
  //     opacity: 1,
  //     transition: { duration: 0.8, ease: "linear" },
  //   },
  //   exit: {
  //     x: "-50px",
  //     opacity: 0,
  //     transition: { duration: 0.8, ease: "linear" },
  //   },
  // };
}

export const tabTransitionVariants: CustomVariantsProps = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 1.5, ease: "linear" },
  },
  exit: {
    opacity: 0,
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
  drag: {
    backgroundColor: "blue",
  },
  // for hover
  // hoverTransition: {
  //   duration: 0.6,
  //   ease: "easeOut",
  // },
  hoverTransition: "all 0.6s ease-out",
};

export const planetTransitionVariants: CustomVariantsProps = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: "linear" },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5, ease: "linear" },
  },
};

export const logoVariants: RotateWithZoomVariantProps = {
  visible: {
    rotate: 360,
    transition: { duration: 2, ease: "linear", repeat: Infinity }, // for rotate
  },
  hover: {
    scale: 1.3,
  },
  // for hover
  hoverTransition: {
    duration: 1,
    ease: "linear",
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

export const firstHardLoadVariants = {
  // hidden: { opacity: 0, x: -200, y: 0 },
  // enter: { opacity: 1, x: 0, y: 0 },
  // exit: { opacity: 0, x: 0, y: -100 },
  hidden: { background: "blue" },
  enter: { background: "pink", transition: { duration: 10 } },
  exit: { background: "black" },
};
