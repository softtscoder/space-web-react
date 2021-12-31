import { Center, CenterProps } from "@chakra-ui/react";
import { motion, HTMLMotionProps } from "framer-motion";

type Merge<P, T> = Omit<P, keyof T> & T;
// type MotionBoxProps = Merge<HTMLChakraProps<"div">, HTMLMotionProps<"div">>;
// export const MotionBox: React.FC<MotionBoxProps> = motion(chakra.div);

type CenterMotionProps = Merge<CenterProps, HTMLMotionProps<"div">>;
export const CenterMotion: React.FC<CenterMotionProps> = motion(Center);
// export const CenterMotion = motion<CenterProps>(Center);
