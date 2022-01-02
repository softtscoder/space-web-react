import { motion } from "framer-motion";
import { LayoutProps } from "models";
import { firstLoadVariants } from "utils";
// import { Box } from "@chakra-ui/react";

export function BaseLayout({ children }: LayoutProps) {
  return (
    <div>
      {/* next-seo */}

      <motion.main
        // variants={firstLoadVariants}
        // initial="hidden"
        // animate="enter"
        // exit="exit"
        // transition={{ type: "linear" }}
        style={{
          position: "relative", // for Navbar in MainLayout
        }}
      >
        {children}
      </motion.main>
    </div>
  );
}
