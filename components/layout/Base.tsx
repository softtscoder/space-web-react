import { LayoutProps } from "models";
import { Box } from "@chakra-ui/react";

export function BaseLayout({ children }: LayoutProps) {
  return (
    <Box
      position="relative"
      sx={{
        // chon div vi chakra generate toan div.css
        "div:nth-child(2)": {
          height: "100%",
        },
      }}
    >
      {children}
    </Box>
  );
}
